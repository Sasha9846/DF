import React, {useContext} from "react";
import { Star, StarFill, Person } from "react-bootstrap-icons";
import Ctx from "../../Ctx";
import style from "./review.css"
export default ({author, rating, created_at, text}) => {
    const {authors} = useContext(Ctx);
    const person = authors.filter(a => a._id === author)[0];
    const setRating = (n) => {
        // суть в том, что сперва мы в массив пушим закрашенные звездочки, а после чистые, чтобы их количество общее было 5
        let stars =[];
        for (let i=0; i < n; i++){
            stars.push(<StarFill key = {i}/>)
        }
for (let i= stars.length; i < 5; i++){
    stars.push(<Star key = {i}/>)
}





return stars;
    }
    return <>

  
    <div className="oneReviewBlock">
    <div className="authorAndAvatarOfReview">
        {/* <Person/> */}
        <div className="blockAvatarOfAutorReview">
    <img className="avatarOfAutorReview" src={person.avatar}></img> 
    </div> 
        <h6 className="authorOfReview">{person && person.name || ""}</h6>
    </div>

        <div className="starRating">{setRating(rating)}</div>
        <div className="dateOfReview">{new Date(created_at).toLocaleString()}</div>
        <p className="textOfReview">{text}</p>
    </div>
    </>
}