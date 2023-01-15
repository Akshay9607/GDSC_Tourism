import react from 'react';
import { Card, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import '../index.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getisLangEng } from '../../Redux/slice';

function SpecialOfferCard({ tour}) {

   const {t,i18n} = useTranslation();
   const currLang = useSelector(getisLangEng) ;
   var lang = currLang ? "englishData" : "arabicData";
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
						backgroundImage: `url(${tour[lang].imageBanner})`,
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
								{t('city')}
							</Typography>
							<Typography fontSize={15}>{tour[lang].destination}</Typography>
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
								{t("duration")}
							</Typography>
							<Typography fontSize={15}>
								<span>{tour[lang].duration} {t("day")}</span>
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
								{t("price")}
							</Typography>
							<Typography fontSize={15}>
								Rs. {tour[lang].price} <span style={{ color: '#EE685F' }}>{tour[lang].offer}% {t("off")}</span>
							</Typography>
						</Box>
					</Box>
				</div>
				<Box padding='.5rem 1rem 1rem 1rem'>
					<h2>{tour[lang].destination}</h2>
					<p>
						{tour[lang].shortDescription}
					</p>
				</Box>
				<Box
					style={{
						textAlign: 'center',
						margin: '5px',
					}}
				>
					<Link to={`/tour/${tour._id}`}>
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
							{t("booking")}
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
							{t("readmore")}
						</Button>
					</Link>
				</Box>
			</Card>
		</>
	);
}

export default SpecialOfferCard;
