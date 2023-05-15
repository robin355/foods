import React from 'react';
import image1 from '../../../Assets/Image/image 1.png'
import image2 from '../../../Assets/Image/—Pngtree—hand-painted noise green leaf element_4054582 1 (1).png'
import image3 from '../../../Assets/Image/—Pngtree—hand-painted noise green leaf element_4054582 1.png'
import image4 from '../../../Assets/Image/new-vector.png'
import search from '../../../Assets/Image/SearchOutline.png'
const Header = () => {
    return (
        <div>
      <div className='lg:flex justify-center items-center gap-10 p-10 bg-[#6B9142]'>
     <div className='lg:w-1/2 w-full'>
 <img className='absolute lg:top-[30px] top-0 lg:left-[2.71px] left-0 w-[288px] h-[288px]' src={image2}></img>
<h1 className='not-italic font-bold text-5xl text-[#396C03] leading-[65px] '>Order food online from your favourite local restaurants.</h1>
<p className='text-lg font-normal leading-7 text-[#676767]'>Freshly made food delivered to your door.</p>
<div className='border rounded-full flex justify-between'>
<div className='flex justify-center items-center'>
<div>
<h1 className='w-[49px] h-[49px] bg-[#FF8B00] rounded-full m-1'></h1>
</div>
<div>
<h1 className='text-[#C7C7C7] text-xl not-italic font-medium'>Enter your location</h1>
</div>

</div>
<div>

 <button className='btn w-[154px] h-[58px] bg-[#396C03] rounded-full'> <img className='ml-2' src={search} alt='#'></img> Search 
     
     </button>
</div>
</div>
     </div>
     <div className='lg:w-1/2 w-full'>
     <div className=' w-[200px] p-2 absolute lg:top-[100px] lg:left-[880px]  z-10' style={{ backgroundImage: `url("https://i.postimg.cc/BvMTcKj4/Rectangle-5.png")` }}>
          <h1 className='text-[#FF8B00] flex  gap-3 font-bold text-3xl'>
               <img src={image4}></img>
               200k+</h1>
          <p className='text-[#838383] font-semibold text-2xl'>People Delivered</p>
     </div>
<img className='absolute lg:top-[120px]  lg:left-[1050px] w-[288px] h-[288px]' src={image3}></img>
<img className='w-[533.15px] h-[528px] relative z-0' src={image1} alt='#'></img>
     </div>
</div>
        </div>
    );
};

export default Header;