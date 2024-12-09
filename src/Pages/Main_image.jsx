const Main_image = ()=>{
    return(
        <>
            <div className="main_image_wrapper "></div>
            <div className="wrapper w-4/5 mx-auto">
                <div className="programs_box  bg-gray-100 my-10 p-5 ">
                    <p className="font-bold text-2xl p-2"><i class="fa-solid fa-book-open-reader gap-x-2"></i> More than 1000 degree programs available.</p>
                    <p className="text-xl p-2">What are you interested in? Explore our programs!</p>
                    <div className="flex-col justify-center gap-x-2"><input type="text" className="border border-green-500 p-2" placeholder="Find a Program" autoComplete="off"></input><i class="fa-solid fa-magnifying-glass p-3 border bg-green-500 gap-x-2 text-white cursor-pointer"></i></div>
                </div>
            </div>    
        </>
    )
}

export default Main_image;