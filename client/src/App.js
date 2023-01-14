
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

import LandingPage from './Home/LandingPage';
import { useSelector } from 'react-redux';
import { getDirection } from './Redux/slice';


function App() {

	const direction = useSelector(getDirection)
	

	document.getElementsByTagName('html')[0].setAttribute("dir", direction );
	
  return (
    <>
      <Router>
				<Routes>
					<Route
						path='/'
						element={<LandingPage/>}
					/>
          </Routes>
          </Router>
    </>
  );
 
}



export default App;
