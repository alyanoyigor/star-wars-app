import './App.css';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Home } from './pages/Home';
import { CustomTable } from './pages/CustomTable';

export const App = () => {
	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/characters' element={<CustomTable />} />
				</Routes>
			</Main>
		</>
	);
};
