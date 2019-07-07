import React, { Component } from 'react'

export default class CommentList extends Component {
    render() {
        console.log(this.props)
        return (
            <section className="comment-card__wrapper">
                Comments: 
                {this.props.comments && this.props.comments.nodes.map(comment => (
                    <article className="comment-card" key={comment.id}>
                        <h3 className="comment-card__header">#{comment.author.login} - {comment.createdAt.split('T')[0]}</h3>
                        <div className="comment-card__body" dangerouslySetInnerHTML={{__html: comment.bodyHTML}}></div>
                    </article>
                ))}
            </section>
        )
    }
}
