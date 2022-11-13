import React from 'react';

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import * as Layout from './pages/Layout'
import * as Auth from './pages/Authorization'

import {Route, Routes} from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";
import {AuthorizationCheck} from "./components/AuthorizationCheck";

const App = () => {
	return (
		<React.Fragment>
      <Header/>

			<Routes>
				<Route path={'/'} element={<PrivateRouter/>}>
					<Route path={'/'} element={<Layout.Main/>}/>
					<Route path={'/admin'} element={<Layout.Admin/>}/>
				</Route>
				<Route
					path={'/auth/login'}
					element={<AuthorizationCheck><Auth.Login/></AuthorizationCheck>}
				/>
				<Route
					path={'/auth/register'}
					element={<AuthorizationCheck><Auth.Login/></AuthorizationCheck>}
				/>
				<Route path={'*'} element={<div>нету такой страницы</div>}/>
			</Routes>

			<Footer/>
		</React.Fragment>
	);
};

export default App;