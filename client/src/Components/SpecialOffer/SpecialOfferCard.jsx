import react from 'react';
import { Card, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import '../index.css';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SpecialOfferCard() {
	return (
		<>
			<Card
				sx={{
					minWidth: '600px',
					marginRight: '35px',
					borderRadius: '0.5rem',
				}}
				className='packageCard'
			>
				<div
					className='cardImage-1'
					style={{
						borderRadius: '1rem 1rem 0 0',
						backgroundImage: `url(https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg)`,
					}}
				>
					<Box
						display='flex'
						justifyContent='space-between'
						padding='1rem'
						borderRadius='1rem'
						backgroundColor='white'
						color='black'
					>
						<Box>
							<Typography fontSize={15} fontWeight='bold'>
								City
							</Typography>
							<Typography fontSize={15}>{'Pune'}</Typography>
						</Box>
						<span
							style={{
								border: '1px solid grey',
								marginLeft: '0.5rem',
								marginRight: '0.5rem',
							}}
						></span>
						<Box>
							<Typography fontSize={15} fontWeight='bold'>
								Duration
							</Typography>
							<Typography fontSize={15}>
								<span>{2} Day</span>
							</Typography>
						</Box>
						<span
							style={{
								border: '1px solid grey',
								marginLeft: '0.5rem',
								marginRight: '0.5rem',
							}}
						></span>
						<Box>
							<Typography fontSize={15} fontWeight='bold'>
								Price
							</Typography>
							<Typography fontSize={15}>
								Rs. {28000} <span style={{ color: '#EE685F' }}>{30}% OFF</span>
							</Typography>
						</Box>
					</Box>
				</div>
				<Box padding='.5rem 1rem 1rem 1rem'>
					<h2>{'Mahabaleshwar'}</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at perferendis culpa excepturi, asperiores
						ipsam odio veniam accusantium sequi sunt pariatur, eaque officia.
					</p>
				</Box>
				<Box
					style={{
						textAlign: 'center',
						margin: '5px',
					}}
				>
					<Link to={`/`}>
						<Button
							variant='contained'
							className='readMoreBtn'
							style={{
								color: 'white',
								borderRadius: '5px',
								background: '#98DBAF',
								width: '250px',
								margin: '1rem',
							}}
						>
							Booking
						</Button>
						<Button
							variant='contained'
							className='readMoreBtn'
							style={{
								color: '#98DBAF',
								borderRadius: '5px',
								background: 'white',
								width: '250px',
								margin: '1rem',
								border: '2px #98DBAF solid',
							}}
						>
							Read More
						</Button>
					</Link>
				</Box>
			</Card>
		</>
	);
}

export default SpecialOfferCard;
