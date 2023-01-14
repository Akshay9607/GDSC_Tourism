import { useState } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

import LandingPage from './Home/LandingPage';


function App() {

	const [direction , setDirection] = useState("ltr");

	document.getElementsByTagName('html')[0].setAttribute("dir", direction );
  return (
    <>
      <Router>
				<Routes>
					<Route
						path='/'
						element={<LandingPage dir={direction} setDir={setDirection} />}
					/>
          </Routes>
          </Router>
    </>
  );
 
}



export default App;
