import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div className="text-center md:pt-25 lg:pt-25 font-mono bg-purple-100 pb-5 m-0">
                <div className="inline-block w-11/12 md:w-6/12 lg:w-6/12 shadow-xl p-5">
                    <h3 className="text-3xl pb-5 break-normal">Insights from the tech insiders building solutions for Africans.</h3>
                        <p className="break-normal tracking-tighter">
                The Decode Fintech Podcast is an audio show where the people building Africa’s 
                financial infrastructure share what they’re seeing on the frontlines
                — what’s working, what’s not, and what’s next.
                In each episode, an operator breaks down the ground truth of how they’re 
                handling everything from product development to marketing in some of the 
                world’s fastest-changing business environments.
                <br/>
                Subscribe now on:</p>
                <div className="pt-5">
                    <a href="#">
                    <span className="border p-2 mr-2"><i class="fab fa-spotify"> Spotify </i></span>   
                    </a>

                    <a href="#">
                        <span className="border p-2"><i class="fab fa-spotify"> Spotify </i></span>    
                    </a>
                    </div>
                </div>
                    
            </div>
        )
    }
}
