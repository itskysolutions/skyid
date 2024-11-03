import whiteLogo from '/Users/ummiaishaibrahim/Downloads/github/sky-id-landingpage/src/assets/white-logo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';


export const Footer = () => {
  return (
    <footer style={{ marginTop: "auto", height:"478px" }} className="p-4">
        <div className='text-white' style={{backgroundColor: '#373737', borderRadius:'20px'}}>
            <div className="container p-4" style={{marginTop: '79px'}}>
                <div className="row">
                    <div className="col-md-4" style={{paddingBottom:'3%'}}>
                        <img src={whiteLogo} alt="logo" style={{width:'173.05px', height:'55.6px'}} />
                        <div className="social-icons" style={{paddingTop:'5%'}}>
                            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-whatsapp" style={{paddingRight:'5%', color:'#FFFFFFCC'}}></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin" style={{paddingRight:'5%', color:'#FFFFFFCC'}}></i>
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook" style={{paddingRight:'5%', color:'#FFFFFFCC'}}></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram" style={{paddingRight:'5%', color:'#FFFFFFCC'}}></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-twitter" style={{color:'#FFFFFFCC'}}></i> {/* X icon is still represented as Twitter */}
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5 style={{fontSize:'14px', color:'#FFFFFFCC'}}>LEGAL</h5>
                        <p><a style={{fontSize:'13px', color:'#FFFFFFCC'}}className="link-offset-2 link-underline link-underline-opacity-0 " href="">Privacy Policy</a></p>
                        <p><a style={{fontSize:'13px', color:'#FFFFFFCC'}}className="link-offset-2 link-underline link-underline-opacity-0" href="">Terms of Service </a></p>
                        <p><a style={{fontSize:'13px', color:'#FFFFFFCC'}}className="link-offset-2 link-underline link-underline-opacity-0" href="">Cookie Policy</a></p>
                        
                    </div>
                    <div className="col-md-2">
                        <h5 style={{fontSize:'14px', color:'#FFFFFFCC'}}>CONTACT</h5>
                        <p>
                            <a href="mailto:admin@skyid.ng" style={{fontSize:'13px', color:'#FFFFFFCC'}}className="link-underline link-underline-opacity-0">admin@skyid.ng</a>
                        </p>
                        <p>
                            <a href="mailto:sales@skyid.ng" style={{fontSize:'13px', color:'#FFFFFFCC'}}className="link-underline link-underline-opacity-0">sales@skyid.ng</a>
                        </p>
                        <p>
                            <a href="tel:+2347003100000" style={{fontSize:'13px', color:'#FFFFFFCC'}}className="link-underline link-underline-opacity-0">+234-700-3100-000</a>
                        </p>
                        <p>
                            <a href="tel:+02093600000" style={{fontSize:'13px', color:'#FFFFFFCC'}}className=" link-underline link-underline-opacity-0">+0209-3600-000</a>
                        </p>
                        
                    </div>
                    <div className="col-sm-3">
                        <h5 style={{fontSize:'14px', color:'#FFFFFFCC', paddingBottom: '1%'}}>LOCATIONS</h5>
                        <div>
                            <h6>Nigeria</h6>
                            <p className=""><a style={{fontSize:'13px', color:'#FFFFFFCC'}}href="https://www.google.com/maps/place/13+Fredrick+Chiluba,+Asokoro,+Close+900110,+Federal+Capital+Territory/@9.0377073,7.5132066,17z/data=!3m1!4b1!4m6!3m5!1s0x104e0be50f1b7597:0x2c03f407791be6a1!8m2!3d9.0377073!4d7.5157815!16s%2Fg%2F11rgbzj39c?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" className=" link-underline link-underline-opacity-0">
                                13B Fredrick Chiluba, Asokoro FCT, Abuja.</a></p>
                        </div>
                        <div>
                            <p className=""> <a style={{fontSize:'13px', color:'#FFFFFFCC'}}href="https://www.google.com/maps/place/Upland+Mall+Kado/@9.0782234,7.4111215,17z/data=!3m1!4b1!4m6!3m5!1s0x104e753a33811b0f:0xded3e3e469156548!8m2!3d9.0782234!4d7.4136964!16s%2Fg%2F11qlbz1r4r?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" className=" link-underline link-underline-opacity-0">
                                Suite 09, Upland Mall, Ahmed Joda Crescent, Kado Estate, Abuja</a></p>
                        </div>
                        <div>
                            <h6>United Kingdom</h6>
                            <p className=""> <a style={{fontSize:'13px', color:'#FFFFFFCC'}}href="https://www.google.com/maps/place/46+Seymour+Gardens,+Ilford,+UK/@51.5658024,0.055186,17z/data=!3m1!4b1!4m5!3m4!1s0x47d8a6faa02bfb7f:0xa37fb5d0d94f5a14!8m2!3d51.5658024!4d0.0577609?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" className=" link-underline link-underline-opacity-0">
                                46A Seymour Garden, llford IG1 3LP, London</a></p>
                        </div>   
                    </div>
                    <div className="container" style={{paddingTop:'3%'}}>
                        <hr/>
                        <div className="text-center">
                            <p style={{fontSize:'12px', color:'#FFFFFF80'}}>&copy; {new Date().getFullYear()} Sky ID. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </footer>
  )
};