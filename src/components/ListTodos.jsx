import React from 'react'
import '../styles.css'

function ListTodos({todo}) {
	const {id,title, description} = todo
	return (
		<article>
			<h3>{id} - {title}</h3>
			<p>{description}</p>
		</article>
	)
}

export default ListTodos
