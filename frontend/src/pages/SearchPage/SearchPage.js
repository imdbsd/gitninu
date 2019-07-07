import React, { Component, Fragment } from 'react'
import { SearchForm } from '../../components'

export default class SearchPage extends Component {
    state = {
        openForm: false
    }

    handleOpenSearchForm = (state) => {
        this.setState({openForm: state})
    }

    render() {
        return (
            <Fragment>
                <button className="button button-search is-primary" onClick={() => this.handleOpenSearchForm(true)}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
                <SearchForm isOpen={this.state.openForm}/>
            </Fragment>
        )
    }
}
