import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from '../Navbar'
import { SearchPage, CommentsPage } from '../../pages'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <section className="section">
                    <Router>
                        <Route path="/" exact component={SearchPage} />
                        <Route path="/issue/:owner/:repo/:number" component={CommentsPage} />
                    </Router>
                </section>
            </Fragment>
        )
    }
}
