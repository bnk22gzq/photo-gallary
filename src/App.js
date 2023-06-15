import React from 'react';

import Navbar from './component/navbar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login/Login.js';
import Footer from './component/Footer/Footer.js';


function App() {
	
return (
	
			<BrowserRouter basename='/photo-gallary'>
				<Navbar />
				<Routes>
					<Route path="*" element={<Navigate to ="/home" />}/>
					<Route exact path='/home' element={<Home/>}  />
					<Route exact path='/Login'  element={<Login/>} />
				</Routes>
				<Footer/>
			</BrowserRouter>
	
);
}

export default App;
