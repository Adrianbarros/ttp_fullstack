import React from 'react';
import StockPage from './pages/StockPage'
import './App.css';
//import SignIn from './components/SignIn';
import Pages from './pages/Pages';
// adding redux
import { Provider } from 'react-redux';
import Store from './Store';
import { loadUser } from './actions/authActions'


class App extends React.Component {
  componentDidMount() {
    Store.dispatch(loadUser())
  }
  state = {
    total_amount: 5000,
    price: undefined,
    stock_data: [],
    latest: '',
  }
  /*
  Get stock function that will react to the user buying a stock
  Will use the API key to retrive laster stock of a given company 
  it will also get how many stocks the user is buying for more calculationslater
  */
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
      //price: data['Time Series (1min)'].latest,

    })
    console.log(this.state.price);
  }
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <Pages />
          {/* <StockPage getStock={this.getStock} /> */}
        </div>
      </Provider>
    );
  }
}

export default App;

