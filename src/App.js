import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Grid from './components/Grid'
import Modal from './components/Modal'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
function App() {
  return (
      
    <div className="bg-purple-100 bg-pattern text-white">
      <Navbar/>
      <Hero/>
        <div className="bg-white text-gray-800">
          <div className="pt-10">
      <Grid/>
          </div>
          <div className="pt-20">
      <Newsletter/>
          </div>
        </div>
        <Footer />
    </div>
  );
}
export default App;