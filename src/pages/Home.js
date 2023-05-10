import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <navbar/>
    
      <div className="headerContainer">
        <h1>Student Database Management </h1>
        <br></br>
        <Link to="/login">
          <button> LOGIN </button>
        </Link>

        <Link to="/register">
            <button> REGISTER </button>
        </Link>
      
    </div>
    </div>
  );
}

export default Home;