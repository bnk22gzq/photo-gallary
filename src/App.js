import React from 'react';

import Navbar from './component/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home.js';
import Login from './screens/Login/Login.js'
import Footer from './component/Footer/Footer.js';


function App() {
	
return (
	
			<Router>
				<Navbar />
			<Routes>
				<Route path='/Hpme' element={<Home/> } />
				<Route path='/Login' element={<Login />} />
			</Routes>
			<Footer/>
			</Router>
	
);
}

export default App;
