import './App.css';

import PerfectDD from './images/PerfectDD.png'
import prana from './images/prana.png'
import cedar from './images/cedar.png'
import gfs from './images/gfs.png'

import shopify from './images/shopify.png'
import { Widget } from '@typeform/embed-react'

function App() {

  return (
    <div>

      <div className=''>
          <div className='grid grid-cols-2'>
            <div className='logo p-10 text-5xl extra'>
                Frate
            </div>
            <div className="flex flex-wrap justify-end items-center p-5">
                <a href="#demo" className='bg-green-900 hover:bg-green-800 button p-3 rounded extra text-xl text-white'>
                  Book a Demo!
                </a>
            </div>
          </div>
      </div>

      
      <div className="body grid md:grid-cols-2 content-center">
        <div className="col-span-1 items-center p-10">
            <div className='color-white text-5xl extra text-white bg-green-900 p-10 rounded-3xl'>
              Reinvent returns to save the planet 
              <br></br>
              & your profits
              <div>
                  <br></br>
                  <div className='font-bold text-2xl pb-8 extra'>
                    We enable retailers to drop ship their 
                    returns from customer to customer
                    <br></br>
                    <br></br>
                    <a href="#how" className='underline'>See how it works &rarr;</a>
                    <br></br>
                  </div>   
              </div>
            </div>   
        </div>
        <div>
        </div>  
        
      </div>

      <div className='p-10 bg-green-900'>
      <div className='text-3xl p-5 text-center text-white extra'>
              <div className='p-8'>
                  The traditonal returns process 
                  <br></br>
                  is killing your profits and the planet:
              </div>
            </div>
      <div className="grid grid-cols-1 md:grid-cols-6 border-black border-4 ">
        
        <div className='text-center p-8 bg-gradient-to-r from-white to-orange-100'>
            <div className='text-2xl'>
              <span className='extra'>$102B</span> USD spent annually on returns
            </div>
        </div>
        <div className='text-center p-8 bg-gradient-to-r from-orange-100 to-orange-200'>
            <div className='text-2xl'>
              <span className='extra'>66%</span> cost of the average return to a retailer
            </div>
        </div>
        <div className='text-center p-8 bg-gradient-to-r from-orange-200 to-orange-300'>
            <div className='text-2xl'>
              <span className='extra'>42%</span> of retailers pay the cost of return shipping
            </div>
        </div>
        <div className='text-center p-8 bg-gradient-to-r from-orange-300 to-orange-400'>
            <div className='text-2xl'>
              <span className='extra'>5B</span> pounds of returns in landfills annually
            </div>
        </div>
        <div className='text-center p-8 bg-gradient-to-r from-orange-400 to-orange-500'>
            <div className='text-2xl '>
              <span className='extra'>46%</span> of return packaging is wasted
            </div>
        </div>
        <div className='text-center p-8 bg-gradient-to-r from-orange-500 to-orange-600'>
            <div className='text-2xl'>
              <span className='extra '>15M</span> tonnes of CO2 emitted from return shipping trips
            </div>
        </div>
      </div>
      </div>

      <div id="how"></div>

      <div className='p-10 bg-gradient-to-b from-green-900 to-white' >
      <div className='border-black border-4 bg-sky-100'>
      <div className='grid grid-cols-1'>
        <div className="col-span-3">
            <div className='text-3xl p-5 text-center'>
              <div className='extra p-8' >
                  How it works ...
              </div>
            </div>
        </div>
      </div>
      <div className='grid grid-cols-1 text-center p-10 md:p-1'>
        <div className='flex flex-wrap justify-center items-center pl-10'>
            <img src={shopify} className='brandLogo invisible md:visible'></img>
        </div>
      </div>
      <div className='grid grid-cols-1'>
        <div className='flex flex-wrap justify-center items-center p-10'>
            <div className='text-2xl extra '>
              We partnered with Shopify and built a solution that expedites the returns process for you and your customers.
            </div>
        </div>
        <br></br>
        <br></br>
      </div>
      </div>
      </div>

      <div className='p-10 bg-white'>
        <div className='flex flex-wrap justify-center items-center p-10 bg-white'>
            <div className='text-3xl extra'>
              Check out some of our retail partners:
            </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 flex items-center bg-white'>

          <a href={"https://www.pranavidastyle.com/"} target="_blank" className="brand mx-auto p-5">
            <img src={prana} className=''></img>
          </a>
          <a href={"https://cedarandvine.net/"} className="brand mx-auto p-5">
            <img src={cedar} className=''></img>
          </a>
          <a href={"https://perfectdd.com/ "} className="brand mx-auto p-5">
            <img src={PerfectDD} className=''></img>
          </a>
          <a href={"https://www.goodforsunday.com/"} className="brand mx-auto p-5">
            <img src={gfs} className=''></img>
          </a>
        </div>
        <div></div>
      <div className='bg-white' id="demo">
        <Widget id="WsXHBNzf" height={500} className="my-form" />
      </div>
    </div>
  );
}

export default App;
