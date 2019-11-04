import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import SearchBar from "./SearchBar";
import Loading from "./Loading";
import Currency from "./Currency";

import Stock from "./Stock";

const stockAPI = "XT1uNimWG5OJDj9o9T51x6PX9G7MYncgFfMuDFyYmlNgicm8IWmexVinsJoo";

class App extends Component {
  state = {
    currencyData: null,
    stockData: null,
    stockKeyWord: ""
  };

  getCurrencyData = async url => {
    const res = await axios.get(url);
    const { data } = res;
    console.log(data);
    this.setState({ currencyData: data });
  };

  // getStockData = async url => {
  //   const res = await axios.get(url);
  //   console.log(res);
  // };
  // callback 역할을 하는 함수는 arrow function으로 작성해야 동작한다.
  searchStock = keyword => {
    this.setState({ stockKeyWord: keyword });
  };

  onSubmit = async () => {
    const response = await axios.get(
      "https://api.worldtradingdata.com/api/v1/stock",
      {
        params: {
          symbol: this.state.stockKeyWord,
          api_token: stockAPI
        }
      }
    );
    // console.log("==============");
    // console.log(response.data.data[0]);
    // console.log("==============");
    let {
      data: { data }
    } = response;
    // console.log(data);
    this.setState({ stockData: data[0] });
  };

  componentDidMount() {
    console.log("Did Mount");
    const currencyUrl = `https://api.exchangeratesapi.io/latest?base=USD`;
    this.getCurrencyData(currencyUrl);
  }

  render() {
    console.log("rendered");
    return (
      <>
        <>
          {this.state.currencyData === null ? (
            <Loading />
          ) : (
            <Currency data={this.state.currencyData} />
          )}
        </>
        <>
          {this.state.stockData === null ? (
            <SearchBar
              searchStock={this.searchStock}
              onSubmit={this.onSubmit}
            />
          ) : (
            <Stock data={this.state.stockData} />
          )}
        </>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
