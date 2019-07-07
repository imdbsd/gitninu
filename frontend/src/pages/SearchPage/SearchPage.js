import React, { Component, Fragment } from 'react'
import { SearchForm, ButtonSearchForm, LandingComponent } from '../../components'

export default class SearchPage extends Component {
    state = {
        openForm: false,
        searchResult: [], 
        errorFind: null
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
                {this.state.searchResult.length === 0 && (
                    <LandingComponent />
                )}
            </Fragment>
        )
    }
}
