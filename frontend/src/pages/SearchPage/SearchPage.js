import React, { Component, Fragment } from 'react'
import { SearchForm, ButtonSearchForm } from '../../components'

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
                <ButtonSearchForm 
                    isShow={!this.state.openForm}
                    handleOpenSearchForm={this.handleOpenSearchForm}
                />
                <SearchForm 
                    isOpen={this.state.openForm}
                    handleOpenSearchForm={this.handleOpenSearchForm}
                />
                <div className="column">
                ¯\_(ツ)_/¯
                </div>
            </Fragment>
        )
    }
}
