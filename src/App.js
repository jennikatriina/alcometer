import {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);
  const [time, setTime] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let bloodAlcohol = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    
    if (gender === 'male') {
      bloodAlcohol = gramsLeft / (weight * 0.7)
      if(bloodAlcohol < 0) {
        bloodAlcohol = 0;
      }
    } else {
      bloodAlcohol = gramsLeft / (weight * 0.6)
      if(bloodAlcohol < 0) {
        bloodAlcohol = 0;
      }
    }

    setResult(bloodAlcohol);
  }

  return (
    <>
      <h1>Calculating blood alcohol level</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input name="weight" type="text" step="1" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Bottles</label>
          <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select name="time" value={time} onChange={e => setTime(e.target.value)}>
          <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          <label>Gender </label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/>
          <label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
          <label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        <div>
        </div>
          <button>Calculate</button>
        </div>
      </form>
    </>
  );
}

export default App;
