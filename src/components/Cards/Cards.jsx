import './Cards.css'
import React from "react";

export default props =>
   <React.Fragment>
        <aside className="contCard">
            <img src={props.imagem} alt="" />
            <aside className="textCard">
                <h1>{props.title}</h1>
                <h1>{props.subtitle}</h1>
                <h1>{props.subtitle1}</h1>
                <h1>{props.subtitle2}</h1>
                <h1>{props.subtitle3}</h1>
                <h1>{props.subtitle4}</h1>
                <h1>{props.subtitle5}</h1>
                <h1>{props.subtitle6}</h1>
                <h1>{props.subtitle7}</h1>
                <h1>{props.subtitle8}</h1>




            </aside>
        </aside>
   </React.Fragment> 