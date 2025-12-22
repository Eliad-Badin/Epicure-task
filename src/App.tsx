
import './App.css'

import Header from './components/layout/Header';
import HeroSection from './pages/homePage/sections/HeroSection';

function App() {
  

  return (
    <div>
      <Header
        onMenuClick={() => {
          console.log('Menu clicked')
        }}
        onSearchClick={() => {
          console.log('Search clicked')
        }}
        onBagClick={() => {
          console.log('Bag clicked')
        }}
      />

      <HeroSection 
      onSerachClick={() => {
        console.log('Hero Search Clicked')
      }}/>

      <div className='p-6 text-2xl font-bold'>
        Epicure
      </div>
    </div>
  )
}

export default App
