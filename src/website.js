import React from 'react'
import './website.css'
import img1 from './img1.jpg';
import lo1 from './lo1.jpg';
import lo2 from './lo2.jpg';
import lo3 from './lo3.jpg';
import lo4 from './lo4.jpg';
import lo5 from './lo5.jpg';
import { Link } from 'react-router-dom'
function Website() {
    return(
        React.createElement("html", {
            lang: "en"
        },React.createElement("head", null,React.createElement("meta", {
            charset: "UTF-8"
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
            class: "headerws",
            id: "headerws"
        },React.createElement("div", {
            class: "nav-bar"
        },React.createElement("div", {
            className: "logo"
        },React.createElement("a", {
            href: "#"
        }, "JE Rentals")),React.createElement("div", {
            className: "wrapper"
        },React.createElement("ul", null,React.createElement("li", null, "home"),React.createElement("li", null,React.createElement("a", {
            href: "#bottomsection"
        }, "About")),React.createElement("li", null, "Cars",React.createElement("ul", null,React.createElement(Link, {
            to: "/suv"
        },React.createElement("li", null, "SUV")),React.createElement(Link, {
            to: "/premium"
        },React.createElement("li", null, "Premium")),React.createElement(Link, {
            to: "/hatchback"
        },React.createElement("li", null, "Hatchback")),React.createElement(Link, {
            to: "/sedan"
        },React.createElement("li", null, "Sedan")))),React.createElement("li", null, "Filter",React.createElement("ul", null,React.createElement("li", null, "Price Range/day",React.createElement("ul", null,React.createElement(Link, {
            to: "/hatchback"
        },React.createElement("li", null, "500-750")),React.createElement(Link, {
            to: "/sedan"
        },React.createElement("li", null, "760-1000")),React.createElement(Link, {
            to: "/suv"
        },React.createElement("li", null, "1000-1200")),React.createElement(Link, {
            to: "/premium"
        },React.createElement("li", null, ">1200")))),React.createElement("li", null, "Type",React.createElement("ul", null,React.createElement(Link, {
            to: "/suv"
        },React.createElement("li", null, "SUV")),React.createElement(Link, {
            to: "/premium"
        },React.createElement("li", null, "Premium")),React.createElement(Link, {
            to: "/hatchback"
        },React.createElement("li", null, "Hatchback")),React.createElement(Link, {
            to: "/sedan"
        },React.createElement("li", null, "Sedan")))))),React.createElement(Link, {
            to: "/contact"
        },React.createElement("li", null, "Contact")))),React.createElement("div", {
            className: "topnav"
        },React.createElement("input", {
            type: "text",
            id: "srch",
            placeholder: "Search Cars ..."
        }))),React.createElement("div", {
            class: "hero"
        },React.createElement("div", {
            class: "row"
        },React.createElement("div", {
            class: "left-sec"
        },React.createElement("div", {
            class: "content"
        },React.createElement("h2", null,React.createElement("span", null, "Introducing"),React.createElement("br", null), "Premium"),React.createElement("div", {
            class: "para"
        },React.createElement("p", null, "Luxury rides now available for super-comfortable journey"))),React.createElement(Link, {
            to: "/premium"
        },React.createElement("button", {
            class: "book-now-btn"
        },React.createElement("a", {
            href: "#"
        }, "Book Now"),React.createElement("span", null,React.createElement("i", {
            className: "fa fa-arrow-circle-o-right"
        }))))),React.createElement("div", {
            class: "right-sec"
        }),React.createElement("div", {
            class: "my-car"
        },React.createElement("div", {
            id: "car"
        },React.createElement("img", {
            src: img1
        }))))),React.createElement("div", {
            class: "line"
        },React.createElement("span", {
            id: "ls"
        })),React.createElement("div", {
            class: "about"
        },React.createElement("a", {
            name: "bottomsection"
        }),React.createElement("p", {
            id: "tt"
        }, "Mission")),React.createElement("div", {
            class: "mission"
        },React.createElement("p", {
            id: "tt1"
        }, "\"We will consistently deliver a quality product, friendly service and great value that make customers confident that Budget is their best car rental choice\"")),React.createElement("div", {
            className: "line"
        },React.createElement("span", {
            id: "ls"
        })),React.createElement("div", {
            className: "lgs"
        },React.createElement("img", {
            id: "lg1",
            src: lo1
        }),React.createElement("img", {
            id: "lg2",
            src: lo2
        }),React.createElement("img", {
            id: "lg3",
            src: lo3
        }),React.createElement("img", {
            id: "lg4",
            src: lo4
        }),React.createElement("img", {
            id: "lg5",
            src: lo5
        }))),React.createElement("script", {
            src: "https://code.jquery.com/jquery-3.6.0.min.js"
        }),React.createElement("script", {
            src: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js"
        })))
    );
}
export default Website;


