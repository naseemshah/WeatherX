import React from 'react';
import './App.css'


class Title extends React.Component{
    
    render(){
            return(
                <div className="title-container">
                <h1 className="title">Weather App</h1>
                <h6 className="subhead">by <a href="https://www.linkedin.com/in/naseemshah/">naseem shah</a></h6>
                </div>
                );
            }
};

export default Title; 