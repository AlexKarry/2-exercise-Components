import React from "react";
import Card from "./Card";
import contacts from "../assets/contacts";

export function ContactCard() {
  return (
    <div className="contact-card" style={{ maxWidth: "420px" }}>
      <ul>
        <Card
          fullName={contacts[0].fullName}
          job={contacts[0].job}
          email={contacts[0].email}
        />
        <Card
          fullName={contacts[1].fullName}
          job={contacts[1].job}
          email={contacts[1].email}
        />
        <Card
          fullName={contacts[2].fullName}
          job={contacts[2].job}
          email={contacts[2].email}
        />
      </ul>
    </div>
  );
}
