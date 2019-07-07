import React, { Component, Fragment } from 'react'
import { Navbar } from '../Navbar'
import { SearchForm } from '../SearchForm'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <section className="section">
                    <SearchForm />
                </section>
            </Fragment>
        )
    }
}
