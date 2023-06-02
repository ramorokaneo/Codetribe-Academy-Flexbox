import React from 'react';
import "./Shapes.css";

const Shapes= () => {
    return (
        <>
        <div className="flexbox-container" style={{ height: "20vh" }}>
          <div className="flexbox-item flexbox-item-1">1</div>
          <div className="flexbox-item flexbox-item-2">2</div>
          <div className="flexbox-item flexbox-item-3">3</div>
        </div>
        <div className="flexbox-container" style={{ height: "60vh" }}>
          <div className="flexbox-item flexbox-item-4">4</div>
          <div className="flexbox-item flexbox-item-5">5</div>
          <div className="flexbox-item flexbox-item-6">6</div>
        </div>
        <div className="flexbox-container" style={{ height: "20vh" }}>
          <div className="flexbox-item flexbox-item-7">7</div>
        </div>
      </>  
    )
};

export default Shapes;