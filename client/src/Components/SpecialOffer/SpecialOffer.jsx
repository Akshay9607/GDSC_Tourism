import react from 'react';
import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '../index.css';
import SpecialOfferCard from './SpecialOfferCard';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getisLangEng } from '../../Redux/slice';

const SpecialOffer = () => {

	const {t,i18n} = useTranslation() ;
	const isLangEng = useSelector(getisLangEng) ;

	return (
		<>
			<Typography variant='h2' component='h2' align='center'>
				
				{t("special")}
				<span style={{ color: '#EE685F' }}> {t("offer")} </span>
			</Typography>
			<br />
			<Typography variant='h6' color='white' align={isLangEng?'right':'left'}>
				<span style={{ backgroundColor: '#EE685F', padding: '10px', borderRadius: '1rem' }}>{t("viewall")}</span>
			</Typography>
			<Box
				display='flex'
				justifyContent='space-between'
				style={{ overflowX: 'scroll', padding: '20px' }}
				className='packagesBox'
			>
				<SpecialOfferCard />
				<SpecialOfferCard />
			</Box>
		</>
	);
};

export default SpecialOffer;
