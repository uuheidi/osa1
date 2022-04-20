import { useState } from 'react';

const Header = ({text}) => <h1>{text}</h1>

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = (props) => {
  if (props.all === 0) { return (<p>No feedback given.</p>) }
  else {
  return (
    <table>
      <tbody>
    <StatisticLine text="Good" value={props.good} />
    <StatisticLine text="Neutral" value={props.neutral} />
    <StatisticLine text="Bad" value={props.bad} />
    <StatisticLine text="All" value={props.all} />
    <StatisticLine text="Average" value={props.avg} />
    <StatisticLine text="Positive" value={props.positive} />
    </tbody>
    </table>
  ) }
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  let all = good + neutral + bad;
  let avg = all / 3;
  let positive = `${good / all} %`;

  const pickGood = () => setGood(good + 1)
  const pickNeutral = () => setNeutral(neutral + 1)
  const pickBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text="Give feedback" />
      <Button handleClick={pickGood} text="Good" />
      <Button handleClick={pickNeutral} text="Neutral" />
      <Button handleClick={pickBad} text="Bad" />
      <Header text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} positive={positive} />
    </div>
  );
}

export default App;
