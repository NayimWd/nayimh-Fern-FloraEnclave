import React from 'react'


const FullScreenLoader = () => {
  return (
    <div className="h-[100vh] flex_center flex-col bg-soft_green ">
    <h1 className='wrapper text-3xl xsm:text-4xl text-green mb-10 font-reem md:text-5xl font-bold text-center'>
    <svg>
		<text x="50%" y="50%" dy=".55em" textAnchor="middle">
    Welcome to PlantStore
		</text>
	</svg>
     </h1>
    <div className="custom-loader">  </div>
    
    </div>
  )
}

export default FullScreenLoader