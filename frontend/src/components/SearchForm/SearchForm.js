import React, { Component, Fragment } from 'react'

export default class SearchForm extends Component {
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
                        onClick={() => alert('click')}></div>
                )}
                <form className={`form-search ${!this.props.isOpen ? 'form-search--hide' : ''}`}>
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
            </Fragment>
        )
    }
}
