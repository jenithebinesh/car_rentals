import React from 'react'
import "./premium.css"
import pre1 from './pre1.jpg';
import pre2 from './pre2.jpg';
import pre3 from './pre3.jpg';
import pre4 from './pre4.jpg';
import { Link } from 'react-router-dom'
function Suv() {
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
        }, "JE Rentals"), React.createElement("h2", null, React.createElement("span", null, "Premium"), " Corner")), React.createElement("div", {
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
            className: "pre-1"
        }, React.createElement("img", {
            id: "pic1",
            src: pre1
        }), React.createElement("img", {
            id: "pic2",
            src: pre2
        })), React.createElement("p", {
            id: "c1"
        }, " BMW Q6 (4 Seater)"), React.createElement("p", {
            id: "c2"
        }, "Mercedez Benz A7 (4 Seater)"), React.createElement(Link, {
            to: "/booknow1"
        }, React.createElement("button", {
            type: "Submit",
            id: "sbtbtn1"
        }, "Book Now @1300/day")), React.createElement(Link, {
            to: "/booknow1"
        }, React.createElement("button", {
            type: "Submit",
            id: "sbtbtn1"
        }, " Book Now @1300/day")), React.createElement("div", {
            className: "pre-2"
        }, React.createElement("img", {
            id: "pic3",
            src: pre3
        }), React.createElement("img", {
            id: "pic4",
            src: pre4
        })), React.createElement("p", {
            id: "c3"
        }, "Audi A6 (4 Seater)"), React.createElement("p", {
            id: "c4"
        }, "MG Hector 7 (4 Seater)"), React.createElement(Link, {
            to: "/booknow1"
        }, React.createElement("button", {
            type: "Submit",
            id: "sbtbtn2"
        }, "Book Now @1300/day")), React.createElement(Link, {
            to: "/booknow1"
        }, React.createElement("button", {
            type: "Submit",
            id: "sbtbtn2"
        }, " Book Now @1300/day")), React.createElement("div", {
            className: "move"
        }, React.createElement(Link, {
            to: "/suv"
        }, React.createElement("button", {
            type: "Submit",
            id: "mb1"
        }, "Check SUV")), React.createElement(Link, {
            to: "/hatchback"
        }, React.createElement("button", {
            type: "Submit",
            id: "mb2"
        }, "Check Hatchbacks")), React.createElement(Link, {
            to: "/sedan"
        }, React.createElement("button", {
            type: "Submit",
            id: "mb3"
        }, "Check Sedans"))))))
    );
}
export default Suv;