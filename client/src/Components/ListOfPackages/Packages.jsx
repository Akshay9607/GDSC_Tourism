import React from 'react';
import { Typography } from '@mui/material';
import PackageCard from './PackageCard';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getisLangEng } from '../../Redux/slice';

const Packages = () => {

	const {t,i18n} = useTranslation() ;
	const isLangEng = useSelector(getisLangEng) ;

	return (
		<>
			<div className='e2' id='ourpackages' style={{ marginTop: '10rem' }}>
				<Typography variant='h2' component='h2' align='center'>
					
					{t("our")}
					<span style={{ color: '#EE685F' }}> {t("packages")} </span>
				</Typography>
			</div>
			<Typography variant='h6' color='white' align={isLangEng?'right':'left'}>
				<span style={{ backgroundColor: '#EE685F', padding: '5px', borderRadius: '15px' }}>
					<a style={{ color: 'white' }} href='/list-of-packages'>
						{t("viewall")}
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
