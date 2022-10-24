import react, { useEffect, useState } from "react"
import { nanoid } from "nanoid";
import "./styles/main.css"
import "./styles/medialarge.css"
const cl = console.log.bind(console);



const Card = (props) => { 
    
    return (
        <div key={props.id} className="card" >
            <div className="card__bg" style={props.style}></div>
            <div className="card__top">
                <h1 className="card__title">{props.title}</h1>
                <p className="card__body">{props.body}</p>
             
            </div>
            <div className="card__bottom">
            <div className="card__left">
                    <h4 className="card__createdAt">Created at: </h4>
                    <p className="card__date">{props.date}</p>
                </div>
            <button id={props.id} onClick={props.handleClick} className="card__delete">X</button>
            </div>
        </div>
    )
}

export default Card;