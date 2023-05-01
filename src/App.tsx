import React from 'react';
import './Styles/App.scss';
import SidePanel from './components/SidePanel';
import Card from './components/Card/Index';
function App() {
  return (
    <div className="App">
      <div className="dashboard">
        <div className="dashboard__left">
          <SidePanel></SidePanel>
        </div>
        <div className="dashboard__right">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
