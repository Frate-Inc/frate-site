import './App.css';
import animation1 from './images/animation1.png'
import animation2 from './images/animation2.png'
import animation3 from './images/animation3.png'

import Zale from './images/Zale.png'
import PerfectDD from './images/PerfectDD.png'
import Jimwear from './images/Jimwear.png'
import Sunga_Life from './images/Sunga Life.png'

import logo from './images/logo.png'
import shopify from './images/shopify.png'
import { Widget } from '@typeform/embed-react'

function App() {

  return (
    <div>

      <div className='navbar bg-white'>
          <div className='grid grid-cols-2'>
            <div className='logo p-5'>
                <img src={logo} alt="logo"/> 
            </div>
            <div className="flex flex-wrap justify-end items-center p-5">
                <a href="#demo" className='bg-green-700 hover:bg-green-600 button p-3 rounded extra text-xl text-white'>
                  Book a Demo!
                </a>
            </div>
          </div>
      </div>

      <div className="body grid  md:grid-cols-2 content-center ">
        <div className="col-span-1 items-center p-10 ">
            <div className='color-white text-5xl pl-8 extra '>
              <br></br>
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
                    <br></br>
                  </div>   
              </div>
            </div>   
        </div>
        <div>
          <img src={animation1} alt="animation1" className='animation1 invisible md:visible'/>
        </div>  
        
      <div className="col-span-3 bg-green-700">
            <div className='text-3xl p-5 text-center text-white extra'>
              <div className='pt-8'>
                  The traditonal returns process 
                  <br></br>
                  is killing your profits and the planet:
              </div>
            </div>
            <br></br>
        </div>
      </div>

      <div className='p-10 bg-green-700'>
      <div className="grid grid-cols-1 md:grid-cols-6 border-black border-4 card">
        <div className='text-center p-8 bg-gradient-to-r from-white via-white to-green-100'>
            <div className='text-2xl'>
              <span className='extra'>$102B</span> USD spent annually on returns
            </div>
        </div>
        <div className='text-center p-8 bg-gradient-to-r from-green-100 via-green-100 to-green-200'>
            <div className='text-2xl'>
              <span className='extra'>66%</span> cost of the average return to a retailer
            </div>
        </div>
        <div className='text-center p-8 bg-gradient-to-r from-green-200 via-green-200 to-green-300'>
            <div className='text-2xl'>
              <span className='extra'>42%</span> of retailers pay the cost of return shipping
            </div>
        </div>
        <div className='text-center p-8 bg-gradient-to-r from-green-300 via-green-300 to-green-400'>
            <div className='text-2xl'>
              <span className='extra'>5B</span> pounds of returns in landfills annually
            </div>
        </div>
        <div className='text-center p-8 bg-gradient-to-r from-green-400 via-green-400 to-green-500'>
            <div className='text-2xl '>
              <span className='extra'>46%</span> of return packaging is wasted
            </div>
        </div>
        <div className='text-center p-8 bg-gradient-to-r from-green-500 via-green-500 to-green-600'>
            <div className='text-2xl'>
              <span className='extra '>15M</span> tonnes of CO2 emitted from return shipping trips
            </div>
        </div>
      </div>
      </div>

      <div className="col-span-3 bg-green-700">
        <div className='text-3xl p-5 text-center text-white'>
            <div className='title pt-8 extra'>
              Let's reinvent this!
            </div>
        </div>
        <br></br>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 bg-green-700 border-green-700 border-8'>
        <div className='text-center text-3xl extra p-10 md:p-1 text-white'>
            <br></br>
            <span className='title extra'>Your current returns process:</span>
            <br></br>
            <br></br>
            <div className='text-2xl pl-8 pr-8'>
              customer ships item back to your store/warehouse, workers handle, process, and repackage the return, then ship it out to the next customer at a discount OR liquidate it. 
            </div>
            <div>
              <div className='text-2xl align-top'>
                  <img src={animation2} alt="animation2" className='invisible md:visible p-10'/>
                  <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='animation2 text-center'>
                        <div className='extra underline'>You incur the cost of:</div>
                        <br></br>
                        1. Shipping
                        <br></br>
                        2. Handling
                        <br></br>
                        3. Liquidation
                    </div>
                    <div className='animation2 text-center p-10 md:p-1'>
                        <div className='extra underline'>You cost the planet:</div>
                        <br></br>
                        1. An extra shipping trip
                        <br></br>
                        2. Wasted packaging
                        <br></br>
                        3. Potential landfill waste
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div className='px-10 bg-green-700'>
        <div className='text-center text-3xl bg-white extra border-black border-4 card '>
            <br></br>
            <span className='title extra'>With Frate:</span>
            <br></br>
            <br></br>
            <div className='text-2xl pl-8 pr-8'>
              customer returns the item directly to the next customer.
            </div>
            <div className='grid grid-cols-2'>
              <div className='text-center text-white text-4xl'>
                  <div className='animation3'>
                    <img src={animation3} alt="animation3" className='p-10 invisible md:visible'/>
                  </div>
              </div>
            </div>
            <br></br>
        </div>
        <br></br>
      </div>
      </div>

      <div id="how"></div>

      <div className='p-10 bg-gradient-to-b from-green-700 to-white ' >
      <div className='border-black border-4 card bg-white'>
      <div className='grid grid-cols-1'>
        <div className="col-span-3 ">
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
        <div className='flex flex-wrap text-center items-center p-10'>
            <div className='text-2xl extra'>
              We partnered with Shopify and built an app for the admin portal so you can process returns with Frate easily. 
              Not on Shopify? We'd still love to hear from you!
            </div>
        </div>
        <br></br>
        <br></br>
      </div>
      </div>
      </div>

      <div className='p-10'>
        <div className='flex flex-wrap text-center items-center p-10'>
            <div className='text-3xl extra'>
              Check out some of our retail partners:
            </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-6 flex items-center '>
        <div></div>
          <a href={"https://www.sungalife.com/en-ca"} className="brand mx-auto p-5">
            <img  src={Sunga_Life} className=''></img>
          </a>
          <a href={"https://zaleapparel.com/"} className="brand mx-auto p-5">
            <img src={Zale} className=''></img>
          </a>
          <a href={"https://perfectdd.com/ "} className="brand mx-auto p-5">
            <img src={PerfectDD} className=''></img>
          </a>
          <a href={"https://www.jimwearapparel.com/"} className="brand mx-auto p-5">
            <img src={Jimwear} className=''></img>
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
