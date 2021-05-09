import "./App.css";
import { useEffect, useState } from "react";
import Player from "./Components/Player/Player";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Team from "./Components/Team/Team";

function App() {
  const [players, setPlayers] = useState([]);

  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/41d35a67-d491-4a0c-8d0b-9b58b6c4a94b")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddPlayer = (player) => {
    const newTeam = [...team, player];
    setTeam(newTeam);
  };
  const budget = team.reduce((total, player) => total + player.salary, 0);
  return (
    <div className="playerContainer ">
      <div className="playerDisplay">
        {players.map((player) => (
          <Player
            player={player}
            handleAddPlayer={handleAddPlayer}
            key={player.id}
          ></Player>
        ))}
      </div>
      <div className="playerAdd">
        <h3>Club Name : World XI </h3>
        <h5>Total Player :{team.length}</h5>

        <h5 className="mb-2">Total Budget {budget}</h5>
        <h3 className="mb-4">Players List : </h3>
        {team.map((team) => (
          <Team team={team} key={team.id}></Team>
        ))}
      </div>
    </div>
  );
}

export default App;
