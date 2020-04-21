import React from 'react';
import './App.css';
import Title from './weather-title';
import Data from './weather-data';
import Search from './weather-search';

import Background from './background'


//import ConnectionCheck from './weather-connection-check';



const API_KEY = "3885192aae7af32454608a2e84c6ee25"; 
const units = "metric";

class App extends React.Component {
  state = {
    temp: undefined,
    temp_max: undefined,
    temp_min: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind_dir: undefined,
    wind_speed: undefined,
    error_code: undefined,
    error_msg: undefined,
    description: undefined,
    
    url: undefined,
    unsplashLink: undefined,
    userName: undefined,
    userLink: undefined,
    style: undefined
  } 






  getWeather = async (e) => {
      e.preventDefault(); 
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;

      
      if (city && country){
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=${units}`);
            const data = await api_call.json();
            console.log(data);
            if(!(data.message)){
                      this.setState({
                      temp: Math.round(data.main.temp),
                      temp_max: Math.round(data.main.temp_max),
                      temp_min: Math.round(data.main.temp_min),
                      city: data.name,
                      country: data.sys.country,
                      humidity: data.main.humidity,
                      wind_dir: data.wind.deg,
                      wind_speed: data.wind.speed,
                      description: data.weather[0].main,
                      error_code: undefined,
                      error_msg: undefined,
                      
                    });
                    
            }
            
            else{
                
                this.setState({
                  temp: undefined,
                  temp_max: undefined,
                  temp_min: undefined,
                  city: undefined,
                  country: undefined,
                  humidity: undefined,
                  wind_dir: undefined,
                  wind_speed: undefined,
                  error_code: data.cod,
                  error_msg: data.message,
                  description: undefined,
                  
                });
            }
    }
      else if(city && !country) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`);
            const data = await api_call.json();
            console.log(data);
            if(!(data.message)){
                this.setState({
                temp: Math.round(data.main.temp),
                temp_max: Math.round(data.main.temp_max),
                temp_min: Math.round(data.main.temp_min),
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                wind_dir: data.wind.deg,
                wind_speed: data.wind.speed,
                description: data.weather[0].main,
                error_code: undefined,
                error_msg: undefined,
                
              });
              
            }
              else{
                      
                this.setState({
                  temp: undefined,
                  temp_max: undefined,
                  temp_min: undefined,
                  city: undefined,
                  country: undefined,
                  humidity: undefined,
                  wind_dir: undefined,
                  wind_speed: undefined,
                  error_code: data.cod,
                  error_msg: data.message,
                  description: undefined,
                  
                });   
            }
    }
    else if( !city && country) {
        this.setState({
        temp: undefined,
        temp_max: undefined,
        temp_min: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind_dir: undefined,
        wind_speed: undefined,
        error_code: undefined,
        error_msg: "Please Enter the City Name",
        description: undefined,
        
      });
    }

    //Image API
    var condition = this.state.description;
    console.log("The condistion is ", condition );

    const api_call= await fetch (`https://api.unsplash.com/search/photos?query=${condition}&client_id=164192e61055b9ad2a5a8881d8683259fc5c2f5f8761ab7012d0f513a8b47f23&page=1`)
    const data = await api_call.json();
    console.log("Got Data from API    in JSON \n",data);
    var max = data.results.length;
    console.log("Max length of result Array:\n",max);

    var random = Math.floor(Math.random()*max);//Math.floor(Math.random() * (max - min) + min)
    console.log("The Random Number is ", random )
    this.setState({
        url: data.results[random].urls.regular,
        unsplashLink: data.results[random].links.html,
        userName: data.results[random].user.name,
        userLink: data.results[random].user.links.html
        
    })
    console.log("The Url is: \n ",this.state.url);
  
  }




render() { 
  
  return (
      <div>
            
              <Background url={this.state.url}
              condition={this.state.description}
              unsplashLink={this.state.unsplashLink} 
              userName={this.state.userName} 
              userLink={this.state.userLink}
              /> 
              <div className="main">
              
              
              <Title />
              <Search   getWeather={this.getWeather} />
              
              <Data   
                      temp={this.state.temp}
                      temp_max={this.state.temp_max}
                      temp_min={this.state.temp_min} 
                      city={this.state.city}  
                      country={this.state.country}
                      humidity={this.state.humidity}
                      wind_dir={this.state.wind_dir}
                      wind_speed={this.state.wind_speed}
                      error_code={this.state.error_code}
                      error_msg={this.state.error_msg}
                      description={this.state.description}
              />
            </div>
            
      
      
      </div>  
    
    );
  }
};

export default App;
