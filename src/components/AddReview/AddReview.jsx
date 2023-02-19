import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import "./addReview.css"
import Ctx from "../../Ctx";


export default ({ id, setProduct }) => {
    const {api, goods, setGoods, PATH} = useContext(Ctx);
    const [active, setActive] = useState(false);
    const [rating, setRating] = useState(0);
    const [text, setText] = useState("");
    const navigate = useNavigate();

    const handlerSubmit = (e) => {
        e.preventDefault();
        let body = {
            rating: rating,
            text: text || " ",
        };

        api.addReview(id, body)
        .then(data => {
            if(!data.error) {
                setGoods(prev => [...prev, data]);
                clear();
                navigate(`${PATH}catalog/${data._id}`);
            }
        })
    };

    
    const clear = (e) => {
        setRating(0);
        setText("");
    };

    useEffect(() => {
        api.getProduct(id)
            .then(data => {
                setProduct(data);
                setActive(false);
            })
    }, [goods]);

    return (
        <div>
            <button className="btn-review" onClick={() => setActive(!active)}>
                Оставить отзыв
            </button>

            <Form className={active ? "active" : "add-review"} onSubmit={handlerSubmit}>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Оценка</Form.Label>
                            <Form.Control 
                                type="number"
                                value={rating} 
                                required
                                onChange={e => setRating(e.target.value)}
                                min="1"
                                max="5" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Отзыв</Form.Label>
                            <Form.Control id="formReview"
                                as="textarea"
                                rows={4}
                                value={text}
                                onChange={e => setText(e.target.value)} />  
                        </Form.Group>
                        <button className="btn" id="btnReviewInProductCard" type="submit">ОТПРАВИТЬ</button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}