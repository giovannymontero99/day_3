import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Works from './components/Works';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={
          <>
            <Header />
            <Dashboard />
          </>
        }
        path='/' />
        
        <Route element={
          <>
            <Header />
            <Works />
          </>
        }
        path='/home' />

        <Route element={
          <>
            <Header />
          </>
        }
        path='/completed' />
      </Routes>


    </div>
  )
}

export default App
