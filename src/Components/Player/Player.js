import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
// import { Card, Button } from 'react-bootstrap';
import "./Player.css";

const Player = (props) => {
  const { name, age, image, team, salary } = props.player;
  const handleAddPlayer = props.handleAddPlayer;
  return (
    <div className="singlePlayer">
      <img className="image" src={image} alt="" />
      <h3>{name}</h3>
      <h6>Age : {age}</h6>
      <h6>Team : {team}</h6>
      <h6>Salary : {salary}</h6>
      <button
        className="btn btn-info"
        onClick={() => handleAddPlayer(props.player)}
      >
        <FontAwesomeIcon icon={faUserPlus} />
        Add Team
      </button>

     

      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Player;
