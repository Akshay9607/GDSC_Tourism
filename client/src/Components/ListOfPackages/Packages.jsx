import React from 'react';
import { Typography } from '@mui/material';
import PackageCard from './PackageCard';
import { Box } from '@mui/system';

const Packages = () => {
	return (
		<>
			<div className='e2' id='ourpackages' style={{ marginTop: '10rem' }}>
				<Typography variant='h2' component='h2' align='center'>
					{' '}
					Our
					<span style={{ color: '#EE685F' }}> Packages </span>
				</Typography>
			</div>
			<Typography variant='h6' color='white' align='right'>
				<span style={{ backgroundColor: '#EE685F', padding: '5px', borderRadius: '15px' }}>
					<a style={{ color: 'white' }} href='/list-of-packages'>
						view all
					</a>
				</span>
			</Typography>
			<br />

			<Box
				display='flex'
				justifyContent='space-between'
				style={{ overflowX: 'scroll', padding: '20px' }}
				className='packagesBox'
			>
				<PackageCard />
				<PackageCard />
				<PackageCard />
			</Box>
			<br />
			<br />
			<br />
		</>
	);
};

export default Packages;
