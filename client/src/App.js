import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Landing } from './Landing';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' component={Landing} />

      </BrowserRouter>



    </div>
  );
}

export default App;
