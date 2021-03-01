import React from 'react';
import './Team.css';


const Team = (props) => {
    const team = props.team;
    const {name} = props.team;
    //  let salary = props.team;
     console.log(props.team.name);
    // console.log(props.player.salary)
    
     let total = 0;
    // for (let i = 0; i < team.length; i++) {
    //     salary = team[i];
    //     budget =  parseInt(budget + salary);
    //     // const totalBudget = budget);
    // }
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)
    // const budget = team.reduce((total, player) => total + player.salary, 0)
    for (let i = 0; i < team.length; i++) {
        const player = team[i];
        total = total + player.salary;
    }
    
    return (
        <div>
             
            <h5> {name}</h5>
             
        </div>
    );
};

export default Team;