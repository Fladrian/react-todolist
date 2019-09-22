import React from 'react'

import ListTodos from './ListTodos'
import FormTodos from './FormTodos'

function TodoList({todos, handleSubmit, handleChange, refForm}) {
	return (
		<div className="container">
			<div className="list-todos">
				{ todos.map((todo) => <ListTodos key={todo.id} todo={todo} />) }
			</div>
			<div className="form-todos">
				<FormTodos
					refForm={refForm}
					todos={todos}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
			</div>
		</div>
	)
}

export default TodoList
