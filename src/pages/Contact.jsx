import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import logo from "../assets/nhillz-logo.png";
import icon from "../assets/facebook-icon.png";
import instagram from "../assets/instagram-logo.png";
import tiktok from "../assets/tiktok-icon.svg";
import x from "../assets/x-icon.svg";
import phone from "../assets/phone-icon.png";
import email from "../assets/email-icon.png";
import star from "../assets/five-star.png";
import Dropbox from '../Dropmenu.jsx'
import { Helmet } from "react-helmet";
import PageWrapper from "../PageWrapper.jsx";
import './Contact.css'


export default function Contact() {
    const [loading, setLoading] = useState(false)

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(
            "service_odhej7s",
            "template_mhmme5f",
            formRef.current,
            "IOHWOLPnNLLD6aZ1K"
        )
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                setLoading(false);
                formRef.current.reset();

            },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message.");
                    setLoading(false);

                }
            );
    };
    return (
        <>
            <Helmet>
                <title>Contact Nhillz Global</title>
                <meta name="description" content="Need assistance or support?, Nhillz Global has got you covered!" />
            </Helmet>
            <PageWrapper>
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
                                <div className="bc"><h1>Get in Touch</h1></div>
                                <div className="bd">
                                    We’re here to answer your questions and assist with your travel
                                    needs. Reach out to us anytime and our team will be happy to help.
                                </div>
                                <div className="be">
                                    <div className="bf">Global Destinations</div>
                                    <div className="bg">Seamless Travel Planning</div>
                                    <div className="bh">Reliable & Trusted Service</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="justice">
                        <div className="j">
                            <div className="jojo">
                                <div className="jaa">
                                    <h2>Contact Details</h2>
                                </div>
                                <div className="jaal">
                                    Have a question or need assistance with your travel plans? Reach out to us and let’s get started.
                                </div>
                            </div>

                            <div className="jab">
                                <div className="ja">
                                    <div className="jb">
                                        <div className="jba">Quick support for calls and WhatsApp</div>
                                        <div className="jbb">+234 902 484 0636</div>
                                    </div>
                                    <div className="jc">
                                        <div className="jca">For enquiries and official communication</div>
                                        <div className="jcb">nhillzglobal@gmail.com</div>
                                    </div>
                                    <div className="jd">
                                        <div className="jda">Our office address</div>
                                        <div className="jdb">Winners Plaza, 2/2 kubwa, Federal Capital Territory, Abuja Nigeria</div>
                                    </div>

                                </div>
                                <div className="je">

                                    <form className="jf" ref={formRef} onSubmit={sendEmail}>
                                        <div className="jg">
                                            <label className="jga">
                                                Your Full Name
                                            </label>
                                            <br />
                                            <input className="jgb" type="text" name="name" placeholder="Enter your full name" required />

                                        </div>
                                        <div className="jh">
                                            <label className="jha">
                                                Your Email Address*
                                            </label>
                                            <br />
                                            <input className="jhb" type="email" name="email" placeholder="Enter your email address" required />

                                        </div>
                                        <div className="ji">
                                            <label className="jia">
                                                Your Phone Number*
                                            </label>
                                            <br />
                                            <input className="jib" type="tel" placeholder="Enter your phone number" required />
                                        </div>
                                        <div className="jk">
                                            <label className="jka">
                                                Your Message*
                                            </label>
                                            <br />
                                            <textarea name="message" className="jkb" type="text" placeholder="Type your message here" required />
                                        </div>
                                        <br />
                                        <div className="jl">
                                            <button className="jla" type="submit" disabled={loading}>
                                                {loading ? "Sending..." : "Submit Enquiry"} </button>
                                        </div>

                                    </form>
                                </div>
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
                                <Link to="/about">
                                    <button className="gg">ABOUT US</button>
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
            </PageWrapper>
        </>
    );
}
