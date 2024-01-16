import { FaEnvelopeOpenText } from "react-icons/fa6";   
import InputField from "./InputField";

const NewsLetter = () => {
  return (
    <section className="w-full bg-[#bababa]">
    <div className="container w-full h-full flex flex-col lg:flex-row justify-center items-center py-[110px] px-3 xsm:px-6 lg:px-20 ">
                <div className="flex flex-col sm:flex-row mb-14 w-full items-center gap-10 sm:mb-20 lg:mb-0">
                        <FaEnvelopeOpenText className=" w-16 h-16 sm:w-20 sm:h-20 text-white"/>
                        <div className="font-jost  text-white border-l-[3px] border-white px-10 py-1">
                            <p className=" text-xl sm:text-[26px] md:text-3xl leading-6 mb-1">OUR</p>   
                                                 
                            <p className="text-xl sm:text-[26px] md:text-3xl leading-6 font-bold">NEWSLETTER!</p>  
                            <p className=" sm:text-[20px] md:text-2xl leading-6 mt-3">It only takes a second to be the first to find
                            out about our latest news</p>                      
                        </div>
                </div>
                <div className="flex w-full justify-center items-center md:px-10">
                    <input type="email" required={true  }  className="text-sm w-full leading-[60px] px-5 outline-none rounded"
                        placeholder="Enter Your Email Address..."
                    /> 
                    <button className=" px-5 md:px-10 py-[18px] bg-black text-white rounded">Submit</button>
                </div>
    </div>
   
    </section>
  )
}

export default NewsLetter