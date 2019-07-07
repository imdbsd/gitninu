import React, { Component, Fragment } from 'react'

export default class SearchForm extends Component {
    state = {
        name: '',
        repo: ''
    }
    onChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <Fragment>
                {this.props.isOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }}
                        onClick={() => this.props.handleOpenSearchForm(false)}></div>
                )}
                <form className={`form-search ${!this.props.isOpen ? 'form-search--hide' : ''}`}>
                    <div className="field">
                        <div className="control">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Username / Organization" 
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Repository" 
                                name="repo"
                                value={this.state.repo}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-primary">Find</button>
                    </div>
                </form>
            </Fragment>
        )
    }
}
