import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Box, Typography, TextField, Button } from '@mui/material';
import { FiSearch } from 'react-icons/fi';
import './Explore.css';
import cardimg2 from '../../images/img5.jpg';
import cardimg3 from '../../images/img8.jpg';
import cardimg from '../../images/img10.jpg';
import { useTranslation } from 'react-i18next';

const Explore = () => {
	const [person, setPerson] = useState(1);
	const [city, setCity] = useState('');

	const { t, i18n } = useTranslation();
	// console.log(i18n.language);

	const navigate = useNavigate();
	const listOfTours = () => {
		navigate(`/tours/${city}`);
	};
	const decrementPerson = () => {
		if (person > 0) {
			setPerson(person - 1);
		} else {
			setPerson(0);
		}
	};
	return (
		<>
			<div className='Explore'>
				<div className='e1' id='explore'>
					<Typography
						variant='h1'
						component='h1'
						className='arltr'
						align={i18n.language === 'en' ? 'left' : 'right'}
						fontWeight={600}
						fontSize={60}
					>
						{' '}
						{t('explore1')} <br />
						<span style={{ color: '#EE685F' }}> {t('explore2')} </span>
					</Typography>
					<p className='p1'>{t('explore3')}</p>
				</div>
				<div style={{ display: 'flex' }}>
					<div className='cardImage2'>
						<img
							src={cardimg}
							id='expImg1'
							className='cardImage2'
							alt='cardimg'
							height={300}
							width={200}
							style={{ margin: '20px', marginTop: '80px' }}
						/>
					</div>
					<div className='cardImage2'>
						<img
							src={cardimg2}
							id='expImg2'
							className='cardImage2'
							alt='cardimg'
							height={300}
							width={200}
							style={{ margin: '20px', marginTop: '160px' }}
						/>
					</div>
					<div className='cardImage2'>
						<img
							src={cardimg3}
							id='expImg3'
							className='cardImage2'
							style={{ margin: '20px', marginTop: '250px' }}
							alt='cardimg'
							height={300}
							width={200}
						/>
					</div>
				</div>
			</div>
			<br /> <br /> <br />
			<Box className='searchHome'>
				<Box>
					{' '}
					<TextField
						id='standard-basic'
						label= {t('cityinp')}
						variant='standard'
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>{' '}
				</Box>
				<Box>
					{' '}
					<div style={{ border: '1px solid #EBECF0', height: '100%' }}></div>{' '}
				</Box>
				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<Box>
						{/* <TextField id="standard-basic" sx={{width:"10px"}} size='small' variant="standard" /> */}
						{t("numofdays")}
						<Button sx={{ fontSize: '30px', color: 'black', marginRight: '8px' }} onClick={() => decrementPerson()}>
							{' '}
							-{' '}
						</Button>
						{person}{' '}
					</Box>
					{/* <Box paddingLeft={5} fontSize={30} >  </Box> */}
					<Button sx={{ fontSize: '30px', color: 'black', marginLeft: '8px' }} onClick={() => setPerson(person + 1)}>
						{' '}
						+{' '}
					</Button>
				</Box>
				<Box>
					{' '}
					<div style={{ border: '1px solid #EBECF0', height: '100%' }}></div>{' '}
				</Box>
				{/* <Box> <TextField id="standard-basic" label="Dates" defaultValue="21/10/2022" variant="standard" /> </Box> */}
				<Box>
					{' '}
					<input type='date' name='' id='' style={{ fontSize: '25px', marginTop: '7px' }} />{' '}
				</Box>
				<Box>
					{' '}
					<div style={{ border: '1px solid #EBECF0', height: '100%' }}></div>{' '}
				</Box>
				<Box>
					{' '}
					<Button onClick={listOfTours}>
						{' '}
						<FiSearch size={40} />{' '}
					</Button>{' '}
				</Box>
			</Box>
		</>
	);
};
export default Explore;
