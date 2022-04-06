import './App.css';
import animation1 from './images/animation1.png'
import animation2 from './images/animation2.png'
import animation3 from './images/animation3.png'
import logo from './images/logo.png'
import partners from './images/partners.png'
import fedex from './images/fedex.png'
import shopify from './images/shopify.png'
import { Widget, PopupButton, Sidetab } from '@typeform/embed-react'

function App() {

  return (
    <div>    
    <div className='navbar border-black border-2 bg-white'>
        <div className='grid grid-cols-2'>
          <div className='logo p-5'>
            <img src={logo} alt="logo"/> 
          </div>
          <div className="flex flex-wrap justify-end items-center p-5">
          <button className='bg-amber-300 button p-3 rounded extra border-black border-2 text-2xl'>
            <a href="#how">
              Book a Demo!
            </a>
          </button>
        </div>
    </div>
    </div>

    <div className='body'>
      <div className="grid grid-cols-2 content-center">
          <div className="col-span-1 text-end bg-green-700 border-black border-b-2 flex flex-wrap items-center p-10 text-center">
            <div className='color-white text-white text-5xl pl-8 extra '>
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
          <div className="pl-8 pb-8 border-black border-b-2 bg-gradient-to-r from-green-700 via-green-600 to-white">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={animation1} alt="animation" className='animation1'/>
          </div>
          <div className="col-span-3 bg-black">
            
          </div>
          <div className="col-span-3 border-black border-b-2 ">
            <div className='text-3xl p-5 text-center  extra'>
                <div className='pt-8'>
                  The traditonal returns process 
                  <br></br>
                  is killing your profits and the planet:
                </div>
            </div>
            <br></br>
          </div>
      </div>
      <div className="grid grid-cols-6 border-black border-b-2">
          <div className='border-black border-r-2 text-center p-8 bg-green-100'>
            <div className='text-2xl'>
                <span className='extra'>$102B</span> USD spent annually on returns
            </div>
          </div>
          <div className='border-black border-r-2 text-center p-8 bg-green-200'>
            <div className='text-2xl'>
                <span className='extra'>66%</span> cost of the average return to a retailer
            </div>
          </div>
          <div className='border-black border-r-2 text-center p-8 bg-green-300'>
            <div className='text-2xl'>
                <span className='extra'>42%</span> of retailers pay the cost of return shipping
            </div>
          </div>
          <div className='border-black border-r-2 text-center p-8 bg-green-400'>
            <div className='text-2xl'>
                <span className='extra'>5B</span> pounds of returns in landfills annually
            </div>
          </div>
          <div className='text-center p-8 bg-green-500'>
            <div className='text-2xl '>
                <span className='extra'>46%</span> of return packaging is wasted
            </div>
          </div>
          <div className='border-black border-l-2 text-center p-8 bg-green-600'>
            <div className='text-2xl'>
                <span className='extra '>15M</span> tonnes of CO2 emitted from return shipping trips
            </div>
          </div>
      </div>
      <div className="col-span-3 bg-white border-black border-b-2">
          <div className='text-3xl p-5 text-center '>
            <div className='title pt-8 extra'>
                Let's reinvent this!
            </div>
          </div>
          <br></br>
      </div>
      <div className='grid grid-cols-2'>
          <div className='text-center text-3xl extra'>
            <br></br>
            <span className='title extra'>Your current returns process:</span>
            <br></br>
            <br></br>
            <div className='text-2xl pl-8 pr-8'>
                customer ships item back to your store/warehouse, workers handle, process, and repackage the return, then ship it out to the next customer at a discount OR liquidate it. 
            </div>
          </div>
          <div className='text-center text-3xl bg-green-700 border-black border-l-2 extra text-white'>
            <br></br>
            <span className='title extra'>With Frate:</span>
            <br></br>
            <br></br>
            <div className='text-2xl pl-8 pr-8'>
                customer returns the item directly to the next customer.
            </div>
          </div>
      </div>
      <div className='grid grid-cols-2 border-black border-b-2'>
          <div className='text-2xl align-top'>
            <img src={animation2} alt="animation2"/>
            <div className='grid grid-cols-2'>
                <div className='animation2 text-center'>
                  <div className='extra'>You incur the cost of:</div>
                  <br></br>
                  1. Shipping
                  <br></br>
                  2. Handling
                  <br></br>
                  3. Liquidation
                </div>
                <div className='animation2 text-center'>
                  <div className='extra'>You cost the planet:</div>
                  <br></br>
                  1. An extra shipping trip
                  <br></br>
                  2. Wasted packaging
                  <br></br>
                  3. Potential landfill waste
                </div>
            </div>
          </div>
          <div className='text-center text-white text-4xl bg-green-700 border-l-2 border-black'>
            <div className='animation3'>
                <img src={animation3} alt="animation3"/>
            </div>
          </div>
      </div>
      <div className='grid grid-cols-1 '>
          <div className="col-span-3">
            <div className='text-3xl p-5 text-center'>
                <div id="how" className='extra pt-8' >
                  How it works ...
                </div>
            </div>
          </div>
      </div>

      <div className='grid grid-cols-2 text-center'>
        <div className='flex flex-wrap justify-end items-center pr-10'>
          <img src={fedex} className='brandLogo'></img>
        </div>
        <div className='flex flex-wrap justify-start items-center pl-10'>
          <img src={shopify} className='brandLogo'></img>
        </div>
      </div>

      <div className='grid grid-cols-2 '>
        <div className='flex flex-wrap justify-end items-center text-right'>
          <div className='text-2xl extra p-10'>
            We partnered with Fedex to allow your customer to show the shipping 
            clerk a QR code instead of printing out their label.
          </div>
        </div>
        <div className='flex flex-wrap justify-start items-center p-10'>
          <div className='text-2xl extra'>
            We partnered with Shopify and built an app for the admin portal so you can process returns with Frate easily. Not on Shopify? We'd still love to hear from you!
          </div>
        </div>
        <br></br>
        <br></br>
      </div>

        <div className=' bg-gray-500'>
        <Widget id="WsXHBNzf" height={400} className="my-form" />
        </div>
        

        </div> 
    </div>    
  );
}

export default App;
