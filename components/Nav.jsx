"use client"
import { useState } from "react"
import Humber from "./Humber"
import Togglebar from "./Togglebar"
import NavList from "./NavList"
import { useStore } from "@/stores/globalStore"
export default function Nav() {
  const {menuState}  =useStore();
  return (
    <nav className=" h-1/6 w-full flex items-center justify-between ">
      <h1 className=" text-2xl font-semibold md:ml-10">Portfolio</h1>
      {menuState ? <Humber /> : <Togglebar />}
      <NavList />
    </nav>
  )
}
