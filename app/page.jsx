
import profile from "@/public/profile.jpg"
import Image from "next/image"
export default function Home() {
  return (
    <div className=" h-full w-full flex flex-col md:flex-row md:items-center">
      <div className="w-full h-1/2 flex justify-center items-center md:mt-7">
        <Image
        className=" h-full w-2/6 md:w-1/6 min-w-fit"
        src={profile}
        height={0}
        width={0}
        priority={true}
        alt="profile picture" />
      </div>
      <div className="w-full h-1/2 flex justify-center items-center text-gray-900 text-sm md:text-lg md:font-medium md:items-end">
        Hi,My name is Ye Htet Aung.I am 18 years old enthusiastic web developer.I have been studying web developement for certain amount of time and I have strong knowledge of html,css,tailwind,javascript,react,daisyui and python.Now,I am further exploring next.js.I am open to junior or intern opportunities.I have mentioned the ways to be in touch with me in contact page if your are interested.Thank you.
      </div>
    </div>
  )
}
