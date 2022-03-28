import { useState } from 'react';

function ReactForm() {
  const [userName, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState(null);

  function nameChangeHandler(event) {
    const reiksme = event.target.value;
    setUsername(reiksme);
  }

  function userAgeHandler(event) {
    setUserAge(event.target.value);
  }
  function formSendHandler(e) {
    e.preventDefault();
    console.log('js in control');
    if (userAge === '' || userName === '') {
      console.log('privalomi laukai');
      setError('privalomi laukai');
      return;
    }
    setError(null)
    const newObj = {
      userAge,
      userName,
    };
    setUserAge('')
    setUsername('')
    console.log('newObj ===', newObj);
  }
  return (
    <div>
      <h2>React form</h2>
      <form onSubmit={formSendHandler}>
        {error && <h3 className='negative'>{error}</h3>}
        <input
          onChange={nameChangeHandler}
          value={userName}
          type='text'
          placeholder='Name'
        />{' '}
        <br />
        <input
          onChange={userAgeHandler}
          value={userAge}
          type='number'
          placeholder='age'
        />{' '}
        <br />
        <button type='submit'>SUBMIT</button>
      </form>
      <div className='results'>
        Username:{userName} Userage: {userAge}
      </div>
    </div>
  );
}
export default ReactForm;
