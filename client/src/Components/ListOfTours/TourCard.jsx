import React from 'react';
// import tourimg from '../../images/img11.jpg';
import { Box } from '@mui/system';
import { Card, Typography } from '@mui/material';
import { FiHeart } from 'react-icons/fi';
import './index.css';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
// import { Alert } from '@mui/material';
// import {useAlert} from 'react-alert'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getisLangEng, getTours } from '../../Redux/slice';



function TourCard() {
	const { t, i18n } = useTranslation();

	const isLangEng = useSelector(getisLangEng) ;
    
	const tours = useSelector(getTours) ;
	
    // console.log(tours) ; 

	return (
		<>
			<Card
				style={{
					minWidth: '85%',
					borderRadius: '5px',
					boxShadow: '5px 5px 20px',
					marginBottom: '3%',
				}}
				className='tourCard'
			>
				<Box className='tourImgBox'>
					<img
						src={
							'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg'
						}
						alt='Tour image'
						className='tourImg'
					/>
				</Box>
				<Box className='tourData' margin={'1.5rem'}>
					<Box className='tourHead'>
						<Typography className='tourHeading' paddingTop='9px' fontWeight='bold' variant='h4'>
							Lorem ipsum dolor sit amet.
						</Typography>
						<Typography>
							<span className='Heart tourHeading' style={{ fontSize: '40px', margin: '1rem' }}>
								{true ? <AiFillHeart /> : <FiHeart />}
							</span>
						</Typography>
					</Box>
					<br />
					<Typography variant='h6' fontWeight='bold' className='tourName'>
						{'Maharashtra'} , {'Pune'}
					</Typography>{' '}
					<br />
					<br />
					<Typography className='tourInfo' margin={'1rem'}>
						Araku is an enchanting valley among the high hills of the Eastern Ghats in Visakhapatnam district. The major
						attractions in Araku are a tribal habitat museum, a tribal village, trekking, traditional folk dances
						including the famous . Araku is an enchanting valley among the high hills of the Eastern Ghats in
						Visakhapatnam district.
					</Typography>
					<br />
                    <br />
                    
					<Card style={{ width: '300px', padding: '10px', borderRadius: '20px' }}>
						<Box display='flex' justifyContent='space-around' alignItems='center'>
							<Typography>
								{' '}
								{t("duration")} <br />
								<b> {2} {t("day")}</b>
							</Typography>
							<Typography>
								<div style={{ border: '1px solid #999999', height: '30px' }}> </div>
							</Typography>
							<Typography>
								{' '}
								{t("price")} <br />
								<b>
									Rs. 28000 <span style={{ color: '#EE685F' }}>10% {t("off")}</span>
								</b>
							</Typography>
						</Box>
					</Card>
						<Link to={`/`}>
							<Typography variant='h6' color='white' align={isLangEng?'right':'left'} margin='1rem'>
								<span
									style={{
										backgroundColor: '#EE685F',
										padding: '5px',
										borderRadius: '15px',
										margin: '1rem',
									}}
								>
									<a href='/package' style={{ color: 'white' }}>
										{t("view")}
									</a>
								</span>
							</Typography>
						</Link>
					<br />
				</Box>
			</Card>
		</>
	);
}

export default TourCard;
