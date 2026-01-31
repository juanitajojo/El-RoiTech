import { Link } from "react-router-dom";
import { useState } from "react";
import icon from './assets/facebook-icon.png'
import instagram from './assets/instagram-logo.png'
import tiktok from './assets/tiktok-icon.svg'
import x from './assets/x-icon.svg'
import './Dropmenu.css'

function Menu() {
    const [isMenu, setIsMenu] = useState(false)
    const toggleVisibility = () => {
        setIsMenu(previsMenu => !previsMenu);
    };
    return (
        <>
            <button
                onClick={toggleVisibility}
                style={{
                    position: 'relative',
                    left: '-5px',
                    fontSize: '20px',
                    width: '50px',
                    height: '50px',
                    color: 'black',
                    borderRadius: '20px',
                    display: 'block',
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent'
                }}
            >
                <b>☰</b>
            </button>

            {isMenu && (
                <div className="box">
                    <ul>
                        <li>
                            <div id="facebook">
                                <a href="https://facebook.com/nhillzglobal" target="_blank" rel="noopener noreferrer">
                                    <button id="fbook" onClick={() => confirm("Redirecting to Facebook")}><img src={icon} alt="Facebook.com" /></button>
                                </a>

                                <a href="https://instagram.com/nhillzglobal" target="_blank" rel="noopener noreferrer">
                                    <button id="igram" onClick={() => confirm("Redirecting to Instagram")}><img src={instagram} alt="Instagram.com" /></button>
                                </a>

                                <a href="https://x.com/nhillzglobal" target="_blank" rel="noopener noreferrer">
                                    <button id="twitterx" onClick={() => confirm("Redirecting to Twitter(X)")}><img src={x} alt="x.com" /></button>
                                </a>

                                <a href="https://tiktok.com/nhillzglobal" target="_blank" rel="noopener noreferrer">
                                    <button id="ttok" onClick={() => confirm("Redirecting to TikTok")}><img src={tiktok} alt="tiktok.com" /></button>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className="d">
                                <div className="da">
                                    <b style={{lineHeight:'2'}}>+234 902 484 0636</b>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="db">
                                <div className="dc">
                                    <b>nhillzglobal@gmail.com</b>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link to='/' >
                                <button
                                    style={{ fontFamily:'serif',textDecoration: 'underline', outline: 'none', backgroundColor: 'transparent', border: 'none', fontSize: '11px', color: 'black' }}>
                                    <b>
                                        HOME
                                    </b>
                                </button>
                            </Link>
                            <br />
                            <Link to='/about'>
                                <button
                                    style={{  fontFamily:'serif',textDecoration: 'underline', outline: 'none', backgroundColor: 'transparent', border: 'none', fontSize: '11px', color: 'black' }}>
                                    <b>
                                        ABOUT US
                                    </b>
                                </button>
                            </Link>
                            <br />
                            <Link to='/contact'>
                                <button
                                    style={{  fontFamily:'serif',textDecoration: 'underline', outline: 'none', backgroundColor: 'transparent', border: 'none', fontSize: '11px', color: 'black' }}>
                                    <b>
                                        CONTACT US
                                    </b>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );


}

export default function Dropbox() {
    return (
        <section> <Menu /> </section>
    );
}
