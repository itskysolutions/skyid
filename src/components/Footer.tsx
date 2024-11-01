import Divider from "../components/Divider";
import Image from 'react-bootstrap/Image';


export const Footer = () => {
  return (
    <footer style={{ marginTop: "auto", backgroundColor: "#333333", height:"478px"}} className="p-4">
        <div className='text-white' style={{backgroundColor: '#333333'}}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-sm-4">
                        <Image/>
                    </div>
                    <div className="col-sm-2">
                        <h4>Legal</h4>


                    </div>
                    <div className="col-sm-2">
                        <h4>Contact</h4>

                    </div>
                    <div className="col-sm-2">
                        <h4>Locations</h4>

                    </div>
                </div>
            </div>
        </div>
  </footer>
  )
};