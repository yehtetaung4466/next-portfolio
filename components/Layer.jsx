"use client"
import { useStore } from "@/stores/globalStore"
export default function Layer(){
    const {setMenuDefault,menuState} = useStore();
    return(
      <>
        {menuState ? null : <div onClick={setMenuDefault} className=" z-20 bg-slate-400 opacity-50 h-screen w-screen absolute"></div>}
      </>
    )
}