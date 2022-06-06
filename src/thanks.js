import React from 'react'
import "./thanks.css"
import { Link } from 'react-router-dom'
import tick from './tick.jpg';
function Thanks() {
    return (
        React.createElement("html", {
            lang: "en",
            dir: "ltr"
        }, React.createElement("head", null, React.createElement("meta", {
            charSet: "utf-8"
        }), React.createElement("link", {
            rel: "stylesheet",
            href: "style.css"
        })), React.createElement("body", null, React.createElement("div", {
            class: "main"
        }, React.createElement("div", {
            class: "thank"
        }, React.createElement("img", {
            src: tick,
            className: "tick"
        })), React.createElement("div", {
            class: "txt"
        }, React.createElement("p", {
            id: "thanks"
        }, "Your car will arrive soon")))))

    );
}
export default Thanks;
