"use client"
import { useStore } from "@/stores/globalStore";
export default function Humber(){
    const {setMenuState}  =useStore();
    return(
        <button onClick={setMenuState} className=" sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
        </button>
    )
}