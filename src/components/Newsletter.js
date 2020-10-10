import React, { Component } from 'react'
import Logo from '../images/logo.png'

export default class Newsletter extends Component {
    render() {
        return (
            
            <div className="text-center" id="Newsletter">
            <div className="inline-block w-10/12 md:w-8/12 lg:w-6/12">
            <p>Subscribe to our Newsletter</p>
                <div className="grid grid-cols-3 font-mono bg-pink-100">
                    <div className="col-span-1">
                        <img src={Logo} className="" />
                    </div>
                        <div className="col-span-2 text-center">
                        <form className="md:mr-64 lg:mr-64 xl:mr-64">
                         <input className="mt-6 px-0 py-2 sm-px-0 md:px-12 md:py-2 lg:px-15 lg:py-2 xl:py-2 rounded-lg" id="email" type="email" name="email" placeholder="Email address" required="required"></input>  
                         <button className="mt-5 px-2 md:px-5 lg:px-5 py-1 md:py-2 lg:py-1 bg-purple-100 text-white">Subscribe</button>
                        </form>
                        </div>
                        </div>
                        
            </div>
            
            </div>

            
        )
    }
}
