
import logoPic from "../../assets/image/slack.png"
import { FaBell } from "react-icons/fa";

function Navbar() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-8 md:px-20 flex justify-between items-center py-4 shadow-md bg-slate-100" >
                <div className="flex items-center">
                    <div className='flex space-x-4 items-center'>
                        <img src={logoPic} className="h-12 w-12 " alt="logo_icon" />
                        <h2 className="font-bold text-2xl">boostim</h2>
                    </div>
                    <div>
                        <ul className="flex items-center gap-4 ml-10">
                            <li><a href="/">Service</a> </li>
                            <li><a href="/">Agency</a> </li>
                            <li><a href="/">Case study</a> </li>
                            <li><a href="/">Resources</a> </li>
                            <li><a href="/">Contact</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="border-2 border-black rounded-3xl px-2 py-1 hover:bg-black hover:text-white hover:font-bold">Get started</button>
                    <FaBell className="transition ease-in-out delay-150 h-6 w-6 hover:bg-black hover:border-black hover:border-2 hover:rounded-full hover:text-white hover:scale-110" />

                </div>
            </div>
        </>
    )
}

export default Navbar