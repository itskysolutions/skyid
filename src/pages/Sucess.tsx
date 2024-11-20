import { SuccessComponent } from "../components/SuccessComponent"

export const Success = () => {
    return(
        <SuccessComponent 
            label="VSO has been successfully created" 
            paragraph="The VSO should check their email inbox for login details and change the default password." 
            buttonLabel="Done" 
            buttonLink="/channelPartners/manageVSOs" 
        />
    )
}