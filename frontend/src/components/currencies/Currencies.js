import React, {Component} from 'react';
import CurrencyInfo from "../currencies-info/CurrencyInfo";
import PropTypes from "prop-types";
class Currencies extends Component{

    render() {
        return this.props.currencies.map((currency) =>(
           <CurrencyInfo currency={currency} key={currency.id}/>
        ));
    }
}

//PropTypes
Currencies.propTypes = {
    currencies:PropTypes.array.isRequired
}
export default Currencies;