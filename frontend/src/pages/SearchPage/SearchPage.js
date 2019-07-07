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

    handleSearchResultChange = (result) => {
        if(result.length > 0) {}
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
                {this.state.searchResult.length > 0 && (
                    <div></div>
                )}
            </Fragment>
        )
    }
}
