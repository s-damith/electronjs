import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

function InstallPage() {
    const navigate = useNavigate()

    const dummy_values = [0, 3, 9, 14, 18, 25, 31, 38, 44, 49, 55, 62, 68, 73, 78, 84, 89, 94, 97, 100]
    const dummy_strings = ["Connect to Server", "Copy Files", "Install Dependencies", "Configure Settings", "Start Services", "Verify Installation"] 
    
    const [value, setValue] = useState(0);
    const [valueString, setValueString] = useState(dummy_strings[0]);
    const [index, setIndex] = useState(0);

    const goToHome = () => {
        navigate(`/`)
    }

    useEffect(() => {
        if (index >= dummy_values.length) return;

        const interval = setInterval(() => {
            setValue(dummy_values[index]);
            setIndex((prev) => prev + 1);

            if(value < 10 ) {
                setValueString(dummy_strings[0])
            } else if(value < 30){
                setValueString(dummy_strings[1])
            } else if(value < 45) {
                setValueString(dummy_strings[2])
            } else if(value < 65) {
                setValueString(dummy_strings[3])
            } else if(value < 85) {
                setValueString(dummy_strings[4])
            } else {
                setValueString(dummy_strings[5])
            }
        }, 1000);

        return () => clearInterval(interval); // cleanup
    }, [index]);


    // Send a request to close the application
    const closeApp = () => {
        const { ipcRenderer } = window.require('electron');
        ipcRenderer.send('close',[])
    }

    // Send a request to open the IDT link in the browser
    const openIDTApp = () => {
        const { ipcRenderer } = window.require('electron');
        ipcRenderer.send('openIDTApp',[])
    }

    return (
    <>
        <div className='min-h-screen'>
            <div className="hero bg-base-200 h-[60vh]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <div className="flex justify-center">
                        <img className="size-48" src="./logo.png" alt="" />
                    </div>
                    <h1 className="text-3xl font-bold">Thank you chosing DS2 IDT!</h1>
                    {/* <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi.
                    </p> */}
                    </div>
                </div>
                
            </div>
            <div className="grid grid-flow-row justify-items-center bg-base-100 p-5">
                {value < 100 && 
                    <>
                        <p className="text-center text-md text-gray-700">Installation Progress</p>
                        <progress className="progress progress-primary w-80 m-3" value={value} max="100"></progress>
                        <p className="text-sm text-center mb-6 text-gray-500">{valueString}</p>
                        <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn btn-outline">Cancel</button>
                    </> 
                }


                {value == 100 &&
                <>              
                    <p className="text-center font-bold text-lg text-gray-800">Installed Successfully!</p>

                    <p className="text-md text-center mb-6 mt-3 text-gray-600">To access DS2 IDT, use the following Open app link.</p>
                    <div className='flex gap-4'>
                        <button onClick={openIDTApp} className="btn btn-primary w-60">Open App</button>
                        <button onClick={closeApp} className="btn btn-outline w-60">Done</button>
                    </div>
                    <p className="text-sm text-center mt-3 text-gray-500">Need help? Please refer to the documentation. https://doc.com</p>
                </> 
                }
            </div>  
        </div>


        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Confirm Cancellation</h3>
                <p className="py-4">Are you sure you want to cancel the installation?</p>
                <div className="modal-action">
                <form method="dialog">
                    <button className="btn btn-outline mr-3">Cancel</button>
                    <button onClick={goToHome} className="btn  btn-active  btn-error w-48" style={{"color": "#fff"}}>Confirm</button>
                </form>
                </div>
            </div>
        </dialog>
    </>
    );
}
export default InstallPage;