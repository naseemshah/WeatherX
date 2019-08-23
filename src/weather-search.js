import React from 'react';
import "./App.css";




class Search extends React.Component{
   
    render(){
            return(
                    <div className="form-container">
                    <form onSubmit= {this.props.getWeather} >
                        <input type="text" name="city" placeholder="enter the City"></input>
                        <input type="text" name="country" placeholder="enter the Country"></input>
                        <br></br>
                        <div className="btn-container">
                        <button onClick={function(){console.log("Button was clickef")}} className="location-btn">a</button><button className="search-btn">search</button>
                        </div>
                        <hr></hr>
                    </form>
                    </div>
                );
            }
};

export default Search;

