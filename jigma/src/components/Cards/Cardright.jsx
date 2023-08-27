import React, { useState } from 'react'
import payimage from "../../assets/enterprise-plan.svg"
import offer from "../../assets/30-days-offer.svg"
import check from "../../assets/check.svg"
const Cardright = () => {
  const [rangeValue, setRangeValue] = useState(10000); // Valor inicial

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };


  return (




    <div className="m-5 md:inline-flex md:flex-col bg-white rounded-2xl shadow border-2 border-violet-200 md:w-[350px]">


      <div className='m-5  self-start'>
        <div className="inline-flex  items-center  bg-sky-100 rounded-3xl gap-3 overflow-hidden p-2 ">
          <img src={payimage}
          />
          <p className='font-Prompt text-sky-600'>Monthly pricing</p></div>
      </div>
      <p className='m-4 pl-4 text-zinc-700 font-Inter self-start text-left'>You don't need to be a tech wizard to <br />train your AI assistant.</p>
      <div><span className='text-violet-600 text-[48px]  md:text-[56px] font-bold '>16k</span><span className='text-neutral-400 text-2xl font-Prompt leading-normal md:text-l'>/Estimated USD</span></div>
      <h4 className='font-bold text-slate-950 text-2xl font-Inter self-start ml-14'>Per month</h4>
      <div className="w-full max-w-md mx-auto p-8 ">
        <div class="flex">
          <div class="text-center p-2 sm:p-3 text-neutral-400 text-base font-normal leading-none">1k</div>
          <div class="text-center p-2 sm:p-3 text-neutral-400 text-base font-normal leading-none">10k</div>
          <div class="text-center p-2 sm:p-3 text-neutral-400 text-base font-normal leading-none">20k</div>
          <div class="text-center p-2 sm:p-3 text-neutral-400 text-base font-normal leading-none">40k</div>
          <div class="text-center p-2 sm:p-3 text-neutral-400 text-base font-normal leading-none">80k</div>
          <div class="text-center p-2 sm:p-3 text-neutral-400 text-base font-normal leading-none">100k</div>
        </div>
        <div className='mb-10'>

          <input
            type="range"
            className="w-full bg-gradient-to-r from-violet-600 to-violet-600 rounded text-white text-base py-2"
            min="1000"
            max="100000"
            step="1000"
            value={rangeValue}
            onChange={handleRangeChange}
          />
          <div className=" text-slate-950 text-base font-Inter font-bold">{rangeValue}k</div>
        </div>
        <div className=''>
          <div className="mb-3 flex ">
            <p className="text-zinc-700 text-l font-semibold font-Inter ">Additional messages</p>
            <p className="text-purple-500 font-bold ml-10">1000</p>
            <hr className="border-0 h-px bg-gradient-to-r from-purple-500 via-transparent to-transparent" />
          </div>
          <div className='mb-3 flex'>
            <p className="text-zinc-700 text-l font-semibold  font-Inter">Jigma messages rate</p>
            <p className="text-purple-500 font-bold ml-10">$0.005</p>
            <hr className="border-0 h-px bg-gradient-to-r from-purple-500 via-transparent to-transparent" />
          </div>
        </div>


        <div className="mt-10">
          <div className='flex m-3'>
            <img src={check} className="mr-4" />
            <p className='text-zinc-700 text-l font-Inter'>Personalised + priority support</p>
          </div>
          <div className='flex m-3'>
            <img src={check} className="mr-4" />
            <p className='text-zinc-700 text-l font-Inter'>Personalised + priority support</p>
          </div>
        </div>

        <div />
      </div>
    </div >
  )
}

export default Cardright
