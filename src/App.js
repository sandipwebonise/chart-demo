
import React from 'react';
import './App.css';
import D3Chart from './D3Chart';
// import ChartJS from './ChartJS';
// import ChartIst from './ChartIst';
import Recharts from './Recharts';
import ReactVis from './ReactVis';

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <Recharts />
        <ReactVis />
        <D3Chart />
      </div>
    );
  }
}

export default App;
