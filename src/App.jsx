import { Routes, Route, Link } from "react-router-dom";

import logo from './assets/nhillz-logo.png'
import icon from './assets/facebook-icon.png'
import instagram from './assets/instagram-logo.png'
import tiktok from './assets/tiktok-icon.svg'
import x from './assets/x-icon.svg'
import phone from './assets/phone-icon.png'
import email from './assets/email-icon.png'
import star from './assets/five-star.png'
import ReviewsCarousel from "./components/ReviewsCarousel";
import Dropbox from './Dropmenu.jsx'

import Contact from "./pages/Contact";
import About from "./pages/About";

import './App.css'

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <div id="holder">
              <div id="app">
                <header className="a">
                  <div id="start">
                    <img src={logo} alt="Nhillz Global Logo" />
                  </div>
                  <div id="head">
                    <div className="menu">
                      <Dropbox />
                    </div>
                    <div className="ab">
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
                    <div className="ac">
                      <div className="phone">
                        <div className="ph"><img src={phone} alt="phone logo" /></div>
                        <div className="number">
                          <b>+234 902 484 0636</b>
                        </div>
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
                    <div className="bc"><h1>Your Trusted Partner in Travel and Tours</h1></div>
                    <div className="bd">
                      Discover breathtaking destinations, well-organized tours,
                      and stress-free travel solutions designed to give you the best experience wherever you go.
                    </div>
                    <div className="be">
                      <div className="bf">Global Destinations</div>
                      <div className="bg">Seamless Travel Planning</div>
                      <div className="bh">Reliable & Trusted Service</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="center">
                <div className="c">
                  <div className="ca">
                    <div className="cb"></div>
                    <div className="cc">
                      <div className="cca"><h1>Local & International Flight Bookings</h1></div>
                      <div className="ccb">Affordable and flexible flight options, locally and worldwide.
                        Smart flight solutions designed for comfort and convenience. </div>
                    </div>
                  </div>
                  <div className="cd">
                    <div className="ce"></div>
                    <div className="cf">
                      <div className="cfa"><h1>Canada Visa Assistance</h1></div>
                      <div className="cfb">Dedicated support for a smooth Canada visa process.
                        Trusted assistance for your Canadian travel goals. </div>
                    </div>
                  </div>
                  <div className="cg">
                    <div className="ch"></div>
                    <div className="ci">
                      <div className="cia"><h1>Hassle-Free Visa Processing</h1></div>
                      <div className="cib">We guide you through every step, from documentation to approval.
                        Expert assistance for tourist, business, and study visas. </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="engage">
                <div className="e">
                  <div className="ea"><h1>About Nhillz Global</h1></div>
                  <div className="eb">
                    Nhillz Global is a trusted travel and tours company offering reliable visa assistance, local and international flight bookings, and global travel support. <br />
                    <b>— Our Promise</b>
                    We are committed to providing fast, transparent, and dependable services while supporting our clients every step of the way. <br />
                    <b>— Why Choose Us</b>
                    Trusted globally. Driven by excellence. Focused on your journey.
                  </div>
                </div>
              </div>

              <div className="floor">
                <div className="f">
                  <div className="fa"><h2>Customer Reviews</h2></div>
                  <div className="fc">
                    <ReviewsCarousel />
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

                    <Link to="/about">
                      <button className="gj">ABOUT US</button>
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
        }
      />

      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

    </Routes>
  );
}
