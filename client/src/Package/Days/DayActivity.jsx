import React from 'react';
import { Box } from '@mui/material';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useSelector } from 'react-redux';
import { getisLangEng } from '../../Redux/slice';

export default function DayActivity(props) {
	console.log(props.data);
	const isLangEng = useSelector(getisLangEng);
	let eachDay = [];
	eachDay = props.data.map((dt) => {
		// console.log(dt)
		return (
			<>
				<VerticalTimelineElement
					iconStyle={{ background: '#CCF5DA	', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title' sx={{width:"50%"}}>
						{' '}
						{dt.activityTitle} - {dt.hour} : {dt.minute}{' '}
					</h3>
					<p className='vertical-timeline-element-title' sx={{width:"50%"}}>
						{' '}
						{dt.activityDescription} 
					</p>
				</VerticalTimelineElement>
			</>
		);
	});

	let pics = [];
	pics = props.img.slice(0,4).map((image) => {
		return (
			<>
				<img
					src={image}
					alt=''
					style={{
						width: '95%',
						height: '190px',
						objectFit:"cover",
                        margin: "0.5rem",
						borderRadius: '1rem',
					}}
				/>
			</>
		);
	});

	return (
		<div style={{display:"flex" , width:"90%" ,justifyContent:"center" }}>
           
			<VerticalTimeline lineColor={'#000'}  layout={isLangEng ? '1-column-left':'1-column-right' } >
				{ eachDay}
			</VerticalTimeline>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-end',
					
				}}
			>
				{pics}
			</Box>
		</div>
	);
}
