import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav 
                className="navbar is-fixed-top is-dark"
                role="navigation"
                aria-label="main navigation"
            >
                <h1 className="navbar__title">GitNinu</h1>
            </nav>
        )
    }
}
