/* import React, { useState } from 'react';

export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const activate = () => {
        if(!active) { 
            setActive(true)
            props.activationHandler(props.value)
        }
    }

    const className = `card ${active ? 'activeCard': ''}`
    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )
} */

import React, { useState, useEffect, useRef } from "react";

const CharacterCard = ({ value, activationHandler, attempt }) => {
  const [active, setActive] = useState(false);
  const activate = () => {
    setActive(true);
    activationHandler(value);
  };
  const className = `card ${active ? "activeCard" : ""}`;

  const attemptRef = useRef(attempt);

  useEffect(() => {
    if (attemptRef.current !== attempt) {
      setActive(false);
      attemptRef.current = attempt;
    }
  }, [attempt]);

  return (
    <div className={className} onClick={activate}>
      {value}
    </div>
  );
};

export default CharacterCard;
