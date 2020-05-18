import React from 'react';
import './App.css';
import Header from './components/Header.js'
import AppClass from './components/AppClass.js'

function App() {
  return (
    <div>
      {Header()}
      <AppClass/>
    </div>
  );
}

export default App;
