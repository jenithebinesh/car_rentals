import React from 'react'
import "./hatchback.css"
import hat1 from './hat1.jpg';
import hat2 from './hat2.jpg';
import hat3 from './hat3.jpg';
import hat4 from './hat4.jpg';
import { Link } from 'react-router-dom'
function Hatchback() {
    return(
        React.createElement("html", {
            lang: "en"
        }, React.createElement("head", null, React.createElement("meta", {
            charSet: "UTF-8"
        }), React.createElement("meta", {
            content: "width=device-width, initial-scale=1.0",
            name: "viewport"
        }), React.createElement("title", null, "Rentals"), React.createElement("meta", {
            content: "",
            name: "description"
        }), React.createElement("meta", {
            content: "",
            name: "keywords"
        }), React.createElement("link", {
            rel: "stylesheet",
            type: "text/css",
            href: "style.css"
        }), React.createElement("link", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"
        }), React.createElement("link", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        })), React.createElement("body", null, React.createElement("section", {
            className: "headerws",
            id: "header"
        }, React.createElement("div", {
            className: "logo"
        }, React.createElement("div", {
            className: "nav-bar"
        }, React.createElement("a", {
            href: "#"
        }, "JE Rentals"), React.createElement("h2", null, React.createElement("span", null, "Hatchback"), " Corner")), React.createElement("div", {
            className: "wrapperp"
        }, React.createElement("ul", null, React.createElement(Link, {
            to: "/website"
        }, React.createElement("li", null, "home")), React.createElement("li", null, "Cars", React.createElement("ul", null, React.createElement(Link, {
            to: "/suv"
        }, React.createElement("li", null, "SUV")), React.createElement(Link, {
            to: "/premium"
        }, React.createElement("li", null, "Premium")), React.createElement(Link, {
            to: "/hatchback"
        }, React.createElement("li", null, "Hatchback")), React.createElement(Link, {
            to: "/sedan"
        }, React.createElement("li", null, "Sedan")))), React.createElement(Link, {
            to: "/contact"
        }, React.createElement("li", null, "Contact"))))), React.createElement("div", {
            className: "hat-1"
        }, React.createElement("img", {
            id: "pic1",
            src: hat1
        }), React.createElement("img", {
            id: "pic2",
            src: hat2
        })), React.createElement("p", {
            id: "c1hb"
        }, "Hyundai i20 (4 Seater)"), React.createElement("p", {
            id: "c2hb"
        }, "Suzuki Swift (4 Seater)"), React.createElement(Link, {
            to: "/booknow1"
        }, React.createElement("button", {
            type: "Submit",
            id: "sbtbtn1"
        }, "Book Now @600/day")), React.createElement(Link, {
            to: "/booknow1"
        }, React.createElement("button", {
            type: "Submit",
            id: "sbtbtn1"
        }, " Book Now @600/day")), React.createElement("div", {
            className: "pre-2"
        }, React.createElement("img", {
            id: "pic3",
            src: hat3
        }), React.createElement("img", {
            id: "pic4",
            src: hat4
        })), React.createElement("p", {
            id: "c3hb"
        }, "Tata Indica (4 Seater)"), React.createElement("p", {
            id: "c4hb"
        }, "Suzuki Alto 800 (4 Seater)"), React.createElement(Link, {
            to: "/booknow1"
        }, React.createElement("button", {
            type: "Submit",
            id: "sbtbtn2"
        }, "Book Now @600/day")), React.createElement(Link, {
            to: "/booknow1"
        }, React.createElement("button", {
            type: "Submit",
            id: "sbtbtn2"
        }, " Book Now @600/day")), React.createElement("div", {
            className: "move"
        }, React.createElement(Link, {
            to: "/suv"
        }, React.createElement("button", {
            type: "Submit",
            id: "mb1"
        }, "Check SUV")), React.createElement(Link, {
            to: "/premium"
        }, React.createElement("button", {
            type: "Submit",
            id: "mb2"
        }, "Check Premium")), React.createElement(Link, {
            to: "/sedan"
        }, React.createElement("button", {
            type: "Submit",
            id: "mb3"
        }, "Check Sedans"))))))
    );
}
export default Hatchback;