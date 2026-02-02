import { Link } from "react-router-dom";
import logo from "../assets/nhillz-logo.png";
import icon from "../assets/facebook-icon.png";
import instagram from "../assets/instagram-logo.png";
import tiktok from "../assets/tiktok-icon.svg";
import x from "../assets/x-icon.svg";
import phone from "../assets/phone-icon.png";
import email from "../assets/email-icon.png";
import star from "../assets/five-star.png";
import Dropbox from '../Dropmenu.jsx'

import './About.css'

export default function About() {
    return (
        <>
            <div id="holder">
                <div id="app">
                    <header className="a">
                        <div id="start"> <img src={logo} alt="Nhillz Global Logo" /></div>
                        <div id="head">
                            <div className="menu">
                                <Dropbox />
                            </div>
                            <div className="ab">
                                <a href="https://facebook.com/nhillzglobal" target="_blank" rel="noopener noreferrer">
                                    <button id="fb" onClick={() => confirm("Redirecting to Facebook")}><img src={icon} alt="Facebook.com" /></button>
                                </a>
                                <a href="https://www.instagram.com/nhillzglobal" target="_blank" rel="noopener noreferrer">
                                    <button id="ig" onClick={() => confirm("Redirecting to Instagram")}><img src={instagram} alt="Instagram.com" /></button>
                                </a>
                                <a href="https://x.com/nhillzglobal" target="_blank" rel="noopener noreferrer">
                                    <button id="twitter" onClick={() => confirm("Redirecting to Twitter(X)")}><img src={x} alt="x.com" /></button>
                                </a>
                                <a href="https://tiktok.com/nhillzglobal" target="_blank" rel="noopener noreferrer">
                                    <button id="tiktok" onClick={() => confirm("Redirecting to TikTok")}><img src={tiktok} alt="tiktok.com" /></button>
                                </a>
                            </div>
                            <div className="ac">
                                <div className="phone">
                                    <div className="ph"><img src={phone} alt="phone logo" /></div>
                                    <div className="number"><b>+234 902 484 0636</b></div>
                                </div>
                                <div className="mail">
                                    <div className="ema"><img src={email} alt="mail logo" /></div>
                                    <div className="google"><b>nhillzglobal@gmail.com</b></div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

                <div className="bed">
                    <div className="b">
                        <div className="ba">
                            <div className="bb">
                                <div className="bba"><img src={star} alt="five star" /></div>
                                <div className="bbb">RATED PREMIUM WORLD-WIDE</div>
                            </div>
                            <div className="bc"><h1>Nhillz Global – Trusted Travel Solutions<br /></h1></div>
                            <div className="bd">
                                Nhillz Global was created to make travel simple. We support our clients with expert guidance,
                                reliable service, and dedicated care from planning to departure.
                            </div>
                            <div className="be">
                                <div className="bf">Driven By Trust</div>
                                <div className="bg">Built For Travel</div>
                                <div className="bh">Travel Beyond Borders</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="housing">
                    <div className="h">
                        <div className="ha">
                            <div className="hb">
                                <div className="hba"><h2>Verified and Certified Globally</h2></div>
                                <div className="hbb">
                                    Nhillz Global is a trusted travel company recognized for professionalism,
                                    reliability, and excellence worldwide.
                                </div>
                            </div>
                            <div className="hc"></div>
                        </div>
                        <div className="hd">
                            <div className="he"></div>
                            <div className="hf">
                                <div className="hfa"><h2>Dedicated Customer Support</h2></div>
                                <div className="hfb">
                                    Our customer service representatives are trained professionals committed to providing
                                    fast, clear, and reliable assistance at every stage of your journey.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inside">
                    <div className="i">
                        <div className="ia"><h2>Breathtaking Destinations</h2></div>
                        <div className="ib">
                            <div className="iba"></div>
                            <div className="ibb"></div>
                            <div className="ibc"></div>
                            <div className="ibd"></div>
                            <div className="ibe"></div>
                            <div className="ibf"></div>
                            <div className="ibg"></div>
                            <div className="ibh"></div>
                            <div className="ibi"></div>
                        </div>
                    </div>
                </div>
                <footer className="ground">
                    <div className="g">
                        <div className="gb">
                            <div className="gc">
                                <div className="gca">
                                    <img src={logo} alt="Nhillz Global Logo" />
                                </div>
                            </div>

                            <div className="gd">
                                <a href="https://facebook.com/nhillzglobal" target="_blank" rel="noopener noreferrer">
                                    <button id="fb" onClick={() => confirm("Redirecting to Facebook")}><img src={icon} alt="Facebook.com" /></button>
                                </a>
                                <a href="https://www.instagram.com/bimboademoye?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                    <button id="ig" onClick={() => confirm("Redirecting to Instagram")}><img src={instagram} alt="Instagram.com" /></button>
                                </a>
                                <a href="https://x.com/nhillzglobal" target="_blank" rel="noopener noreferrer">
                                    <button id="twitter" onClick={() => confirm("Redirecting to Twitter(X)")}><img src={x} alt="x.com" /></button>
                                </a>
                                <a href="https://tiktok.com/nhillzglobal" target="_blank" rel="noopener noreferrer">
                                    <button id="tiktok" onClick={() => confirm("Redirecting to TikTok")}><img src={tiktok} alt="tiktok.com" /></button>
                                </a>
                            </div>
                            <div className="gda">
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
                            </div>
                        </div>

                        <div className="ge">
                            <div className="gf">
                                <b>+234 902 484 0636</b>
                            </div>
                            <Link to="/contact">
                                <button className="gg">CONTACT US</button>
                            </Link>

                        </div>

                        <div className="gh">
                            <div className="gi">
                                <b>nhillzglobal@gmail.com</b>
                            </div>

                            <Link to="/">
                                <button className="gj">HOME</button>
                            </Link>

                        </div>
                    </div>

                    <div className="ga">
                        <h5>
                           &copy; 2026 All Rights Reserved. Brought to you by <b>El-Roi Tech</b>
                        </h5>
                    </div>
                </footer>
            </div>

        </>
    )
}
