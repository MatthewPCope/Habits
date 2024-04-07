import { useState } from "react"

function App() {

  const [habits, setHabits] = useState([])
  const [newHabit, setNewHabit] = useState('')

  const addHabit = (title) => {
    setHabits((currentHabits) => [
      ...currentHabits, {id: crypto.randomUUID(), title, completed: false}
    ])

  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(newHabit === '')return
    addHabit(newHabit)
    setNewHabit('')
  }

  const changeHandler =(e) => {
    setHabits(e.target.value)
  }

  const toggleHabit = (id, completed) => {
    setHabits((currentHabits) => (
      currentHabits.map((habit) => {
        if(habit.id === id){
          return{...habit, completed}
        }
        return habit
      })
    ))
  }
 
  const deleteHabit = (id) => {
    setHabits((currentHabits) => (
      currentHabits.filter(habit => habit.id != id)
    ))
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
                  <label>{habit.title}
                    <input type="checkbox" checked={habit.completed} onChange={(e) => toggleHabit(habit.id, e.target.checked)}/>
                  </label>
                  <button className="ms-2 rounded bg-danger" onClick={() => deleteHabit(habit.id)}>Delete</button>
                </li>
              )
            })}
          
        </div>
      
    </>
  )
}

export default App


