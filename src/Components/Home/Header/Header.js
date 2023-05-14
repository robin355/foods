import React from 'react';
import image1 from '../../../Assets/Image/image 1.png'
const Header = () => {
    return (
        <div>
      <div className='lg:flex justify-center items-center gap-10 lg:p-10'>
     <div className='lg:w-1/2 w-full'>
<h1 className='not-italic font-bold text-5xl text-[#396C03] leading-[65px]'>Order food online from your favourite local restaurants.</h1>
<p className='text-lg font-normal leading-7 text-[#676767]'>Freshly made food delivered to your door.</p>
     </div>
     <div className='lg:w-1/2 w-full'>
<img src={image1} alt='#'></img>
     </div>
</div>
        </div>
    );
};

export default Header;