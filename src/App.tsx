
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage/HomePage';
import RestaurantPage from './pages/restaurantPage/RestaurantPage';

import { RESTAURANT_PAGE_ROUTE } from './utils/Strings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={RESTAURANT_PAGE_ROUTE} element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
