import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import { Box } from '@mui/system';
import { Button } from '@mui/material';
import ReactStars from 'react-rating-stars-component';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../index.css';
import { useTranslation } from 'react-i18next';
import { getisLangEng } from '../../Redux/slice';


function PackageCard({ tour}) {

	const {t,i18n} = useTranslation();
	const currLang = useSelector(getisLangEng);
	var lang = currLang ? "englishData" : "arabicData";

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
						backgroundImage: `url(${tour.englishData.imageBanner})`,
					}}
				>
					{/* {packageData[i].destination} */}
					{ tour[lang].destination}
				</div>
				<CardContent>
					<Box display='flex' justifyContent='space-between'>
					
						<Box>
							<Typography fontSize={15} fontWeight='bold'>
								{t("duration")}
							</Typography>
							<Typography fontSize={15}> { tour[lang].duration} - {t("day")} </Typography>
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
								Rs. { tour[lang].price}{' '}
								<span
									style={{
										color: '#EE685F',
									}}
								>
									{' '}
									{ tour[lang].offer} % {t("off")}
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
						{ tour[lang].description.slice(0,180)}......
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
							textDecoration: 'none',
							
						}}
					>
						<Link to={`/tour/${tour._id}`} className="readMoreBtn">{t("readmore")}</Link>
					</Button>
				</Box>
			</Card>
		</>
	);
}

export default PackageCard;
