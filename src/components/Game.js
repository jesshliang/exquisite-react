import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [savedLines, setSavedLines] = useState([]);
  const [newestLine, setNewestLine] = useState();
  let playerNumber = 1;

  const saveLine = (submittedLine) => {
    const newSavedLines = [...savedLines]; 
    const newestLine = Object.values(submittedLine).join(' ');

    newSavedLines.push(newestLine); // Save line to collection.
    playerNumber++; // Update player number.

    console.log(newSavedLines);

    setNewestLine(newestLine);
    setSavedLines(newSavedLines); // Update lines.
  };

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission newestLine={ newestLine } />

      <PlayerSubmissionForm onFormSubmit={ saveLine } playerNumber={ playerNumber } />

      <FinalPoem submittedLines={ savedLines } />

    </div>
  );
}


const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
