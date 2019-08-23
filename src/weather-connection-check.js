import React from "react"
import './App.css'



class ConnectionCheck extends React.Component{

    state = {
        status: "",
        className:""
    }
    onloadCheck = () => {
    

    if(window.navigator.onLine){
        
        
        this.setState(
            {   
                status: "online", className: "online"
            });
    }
    
    else {
                    
        this.setState(
                    {
                        
                        status: "offline", className: "offline"
                    });
    
        }   
    }



    checkStatus = (e) => {


        
        

        window.addEventListener("offline", (e) =>{ 
            
            
            this.setState(
                {
                    
                    status: "offline", className: "offline"
                }

        ); });
        window.addEventListener("online",(e) => { 

            
                    
            this.setState(
            {
                status: "online", className: "online"
            }
        ) });
    }
    
    
        
    
    render(){
            window.onload = this.onloadCheck;               
            this.checkStatus();

            return(
                <div id="connection-status" className={this.state.className}>
                    <p>Connection Status: {this.state.status}</p>
                </div>
                
            );
        }

};

export default ConnectionCheck;