import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const empty = Array.apply(null, {length: anecdotes.length}).map(function() {return 0;})
  
  const [selected, setSelected] = useState(0)
  const [point, setPoint] = useState(empty)
  const [mostVoted, setMostVoted] = useState(0)

  const selectRand = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const voteAnecdote = () => {
    const voted = [...point]
    voted[selected] += 1
    setPoint(voted)
    setMostVoted(point.indexOf(Math.max(...point)))
  }


  return (
    <div>
      <Header text="Anecdote of the day" />
      {anecdotes[selected]}<br />
      has {point[selected]} votes<br />
      <Button text="vote" handleClick={voteAnecdote} />
      <Button text="next anecdote" handleClick={selectRand} />
      <Header text="Anecdote with most votes" />
      {anecdotes[mostVoted]}<br />
      has {point[mostVoted]} votes
    </div>
  )
}

export default App