import React from 'react'


const FullScreenLoader = () => {
  return (
    <div className="h-[100vh] w-full flex_center flex-col bg-soft_green ">
    <h1 className='wrapper text-[26px] xsm:text-4xl mb-6 font-reem md:text-5xl font-bold text-center'>
    <svg>
		<text x="50%" y="50%" dy=".55em" textAnchor="middle">
    Welcome to Fern & Flora
		</text>
	</svg>
     </h1>
    <div className="spinner">  </div>
    
    </div>
  )
}

export default FullScreenLoader