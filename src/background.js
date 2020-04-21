import React from 'react'
import './App.css'


/* <img alt="" src={url1} onLoad={this.setState({
                isBgloaded: true
                })} style={{display: "none"}} >
            </img>
*/






class Backgroud extends React.Component{

    state = {
        isBgloaded: false,
        display: 'inline'

    }
    
    render(){
        
       
        var url1=this.props.url;
        return(
            <div>
                {/* style={ { backgroundImage: "url('"+url1+"')" } }  */}
                <div className="background">
                <img alt="" className="bg-image" src={url1 || 'src/bg.jpg'} style={{display: this.state.display}} >
                </img>
                <div className="gradient-back"></div>
                {this.props.userLink && this.props.userName && this.props.unsplashLink && <p>Photo By <a href={this.props.userLink} target="_blank" rel="noopener noreferrer"> {this.props.userName}</a> on <a href={this.props.unsplashLink} target="_blank" rel="noopener noreferrer" >Unsplash</a></p>}
                </div>
            </div>
        );
    }

    

};

export default Backgroud;
