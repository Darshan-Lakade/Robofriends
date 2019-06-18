import React from 'react';
import './Card.css';

const Card = ({id, name, email}) => {

    return (
        <div className="Card">
            <img className="roboImages" src={`https://robohash.org/${id}`} alt='robo Images' 
                style={{width:'280px', height:'280px'}}/>
            <h3>Name: <span className="name">{name}</span></h3>
            <h4>EmailID: <span className="email">{email}</span></h4>
        </div>
    );
}

export default Card;
