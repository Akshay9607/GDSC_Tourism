import React from 'react';
import Box from '@mui/material/Box';
import './index.css';
import { FcNews } from 'react-icons/fc';
import { FaTelegram } from 'react-icons/fa';
import { FiFacebook, FiInstagram, FiPhoneCall, FiYoutube } from 'react-icons/fi';
import aboutimg from '../../images/img11.jpg';

import { useTranslation } from 'react-i18next';

const About = () => {
	const {t,i18n} = useTranslation();
	return (
		<>
			<div className='about' id='about'>
				<div className='aboutUpperPart'>
					<div className='aboutUs'>
						<h1>{t("about")}</h1>
						<h1 className='redColor'>{t("us")}</h1>
						<hr className='horizontalLine' />
						<br />

						<p style={{ paddingBottom: '15px', paddingTop: '10px' }}>
							{t("sufn")} <FcNews style={{ fontSize: '30px' }} />{' '}
						</p>
					</div>
					<div className='aboutInfo'>
						<h1 style={{ textAlign: 'center' }}>
							<b>{t("travel")}</b> {t("company")}
						</h1>{' '}
						<br />
						<span className='verticalLine' style={{ marginLeft: '90px' }}></span>
						<span style={{ textIndent:"70px", padding:"20px" , marginTop:"120px"}}>
							{t("about1")}
						</span>
						<br />
						<br />
						<br />
						<span className='verticalLine'></span>
						<span style={{ textIndent: '60px', padding: '20px', marginTop: '120px' }}>
						{t("about2")}
						</span>
					</div>
				</div>
				<div className='aboutLower'>
					<div className='lowerinfo'>
						<span className='verticalLine'></span>
						<span style={{ textIndent: '60px', padding: '20px', marginTop: '90px' }}>
						{t("about3")}
						</span>{' '}
						<br /> <br />
						<span className='verticalLine'></span>
						<span style={{ textIndent: '60px', padding: '20px', marginTop: '90px' }}>
						{t("about4")}
						</span>{' '}
						<br />
						<br />
						<span className='socialHandles'>
							{' '}
							<FiFacebook color='#EE685F' />{' '}
						</span>
						<span className='socialHandles'>
							{' '}
							<FiInstagram color='#EE685F' />{' '}
						</span>
						<span className='socialHandles'>
							{' '}
							<FiPhoneCall color='#EE685F' />{' '}
						</span>
						<span className='socialHandles'>
							{' '}
							<FiYoutube color='#EE685F' />{' '}
						</span>
						<span className='socialHandles'>
							{' '}
							<FaTelegram color='#EE685F' />{' '}
						</span>
					</div>

					<div className='aboutimg'></div>
				</div>
			</div>
		</>
	);
};

export default About;
