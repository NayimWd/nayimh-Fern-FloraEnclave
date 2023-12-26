import { lazy } from "react";
import dealImg from "../assets/image/product2.webp";
import dealImg1 from "../assets/image/product3.webp";
const DealsCard = lazy(()=> import("../components/ui/DealsCard"));


const Deal = () => {
  return (
    <section className="w-full section_p-y">
        <div className="container flex flex-col items-center padding_x">
        <h1 className="text-center font-jost text-black text-2xl md:text-3xl font-semibold leading-10 tracking-wider">
        {" "}
        DEALS OF THE DAY{" "}
    </h1>
    <hr className="text-green border-b-2 border-green w-24 mt-4" />
        

        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 mt-12">
            {/* Deals Card */}
                <DealsCard img={dealImg1} title="Purple Flowers" price={300} desc="Things You Need To Know There are many variations of..."/>
                <DealsCard img={dealImg} title="Purple Flowers" price={350} desc="Things You Need To Know There are many variations of..."/>
           
        </div>
        </div>
    </section>
  )
}

export default Deal