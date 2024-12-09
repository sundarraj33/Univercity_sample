import Navbar_header from "./Navbar_header";

const Navbar = ()=>{
    return (
        <>
        <div className="navbar flex h-12 bg-red-300 ">
            <div className="navbar-wrapper w-4/5 mx-auto">
            <ul className="flex flex-one">
                <li><a href="">Home</a></li>
                <li><a href="">Programs</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Testimoials</a></li>
                <li><a href="">FAQ's</a></li>
            </ul>

            <ul className="flex flex-second">
                <li className="btn border bg-teal-400 h-full "><button className="">Request Info <i class="fa-regular fa-bell"></i></button></li>
                <li className="btn border border-sky-500 bg-sky-500 h-full "><button>Apply Now <i class="fa-solid fa-paper-plane"></i></button></li>
            </ul>
            </div>            
        </div>

        <Navbar_header />
        
        </>
    )
}

export default Navbar;