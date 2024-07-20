import React from 'react'
import servicePic1 from "../assets/image/service_pic_01.png"
import servicePic2 from "../assets/image/service_pic_02.png"


const Services = () => {
  return (
    <>
    <div className='w-full'>
        <div className='flex mx-24 my-8 px-4 py-4 space-x-10 justify-around items-center basis-full'>
            <h1 className='font-semibold text-4xl basis-3/6'>Provide the best service with out of the box ideas</h1>
            <p className='basis-3/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus aperiam nulla, dolor officiis minus beatae autem eaque consequuntur nisi perspiciatis temporibus, commodi repudiandae facilis iure cumque in veritatis consequatur quidem error possimus esse inventore? Magnam dicta voluptate placeat unde deserunt quasi facere iusto eligendi quod vitae id, consectetur recusandae!</p>
        </div>
        <div className='flex mx-8 space-x-32 justify-center'>
            <img src={servicePic1} alt="service_pic_01" />
            <img src={servicePic2} alt="service_pic_02" />
        </div>
    </div>
    </>
  )
}

export default Services