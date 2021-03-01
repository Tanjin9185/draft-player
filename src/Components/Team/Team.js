import React from 'react';
import './Team.css';


const Team = (props) => {
    const {name} = props.team;
    
    return (
        <div>
             
            <h5> {name}</h5>
             
        </div>
    );
};

export default Team;