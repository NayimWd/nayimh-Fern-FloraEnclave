import { MdOutlineClose } from 'react-icons/md'

const Favoritenav = ({close}) => {


  return (
    <div className="flex flex-row justify-center h-[400px] w-[285px] p-8 bg-white_clr rounded-md shadow-sm shadow-subtle_gray z-10">
        <div className='flex_between w-full'>
         <p> Favorite </p>
            <MdOutlineClose onClick={close} className='w-6 h-6 bg-dark_green text-white rounded cursor-pointer'/>
        </div>
    </div>
  )
}

export default Favoritenav