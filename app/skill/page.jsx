import Radio from "@/components/Radio"
import Radioopact from "@/components/Radioopact"
import Image from "next/image"
import taiwind from "@/public/tailwind.svg"
import next from "@/public/next.svg"
import react from "@/public/react.svg"
import zustand from "@/public/zustand.png"
import daisy from "@/public/daisyui.svg"

export default function Page(){
    return(
        <div className=" h-full w-full flex flex-col md:flex-row md:items-center">
            <div className="w-full h-1/2 flex flex-col justify-center items-center">
               <div className=" flex items-center">
                 <span className=" text">HTML:<progress className=" progress mb-0.5 w-32" max={100} value={70}/></span>
               </div>
               <div className=" flex items-center">
                 <span className="ml-6 text-gray-600 text-lg font-semibold">CSS:<progress className=" progress mb-0.5 w-32" max={100} value={50}/></span>
               </div>
               <div className=" flex items-center mr-9">
                 <span className=" text">Javascript:<progress className=" progress mb-0.5 w-32" max={100} value={65}/></span>
               </div>
               <div className=" flex items-center mr-2">
                 <span className=" text">Python:<progress className=" progress mb-0.5 w-32" max={100} value={65}/></span>

               </div>
               <div className=" flex items-center ml-5">
                 <span className=" mr-12 text-gray-600 text-lg font-semibold">Typescript:<progress className=" progress mb-0.5 w-32" max={100} value={50}/></span>
               </div>
           </div>
           <div className="w-full h-1/2 grid grid-rows-2 grid-cols-3">
            <Image
             src={taiwind}
             className=""
             width={80}
             height={80}
             alt=" tailwind logo"/>
            <Image
             src={daisy}
             className=""
             width={80}
             height={80}
             alt=" daisyui logo"/>
            <Image
             src={react}
             className=""
             width={80}
             height={80}
             alt="react logo"/>
            <Image
             src={next}
             className=" md:mt-3 ml-12"
             width={80}
             height={80}
             alt=" next logo"/>
            <Image
             src={zustand}
             className=" ml-20 mt-2"
             width={150}
             height={150}
             alt=" zustand logo"/>
           </div>
        </div>
    )
}