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
        pageInfo: {},
        page: 0
    }
    componentDidMount() {
        this.loadIssues()
    }
    loadIssues = async (cursor, direction) => {
        console.log('load issue')
        try {
            const response = await getIssues(this.props.owner, this.props.repo, cursor, direction)
            if(response.success === true) {
                let page = this.state.page
                if(direction) {
                    if(direction === 'after') page++
                    else if(direction === 'before') page--
                }
                this.setState({
                    issues: response.issues.nodes,
                    pageInfo: response.issues.pageInfo,
                    totalIssues: response.issues.totalCount,
                    page
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
                        page={this.state.page + 1}
                        doPaginate={this.loadIssues}
                    />
                )}
            </section>
        )
    }
}

export default IssuesList