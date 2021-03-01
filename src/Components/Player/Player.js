import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';


const Player = (props) => {
    const {name, age, image, team, salary} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div >
            <img className="image" src={image} alt=""/>
            <h1>{name}</h1>
            <p>Age : {age}</p>
            <h5>Team : {team}</h5>
            <h5>Salary : {salary}</h5>
            <button className="btn btn-info" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} />Add Team</button>       
        </div>
    );
};

export default Player;