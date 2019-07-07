import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar } from '../Navbar'
import { SearchPage } from '../../pages'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <section className="section">
                    <Router>
                        <Route path="/" exact component={SearchPage} />
                    </Router>
                </section>
            </Fragment>
        )
    }
}
