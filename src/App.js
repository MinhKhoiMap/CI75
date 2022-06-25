import './App.css';
import React, { useState } from 'react';
import Card from './components/Card';

function App() {

  const handleCirleOrSquare = () => {
    const divArr = [];
    for (let i = 1; i < 7; i++) {
      if (i % 2 === 0) divArr.push(<div className="circle"></div>)
      else divArr.push(<div className="square"></div>);
    }
    return divArr;
  }

  const lights = ['pink', 'purple', 'green', 'black', 'orange', 'yellow', 'red'];
  const [mode, setMode] = useState(1);

  const handleChangeDivColor = (index) => {
    setMode(prev => {
      if (prev === 7) return prev = 1;
      else return prev + 1;
    })
  }

  const [shape, setShape] = useState('square');

  const handleChangeDivShape = () => {
    setShape(prev => {
      if (prev === 'square') return prev = 'circle';
      else return prev = 'square';
    })
  }

  return (
    <>
      <div>
        <h1>Bài 1</h1>
        <section>
          {/* Homeword day3 */}
          {handleCirleOrSquare()}
        </section>
      </div>
      <div>
        <h1>Bài 2</h1>
        <button onClick={handleChangeDivColor}>Change Color</button>
        <section>
          {
            lights.map((light, index) => (
              <span 
                className="light" 
                key={light} 
                style={{ backgroundColor: `${index + 1 === mode ? light : 'transparent'}` }}>
              </span>
            ))
          }
        </section>
      </div>
      <div>
        <h1>Bài 3</h1>
        <button onClick={handleChangeDivShape}>Change Shape</button>
        <section>
          {<span className={shape}></span>}
        </section>
      </div>
    </>
  );
}

export default App;
