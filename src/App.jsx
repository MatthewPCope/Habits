import { useState } from "react"

function App() {

  const [habits, setHabits] = useState([])
  const [newHabit, setNewHabit] = useState('')

  const addHabit = (title) => {
    setHabits((currentHabits) => {
      return [
        ...currentHabits, { id: crypto.randomUUID(), title}
      ]
    })
  }

  const submitHandler =(e) => {
    e.preventDefault()
    if(newHabit === '')return
    addHabit(newHabit)
    setNewHabit('')
  }

  const changeHandler = (e) => {
    setNewHabit(e.target.value)
  }

  const deleteHabit = (id) => {
    setHabits((currentHabits) => {
      return(
        currentHabits.filter(habit => habit.id != id)
      )
    })
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
                className="form-control mt-1"
              />
            </label>
            <button className="ms-4 bg-warning rounded">Add</button>
            </div>
          </form>
      </div>
        <div className="text-center">
          
            {habits.map((habit) => {
              return(
                <li key={habit.id}>
                  {habit.title}
                  <button className="ms-2 rounded bg-danger" onClick={() => deleteHabit(habit.id)}>Delete</button>
                </li>
              )
            })}
          
        </div>
      
    </>
  )
}

export default App

