import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = ({Robots}) => {

    return (
        <div className="CardList">
            {
                Robots.map((user, i) => {
                    return(
                        <Card key={i} 
                            id={i}
                            name={user.name}
                            email={user.email}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;
