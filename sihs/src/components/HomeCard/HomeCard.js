import React from 'react';
import {Link} from 'react-router-dom'
import './HomeCard.css'

const HomeCard = ({image, titulo, texto}) => {
    return ( 
        <section className="home_card">
            <div className="home_card_image">
                <img src={image} />
            </div>
            <div className="home_card_info">
                <h2> {titulo} </h2>
                <p> {texto} </p>
            </div>
            <div>
                <Link className="button_link" to="/DicasEsporte">Saiba mais</Link>
            </div>
        </section>
    );
}
export default HomeCard;