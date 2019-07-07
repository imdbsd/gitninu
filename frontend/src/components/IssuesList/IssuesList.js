import React, { Component } from 'react'
import { IssueCard } from '../IssueCard'
import { getIssues } from '../../requests'

class IssuesList extends Component {
    state = {
        issues: [],
        pageInfo: {}
    }
    async componentDidMount() {
        console.log('load issue')
        try {
            const response = await getIssues(this.props.owner, this.props.repo)
            if(response.success === true) {
                this.setState({
                    issues: response.issues.nodes,
                    pageInfo: response.issues.pageInfo
                })
            }
        }
        catch(e) {
            console.log(e)
        }
    }
    render() {
        return (
            <section>
                <div className="field" style={{marginBottom: '10px'}}>
                    <label className="label">Filter by</label>
                    <div className="select is-rounded">
                        <select>
                            <option>all</option>
                            <option>opened issue</option>
                            <option>closed issue</option>
                        </select>
                    </div>
                </div>
                <div className="issue-card__wrapper">
                    {this.state.issues.map(issue => (
                        <IssueCard 
                            key={issue.id}
                            issue={issue}
                        />
                    ))}
                </div>
            </section>
        )
    }
}

export default IssuesList