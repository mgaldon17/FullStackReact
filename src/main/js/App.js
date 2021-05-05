import React, {Component, useCallback} from "react";
import ReactDOM from "react-dom";
import Header from '../../../frontend/src/components/layouts/Header';
import RegisterCurrency from '../../../frontend/src/components/register-currency/RegisterCurrency';
import Currencies from '../../../frontend/src/components/currencies/Currencies';
import axios from "axios";

export class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            currencies:[
            ]
        }
    }
    
    componentDidMount() {
        axios.get('/currency/all')
            .then(response => this.setState({currencies:response.data}))
    }

    //Deleting Currency
    removeCurrency = (id) =>{
        axios.delete(`/currency/${id}`)
            .then(
                response =>this.setState( //Updating UI
                    {currencies: [...this.state.currencies.filter(
                        currency => currency.id !== id
                        )]}
                )
            );
    }

    //Getting currency
    getCurrency = (id) => {

        axios.get(`/currency/${id}`)
            .then(
                response => this.setState(
                    {currencies: [...this.state.currencies.filter(
                        currency => currency.id !== id
                        )]
                    }
                )
            );
    }

    addCurrency = (newCurrency) =>{
        axios.post('/currency/save',newCurrency)
            .then(
                (response) =>{
                    console.log(response.data);
                    this.setState({currencies:[...this.state.currencies,response.data]})
                }
            );
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <RegisterCurrency addCurrency={this.addCurrency}/>
                <Currencies currencies={this.state.currencies} removeCurrency={this.removeCurrency}/>
            </div>
        );
    }
}


export default App;

ReactDOM.render(<App />, document.querySelector("#app"));