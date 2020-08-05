import React from "react";

const InfoSection = (props) => {
  return (
    <div className="infoSection">
      <h4>{props.title}</h4>

      <section>
        <label className="infoLabel">year : </label>
        <span>{props.year}</span>
      </section>

      <section>
        <label className="infoLabel">plot :</label>
        <p>{props.plot}</p>
      </section>

      <section>
        <label className="infoLabel">genre :</label>
        <p>{props.genre}</p>
      </section>

      <section>
        <label className="infoLabel">actors :</label>
        <p>{props.actors}</p>
      </section>
    </div>
  );
};

export default InfoSection;
