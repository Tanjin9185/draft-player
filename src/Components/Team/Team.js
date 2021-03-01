import React from 'react';
import './Team.css';


const Team = (props) => {
    const team = props.team;
    const {name} = props.team;
    //  let salary = props.team;
     console.log(props.team.name);
    // console.log(props.player.salary)
    
     
    
    return (
        <div>
             
            <h5> {name}</h5>
             
        </div>
    );
};

export default Team;