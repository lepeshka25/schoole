import React from 'react';

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import * as Layout from './pages/Layout'
import * as Auth from './pages/Authorization'

import {Route, Routes} from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";

const App = () => {
	return (
		<React.Fragment>
      <Header/>

			<Routes>
				<Route path={'/'} element={<PrivateRouter/>}>
					<Route path={'/'} element={<div>привет</div>}/>
					<Route path={'/admin'} element={<div>пока</div>}/>
				</Route>
				<Route path={'/auth/login'} element={<Auth.Login/>}/>
				<Route path={'/auth/register'} element={<Auth.Register/>}/>
				<Route path={'*'} element={<div>нету такой страницы</div>}/>
			</Routes>

			<Footer/>
		</React.Fragment>
	);
};

export default App;