import React from 'react'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import Modal from './components/Modal'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
function App() {
  return (
      
    <div className=" bg-pattern text-white">
      <Navbar/>
        <div className="bg-white text-gray-800">
          <div className="pt-10">
      <Grid/>
          </div>
          <div className="pt-20">
      <Newsletter/>
          </div>
        </div>
        <div className="pt-40 bg-white">
        <Footer />
        </div>
    </div>
  );
}
export default App;