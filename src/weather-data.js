import React from 'react';
import './App.css';
import humid from './humid.svg'



class Data extends React.Component{
    
    render(){
            var comprot = 37+this.props.wind_dir;
            
            return(
                <div>
                    <div className="temp-container">
                        {this.props.temp && <p className="temp" >{this.props.temp}°</p> }
                        
                        <div className="temp-min-max-container">
                            {this.props.temp_max && <p><strong>MAX</strong> {this.props.temp_max}°</p>}
                            
                            {this.props.temp_min && <p><strong>MIN  </strong> {this.props.temp_min}°</p>}
                        </div>
                    </div>
                    
                    
                
                    <div className="humid-wind-container">
                        {this.props.humidity && 
                        <div className="humidity-container">
                            <img alt="humid icon" className="humid-icon" src={humid}></img>
    
                            <p>{this.props.humidity} <sup>%</sup> </p>
                        </div>}
                        
                        <div className="wind-container">
                        {this.props.wind_dir && this.props.wind_speed && 
                        <svg xmlns="http://www.w3.org/2000/svg" width="39.637" height="39.492" viewBox="0 0 39.637 39.492">
                                <g id="wind-comp" transform="translate(-165.706 -380.266)">
                                    <g id="wind-compass" transform="translate(165.706 380.266)">
                                    <g id="Group_8" data-name="Group 8" transform="translate(19.31 0)">
                                        <g id="Group_7" data-name="Group 7">
                                        <rect id="Rectangle_13" data-name="Rectangle 13" width="1.162" height="4.065"/>
                                        </g>
                                    </g>
                                    <g id="Group_10" data-name="Group 10" transform="translate(0 19.165)">
                                        <g id="Group_9" data-name="Group 9">
                                        <rect id="Rectangle_14" data-name="Rectangle 14" width="4.21" height="1.162"/>
                                        </g>
                                    </g>
                                    <g id="Group_12" data-name="Group 12" transform="translate(19.311 35.427)">
                                        <g id="Group_11" data-name="Group 11">
                                        <rect id="Rectangle_15" data-name="Rectangle 15" width="1.162" height="4.065"/>
                                        </g>
                                    </g>
                                    <g id="Group_14" data-name="Group 14" transform="translate(35.426 19.165)">
                                        <g id="Group_13" data-name="Group 13">
                                        <rect id="Rectangle_16" data-name="Rectangle 16" width="4.21" height="1.162"/>
                                        </g>
                                    </g>
                                    <g id="Group_16" data-name="Group 16" transform="translate(12.91 3.964)">
                                        <g id="Group_15" data-name="Group 15" transform="translate(0 0)">
                                        <rect id="Rectangle_17" data-name="Rectangle 17" width="1.162" height="1.162" transform="translate(0 0.445) rotate(-22.5)"/>
                                        </g>
                                    </g>
                                    <g id="Group_18" data-name="Group 18" transform="translate(7.571 7.427)">
                                        <g id="Group_17" data-name="Group 17" transform="translate(0 0)">
                                        <rect id="Rectangle_18" data-name="Rectangle 18" width="1.161" height="1.161" transform="translate(0 0.821) rotate(-45)"/>
                                        </g>
                                    </g>
                                    <g id="Group_20" data-name="Group 20" transform="translate(4.109 12.764)">
                                        <g id="Group_19" data-name="Group 19" transform="translate(0 0)">
                                        <rect id="Rectangle_19" data-name="Rectangle 19" width="1.162" height="1.162" transform="translate(0 1.073) rotate(-67.5)"/>
                                        </g>
                                    </g>
                                    <g id="Group_22" data-name="Group 22" transform="translate(4.109 25.21)">
                                        <g id="Group_21" data-name="Group 21" transform="translate(0 0)">
                                        <rect id="Rectangle_20" data-name="Rectangle 20" width="1.162" height="1.162" transform="translate(0 0.445) rotate(-22.5)"/>
                                        </g>
                                    </g>
                                    <g id="Group_24" data-name="Group 24" transform="translate(7.571 30.423)">
                                        <g id="Group_23" data-name="Group 23" transform="translate(0 0)">
                                        <rect id="Rectangle_21" data-name="Rectangle 21" width="1.162" height="1.162" transform="translate(0 0.821) rotate(-45)"/>
                                        </g>
                                    </g>
                                    <g id="Group_26" data-name="Group 26" transform="translate(12.911 34.01)">
                                        <g id="Group_25" data-name="Group 25" transform="translate(0 0)">
                                        <rect id="Rectangle_22" data-name="Rectangle 22" width="1.162" height="1.162" transform="translate(0 1.073) rotate(-67.5)"/>
                                        </g>
                                    </g>
                                    <g id="Group_28" data-name="Group 28" transform="translate(25.357 34.011)">
                                        <g id="Group_27" data-name="Group 27" transform="translate(0 0)">
                                        <rect id="Rectangle_23" data-name="Rectangle 23" width="1.162" height="1.162" transform="translate(0 0.445) rotate(-22.5)"/>
                                        </g>
                                    </g>
                                    <g id="Group_30" data-name="Group 30" transform="translate(30.568 30.423)">
                                        <g id="Group_29" data-name="Group 29" transform="translate(0 0)">
                                        <rect id="Rectangle_24" data-name="Rectangle 24" width="1.162" height="1.162" transform="translate(0 0.821) rotate(-45)"/>
                                        </g>
                                    </g>
                                    <g id="Group_32" data-name="Group 32" transform="translate(34.155 25.209)">
                                        <g id="Group_31" data-name="Group 31" transform="translate(0 0)">
                                        <rect id="Rectangle_25" data-name="Rectangle 25" width="1.162" height="1.162" transform="translate(0 1.073) rotate(-67.5)"/>
                                        </g>
                                    </g>
                                    <g id="Group_34" data-name="Group 34" transform="translate(34.157 12.765)">
                                        <g id="Group_33" data-name="Group 33" transform="translate(0 0)">
                                        <rect id="Rectangle_26" data-name="Rectangle 26" width="1.162" height="1.162" transform="translate(0 0.445) rotate(-22.5)"/>
                                        </g>
                                    </g>
                                    <g id="Group_36" data-name="Group 36" transform="translate(25.356 3.963)">
                                        <g id="Group_35" data-name="Group 35" transform="translate(0 0)">
                                        <rect id="Rectangle_27" data-name="Rectangle 27" width="1.162" height="1.162" transform="translate(0 1.073) rotate(-67.5)"/>
                                        </g>
                                    </g>
                                    <g id="Group_38" data-name="Group 38" transform="translate(30.568 7.427)">
                                        <g id="Group_37" data-name="Group 37" transform="translate(0 0)">
                                        <rect id="Rectangle_28" data-name="Rectangle 28" width="1.162" height="1.162" transform="translate(0 0.821) rotate(-45)"/>
                                        </g>
                                    </g>
                                    </g>
                                    <g id="wind-pointer" transform={"rotate("+comprot+", 185, 400) matrix(0.809, -0.588, 0.588, 0.809, 167.875, 395.515)"}>
                                    <g id="Group_52" data-name="Group 52" transform="translate(0 0)">
                                        <g id="Group_51" data-name="Group 51" transform="translate(0 0)">
                                        <path id="Path_10" data-name="Path 10" d="M22.893,15.875H12.147V4.662h2.336a.467.467,0,0,0,.374-.748L12.054.177a.484.484,0,0,0-.748,0L8.5,3.914a.467.467,0,0,0,.374.748h2.336V15.875H.467a.467.467,0,1,0,0,.934H11.213V27.555a.467.467,0,0,0,.934,0V16.809H22.893a.467.467,0,0,0,0-.934ZM9.811,3.727,11.68,1.236l1.869,2.492H9.811Z"/>
                                        </g>
                                    </g>
                                    
                                    
                                    
                                    
                                    </g>
                                </g>
                        </svg>}
                            
                            <div>
                                {this.props.wind_dir && <p>{this.props.wind_dir}­­°</p>}
                                
                                {this.props.wind_speed && <p>{this.props.wind_speed} kmph</p>}
                            </div>
                        </div>
                    </div>
                    
                    {(this.props.error_code || this.props.error_msg) && <p className="error">Error!  <strong>{this.props.error_code}</strong>  {this.props.error_msg} </p>}
                    {this.props.city &&  this.props.country && <div className="location"><p>{this.props.city}, {this.props.country}</p></div>}
                    
                </div>
                
                );
            }
};




export default Data;
