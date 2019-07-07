import React, { Component, Fragment } from 'react'
import { SearchForm, ButtonSearchForm, LandingComponent, RepositoryInfo } from '../../components'

export default class SearchPage extends Component {
    state = {
        openForm: false,
        searchResult: {
            id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
            name: "react",
            owner: {
                login: "facebook"
            },
            totalIssues: {
                totalCount: 7646
            }
        }, 
        errorFind: null
    }

    handleOpenSearchForm = (state) => {
        this.setState({openForm: state})
    }

    handleSearchResultChange = (result) => {
        if(Object.keys(result).length > 0) {
            console.log({result})
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
                    <RepositoryInfo info={this.state.searchResult}/>
                )}
            </Fragment>
        )
    }
}
