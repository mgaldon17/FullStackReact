import React, {Component} from 'react';
import PropTypes from "prop-types";
class RegisterCurrency extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            symbol:'',
            rank:'',
            id:''
        }
        
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange =(e) =>{
        //This is what you do for individual target
        //this.setState({name:e.target.value});
        //But if you have plenty
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        //Copying state object to newUser
        let newCurrency = this.state;
        this.props.addCurrency(newCurrency);
        //Resetting the fields
        this.setState({
            name:'',
            symbol:'',
            rank:'',
            id:''
        });
    }
    onSearch(e){
        e.preventDefault();
        let newCurrency = this.state;
        this.props.getCurrency(newCurrency);
        this.setState({
            
            id:''
        });
    }
   
    onReset = () => {
        this.setState({
            ...this.state,
            name:'',
            symbol:'',
            supply:'',
            rank:'',
            maxSupply:'',
            marketCapUsd:'',
            volumeUsd24Hr:'',
            priceUsd:'',
            changePercent24Hr:'',
            vwap24Hr:'',
            explorer:'',
            id:''
        })
     }
    render() {
        return(
            
            <form onSubmit={this.onSubmit}>
                 
                <div style={{display:'flex'}}>
                   
                    <input
                        type = "text"
                        name = "name"
                        placeholder="Name"
                        style={leftInput}
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    
                    <input
                        type = "text"
                        name = "symbol"
                        placeholder="Symbol"
                        style={rightInput}
                        value={this.state.symbol}
                        onChange={this.onChange}
                    />
                    
                    <input
                        type = "text"
                        name = "id"
                        placeholder="ID"
                        style={rightInput}
                        value={this.state.id}
                        onChange={this.onChange}
                    />
                    <input
                        type = "text"
                        name = "rank"
                        placeholder="Rank"
                        style={rightInput}
                        value={this.state.rank}
                        onChange={this.onChange}
                    />
                </div>
                
                <br></br>
                <input
                    type="submit"
                    value="Search by Id"
                    className="btn"
                    onClick = {this.onSearch}
                />
                <span style={rightInput}></span>    
                <input
                    type="reset"
                    value="Reset"
                    className="btn"
                    onClick={this.onReset}
                />
                <span style={rightInput}></span>    
                <input
                    type="submit"
                    value="Save"
                    className="btn"
                    onClick={this.onSubmit}
                />
                
                
            </form>

            
        )
    }
}

const leftInput = {
    flex:'5',
    padding:'5px',
    margin:'10px 10px 0px 0px'
}

const rightInput = {
    flex:'5',
    padding:'5px',
    margin:'10px 0px 0px 10px'
}

RegisterCurrency.propTypes = {
    addCurrency:PropTypes.func.isRequired,

}

export default RegisterCurrency;