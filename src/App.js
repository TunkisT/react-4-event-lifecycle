import './App.css';
import Counter from './components/counter/Counter';
import ReactForm from './components/ReactForm/ReactForm';

function App() {
  return (
    <div className='App'>
      <h1>App react</h1>
      <div className='grid'>
        <Counter title='people'/>
        <Counter title='cars' initValue={10}/>
        <Counter title='house' initValue={15}/>
      </div>
      <ReactForm/>
    </div>
  );
}

export default App;
