import React from 'react';
import { Header } from "./components/Header";
import { Contain } from "./components/Contain";
import { GlobalProvider } from "./context/GlobalState";

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Contain />
      </div>
    </GlobalProvider>
  );
}

export default App;
