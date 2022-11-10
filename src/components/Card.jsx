import React from "react";

function Card(props) {
  return (
    <li className="contact-card">
      <h2>{props.fullName}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{props.job}</dd>
        <dt>Email</dt>
        <dd>{props.email}</dd>
      </dl>
    </li>
  );
}

export default Card;
