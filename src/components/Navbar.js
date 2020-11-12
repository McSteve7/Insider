import React from "react";
import Logo from '../images/logo.png'
import Newsletter from './Newsletter.js'
import Google from '../images/google.svg'
import { Icon, InlineIcon } from '@iconify/react';
import googlePodcast from '@iconify/icons-mdi/google-podcast';
import applePodcasts from '@iconify/icons-cib/apple-podcasts';



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
                  <i className="fas fa-envelope text-lg leading-lg text-white opacity-75"></i><span className=" ml-2">Subscribe to our Newsletter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center  md:pt-25 lg:pt-25 font-san-serif pb-5">
                <div className="inline-block w-11/12 md:w-10/12 lg:w-8/12 shadow-xl p-5 pb-10">
                    <h3 className="text-xl md:text-xl lg:text-xl font-bold pb-5 break-normal">Insights from the insiders building tech solutions for Africans and the entire World</h3>
                        <p className="font-normal text-center md:text-justify lg:text-justify tracking-tighter text-sm md:text-base lg:text-base">
                A Peek Inside Podcast showcase insiders in the African tech ecosystem building compelling products to solve users' pain points.
                We chat with individuals across various departments like Product, Marketing, Design, Engineering, Customer Success, Finance, and lot more.
                They will tell us how they got into the role and what their day-to-day is like for them at their company.
                Interested in knowing how tech companies come up with their strategies, plans, and initiatives? Then this is the podcast for you.
                <br/> <br/>
                
                <p className="font-medium">Listen now on:</p>
                
                </p>

                <div className="text-center text-xs font-medium md:text-xs lg:text-sm pt-5 grid gap-3 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 md:space-x-1 lg:space-x-1">

                
                    
                <div className="rounded border flex bg-white text-purple-100">
                        <a href="https://anchor.fm/a-peek-inside-podcast" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-100 h-8 w-8 fill-current ml-5 md:ml-10 lg:ml-10 mt-2">
                        <path d="M12.335 12.606c-.171.682-.586 1.261-1.139 1.564l-.428.234.78 1.32.41-.226a3.743 3.743 0 001.435-1.44 4.404 4.404 0 00.565-2.1v-.016a4.403 4.403 0 00-.565-2.1 3.744 3.744 0 00-1.434-1.44l-.41-.225-.78 1.32.427.234c.571.312.995.92 1.155 1.632H7.244a1.4 1.4 0 00-1.24-.743c-.77 0-1.396.617-1.396 1.377 0 .759.626 1.377 1.396 1.377a1.4 1.4 0 001.252-.768zM12 24C6.392 24 1.846 18.627 1.846 12S6.392 0 12 0s10.154 5.373 10.154 12S17.608 24 12 24zm5.591-11.164c-.29 2.825-1.867 5.206-4.06 6.377l.829 1.368c2.846-1.526 4.83-4.767 4.896-8.538-.066-3.771-2.05-7.012-4.896-8.539l-.83 1.37c2.194 1.17 3.771 3.55 4.061 6.375l.023.794zm-4.652 5.336l.194-.107c.995-.547 1.841-1.398 2.446-2.46a7.645 7.645 0 00.98-3.648v-.008a7.645 7.645 0 00-.98-3.647c-.605-1.063-1.451-1.914-2.446-2.46l-.194-.108-.79 1.336.203.11a4.892 4.892 0 011.772 1.702 5.91 5.91 0 01.856 2.535l.015.536-.015.535a5.905 5.905 0 01-.856 2.536 4.89 4.89 0 01-1.772 1.701l-.203.111z"/>
                        <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z"/>
                      </svg>
                            <p className="text-xs md:text-xs lg:text-base">Anchor</p>
                        </a>    
                    </div>
    
                    <div className="rounded border flex bg-white text-purple-100">
                        <a href="#" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-100 h-8 w-8 fill-current ml-4">
                            <path d="M7.12 0A7.1 7.1 0 0 0 0 7.12v17.76A7.1 7.1 0 0 0 7.12 32h17.76A7.1 7.1 0 0 0 32 24.88V7.12A7.1 7.1 0 0 0 24.88 0zm8.697 3.421c3.115 0 5.932 1.204 8.079 3.453 1.631 1.693 2.547 3.489 3.016 5.855.161.787.161 2.932.009 3.817a11.344 11.344 0 0 1-4.317 7.063c-.812.615-2.797 1.683-3.115 1.683-.12 0-.129-.12-.077-.615.099-.792.192-.953.64-1.141.713-.296 1.932-1.167 2.677-1.911a10.188 10.188 0 0 0 2.677-4.719c.281-1.1.244-3.543-.063-4.672-.969-3.595-3.907-6.385-7.5-7.136-1.041-.213-2.943-.213-4 0-3.636.751-6.647 3.683-7.563 7.371-.245 1.004-.245 3.448 0 4.448.609 2.443 2.188 4.681 4.255 6.015.407.271.896.547 1.1.631.447.192.547.355.629 1.14.052.485.041.62-.072.62-.073 0-.62-.235-1.199-.511l-.052-.041c-3.297-1.62-5.407-4.364-6.177-8.016-.187-.943-.224-3.187-.036-4.052.479-2.323 1.396-4.135 2.921-5.739 2.199-2.319 5.027-3.543 8.172-3.543zM16 7.172a7.628 7.628 0 0 1 1.473.14c3.715.828 6.344 4.543 5.833 8.229-.203 1.489-.713 2.709-1.619 3.844-.448.573-1.537 1.532-1.729 1.532-.032 0-.063-.365-.063-.803v-.808l.552-.661c2.093-2.505 1.943-6.005-.339-8.296-.885-.896-1.912-1.423-3.235-1.661-.853-.161-1.031-.161-1.927-.011-1.364.219-2.417.744-3.355 1.672-2.291 2.271-2.443 5.791-.348 8.296l.552.661v.813c0 .448-.037.807-.084.807-.036 0-.349-.213-.683-.479l-.047-.016c-1.109-.885-2.088-2.453-2.495-3.995-.244-.932-.244-2.697.011-3.625.672-2.505 2.521-4.448 5.079-5.359.547-.193 1.509-.297 2.416-.281zm-.177 3.984c.417 0 .828.084 1.131.24.645.339 1.183.989 1.385 1.677.62 2.104-1.609 3.948-3.631 3.005h-.015c-.953-.443-1.464-1.276-1.475-2.36 0-.979.541-1.828 1.484-2.328.297-.156.709-.235 1.125-.235zm-.011 6.308c1.319-.005 2.271.463 2.625 1.291.265.62.167 2.573-.292 5.735-.307 2.208-.479 2.765-.905 3.141-.589.52-1.417.667-2.209.385h-.004c-.953-.344-1.157-.808-1.553-3.527-.452-3.161-.552-5.115-.285-5.735.348-.823 1.296-1.285 2.624-1.291z"/>
                            <path fill="rgba(0, 0, 0, 0)" d="M0 0h32v32H0z"/>
                            </svg>
                            <p className="ml-2 text-xs md:text-xs lg:text-base">Apple Podcast</p>
                        </a>    
                    </div>

                    <div className="rounded border flex bg-white text-purple-100">
                        <a href="#" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-100 h-8 w-8 fill-current ml-4 mt-3" >
                          <path d="M17.68 7.22v1.4c0 .68-.55 1.24-1.25 1.24-.69 0-1.25-.56-1.25-1.24v-1.4a1.25 1.25 0 0 1 1.25-1.25c.7 0 1.25.56 1.25 1.25m-4.43 1.14v7.27a1.25 1.25 0 0 1-2.5 0V8.36c0-.68.56-1.25 1.25-1.25s1.25.57 1.25 1.25M22 11.3v1.4c0 .68-.56 1.24-1.25 1.24s-1.25-.56-1.25-1.24v-1.4c0-.69.56-1.24 1.25-1.24S22 10.61 22 11.3m-17.5 0v1.4c0 .68-.56 1.24-1.25 1.24-.7 0-1.25-.56-1.25-1.24v-1.4c0-.69.55-1.24 1.25-1.24.69 0 1.25.55 1.25 1.24m4.32 4.08v1.39c0 .68-.56 1.23-1.25 1.23s-1.25-.55-1.25-1.23v-1.39c0-.7.56-1.25 1.25-1.25a1.25 1.25 0 0 1 1.25 1.25m4.43 3.98v1.39A1.25 1.25 0 0 1 12 22a1.25 1.25 0 0 1-1.25-1.25v-1.39A1.25 1.25 0 0 1 12 18.11a1.25 1.25 0 0 1 1.25 1.25m0-16.11v1.39A1.25 1.25 0 0 1 12 5.89a1.25 1.25 0 0 1-1.25-1.25V3.25c0-.7.56-1.25 1.25-1.25a1.25 1.25 0 0 1 1.25 1.25m4.43 9.09v4.43c0 .69-.55 1.23-1.25 1.23-.69 0-1.25-.54-1.25-1.23v-4.43c0-.7.56-1.25 1.25-1.25.7 0 1.25.55 1.25 1.25M8.82 7.22v4.43c0 .7-.56 1.25-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25V7.22a1.25 1.25 0 0 1 1.25-1.25 1.25 1.25 0 0 1 1.25 1.25z"/>
                        <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z"/>
                        </svg>
                            <p className="text-xs md:text-xs lg:text-base">Google Podcast</p>
                        </a>    
                    </div>

                   

                    
                    </div>
                </div>
                    
            </div>
      </nav>
    </>
  );
}