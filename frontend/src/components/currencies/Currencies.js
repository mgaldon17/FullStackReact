import React, {Component} from 'react';
import CurrencyInfo from "../currencies-info/CurrencyInfo";
import PropTypes from "prop-types";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { IconButton } from '@material-ui/core';
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