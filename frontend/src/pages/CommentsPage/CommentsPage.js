import React, { Component } from 'react'
import { IssueDisplay } from '../../components'
import { getIssue } from '../../requests'
import { FacebookLoading } from '../../svgIcons'

export default class CommentsPage extends Component {
    state = {
        loadIssue: false,
        issue: {}
    }
    async componentDidMount() {
        try {
            this.setState({loadIssue: true})
            const { owner, repo, number } = this.props.match.params
            const response = await getIssue(owner, repo, number)
            if(response.success === true) {
                this.setState({
                    loadIssue: false,
                    issue: response.issue
                })
            }
            console.log({response})
        }
        catch(e) {
            console.log(e)
        }
    }
    render() {
        const { owner, repo, number } = this.props.match.params
        return (
            <div className="column ">
                {this.state.loadIssue && (
                    <div style={{textAlign: 'center'}}>
                        <FacebookLoading />
                        <p>Loading...</p>
                    </div>
                )}
                {!this.state.loadIssue && (
                    <IssueDisplay 
                        owner={owner}
                        repo={repo}
                        number={number}
                        issue={this.state.issue}
                    />
                )}
            </div>
        )
    }
}
