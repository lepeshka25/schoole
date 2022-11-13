import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";

const App = () => {
	return (
		<React.Fragment>
      <Header/>

			<Routes>
				<Route path={'/'} element={<PrivateRouter/>}>

				</Route>
			</Routes>

			<Footer/>
		</React.Fragment>
	);
};

export default App;