import react from 'react';
import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '../index.css';
import SpecialOfferCard from './SpecialOfferCard';

const SpecialOffer = () => {
	return (
		<>
			<Typography variant='h2' component='h2' align='center'>
				{' '}
				Special
				<span style={{ color: '#EE685F' }}> Offer </span>
			</Typography>
			<br />
			<Typography variant='h6' color='white' align='right'>
				<span style={{ backgroundColor: '#EE685F', padding: '10px', borderRadius: '1rem' }}>view all</span>
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
