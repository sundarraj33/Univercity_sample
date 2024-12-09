const Navbar_header = ()=>{
    return(
        <>
        <div className="Navbar1 h-20">
            <div className="container w-4/5 mx-auto flex justify-between">
                <div className="title ">
                    <img src="https://res.cloudinary.com/zenbusiness/q_auto/v1/logaster/logaster-2020-07-t-amity-university-vector-logo-3.png" className=" h-16 bg-sky-500 w-72"></img>
                </div>
                <div className="contact">
                    <ul className="flex gap-x-5 ">
                        <li className="content-center"><a href="#"> <i class="fa-solid fa-mobile-screen-button"></i> 9486947738</a></li>
                        <li><a href="#"> <i class="fa-solid fa-comment"></i> Live Chat</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Navbar_header;