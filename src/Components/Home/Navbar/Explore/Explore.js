import React from 'react';
import cycle from '../../../../Assets/Image/Group 2.png'
import vector from '../../../../Assets/Image/Vector.png'
const Explore = () => {
    return (
        
        <div className='lg:flex justify-center items-center gap-10 bg-base-100 lg: p-10'>
     <div className='lg:w-1/2 w-full'>
<h1 className='not-italic font-bold text-5xl text-[#396C03] leading-[65px]'>Explore your <br/> favourite city’s food.</h1>
<p className='text-lg font-normal leading-7 text-[#676767]'>Lorem ipsum dolor sit amet consectetur. Ornare massa  nunc nibh tristique. Non ligula tristique ut ut libero sit convallis  maecenas. At egestas auctor porta mattis.</p>
     <button className='btn w-[154px] h-[58px] bg-[#396C03] mt-2 rounded-full '>Explore 
     <img className='ml-2' src={vector} alt='#'></img>
     </button>
     
     </div>
     <div className='lg:w-1/2 w-full'>
<img src={cycle} alt='#'></img>
     </div>
</div>
        
    );
};

export default Explore;