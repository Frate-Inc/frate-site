import './App.css';
import animation1 from './images/animation1.png'
import animation2 from './images/animation2.png'
import animation3 from './images/animation3.png'
import logo from './images/logo.png'
import charlie from './images/charlie.png'
import mok from './images/mok.png'
import bailey from './images/bailey.png'
import fedex from './images/fedex.png'
import shopify from './images/shopify.png'
import choosing from './images/choosing.png'

function App() {

  return (
    <div>

    <div className='grid grid-cols-6 border-b-2 border-black'>
      <div className="flex justify-between  py-6">
        <div>
          <div className='logo pl-5'>
            <img src={logo} alt="logo"/>
          </div>
        </div>
      </div>
      <div className="..."></div>
      <div className="..."></div>
      <div className="..."></div>
      <div className="..."></div>

      <div className='grid grid-cols-2 p-5'>
        <div className="flex justify-between  py-6">
          <div>
            <div className='logo pl-5 pt-6 title text-2xl'>
              <a href="#team">Team</a>
            </div>
          </div>
        </div>

        <div className="flex justify-between py-6">
          <div>
            <div className='logo pl-5 pt-6 pr-5 title text-2xl'>
              <a href="#how">Demo</a>
            </div>
          </div>
        </div>

      </div>
      
    </div>
      

      <div className="grid grid-cols-2">

        <div className="col-span-1 border-b-2 border-r-2 border-black text-center bg-green-500">
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

        <div className="pl-8 pb-8 border-b-2 border-black">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={animation1} alt="animation" />
        </div>

        <div className="col-span-3 bg-black">
          <div className="text-white text-8xl p-5">
            <marquee behavior="alternate" direction="left" scrollamount="5">Save the Planet one Return at a time</marquee>
          </div>
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
            <span className='extra'>102B</span> USD spent annually on returns
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
          <div className='animation2 text-center'>
            You incur the cost of:
            <br></br>
            1. Shipping
            <br></br>
            2. Handling
            <br></br>
            3. Liquidation
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
              <br></br>
          </div>
        </div>

        <div className='grid grid-cols-3'>

          <div className="col-span-1">
            <div className='text-4xl p-5 text-center headshot fedex'>
              <img src={fedex} alt="fedex" />
              <div className='extra pt-8'>
                Paperless Labels 
              </div>
              <div className='text-2xl pt-4'>
                We partnered with Fedex to allow your customers to show the shipping clerk a QR code instead of printing out their label.50px
              </div>
            </div>
              <br></br>
          </div>


          <div className="col-span-1 pt-4">
            <div className='text-4xl p-5 text-center headshot shopify'>
              <img src={shopify} alt="shopify" />
              <div className='extra pt-8'>
                Shopify Admin App
              </div>
              <div className='text-2xl pt-4'>
                We partnered with Shopify and built an app for the admin portal so you can process returns with Frate easily.  
              </div>
            </div>
              <br></br>
          </div>

          <div className="col-span-1">
            <div className='text-4xl p-5 text-center headshot choosing'>
              <img src={choosing} alt="choosing" />
              <div className='extra pt-8'>
                Autonomy over product eligibility
              </div>
              <div className='text-2xl pt-4'>
                You can choose which product returns are allowwed to be drop shipped from customer to customer.
              </div>
            </div>
              <br></br>
          </div>

          <div className="col-span-3">
            <div className='text-4xl p-5 text-center'>
              <div className='extra'>
                  Email Bailey or Charlie to book a demo:
                  <br></br>
                  <div className='pt-4'>charlie@frate.co or bailey@frate.co</div>
                  
              </div>
            </div>
              <br></br>
          </div>

        </div>

      <div className='grid grid-cols-3 bg-black border-black border-b-2'>

        <div className="col-span-3">
          <div className='text-5xl p-5 text-center text-white'>
            <div id="team" className='extra pt-8'>
                Our Team
            </div>
          </div>
            <br></br>
        </div>

        <div className='text-center text-4xl bg-black-300'>
          <div className='headshot'>
            <img src={bailey} alt="bailey" />
          </div>
        </div>

        <div className='text-center text-4xl '>
          <div className='headshot'>
            <img src={charlie} alt="charlie"/>
          </div>
        </div>

        <div className='text-center text-4xl '>
          <div className='mok'>
            <img src={mok} alt="mok"/>
          </div>
        </div>

      </div>

      <div className='grid grid-cols-3 bg-black border-black border-b-2'>

        <div className='extra text-center text-white text-4xl bg-black-300'>
          Bailey
        </div>

        <div className='extra text-center text-white text-4xl bg-black-300 '>
          Charlie
        </div>

        <div className='extra text-center text-white text-4xl bg-black-300 '>
          Mok
        </div>

      </div>

      <div className='grid grid-cols-3 bg-black border-black border-b-2'>

        <div className='text-center text-white text-3xl bg-black-300'>
          Co-founder & CEO
          <br></br>
          Strategy M&A Analytics Consultant @ Deloitte
        </div>

        <div className='text-center text-white text-3xl bg-black-300 '>
          Co-founder & CTO
          <br></br>
          Data Scientist @ Meta
        </div>

        <div className='text-center text-white text-3xl bg-black-300 '>
          Executive Board Member
          <br></br>
          CEO & Co-founder @ Contoro
          <br></br>
          CTO & Co-founder @ Harmonic Bionics
        </div>

        <br></br>
        <br></br>

      </div>

    </div>
    
  );
}

export default App;
