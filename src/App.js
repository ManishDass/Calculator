import './App.css';
import NumberCalculator from './components/NumberCalculator';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom'
import CurrencyCalculator from './components/CurrencyCalculator';
import TemperatureCalculator from './components/TemperatureCalculator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <main className='main-wrapper'>
            <aside className='sidebar'> <Sidebar /> </aside>
            <section className='NumberCalculator'> <NumberCalculator />  </section>
          </main>
        }></Route>
        <Route path='/currency' element={<CurrencyCalculator/>}/>
        <Route path='/temperature' element={<TemperatureCalculator/>}/>
      </Routes>
    </div>
  );
}

export default App;
