import { useNavigate } from "react-router-dom"

function HomePage() {

    const navigate = useNavigate()
    const goNext = () => {
        navigate(`/config`)
    }

    return (
    <>
        <div className='min-h-screen'>
            <div className="hero bg-base-200 h-[70vh]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <div className="flex justify-center">
                        <img className="size-48" src="./logo.png" alt="" />
                    </div>
                    <h1 className="text-5xl font-bold">DS2 IDT Installer</h1>
                    {/* <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p> */}
                    </div>
                </div>
            
            </div>
            <div className="grid grid-flow-row justify-items-center bg-base-100 p-5">
                <p className="w-2/3 text-sm text-center mb-5 text-gray-500">Before starting the installation process, make sure you have valid server resources and credentials.</p>
                <button onClick={goNext} className="btn btn-primary w-60">Continue</button>
            </div>  
        </div>
    </>
    );
}
export default HomePage;