import React, { Component, Fragment } from 'react'
import { 
    SearchForm, 
    ButtonSearchForm, 
    LandingComponent, 
    RepositoryInfo,
    IssuesList
} from '../../components'

export default class SearchPage extends Component {
    state = {
        openForm: false,
        searchResult: {
            // id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
            // name: "react",
            // openIssues: {totalCount: 572},
            // owner: {login: "facebook", avatarUrl: "https://avatars3.githubusercontent.com/u/69631?v=4"},
            // totalIssues: {totalCount: 7646},
            // closedIssues: {totalCount: 7074}
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
                    <Fragment>
                        <RepositoryInfo info={this.state.searchResult}/>
                        <IssuesList 
                            owner={this.state.searchResult.owner.login}
                            repo={this.state.searchResult.name}
                        />
                    </Fragment>
                )}
            </Fragment>
        )
    }
}
