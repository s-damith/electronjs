import { useNavigate } from "react-router-dom"

function ConfigPage() {
    const navigate = useNavigate()

    const goToInstall = () => {
        console.log("Cool")
        navigate(`/install`)
    }

    return (
    <>
        <div class='min-h-screen'>

            <div class="bg-base-200 p-3">
                    <div class="flex items-center">
                    <img class="size-10" src="./logo.png" alt="" />
                    <h1 class="text-2xl ml-2">DS2 IDT Installer</h1>
                    </div> 
            </div>

            <div class="px-10 py-5">

            <h1 class="text-lg pt-2">To continue the installation, please provide the following information.</h1>

                <div class="grid gap-2">


                <div class="grid grid-cols-2">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Server IP address</legend>
                    <input type="text" class="input" placeholder="Type here" />
                    <p class="label">Enter the IP address of the server where IDT will be installed.</p>
                </fieldset>

                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Port</legend>
                    <input type="text" class="input" placeholder="22" />
                </fieldset>    
                </div>

                <fieldset class="fieldset">
                <legend class="fieldset-legend">SSH key</legend>
                <input type="file" class="file-input" />
                <p class="label">Select the authentication key file used to connect to the server.</p>
                </fieldset>
            
            <div class="divider m-0"></div>

            <div class="grid grid-cols-2">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Username</legend>
                    <input type="text" class="input" placeholder="Type here" />
                </fieldset>
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Password</legend>
                    <input type="password" class="input" />
                </fieldset>    
                </div>

                <div class="text-center">
                    <button onClick={goToInstall} class="btn btn-primary w-72 mt-5">Start Installation</button>
                </div>

                </div>
            </div>
        </div>
    </>
    );
}
export default ConfigPage;