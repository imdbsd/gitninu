import React, { Component, Fragment } from 'react'
import { Navbar } from '../Navbar'
import { SearchPage } from '../../pages'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <section className="section">
                    <SearchPage />
                </section>
            </Fragment>
        )
    }
}
