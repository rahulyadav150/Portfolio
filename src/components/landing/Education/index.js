import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import './styles.css'

export const Education = () => {
    const { theme } = useContext(ThemeContext);

    return <>
        <div className='Container-imGdsn imvpyW styles__Wrapper-fvRwnH bnwvE' id='education'>
            <h2>Education</h2>
            <div className="row" style={{ margin: '0', padding: '.5rem' }}>
                <div className="col-md-9 column">
                    <ul className="timeline" style={{ color: 'black' }}>
                        <li className="timeline-item bg-white rounded ml-3 p-4 shadow">


                            <div className="timeline-arrow"></div>
                            <div className='d-flex justify-content-between flex-wrap'>
                                <h2 className="h5 mb-1">Bachelors in Computer Science and Engineering</h2>
                                <span>2018-2022</span>
                            </div>
                            <span classNameName="small text-gray" style={{ fontSize: '14px', fontWeight: '700' }}>ITM Group of Institutions, Gwalior</span>
                            <p class="text-small mt-2 font-weight-light"><strong style = {{fontWeight:500}}>Courses undertaken : </strong> Data Strucutures and Algorithms, Operating Systems, Database Management Systems, Networks, Distributed Computing, Object Oriented Programming, Computer Architecture.</p>
                        </li>
                        <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <div className="timeline-arrow"></div>
                            <div className='d-flex justify-content-between flex-wrap'>
                                <h2 className="h5 mb-1">Intermediate</h2>
                                <span>2017</span>
                            </div>
                            
                            <p class="text-small mt-2 font-weight-light"><strong style = {{fontWeight:500}}>Courses undertaken : </strong> Physics, Chemistry,Math.</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    </>
}