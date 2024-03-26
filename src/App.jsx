import { useState } from "react"

function App() {

  const [habits, setHabits ] = useState([])
  const [newHabit, setNewHabit ] = useState('')
  
  const addHabit = (title) => {
    setHabits((currentHabits) => {
      return [
        ...currentHabits, { id:crypto.randomUUID(), title}
      ]
    })
  }

  const submitHandler =(e) => {
    e.preventDefault()
    if(newHabit === '')return
    addHabit(newHabit)
    setNewHabit('')
  }

  const changeHandler =(e) => {
    setNewHabit(e.target.value)
  }

  return (
    <>
      <div className=" container mt-5">
        <form onSubmit={submitHandler}>
          <div className="form-group">
          <label className="form-label">Add Habit:
            <input 
              type="text"
              value={newHabit}
              onChange={changeHandler}
              id="habit"
              className="form-control"
            />
          </label>
          <button className="ms-4">Add</button>
          </div>
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
      </div>
    </>
  )
}

export default App

