

const PromotionCard = ({img, plant, disc}) => {

  return (
    <div className="flex  md:w-[350px] xl:w-[400px] gap-4 bg-soft_green/30 rounded-3xl p-4">
            <div> <img className="w-full " src={img} alt="plant" loading="lazy"  /> </div>
            <div className="w-full flex flex-col justify-center items-start gap-3 font-jost"> 
                <p className="text-darker_green  leading-6">Up To {disc}%</p>
                <h1 className="text-black font-semibold text-2xl">{plant}</h1>
                <button className="py-2 px-4 bg-dark_green hover:bg-bg_green text-white rounded-md btn_animation-top">Shop Now</button>
            </div>
        </div>
  )
}

export default PromotionCard