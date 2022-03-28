import './App.css';
import animation1 from './images/animation1.png'
import animation2 from './images/animation2.png'
import animation3 from './images/animation3.png'
import logo from './images/logo.png'
import partners from './images/partners.png'

function App() {

  return (
    <div>
      <div className='grid grid-cols-6 border-black border-b-2 navbar bg-white'>
          <div className="flex justify-between py-6">
            <div>
                <div className='logo p-5'>
                  <img src={logo} alt="logo"/> 
                </div>
            </div>
          </div>
          <div className="..."></div>
          <div className="..."></div>
          <div className="..."></div>
          <div className="..."></div>
          <div className='grid p-5'>
            <div className="flex justify-between py-6">
                <div>
                  <div className='text-2xl pt-7'>
                      <button className='bg-amber-300 button p-3 rounded extra border-black border-2 ital'>
                        <a href="#how">
                          Book a Demo!
                        </a>
                      </button>
                      
                  </div>
                </div>
            </div>
          </div>
      </div>

    <div className='body'>

    
      <div className="grid grid-cols-2">
          <div className="col-span-1 text-center bg-green-500 border-black border-r-2 border-b-2">
            <div className='color-white text-8xl p-8'>
                <br></br>
                Reinvent returns to save the planet 
                <br></br>
                & your profits
            </div>
            <br></br>
            <div className='font-bold text-4xl pl-8 pb-8'>
                We enable retailers to drop ship their 
                returns from customer to customer
                <br></br>
                <br></br>
                <a href="#how" className='underline'>See how it works &rarr;</a>
                <br></br>
                <br></br>
            </div>
          </div>
          <div className="pl-8 pb-8 border-black border-b-2">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={animation1} alt="animation" />
          </div>
          <div className="col-span-3 bg-black">
            
          </div>
          <div className="col-span-3 bg-white border-black border-b-2">
            <div className='text-5xl p-5 text-center'>
                <div className='pt-8'>
                  The traditonal returns process 
                  <br></br>
                  is killing your returns and the planet:
                </div>
            </div>
            <br></br>
          </div>
      </div>
      <div className="grid grid-cols-6 border-black border-b-2">
          <div className='border-black border-r-2 text-center p-8 bg-white'>
            <div className='text-3xl'>
                <span className='extra'>$102B</span> USD spent annually on returns
            </div>
          </div>
          <div className='border-black border-r-2 text-center p-8 bg-green-100'>
            <div className='text-3xl'>
                <span className='extra'>66%</span> cost of the average return to a retailer
            </div>
          </div>
          <div className='border-black border-r-2 text-center p-8 bg-green-200'>
            <div className='text-3xl'>
                <span className='extra'>42%</span> of retailers pay the cost of return shipping
            </div>
          </div>
          <div className='border-black border-r-2 text-center p-8 bg-green-300'>
            <div className='text-3xl'>
                <span className='extra'>5B</span> pounds of returns in landfills annually
            </div>
          </div>
          <div className='text-center p-8 bg-green-400'>
            <div className='text-3xl'>
                <span className='extra'>46%</span> of return packaging is wasted
            </div>
          </div>
          <div className='border-black border-l-2 text-center p-8 bg-green-500'>
            <div className='text-3xl'>
                <span className='extra'>15M</span> tonnes of CO2 emitted from return shipping trips
            </div>
          </div>
      </div>
      <div className="col-span-3 bg-white border-black border-b-2">
          <div className='text-5xl p-5 text-center'>
            <div className='title pt-8'>
                Let's reinvent this!
            </div>
          </div>
          <br></br>
      </div>
      <div className='grid grid-cols-2'>
          <div className='text-center text-5xl'>
            <br></br>
            <span className='title'>Your current returns process:</span>
            <br></br>
            <br></br>
            <div className='text-2xl pl-8 pr-8'>
                customer ships item back to your store/warehouse, workers handle, process, and repackage the return, then ship it out to the next customer at a discount OR liquidate it. 
            </div>
          </div>
          <div className='text-center text-5xl bg-green-500 border-black border-l-2'>
            <br></br>
            <span className='title'>With Frate:</span>
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
          <div className='text-center text-4xl bg-green-500 border-l-2 border-black'>
            <div className='animation3'>
                <img src={animation3} alt="animation3"/>
            </div>
          </div>
      </div>
      <div className='grid grid-cols-1'>
          <div className="col-span-3">
            <div className='text-5xl p-5 text-center'>
                <div id="how" className='extra pt-8' >
                  How it works ...
                </div>
            </div>
          </div>
      </div>

      <div className='grid grid-cols-1'>
          <div className="col-span-3">
            <div className='partners'>
              <img src={partners} alt="partners"/> 
            </div>
          </div>
      </div>

      <div className='grid grid-cols-4'>
            <div></div>
            <div className="col-span-2">
              <br></br>
                <div className='text-4xl p-5 text-center'>
                  <div className='extra rounded bg-amber-300 p-4 border-black border-2 drop-shadow-2xl'>
                      Email Charlie to book a demo:
                      <br></br>
                      <div className='pt-4'>charlie@frate.co</div>
                  </div>
                </div>
                <br></br>
            </div>
          </div>
          </div>
    </div>    
  );
}

export default App;
