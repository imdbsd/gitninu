import React, { Component } from 'react'
import { 
    IssueCard,
    Pagination
} from '../../components'
import { getIssues } from '../../requests'

class IssuesList extends Component {
    state = {
        issues: [],
        totalIssues: 0,
        pageInfo: {}
    }
    async componentDidMount() {
        console.log('load issue')
        try {
            const response = await getIssues(this.props.owner, this.props.repo)
            if(response.success === true) {
                this.setState({
                    issues: response.issues.nodes,
                    pageInfo: response.issues.pageInfo,
                    totalIssues: response.issues.totalCount
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
                {Object.keys(this.state.pageInfo).length > 0 && (
                    <Pagination 
                        pageInfo={this.state.pageInfo}
                        totalElement={this.state.totalIssues}
                    />
                )}
            </section>
        )
    }
}

export default IssuesList