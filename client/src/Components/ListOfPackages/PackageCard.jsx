import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import { Box } from '@mui/system';
import { Button } from '@mui/material';
import ReactStars from 'react-rating-stars-component';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../index.css';
import { useTranslation } from 'react-i18next';


function PackageCard() {

	const {t,i18n} = useTranslation();

	return (
		<>
			<Card
				sx={{
					minWidth: '280px',
					margin: '5%',
				}}
				className='packageCard'
			>
				<div
					className='cardImage'
					style={{
						backgroundImage: `url(https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg)`,
					}}
				>
					{/* {packageData[i].destination} */}
					Lorem, ipsum dolor
				</div>
				<CardContent>
					<Box display='flex' justifyContent='space-between'>
					
						<Box>
							<Typography fontSize={15} fontWeight='bold'>
								{t("duration")}
							</Typography>
							<Typography fontSize={15}> 2 - {t("day")} </Typography>
						</Box>
						<span
							style={{
								border: '1px solid grey',
							}}
						></span>
						<Box>
							<Typography fontSize={15} fontWeight='bold'>
								{t("price")}
							</Typography>
							<Typography fontSize={15}>
								Rs. 2000{' '}
								<span
									style={{
										color: '#EE685F',
									}}
								>
									{' '}
									{10} % {t("off")}
								</span>
							</Typography>
						</Box>
					</Box>
					<Box
						style={{
							textAlign: 'center',
							paddingTop: '20px',
						}}
					>
						<p>
							{' '}
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis laboriosam sit tempora soluta
							ratione temporibus fuga eos molestias voluptas?{' '}
						</p>
					</Box>
					<Box display='flex' justifyContent='space-around' margin='auto'>
						<ReactStars count={5} size={40} activeColor='#ffd700' />
					</Box>
				</CardContent>
				<Box
					style={{
						textAlign: 'center',
						margin: '5px',
					}}
				>
					<Button
						variant='contained'
						className='readMoreBtn'
						style={{
							color: 'white',
							marginBottom: '15px',
							borderRadius: '5px',
							background: '#98DBAF',
							width: '200px',
						}}
					>
						<Link to={`/`}>{t("readmore")}</Link>
					</Button>
				</Box>
			</Card>
		</>
	);
}

export default PackageCard;
