import React from 'react';
import './Team.css';


const Team = (props) => {
    const {name, salary} = props.team;
    
    return (
        <div>
             
            <h5> {name}</h5>
            <p>Salary : {salary}</p>
             
        </div>
    );
};

export default Team;