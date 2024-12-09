const Features = ()=>{
    return(
        <>
            <div className="w-4/5 mx-auto">
                <p className="title font-bold text-3xl my-10 text-center text-sky-500">
                        Featured Programs
                </p>

                <div className="card-wrapper ">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://themes.3rdwavemedia.com/prospect/bs5/assets/images/featured/featured-1.jpg" className="shadow-xl rounded-lg"></img>
                        </div>
                        <div className="card-title">
                            <p>Copywriting</p>
                        </div>
                        <div className="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae massa vitae elementum.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image ">
                            <img src="https://themes.3rdwavemedia.com/prospect/bs5/assets/images/featured/featured-2.jpg"></img>
                        </div>
                        <div className="card-title">
                            <p>Chemistry</p>
                        </div>
                        <div className="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae massa vitae elementum.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src="https://themes.3rdwavemedia.com/prospect/bs5/assets/images/featured/featured-3.jpg"></img>
                        </div>
                        <div className="card-title">
                            <p>Game Development</p>
                        </div>
                        <div className="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae massa vitae elementum.</p>
                        </div>
                    </div>                    
                </div>

                <div className="card-wrapper ">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://themes.3rdwavemedia.com/prospect/bs5/assets/images/featured/featured-5.jpg" className="shadow-xl rounded-lg"></img>
                        </div>
                        <div className="card-title">
                            <p>Graphic Design</p>
                        </div>
                        <div className="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae massa vitae elementum.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image ">
                            <img src="https://themes.3rdwavemedia.com/prospect/bs5/assets/images/featured/featured-6.jpg"></img>
                        </div>
                        <div className="card-title">
                            <p>Video Production</p>
                        </div>
                        <div className="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae massa vitae elementum.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src="https://themes.3rdwavemedia.com/prospect/bs5/assets/images/featured/featured-7.jpg"></img>
                        </div>
                        <div className="card-title">
                            <p>Music Production</p>
                        </div>
                        <div className="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae massa vitae elementum.</p>
                        </div>
                    </div>                    
                </div>


                <div className="w-4/5 mx-auto flex justify-center">
                    <button className="text-green-500 border-2 border-green-500 p-5 m-5 text-2xl text-center font-bold rounded-sm hover:bg-green-500 hover:text-white ">View All Programs</button>
                </div>



               

                
            </div>


            

        </>
    )
}


export default Features;