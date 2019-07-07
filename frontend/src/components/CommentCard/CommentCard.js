import React from 'react'

function CommentCard(props) {
    const { comment } = props
    return (
        <article className="comment-card">
            <h3 className="comment-card__header">#{comment.author.login} - {comment.createdAt.split('T')[0]}</h3>
            <div className="comment-card__body" dangerouslySetInnerHTML={{__html: comment.bodyHTML}}></div>
        </article>
    )
}

export default CommentCard