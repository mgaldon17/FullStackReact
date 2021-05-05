import React, {Component} from 'react';
import PropTypes from "prop-types";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
class CurrencyInfo extends Component{

    //dynamic Styling
    infoStyle = () =>{
        return {
            backgroundColor: (this.props.user.id %2) == 0? '#c8d4f7cc' :'',
            padding:'10px',
            borderBottom: '1px #ccc dotted',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            justifyItems: 'flex-start',
        }
    }

    render() {
        //Destructuring instead of using this.props.user.<variable> you can now use name | surname
        const {id} = this.props.currency;
        return(
            <div style={this.infoStyle()}>
                <p>{this.props.currency.name}</p>
                <p>{this.props.currency.symbol}</p>
                <p>{this.props.currency.priceUsd}</p>
                <div style={buttons}>
                    {/*<IconButton color="secondary" onClick={this.props.removeUser.bind(this,id )} >  Because binding in faling in Jest i have used arrow function binding*/}
                    <IconButton aria-label="secondary" color="primary" onClick={(e) =>this.props.removeUser(id,e)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={(e) =>this.props.removeUser(id,e)} >
                        <DeleteIcon />
                    </IconButton>
                </div>

            </div>
        );
    }
}

const iconUsername = {
    display: 'flex',
    justifyContent:'space-between',

}

const buttons = {
    display: 'flex'
}
//PropTypes
CurrencyInfo.propTypes = {
    user : PropTypes.object.isRequired
}
export  default  CurrencyInfo;