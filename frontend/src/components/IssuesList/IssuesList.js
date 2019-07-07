import React, { Component } from 'react'
import { IssueCard } from '../IssueCard'

class IssuesList extends Component {
    componentDidMount() {
        console.log('load issue')
    }
    render() {
        return (
            <section>
                <div className="field">
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
                    <IssueCard />
                </div>
            </section>
        )
    }
}

export default IssuesList