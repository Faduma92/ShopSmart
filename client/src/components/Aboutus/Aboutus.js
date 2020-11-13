import React from "react";
import "./Aboutus.css";
import TeamAwesome from "./Aboutusdata";
import Aboutuscard from "./Aboutuscard";

function Aboutus() {
  return (
    <div className="app">
      <div className="row">
        {TeamAwesome.map((team) => (
          <div className="row">
            <Aboutuscard
              name={team.name}
              linkedin={team.linkedin}
              github={team.github}
              image={team.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Aboutus;
