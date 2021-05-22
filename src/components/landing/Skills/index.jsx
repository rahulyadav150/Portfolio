import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import './styles.css'

export const Skills = () => {
    const { theme } = useContext(ThemeContext);

    return <>
      
        <div className='skills_container' id = 'skills'>
            
            <h2>Skills</h2>
            <div className=' row justify-content-between ' style = {{margin:'0',padding:'.5rem'}}>
                <div className=' col col-md-5 progress-wrap'  >
                   <h3 style = {{color : theme === 'light' ? 'rgba(0, 0, 0, 0.7)':'#e6e6e6'}}>Algorithms</h3>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '70%', backgroundColor: '#2c98f0', color: '#2c98f0' }} role="progressbar" ariaValuenow="70" ariaValueMin="0" ariaValueMax="100">
                                <span className='label' style = {{color:'#2c98f0'}}>70%</span>
                                <span className='circle' style = {{backgroundColor:'#2c98f0'}}></span>
                            </div>
                        </div>
                   </div>
                <div className='col-md-5 progress-wrap'>
                    <h3 style = {{color : theme === 'light' ? 'rgba(0, 0, 0, 0.7)':'#e6e6e6'}}>Java</h3>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '75%', backgroundColor: '#4054b2', color: '#2c98f0' }} role="progressbar" ariaValuenow="70" ariaValueMin="0" ariaValueMax="100">
                                <span className='label'style = {{color:'#4054b2'}}>75%</span>
                                <span className='circle' style = {{backgroundColor:'#4054b2'}}></span>
                            </div>
                        </div>
                    </div>
                <div className='col-md-5 progress-wrap'>
                    <h3 style = {{color : theme === 'light' ? 'rgba(0, 0, 0, 0.7)':'#e6e6e6'}}>JavaScript</h3>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '70%', backgroundColor: '#f9bf3f', color: '#f9bf3f' }} role="progressbar" ariaValuenow="70" ariaValueMin="0" ariaValueMax="100">
                                <span className='label'>70%</span>
                                <span className='circle' style = {{backgroundColor:'#f9bf3f'}}></span>
                           </div>
                       </div>
                </div>
                <div className='col-md-5 progress-wrap'>
                   <h3 style = {{color : theme === 'light' ? 'rgba(0, 0, 0, 0.7)':'#e6e6e6'}}>C++</h3>
                        <div className="progress" >
                            <div className="progress-bar" style={{ width: '60%', backgroundColor: '#a84cb8', color: '#a84cb8' }} role="progressbar" ariaValuenow="70" ariaValueMin="0" ariaValueMax="100">
                                <span className='label'>60%</span>
                                <span className='circle' style = {{backgroundColor:'#a84cb8'}}></span>
                            </div>
                        </div>
                </div>
                <div className='col-md-5  progress-wrap'>
                   <h3 style = {{color : theme === 'light' ? 'rgba(0, 0, 0, 0.7)':'#e6e6e6'}}>MongoDB/ExpressJS/NodeJS</h3>
                        <div className="progress" >
                            <div className="progress-bar" style={{ width: '60%', backgroundColor: '#2fa499', color: '#2fa499' }} role="progressbar" ariaValuenow="70" ariaValueMin="0" ariaValueMax="100">
                                <span className='label'>60%</span>
                                <span className='circle' style = {{backgroundColor:'#2fa499'}}></span>
                            </div>
                        </div>
                </div>
                <div className='col-md-5 progress-wrap'>
                   <h3 style = {{color : theme === 'light' ? 'rgba(0, 0, 0, 0.7)':'#e6e6e6'}}>React</h3>
                        <div className="progress" >
                            <div className="progress-bar" style={{ width: '70%', backgroundColor: '#4054b2', color: '#4054b2' }} role="progressbar" ariaValuenow="70" ariaValueMin="0" ariaValueMax="100">
                                <span className='label'>70%</span>
                                <span className='circle' style = {{backgroundColor:'#4054b2'}}></span>
                            </div>
                        </div>
                </div>
                <div className='col-md-5 progress-wrap'>
                   <h3 style = {{color : theme === 'light' ? 'rgba(0, 0, 0, 0.7)':'#e6e6e6'}}>Bootstrap/HTML/CSS</h3>
                        <div className="progress" >
                            <div className="progress-bar" style={{ width: '75%', backgroundColor: '#2c98f0', color: '#2c98f0' }} role="progressbar" ariaValuenow="70" ariaValueMin="0" ariaValueMax="100">
                                <span className='label'>75%</span>
                                <span className='circle' style = {{backgroundColor:'#2c98f0'}}></span>
                            </div>
                        </div>
                </div>
                <div className='col-md-5 progress-wrap'>
                   <h3 style = {{color : theme === 'light' ? 'rgba(0, 0, 0, 0.7)':'#e6e6e6'}}>Git/Postman/ChromeDevTools</h3>
                        <div className="progress" >
                            <div className="progress-bar" style={{ width: '75%', backgroundColor: '#a84cb8', color: '#a84cb8' }} role="progressbar" ariaValuenow="70" ariaValueMin="0" ariaValueMax="100">
                                <span className='label'>75%</span>
                                <span className='circle' style = {{backgroundColor:'#a84cb8'}}></span>
                            </div>
                        </div>
                </div>
                <div className='col-md-5 progress-wrap'>
                   <h3 style = {{color : theme === 'light' ? 'rgba(0, 0, 0, 0.7)':'#e6e6e6'}}>Python/MySQL</h3>
                        <div className="progress" >
                            <div className="progress-bar" style={{ width: '50%', backgroundColor: '#ec5453', color: '#ec5453' }} role="progressbar" ariaValuenow="70" ariaValueMin="0" ariaValueMax="100">
                                <span className='label'>50%</span>
                                <span className='circle' style = {{backgroundColor:'#ec5453'}}></span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
   
    </>

}