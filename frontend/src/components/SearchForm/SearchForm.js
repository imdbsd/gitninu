import React, { Component } from 'react'

export default class SearchForm extends Component {
    render() {
        return (
            <form className="form-search">
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Username / Organization" />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Repository" />
                    </div>
                </div>
                <div className="control">
                    <button className="button is-primary">Find</button>
                </div>
            </form>
        )
    }
}
