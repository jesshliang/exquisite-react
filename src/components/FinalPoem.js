import React, { useState } from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  const [showPoem, setShowPoem] = useState(false); // Track showing final poem.

  const formattedLines = props.submittedLines.map((line) => {
    return(
      <p key={ line }>
        { line }
      </p>
    );
  });

  // Handle button click.
  const onClickShowPoem = () => { 
    setShowPoem(true); 
    
    props.isGameFinished(true);
  };

  return (
    <div className="FinalPoem">
      {showPoem === true && // Only show poem if button clicked.
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
            { formattedLines }
        </section>
      }

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" onClick={ onClickShowPoem } value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  submittedLines: PropTypes.array.isRequired,
  isGameFinished: PropTypes.func.isRequired
};

export default FinalPoem;
