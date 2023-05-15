import React, { useState, useEffect } from 'react';
import './App.css';


import Sentiment from 'sentiment';
const sentiment = new Sentiment();

function App() {

  const [phrase, setPhrase] = useState('');
  const [sentimentScore, setSentimentScore] = useState(null);

  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase));
  }, [phrase]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Sentiment Analysis</h2>

        <input value={phrase} onChange={e => setPhrase(e.target.value)}
          style={{ padding: '20px', fontSize: '20px', width: '90%' }}
        />

        {
          sentimentScore !== null ?
            <p>Sentiment Score: {sentimentScore.score}</p>
            : ''
        }

        {
          sentimentScore ?
            sentimentScore.score === 0 ?
             '😊😊😊'
              :
              sentimentScore.score > 0 ?
               '😃😃😃'
                :
                '😔😔😔'
            : ''
        }

      </header>
    </div>
  );
}

export default App;
