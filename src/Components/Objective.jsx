import React from 'react';
import img1 from "../assets/image/objective_pic_1.jpg"
import img2 from "../assets/image/objective_pic_2.jpg";
import img3 from "../assets/image/objective_pic_3.png";

function Objective() {
    return (
        <>
            <div className='flex justify-center mx-8'>
                <div className='w-[100vw] min-h-[100vh] mx-auto pt-16 bg-black text-white rounded-md'>

                    <div className='text-5xl mx-16 block text-center mt-2'>Real-World examples of how we have helped companies achieve their marketing objectives.</div>
                  

                    <div className='relative w-full flex justify-center text-center space-x-14 my-8'>
                        <button type='button' className='relative text-[.75rem] px-12 py-2 border-2 border-white rounded-full hover:bg-green-600 hover:text-black hover:font-semibold '>All Work[20]</button>
                        <button type='button' className='relative text-[.75rem] px-12 py-2 border-2 border-white rounded-full hover:bg-green-600 hover:text-black hover:font-semibold'>UI/UX Design[10]</button>
                        <button type='button' className='relative text-[.75rem] px-12 py-2 border-2 border-white rounded-full hover:bg-green-600 hover:text-black hover:font-semibold'>Digital Marketing[5]</button>
                        <button type='button' className='relative text-[.75rem] px-12 py-2 border-2 border-white rounded-full hover:bg-green-600 hover:text-black hover:font-semibold'>Branding[5]</button>
                    </div>


                    <div className='flex flex-wrap justify-center items-center space-x-8 space-y-4 text-white mx-2 my-4'>
                      

                        <div className='relative w-[375px] h-[375px] border-slate-600 border-8 rounded-xl '>
                            <img src={img1} alt="objective_bg_1" className='w-full h-full opacity-50'/>
                            <h3 className='absolute top-2 left-4'>----- Coworker.2022</h3>
                            <p className='absolute bottom-2 left-4 text-xl'>Jobly- Job Finder Mobile App</p>
                        </div>
                        <div className='relative w-[375px] h-[375px] border-slate-600 border-8 rounded-xl '>
                            <img src={img2} alt="objective_bg_2" className='h-full w-full opacity-50'/>
                            <h3 className='absolute top-2 left-4'>---- AI-Corporation.2023</h3>
                            <p className='absolute bottom-2 left-4 text-xl'>AiWave- Ai Chatbot Mobile App</p>
                        </div>
                        <div className='relative w-[375px] h-[375px] border-slate-600 border-8 rounded-xl '> 
                            <img src={img3} alt="objective_bg_3" className='h-full w-full opacity-50'/>
                            <h3 className='absolute top-2 left-4'>---- LancerCorporation.2023</h3>
                            <p className='absolute bottom-2 left-4 text-xl'>AppLancer- Freelancer Mobile App</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>

    )
}

export default Objective;