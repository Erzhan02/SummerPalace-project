import CateringPage from '@pages/CateringPage/ui/CateringPage';
import EventsPage from '@pages/EventsPage/ui/EventsPage';
import ForAgenciesPage from '@pages/ForAgenciesPage/ui/ForAgenciesPage';
import ForTouristsPage from '@pages/ForTouristsPage/ui/ForTouristsPage';
import HomePage from '@pages/HomePage/ui/HomePage';
import SoffitEventHousePage from '@pages/SoffitEventHousePage/ui/SoffitEventHousePage';
import { Route, Routes } from 'react-router-dom';
import './App.module.scss';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/catering' element={<CateringPage />} />
			<Route path='/soffitEventHouse' element={<SoffitEventHousePage />} />
			<Route path='/forTourists' element={<ForTouristsPage />} />
			<Route path='/forAgencies' element={<ForAgenciesPage />} />
			<Route path='/events' element={<EventsPage />} />
		</Routes>
	);
};

export default App;
