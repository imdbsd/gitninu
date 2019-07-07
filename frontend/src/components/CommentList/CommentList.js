import React, { Component } from 'react'
import { CommentCard } from '../../components'

export default class CommentList extends Component {
    render() {
        console.log(this.props)
        return (
            <section className="comment-card__wrapper">
                Comments: 
                {this.props.comments && this.props.comments.nodes.map(comment => (
                    <CommentCard 
                        key={comment.id}
                        comment={comment}
                    />
                ))}
            </section>
        )
    }
}
