import React from 'react';

import Navbar from './component/navbar';
import { BrowserRouter as Router, Routes, Route,witch } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login/Login.js';
import Footer from './component/Footer/Footer.js';


function App() {
	
return (
	
			<Router>
				<Navbar />
			<Routes>
				<Route exact path='/photo-gallary/Home' element={<Home/>} />
				<Route path='/photo-gallary/login' element={<Login />} />
			</Routes>
				<Footer/>
			</Router>
	
);
}

export default App;
