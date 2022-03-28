import './counter.css';
import { useState, useEffect } from 'react';

const colors = ['red', 'green', 'blue'];

function Counter() {
  const [count, setCount] = useState(5);
  // let count = 5
  const [currentColor, setCurrentColor] = useState(0);

  function downHandler() {
    console.log('down button was clicked');
    setCount(count - 1);
    console.log('count ===', count);
  }

  useEffect(() => {
    console.log('useEfect component ran');
  }, []); // vykdomas viena karta tik uzkrovus komponenta

  useEffect(() => {
    console.log('useEfect component curent collor ran');
    if(currentColor === 4){
      setCurrentColor(0)
    }
  }, [currentColor]); // vykdomas viena karta tik uzkrovus komponenta ir kai ivyksta change

  const upHandler = () => {
    setCount(count + 1);
    setCurrentColor(currentColor + 1)
  };

  function plusFive() {
    setCount(count + 5);
  }

  const dynamicClass = count < 0 ? 'negative' : '';
  const green = count > 20 ? 'greenbutton' : '';

  return (
    <div className='counter'>
      <h3>{colors[currentColor]}</h3>
      <h2 className={(dynamicClass, green)}>{count}</h2>
      <div className='control'>
        <button onClick={upHandler}>UP</button>
        {count > 0 && (
          <button disabled={count === 0} onClick={downHandler}>
            DOWN
          </button>
        )}
        <button onClick={plusFive}>+5</button>
      </div>
    </div>
  );
}
export default Counter;
