import React from 'react';
import { Box } from '@mui/material';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function DayActivity(props) {
	console.log(props.data);
	let eachDay = [];
	eachDay = props.data.map((dt) => {
		// console.log(dt)
		return (
			<>
				<VerticalTimelineElement
					iconStyle={{ background: '#21D461', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>
						{' '}
						{dt.activityTitle} - {dt.hour} : {dt.minute}{' '}
					</h3>
					<p>
						{' '}
						{dt.activityDescription} 
					</p>
				</VerticalTimelineElement>
			</>
		);
	});

	let pics = [];
	pics = props.img.slice(0,3).map((image) => {
		return (
			<>
				<img
					src={image}
					alt=''
					style={{
						width: '40%',
						height: '20%',
						objectFit:"cover",
                        margin: "0.5rem",
						borderRadius: '1rem',
					}}
				/>
			</>
		);
	});

	return (
		<>

			<VerticalTimeline lineColor={'black'} layout={'1-column-left'} >
				{ eachDay}
			</VerticalTimeline>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-end'
				}}
			>
				{pics}
			</Box>
		</>
	);
}
