import React from 'react';

import Navbar from './component/navbar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Footer from './component/Footer';
import PhotoUpload from './screens/PhotoUpload'


function App() {
	
return (
	
			<BrowserRouter basename='/photo-gallary'>
				<Navbar />
				<Routes>
					<Route path="*" element={<Navigate to ="/home" />}/>
					<Route exact path='/home' element={<Home/>}  />
					<Route exact path='/Login'  element={<Login/>} />
					<Route exact path='/PhotoUpload'  element={<PhotoUpload/>} />

				</Routes>
				<Footer/>
			</BrowserRouter>
	
);
}

export default App;
