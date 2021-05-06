import React, {Component} from 'react';
import PropTypes from "prop-types";
class RegisterCurrency extends Component{
    constructor(props) {
        super(props);
        this.state = {
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
        }
        //If you dont use arrow function you will have to manually bind like this
        //If you dont bind you wont be able to access items in the state of this component because it wont be recognised in lifecycle
        //this.onChange = this.onChange.bind(this);
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
        });
    }
    onSearch(e){
        e.preventDefault();
        let newCurrency = this.state;
        this.props.getCurrency(newCurrency);
        this.setState({
            
            id:this.state.id
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
            
            <form onSubmit={this.onSearch}>
                <div style={{display:'flex' }}>
                    
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
                <br/>
                
                <input
                    type="submit"
                    value="Search by Id"
                    className="btn"
                    oncliCk = {this.onSearch}
                />
                <span style={rightInput}></span>    
                <input
                    type="reset"
                    value="Reset"
                    className="btn"
                    onClick={this.onReset}
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

RegisterCurrency.propTyoes = {
    addCurrency:PropTypes.func.isRequired,
}

export default RegisterCurrency;