import React, { Component, Fragment } from 'react'
import { 
    IssueCard,
    Pagination
} from '../../components'
import { getIssues } from '../../requests'

class IssuesList extends Component {
    state = {
        issues: [],
        filter: 'all',
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
            const response = await getIssues(this.props.owner, this.props.repo, cursor, direction, this.state.filter)
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

    onChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(
            this.state.filter !== prevState.filter || 
            this.props.owner !== prevProps.owner || 
            this.props.repo !== prevProps.repo
        ) {
            this.loadIssues()
        }
    }
    
    render() {
        return (
            <section>
                {this.state.totalIssues === 0 && (
                    <div style={{textAlign: 'center', margin: '10px auto'}}>
                        There are no issues
                    </div>
                )}
                {this.state.totalIssues > 0 && (
                    <Fragment>
                        <div className="field" style={{marginBottom: '10px'}}>
                            <label className="label">Filter by</label>
                            <div className="select is-rounded">
                                <select value={this.state.filter} name="filter" onChange={this.onChange}>
                                    <option value="all">all</option>
                                    <option value="OPEN">opened issue</option>
                                    <option value="CLOSED">closed issue</option>
                                </select>
                            </div>
                        </div>
                        <div className="issue-card__wrapper">
                            {this.state.issues.map(issue => (
                                <IssueCard 
                                    key={issue.id}
                                    issue={issue}
                                    owner={this.props.owner}
                                    repo={this.props.repo}
                                />
                            ))}
                            
                        </div>
                        <Pagination 
                            pageInfo={this.state.pageInfo}
                            totalElement={this.state.totalIssues}
                            page={this.state.page + 1}
                            doPaginate={this.loadIssues}
                        />
                    </Fragment>
                )}
                
            </section>
        )
    }
}

export default IssuesList