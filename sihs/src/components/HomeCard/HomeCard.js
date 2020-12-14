import React from 'react';
import {Link} from 'react-router-dom'
import './HomeCard.css'

const HomeCard = ({image}) => {
    return ( 
        <section className="home_card">
            <div className="home_card_image">
                <img src={image} />
            </div>
            <div className="home_card_info">
                <h2>Ipsum consequat</h2>
                <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
            </div>
            <div>
                <Link className="button_link" to="/">Saiba mais</Link>
            </div>
        </section>
    );
}
export default HomeCard;