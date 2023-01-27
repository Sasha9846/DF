import React, {useContext, useState, useNavigate} from "react";
import Ctx from "../Ctx";
import {Row, Col, Form, Button} from "react-bootstrap"
export default () => {

const [name, setName] = useState("");
const [price, setPrice] = useState(100);
const [wight, setWight] = useState("");
const [stock, setStock] = useState(10);
const [discount, setDiscount] = useState(0);
const [description, setDescription] = useState("");
const [pictures, setPictures] = useState("");

    return <>
    <h1>Добавить товар</h1>
<Form>
    <Row>
     <Col xs={12} md = {6}>
        <Form.Group className="mb-3">
            <Form.Label>Название товара</Form.Label>
             <Form.Control 
             type="text" 
             value={name}
             onChange ={e => setName(e.target.value)}
             />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Цена</Form.Label>
             <Form.Control
                type="number"
                value={price}
             onChange ={e => setPrice(e.target.value)}
             step="10"
             min={0}
             />
             
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Вес</Form.Label>
             <Form.Control 
             type="text" 
             value={wight}
             placeholder ="100g"
             onChange ={e => setWight(e.target.value)}
             />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Скидка</Form.Label>
             <Form.Select
               value={discount}
             onChange ={e => setDiscount(e.target.value)}
             >
            <option value={0}>без скидки</option>
            <option value={5}>5%</option>
            <option value={10}>10%</option>
            <option value={15}>15%</option>
            <option value={20}>20%</option>
            <option value={25}>25%</option>
        </Form.Select>
  
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Количество на складе</Form.Label>
             <Form.Control 
             type="number" 
             value={stock}
             onChange ={e => setStock(e.target.value)}
             min={0}
             />
        </Form.Group>
     </Col>


         <Col xs={12} md = {6}>
              <div className="form-preview mb-2" style=
              {{backgroundImage: pictures ?
              `url(${pictures})` : "url(https://i.pinimg.com/736x/23/54/5c/23545c95708018462503679a132f6ede.jpg)"}}>
              </div>
              <Form.Group className="mb-3">
                    <Form.Label>Изображение</Form.Label>
                    <Form.Control
                    type="url"
                    value ={pictures}
                    onChange ={e => setPictures(e.target.value)}
                    />
              </Form.Group>

              <Form.Group className="mb-3">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                    as="textarea"
                    rows={4}
                    value ={description}
                    onChange ={e => setDescription(e.target.value)}
                    />
              </Form.Group>

<Button className = "btn-warning"
type="submit">Добавить</Button>

         </Col>
    </Row>
</Form>



    </>
}