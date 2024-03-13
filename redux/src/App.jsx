import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createStore,combineReducers} from "redux"
import { Provider } from 'react-redux'
import {Reducer} from "./Reducer"
import Counter from './Counter'

const ReducerRoot=combineReducers({
  Reducer
})
const data=createStore(ReducerRoot)
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Provider store={data}>
        <Counter/>
      </Provider>
    </>
  )
}

export default App
