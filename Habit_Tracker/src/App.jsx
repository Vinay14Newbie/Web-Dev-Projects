import { useState, useEffect } from 'react'
import { TrackerProvider } from './context'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Home, Add, Progress} from './components/index.js'
import {Layout} from './Layout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='addHabit' element={<Add/>}/>
      <Route path='progress' element={<Progress/>}/>
    </Route>
  )
)

function App() {

  const [habits, setHabits] = useState([])

  const addHabit = (habit, timeInHour, timeInMinute)=>{
    setHabits((prev) => [{id:Date.now(), ...habit}, ...prev])
  }

  const updateHabit = (id, habit)=>{
    setHabits((prev) => prev.map((prevHabit) => (prevHabit.id===id ? habit : prevHabit)))
  }

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((prevHabit) => prevHabit.id!==id))
  }

  const toggleCompleted = (id, count)=>{
    setHabits((prev) => prev.map(prevHabit => prevHabit.id === id ? {...prevHabit, completed: !prevHabit.completed, count: count++} : prevHabit))
  }

  useEffect(()=>{
    const habits = JSON.parse(localStorage.getItem("habits"))
    
    if(habits && habits.length > 0){
      setHabits(habits)
    }
  },[])

  useEffect(()=>{
    // during setting the localstorage it take values in string only so convert it into string first
    localStorage.setItem("habits", JSON.stringify(habits))
  },[habits])

  return (
    <TrackerProvider value={{habits, addHabit, updateHabit, deleteHabit, toggleCompleted}}>
      <RouterProvider router={router}/>
    </TrackerProvider>
  )
}

export default App
