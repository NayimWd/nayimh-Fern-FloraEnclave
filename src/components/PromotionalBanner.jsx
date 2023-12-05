import bannerImg from "../assets/image/proposter1.png"
const PromotionalBanner = () => {
  return (
    <section className="w-full section_p-y md:mt-16 lg:mt-24">
    {/* Banner */}
    <div className="container  w-full bg-bg_green rounded padding_x">
            <div className="flex flex-col-reverse md:flex-row gap-10 justify-between items-center py-8 padding_x md:px-8 lg:px-12">
                <div className="flex flex-col justify-center items-center w-full md:w-1/2 gap-4 lg:gap-8 pb-4 md:pb-0 font-jost text-white">
                    <h1 className="text-2xl xsm:text-4xl md:text-4xl lg:text-5xl tracking-wide leading-[40px] xsm:leading-[50px] lg:leading-[70px]"> Gardening Is A Way To A Healthy Life. </h1> 
                    <p> Morbi eget congue lectus. Donec eleifend ultricies urna et euismod. Sed consectetur tellus eget odio aliquet, vel vestibulum tellus sollicitudin. Morbi maximus metus eu eros tincidunt, vitae mollis ante imperdiet. </p>
                </div>
                <div className="flex justify-center items-center w-full md:w-1/2"> 
                    <img className="w-full lg:w-[90%] h-full object-cover object-center md:-mt-40 lg:-mt-44" src={bannerImg} alt="banner" loading="lazy" />
                </div>
            </div>
    </div>
    </section>
  )
}

export default PromotionalBanner