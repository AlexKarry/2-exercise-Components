import React from "react";
import { createRoot } from "react-dom/client";
import { ContactCard } from "./components/contactCard.jsx";
import { Button } from "./components/button";

const pageStyles = {
  display: "flex",
  gap: "2rem",
};

const Exercise = () => {
  return (
    <div style={pageStyles}>
      <div>
        <h2>Contact Card</h2>
        <ContactCard />
      </div>
      <div>
        <h2>Buttons</h2>
        <Button />
      </div>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Exercise />);
