"use client"
import Link from "next/link"
export default function NavList(){
    return(
        <ul className=" hidden sm:flex md:mr-8">
            <Link className=" listItems" href="/">Home</Link>
            <Link className="listItems" href="/skill">Skill</Link>
            <Link className="listItems" href="/contact">Contact</Link>
            <a className="listItems" href="https://github.com/yehtetaung4466" target="_blank">Github</a>
        </ul>
    )
}