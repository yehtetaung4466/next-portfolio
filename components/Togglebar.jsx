"use client"
import { useStore } from "@/stores/globalStore";
export default function Togglebar(){
    const {setMenuState}  =useStore();
    return(
       <div className=" relative  top-full h-60 w-36 bg-gray-50 grid z-30 shadow-md sm:hidden ">
        <div className="">
            <svg onClick={setMenuState} className=" ml-auto" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
        </div>
        <div className="text flex items-center hover:bg-slate-200">Home</div>
        <div className="flex items-center text hover:bg-slate-200">Skill</div>
        <div className="flex items-center text hover:bg-slate-200">Contact</div>
        <div className="flex items-center text hover:bg-slate-200">GitHub</div>
       </div>
    )
}