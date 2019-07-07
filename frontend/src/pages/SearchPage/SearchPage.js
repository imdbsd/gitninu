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
        searchResult: {}, 
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

    componentWillUnmount() {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('searchPageResultHistory', JSON.stringify(this.state.searchResult))
        } 
    }

    componentDidMount() {
        if (typeof(Storage) !== "undefined") {
            if(localStorage.getItem('searchPageResultHistory') !== null) {
                const searchPageResultHistory = localStorage.getItem('searchPageResultHistory')
                this.setState({
                    searchResult: JSON.parse(searchPageResultHistory)
                })
            }
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
