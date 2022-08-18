/* import React, { useState } from 'react';
import _ from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word, 
        chars, 
        attempt: 1, 
        guess: '', 
        completed: false
    }
}
const activationHandler = (c) => {
    console.log(`${c} has been activated.`);

    let guess = state.guess + c
    setState({...state, guess})

    if(guess.length == state.word.length) {
        if(guess == state.word) {
            console.log('yeah!')
            setState({...state, guess: '', completed: true})
        }
        else {
            console.log('reset')
            setState({...state, guess: '', attempt: state.attempt + 1})
        }
    }
}

export default function WordCard(props) {

    const activationHandler = c => { console.log(`${c} has been activated`) }

    return (
        <div>
            {
                Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler}/>)
            }
        </div>
    );
} */

import React from "react";
import CharacterCard from "./CharacterCard";
import * as _ from "lodash";
import { useState } from "react";
import { runFireWorks } from "../lib/utils";
import { useEffect } from "react";
import { GrPowerReset } from "react-icons/gr";

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase();
  let chars = _.shuffle(Array.from(word));
  return {
    word,
    chars,
    attempt: 1,
    guess: "",
    completed: false,
  };
};

const WordCard = ({ value }) => {
  const [state, setState] = useState(prepareStateFromWord(value));
  const [isShowReset, setIsShowReset] = useState(false);
  const [text, setText] = useState("");

  const activationHandler = (c) => {
    console.log(`${c} has been activated.`);

    let guess = state.guess + c;
    setState({ ...state, guess });
    if (guess.length === state.word.length) {
      if (guess === state.word) {
        setText("Finally!, You won.");
        runFireWorks();
        setState({ ...state, guess: "", completed: true });
      } else {
        setText("Oops! Your selection is wrong, Please try again.");
        setState({
          ...state,
          guess: "",
          attempt: state.attempt + 1,
          completed: false,
        });
      }
    }
  };

  const handleReset = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    if (state.completed) {
      const timer = setTimeout(() => {
        setIsShowReset(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.completed]);
  return (
    <div>
      {state.completed ? (
        <h1
          style={{ color: "green", textTransform: "uppercase", opacity: "0.8" }}
        >
          {text}
        </h1>
      ) : (
        <h1
          style={{ color: "red", textTransform: "uppercase", opacity: "0.8" }}
        >
          {text}
        </h1>
      )}
      {state.chars.map((c, i) => (
        <CharacterCard
          value={c}
          key={i}
          activationHandler={activationHandler}
          attempt={state.attempt}
        />
      ))}
      {isShowReset && (
        <GrPowerReset onClick={handleReset} style={{ cursor: "pointer" }} />
      )}
    </div>
  );
};

export default WordCard;
