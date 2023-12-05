
const PromoCard = ({img, bgClr, title, disc}) => {
  return (
    <div className={`w-full ${bgClr} flex flex-col justify-between items-center py-14 font-jost leading-7`}>
            <div className=" flex flex-col items-center gap-5 mb-2">
                <p className="traking-[0.16px] text-black">UP TO {disc}%</p>
                <h1 className="text-black font-bold text-3xl leading-10 tracking-[0.3px]">{title}</h1>
                <button className="  w-[120px] py-2 bg-dark_green text-white tracking-[0.2px] rounded  hover:bg-bg_green  ">Shop Now</button>
            </div>
            <div className="flex w-full justify-center">
                <img className="w-[90%] hover:scale-105 delay-150 duration-300 ease-linear" src={img} alt="plant" loading="lazy"/>
            </div>
        </div>
  )
}

export default PromoCard