import React from 'react'
import '../styles.css'
import logo from '../logo.svg'

export default function Header({title}) {
	return (
			<div className="nav">
				<img src={logo} alt="logoReact"/>
				<div className="title">
					{title}
				</div>
			</div>
	)
}
