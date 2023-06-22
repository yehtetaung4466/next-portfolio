"use client"
import Link from "next/link";
import { useStore } from "@/stores/globalStore";
export default function Togglebar(){
    const {setMenuState, setMenuDefault}  =useStore();
    return(
       <div className=" relative  top-full h-60 w-36 bg-gray-50 grid z-30 shadow-md sm:hidden ">
        <div className="">
            <svg onClick={setMenuState} className=" ml-auto" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
        </div>
        <Link onClick={setMenuDefault} href="/" className="text flex items-center hover:bg-slate-200">Home</Link>
        <Link onClick={setMenuDefault} href="/skill" className="flex items-center text hover:bg-slate-200">Skill</Link>
        <Link onClick={setMenuDefault} href="/contact" className="flex items-center text hover:bg-slate-200">Contact</Link>
        <a onClick={setMenuDefault} target="_blank" href="https://github.com/yehtetaung4466" className="flex items-center text hover:bg-slate-200">GitHub</a>
       </div>
    )
}