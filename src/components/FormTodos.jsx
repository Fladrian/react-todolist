import React from 'react'

function FormTodos({handleSubmit, handleChange, refForm}) {
	return (
		<form onSubmit={handleSubmit} ref={refForm}>
			<label htmlFor='title'>Title</label>
				<input type="text" name="title" onChange={handleChange}/>
			<label htmlFor='description'>Description</label>
				<input type="text" name="description" onChange={handleChange}/>
			<button type="submit">ADD TODO</button>
		</form>
	)
}

export default FormTodos
