import { useState } from "react"

function App() {

  const [ habits, setHabits ] = useState([])
  const [ newHabit, setNewHabit ] = useState('')

  const addHabit = (title) => {
    setHabits((currentHabits) => {
      return [
        ...currentHabits, {id: crypto.randomUUID(), title}
      ]
    })
    console.log(newHabit)
    
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if(newHabit === "") return
    addHabit(newHabit)
    setNewHabit("")
}

  const changeHandler = (e) => {
    setNewHabit(e.target. value)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Enter a Habit:
          <input 
          type="text"
          onChange={changeHandler} 
          value={newHabit}
          id="habit"/>
        </label>
        <button>Add</button>
      </form>
      <ul>
        {habits.map((habit, index) => {
          return(
            <li key={index}>
            {habit.title}
          </li>
          )
          
        })}
      </ul>
    </>
  )
}

export default App
