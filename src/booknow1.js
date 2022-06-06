import React from 'react'
import "./booknow1.css"
import { Link } from 'react-router-dom'
function Booknow1() {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <title>Booknow</title>
            <meta content="" name="description"/>
            <meta content="" name="keywords"/>
            <link rel="stylesheet" type="text/css" href="style.css"/>
            <link rel="stylesheet" type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"/>
            <link rel="stylesheet" type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>
        </head>
        <body>
        <div class="contact-in">
            <div class="contact-map">
                <div class="contact-form">
                    <h1 id="bn">Book now</h1>
                    <form>
                        <div class="aj">
                        <input type="text" placeholder="Enter the full address"/>
                            <p id="pud1">Pick up Date & Time:</p>
                        <input id="pud" type="date"/>
                            <input id="pud" type="time"/>
                            <p id="pud2">Final Date & Time:</p>
                            <input id="pud" type="date"/>
                            <input id="pud" type="time"/>
                        </div>
                        <Link to='/thanks'>
                        <button id='bkbtn' type="Submit" >Book Now</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
        <div class="wsa">
            <h3 id="wsa">We serve all around</h3>
            <h2 id="cbe">Coimbatore</h2>
        </div>
        <div class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.47388557818!2d76.89719422191244!3d11.01170157336009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1653020754487!5m2!1sen!2sin"
                width="30%" height="100%" frameborder="1"  allowFullScreen="" aria-hidden="false" tabindex="0" > </iframe>
        </div>
        </body>
        </html>

    );
}
export default Booknow1;