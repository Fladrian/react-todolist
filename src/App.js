import React, {useState, useRef} from 'react';

import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React',
      description: 'Learn the basic of JavaScript library'
    },
    {
      id: 2,
      title: 'Styled Components',
      description: 'Learn the styled components for css on react'
    },
    {
      id: 3,
      title: 'Learn Redux',
      description: 'Learn manage the state con react on the store'
    },
    {
      id: 4,
      title: 'Learn vue',
      description: 'Learn progressive framework'
    }
  ])
  const [addTodos, setAddTodos] = useState({})
  const refForm = useRef(null)


  const handleChange = ({target}) => {
    const {name, value} = target
    setAddTodos({
      ...addTodos,
      id: todos.length+1,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTodos([
      ...todos,
      addTodos
    ])
    refForm.current.reset()
  }
  
  return (
    <React.Fragment>
      <Header  title={'Todo App - ReactJs'}/>
      <TodoList
        todos={todos}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        refForm={refForm}/>
    </React.Fragment>
  )
}

export default App;
