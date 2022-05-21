import React from 'react'
import "./suv.css"
import suv1 from './suv1.jpg';
import suv2 from './suv2.jpg';
import suv3 from './suv3.jpg';
import suv4 from './suv4.jpg';
import { Link } from 'react-router-dom'
function Suv() {
    return(

        React.createElement("html", {
            lang: "en"
        },React.createElement("head", null,React.createElement("meta", {
            charSet: "UTF-8"
        }),React.createElement("meta", {
            content: "width=device-width, initial-scale=1.0",
            name: "viewport"
        }),React.createElement("title", null, "Rentals"),React.createElement("meta", {
            content: "",
            name: "description"
        }),React.createElement("meta", {
            content: "",
            name: "keywords"
        }),React.createElement("link", {
            rel: "stylesheet",
            type: "text/css",
            href: "style.css"
        }),React.createElement("link", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"
        }),React.createElement("link", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        })),React.createElement("body", null,React.createElement("section", {
            className: "headerws",
            id: "header"
        },React.createElement("div", {
            className: "logo"
        },React.createElement("div", {
            className: "nav-bar"
        },React.createElement("a", {
            href: "#"
        }, "JE Rentals"),React.createElement("h2", null,React.createElement("span", null, "SUV "), "Corner")),React.createElement("div", {
            className: "wrappers"
        },React.createElement("ul", null,React.createElement(Link, {
            to: "/website"
        },React.createElement("li", null, "home")),React.createElement("li", null, "Cars",React.createElement("ul", null,React.createElement(Link, {
            to: "/suv"
        },React.createElement("li", null, "SUV")),React.createElement(Link, {
            to: "/premium"
        },React.createElement("li", null, "Premium")),React.createElement(Link, {
            to: "/hatchback"
        },React.createElement("li", null, "Hatchback")),React.createElement(Link, {
            to: "/sedan"
        },React.createElement("li", null, "Sedan")))),React.createElement(Link, {
            to: "/contact"
        },React.createElement("li", null, "Contact"))))),React.createElement("div", {
            className: "suv-1"
        },React.createElement("img", {
            id: "pic1",
            src: suv1
        }),React.createElement("img", {
            id: "pic2",
            src: suv2
        })),React.createElement("p", {
            id: "csu1"
        }, "Toyota Innova (7 Seater)"),React.createElement("p", {
            id: "csu2"
        }, "Chevrolet Tavera (7 Seater)"),React.createElement("button", {
            type: "Submit",
            id: "sbtbtn1"
        }, "Book Now @1100/day"),React.createElement("button", {
            type: "Submit",
            id: "sbtbtn1"
        }, " Book Now @1100/day"),React.createElement("div", {
            className: "suv-2"
        },React.createElement("img", {
            id: "pic3",
            src: suv3
        }),React.createElement("img", {
            id: "pic4",
            src: suv4
        })),React.createElement("p", {
            id: "csu3"
        }, "Toyota Innova Crysta (8 Seater)"),React.createElement("p", {
            id: "csu4"
        }, "Suzuki Ertiga (6 Seater)"),React.createElement("button", {
            type: "Submit",
            id: "sbtbtn2"
        }, "Book Now @1100/day"),React.createElement("button", {
            type: "Submit",
            id: "sbtbtn2"
        }, " Book Now @1100/day"),React.createElement("div", {
            className: "move"
        },React.createElement(Link, {
            to: "/premium"
        },React.createElement("button", {
            type: "Submit",
            id: "mb1"
        }, "Check Premium")),React.createElement(Link, {
            to: "/hatchback"
        },React.createElement("button", {
            type: "Submit",
            id: "mb2"
        }, "Check Hatchbacks")),React.createElement(Link, {
            to: "/sedan"
        },React.createElement("button", {
            type: "Submit",
            id: "mb3"
        }, "Check Sedans"))))))
    );
}
export default Suv;