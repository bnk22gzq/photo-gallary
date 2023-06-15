import React from 'react';

import Navbar from './component/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/home';
import Login from './screens/Login/Login'
import Footer from './component/footer/footer';


function App() {
	
return (
	
			<Router>
				<Navbar />
			<Routes>
				<Route path='/Home' element={<Home/> } />
				<Route path='/login' element={<Login />} />
			</Routes>
				<Footer/>
			</Router>
	
);
}

export default App;
