import ReactPlayer from "react-player";

const Saying = ()=>{
    return(
        <>

        <div className="bg-gray-100 w-full">
            <div className="container w-4/5 mx-auto">
                <div className="title">
                    <p className="font-bold text-2xl text-center">What are students saying?</p>
                </div>
                <div className="msg_card">
                <div className="msg_card1 border-t-4 bg-white">
                        <p className="font-serif text-sm">Love it! vehicula consequat cursus. Morbi bibendum cursus urna, quis rhoncus arcu. Curabitur vel sollicitudin leo.</p>
                        <p>Adam Sanders</p>
                        <p className="text-sm text-gray-500">Paris, France</p>
                    </div>
                    <div className="msg_card1 border-t-4 bg-white">
                        <p className="font-serif text-sm">Love it! vehicula consequat cursus. Morbi bibendum cursus urna, quis rhoncus arcu. Curabitur vel sollicitudin leo.</p>
                        <p>Adam Sanders</p>
                        <p className="text-sm text-gray-500"> Paris, France</p>
                    </div>
                    <div className="msg_card1 border-t-4 bg-white">
                        <p className="font-serif text-sm">Love it! vehicula consequat cursus. Morbi bibendum cursus urna, quis rhoncus arcu. Curabitur vel sollicitudin leo.</p>
                        <p className="text-sm">Adam Sanders</p>
                        <p className="text-sm text-gray-500">Paris, France</p>
                    </div>
                </div>                    
            </div>
        </div>


        <div className="w-full bg-cyan-300">
            <div className="container w-4/5 mx-auto">
            <div className="title">
                <p className="text-2xl font-bold text-center p-8">Student Stories</p>
            </div>
            <div className="pargra">
                <p className="w-3/4 mx-auto text-justify">
                        Learning is a lifelong process and lorem ipsum dolor sit amet, consectetur adipiscing elit. In non risus in eros pulvinar vestibulum eu a ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a ipsum erat. Curabitur sollicitudin vestibulum diam, in elementum purus commodo in. Ut neque eros, blandit ut accumsan eget, laoreet faucibus urna.
                </p>                
            </div>

            <div className="video w-3/4 mx-auto m-5 p-5 text-center">
                <ReactPlayer url="https://youtu.be/EiNiSFIPIQE?si=wBTm1DPhnTvZ0YiX"></ReactPlayer>
            </div>
                
            </div>
        </div>
        </>
    )
}


export  default Saying;