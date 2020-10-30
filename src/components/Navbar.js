import React from "react";
import Logo from '../images/logo.png'
import Newsletter from './Newsletter.js'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 navbar-expand-lg bg-purple-100 h-auto pb-20 mb-1">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#"
            >
              <img src={Logo} alt="Logo" ></img>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#Newsletter"
                >
                  <i className="fas fa-envelope text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Subscribe to our Newsletter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center  md:pt-25 lg:pt-25 font-san-serif pb-5">
                <div className="inline-block w-11/12 md:w-10/12 lg:w-8/12 shadow-xl p-5 pb-10">
                    <h3 className="text-xl md:text-3xl lg:text-3xl font-bold pb-5 break-normal">Insights from the tech insiders building solutions for Africans.</h3>
                        <p className="break-normal tracking-tighter">
                The Decode Fintech Podcast is an audio show where the people building Africa’s 
                financial infrastructure share what they’re seeing on the frontlines
                — what’s working, what’s not, and what’s next.
                In each episode, an operator breaks down the ground truth of how they’re 
                handling everything from product development to marketing in some of the 
                world’s fastest-changing business environments.
                <br/> <br/>
                Subscribe now on:</p>

                <div className="pt-5 grid grid-cols-2 gap-3 md:inline-block lg:inline-block md:space-x-5 lg:space-x-5">

                    <a className="border px-2 py-2" href="#">
                    <span className=""><i class="fab fa-spotify"> Spotify </i></span>   
                    </a>

                    <a className="px-2 py-2 border" href="#">
                        <span className=""><i class="fab fa-spotify"> Google Podcast </i></span>    
                    </a>

                    <a className="py-2 px-2 border" href="#">
                        <span className=""><i class="fab fa-soundcloud"></i> SoundCloud</span>    
                    </a>

                    <a className="py-2 px-2 border" href="#">
                        <span className=""><i class="fab fa-spotify"> Apple Podcast </i></span>    
                    </a>
                    </div>
                </div>
                    
            </div>
      </nav>
    </>
  );
}