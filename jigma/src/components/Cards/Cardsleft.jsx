import React from 'react'
import freeimg from "../../assets/free-plan.svg"
import arrow from "../../assets/flecha.svg"
import arrowcontent from "../../assets/contentarrow.svg"
import arrowfirst from "../../assets/arrow.svg"
import contentarrow from "../../assets/arrowcontent.svg"
const Cardsleft = () => {
    return (
        <div>
            <div className='text-black flex flex-col '>
                <div className='m-10 inline-flex flex-col bg-white rounded-2xl shadow border- border-violet-200'>
                    <div className='m-5  self-start'>
                        <div className="inline-flex items-center  bg-green-100 rounded-3xl gap-3 overflow-hidden p-2 ">
                            <img src={freeimg}
                            />
                            <p className='font-Prompt text-green-600'>Free plan</p></div>
                    </div>

                    <p className='m-4 pl-4 text-zinc-700 font-Inter self-start text-left'>You don't need to be a tech wizard to <br />train your AI assistant.</p>
                    <div className='mt-1'>
                        <span className='text-violet-600 text-[48px]  md:text-[60px] font-bold'>1k</span><span className='text-neutral-400 text-2xl font-Prompt leading-normal'>/Incoming messages</span>
                    </div>

                        <h4 className='font-bold text-slate-950 text-2xl font-Inter self-start ml-14'>Per month</h4>
            

                    <div className='flex flex-col'>
                        <div className='flex items-end justify-end mr-5 p-2 '>
                            <img src={arrowfirst} className='mr-3' />
                            <img src={contentarrow} />
                        </div>

                        <div className='m-4 self-start'>
                            <button className='mt-6 h-12 px-5 py-5 bg-gradient-to-r from-violet-600 to-violet-600 rounded-md border border-violet-400 justify-center items-center gap-2.5 inline-flex'>
                                <p className='text-white text-lg font-semibold leading-normal'>
                                    Get started - free
                                </p>
                            </button>
                        </div>
                    </div>

                </div>
                <div className='m-10 inline-flex flex-col bg-white rounded-2xl shadow border-2 border-violet-200'>
                    <h1 className='m-4 text-gray-800 text-xl font-semibold font-Prompt '>Looking for Enterprise Capabilities?</h1>
                    <p className='m-4 text-zinc-700  font-Inter'>You don't need to be a tech wizard to <br />train your AI assistant.</p>
                    <div className='flex mr-10'>

                        <button className='m-6 h-10 w-40  bg-gradient-to-r from-blue-600 to-sky-400 rounded-md border border-violet-400 justify-center items-center gap-2.5 inline-flex'><p className='text-white text-lg font-Inter'>Get in touch</p></button>
                        <img src={arrow} class="hidden sm:inline md:inline lg:hidden xl:hidden" />
                        <img src={arrowcontent} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardsleft
