import './App.css';
import { Header } from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { CustomTable } from './pages/CustomTable/CustomTable';
import { useState } from 'react';

export const App = () => {
	const [characters, setCharacters] = useState([]);

	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route
					exact
					path='/characters'
					element={
						<CustomTable
							characters={characters}
							setCharacters={setCharacters}
						/>
					}
				/>
			</Routes>
		</>
	);
};
