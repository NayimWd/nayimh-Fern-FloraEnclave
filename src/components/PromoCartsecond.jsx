import primg from "../assets/image/posterS1p.webp";
import primg1 from "../assets/image/posterS2p.webp";
import primg2 from "../assets/image/posterS3p.webp";
import PromoCard from "./ui/PromoCard";

const PromoCartsecond = () => {
  return (
    <div className="w-full ">
    <div className="container w-full grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 padding_x">
    {/* promocard */}
        <PromoCard img={primg} bgClr="bg-red-200/30" title="Calathea Plant" disc="20"/>
        <PromoCard img={primg2} bgClr="bg-teal-200/30" title="Garden Plant" disc="30"/>
        <PromoCard img={primg1} bgClr="bg-red-200/30" title="Office Plant" disc="10"/>
        
    </div>
    </div>
  )
}

export default PromoCartsecond