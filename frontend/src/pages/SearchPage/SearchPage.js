import React, { Component, Fragment } from 'react'
import { SearchForm, ButtonSearchForm, LandingComponent } from '../../components'

export default class SearchPage extends Component {
    state = {
        openForm: false,
        searchResult: {}, 
        errorFind: null
    }

    handleOpenSearchForm = (state) => {
        this.setState({openForm: state})
    }

    handleSearchResultChange = (result) => {
        if(Object.keys(result).length > 0) {
            this.setState({
                searchResult: result, errorFind: null, openForm: false
            })
        }
        else {
            this.setState({
                searchResult: {},
                errorFind: true
            })
        }
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
                    handleSearchResultChange={this.handleSearchResultChange}
                />
                {Object.keys(this.state.searchResult).length === 0 && (
                    <LandingComponent />
                )}
                {Object.keys(this.state.searchResult).length > 0 && (
                    <div></div>
                )}
            </Fragment>
        )
    }
}
