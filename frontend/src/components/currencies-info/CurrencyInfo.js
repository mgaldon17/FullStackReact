import React, {Component} from 'react';
import PropTypes from "prop-types";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { DataGrid } from '@material-ui/data-grid';
class CurrencyInfo extends Component{

    //dynamic Styling
    infoStyle = () =>{
        return {
            backgroundColor: (this.props.currency.id %2) == 0? '#c8d4f7cc' :'',
            padding:'10px',
            borderBottom: '1px #ccc dotted',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            justifyItems: 'flex-start',
            
        }
    }
    
    render() {
 
        const {id} = this.props.currency;
        return(

            <div style={this.infoStyle()}>
               <div style={iconDollar}>
                    <MonetizationOnIcon style={{color:"#019221", margin:"0px 15px 0px 0px"}}/>
                    <p>{this.props.currency.name}</p>
               </div>
                
                <p>{this.props.currency.symbol}</p>
                <p>{this.props.currency.priceUsd}</p>
                <p>{this.props.currency.vwap24Hr}</p>
                <p>{this.props.currency.explorer}</p>

                
                
                    
                <div style={buttons}>
                   
                    <IconButton aria-label="secondary" color="primary" >
                        <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={(e) =>this.props.removeCurrency(id,e)} >
                        <DeleteIcon />
                    </IconButton>
                </div>

            </div>
        );
    }
}
const iconDollar = {
    display: 'flex',
    justifyContent:'space-between',

}

const buttons = {
    display: 'flex'
}
//PropTypes
CurrencyInfo.propTypes = {
    currency : PropTypes.object.isRequired
}
export default CurrencyInfo;