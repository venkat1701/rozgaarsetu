import logo from './logo.svg';
import './App.css';
import {Header, WhatWeBring, Footer} from './components';
import Team from './components/Team';

function App() {
  return (
    <div className="flex justify-between items-center flex-col w-full">
      <Header/>
      <WhatWeBring/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
