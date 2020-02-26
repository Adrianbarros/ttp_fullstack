import React from 'react';
import StockPage from './components/StockPage'
import './App.css';
//import SignIn from './components/SignIn';
import Pages from './components/Pages';


class App extends React.Component {
  state = {
    total_amount: 5000,
    price: [],
    stock_data: [],
    latest: undefined,

  }

  getStock = async (e) => {
    e.preventDefault();
    const ticker = e.target.elements.ticker.value;
    const qty = e.target.elements.qty.value;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=4WSNW8IO2XBBPSI5`;
    const responce = await fetch(url);
    const data = await responce.json();
    const ts = 'Time Series (1min)';
    console.log(data);
    this.setState({
      latest: Object.keys(data['Time Series (1min)'])[0],
      //price: data.ts,
      price: data,



    })
    console.log(this.state.price);
  }
  render() {
    return (
      <div className="App">
        {/* <Pages /> */}
        <StockPage getStock={this.getStock} />
      </div>
    );
  }
}

export default App;

