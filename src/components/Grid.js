import React, { Component } from 'react'
import grid from '../images/grid.png'
import Modal from './Modal'

export default function Grid() {

        return (
            <div className="text-center font-san-serif">
              <iframe src="https://anchor.fm/a-peek-inside-podcast/embed" className="inline-block" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
                <div>
                    <p className="text-2xl font-bold text-center">LATEST EPISODES</p>
                </div>
            <div className="max-w-xs inline-block md:grid md:grid-cols-3 md:max-w-2xl lg:grid lg:grid-cols-3 lg:max-w-5xl gap-3 mt-10 text-center ml-auto mr-auto ">

            <>
      <div className="pb-20 border-t-2 border-pink-100 rounded shadow-lg inline-block transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
      >
                    <div className="">
                      <a href="https://anchor.fm/a-peek-inside-podcast">
                    <img className="" alt="Guest image" src={grid}></img>
                    <div>
                      <hr/>
                    <p className="text-sm font-bold pb-2 pt-2 font-serif"> 
                    S1E1 - Navigating and Scaling the payment industy amidst
                    COVID-19 pandemic</p>
                      < hr/>
                    <p className="text-sm font-san-serif">
                        Seun Runsewe - Director of Products, Opay
                    </p>
                      </div>
                  </a>
                  </div>
                  
                   </div>
    </>

        {/*Second grid*/}
    <>
      <div className="pb-20 border-t-2 border-pink-100 shadow-lg rounded inline-block transition duration-500 ease-in-out transform hover:-translate-x-1 hover:scale-100 mt-10 md:mt-0 lg:mt-0">
                   
                   <a href="https://anchor.fm/a-peek-inside-podcast">
                    <img className="" alt="Guest image" src={grid}></img>
                    <div>
                      <hr/>
                    <p className="text-sm font-bold pb-2 pt-2 font-serif"> 
                    S1E1 - Navigating and Scaling the payment industy amidst
                    COVID-19 pandemic</p>
                      <hr/>
                    <p className="text-sm font-san-serif">
                        Seun Runsewe - Director of Products, Opay
                    </p>
                      </div>
                      </a> 
                   </div>
      
    </>

        {/*Third Grid*/}
    <>
      <div className="pb-20 border-t-2 border-pink-100 shadow-lg rounded inline-block transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 mt-10 md:mt-0 lg:mt-0">
                    
                    <a href="https://anchor.fm/a-peek-inside-podcast">
                    <img className="" alt="Guest image" src={grid}></img>
                    <div>
                      <hr/>
                    <p className="text-sm font-bold pb-2 pt-2 font-serif"> 
                    S1E1 - Navigating and Scaling the payment industy amidst
                    COVID-19 pandemic</p>
                      <hr/>
                    <p className="text-sm font-san-serif">
                        Seun Runsewe - Director of Products, Opay
                    </p>
                      </div>
                     </a>
                     </div>
    
    </>
             </div>
            </div>
            
        )
    }

