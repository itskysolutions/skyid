import { SuccessComponent } from "../components/SuccessComponent"

export const SuccessPassword = () => {
    return(
        <SuccessComponent 
            label="You have successfully changed your password" 
            paragraph="" 
            buttonLabel="Go back to Profile" 
            buttonLink="/app/viewProfile" 
        />
    )
}