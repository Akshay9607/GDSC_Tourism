import React from 'react'
import DayActivity from './DayActivity'
export const EachDay = (props) => {
	console.log(props.day)
  
  return (
	<>
	<div
		style={{
			display: 'flex',
			justifyContent: 'space-between',
			padding: '1rem',
			margin: '3rem 1rem 1rem 1rem',
			boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
		}}
	>
		<div className=''>
			<h1>Day</h1>
			<h1 style={{ fontSize: '5rem' }}> {props.dayNo} </h1>
		</div>
		{/* Days Data */}
		<DayActivity data={props.day} img={props.images} />
		
	</div>
</>

  )
}
