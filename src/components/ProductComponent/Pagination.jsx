import React from 'react'

const Pagination = () => {
  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-3 sm:gap-5 mt-16">
				<p className="px-2 sm:px-4 py-1 border-2  sm:text-lg border-bg_green cursor-pointer rounded-sm bg-bg_green text-white">
					Prev
				</p>
				<p className="px-2 sm:px-4 py-1 border-2 text-bg_green sm:text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
					1
				</p>
				<p className="px-2 sm:px-4 py-1 border-2 text-bg_green sm:text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
					2
				</p>
				<p className="px-2 sm:px-4 py-1 border-2 text-bg_green sm:text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
					3
				</p>
				<p className="px-2 sm:px-4 py-1 border-2 text-bg_green sm:text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
					4
				</p>

				<p className="px-2 sm:px-4 py-1 border-2  sm:text-lg border-bg_green cursor-pointer rounded-sm bg-bg_green text-white">
					Next
				</p>
			</div>
  )
}

export default Pagination