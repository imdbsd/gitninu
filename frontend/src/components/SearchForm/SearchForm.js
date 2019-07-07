import React, { Component, Fragment } from "react";
import { getRepository } from "../../requests";
import { FacebookLoading } from "../../svgIcons";

export default class SearchForm extends Component {
  state = {
    name: '',
    repo: '',
    isSubmit: false,
    errorMessage: ''
  };
  onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  onSubmit = async e => {
    e.preventDefault();
    this.setState({
        isSubmit: true
    })
    try {
      const response = await getRepository(this.state.name, this.state.repo)
      this.setState({
          isSubmit: false
      })
      console.log(response)
      if(response.success) {
          this.setState({
              errorMessage: ''
          })
          this.props.handleSearchResultChange(response.repository)
      }
      else {
          this.setState({
              errorMessage: response.error.message
          })
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <Fragment>
        {this.props.isOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 8
            }}
            onClick={() => this.props.handleOpenSearchForm(false)}
          />
        )}
        <form
          className={`form-search ${
            !this.props.isOpen ? "form-search--hide" : ""
          }`}
          onSubmit={this.onSubmit}
        >
          {this.state.isSubmit && <FacebookLoading />}
          {!this.state.isSubmit && (
            <Fragment>
              <p style={{ textAlign: "center", marginBottom: "10px" }}>
                Search the repo from the github superstar
              </p>
              {this.state.errorMessage !== '' && (
                  <p className="has-text-danger" style={{fontSize: '12px', margin: '10px auto'}}>{this.state.errorMessage}</p>
              )}
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
            </Fragment>
          )}
        </form>
      </Fragment>
    );
  }
}
