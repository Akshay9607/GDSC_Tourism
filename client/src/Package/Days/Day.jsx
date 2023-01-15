import React from 'react';
import '../index.css';
import 'react-vertical-timeline-component/style.min.css';
import '../index.css';
import { useSelector } from 'react-redux';
import { EachDay } from './EachDay';
import { getisLangEng } from '../../Redux/slice';


const Day = ({ tour }) => {
	const currLang = useSelector(getisLangEng) ;    
	var lang = currLang ? "englishData" : "arabicData";
	
	return <>{tour[lang].schedule.map((day, i) => <EachDay key={i} day={day} dayNo={i+1 } images={ tour[lang].tourImages}  />)}</>;
};
  
export default Day ;

