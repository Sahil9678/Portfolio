import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        const {
            id,
            project_name,
            project_type,
            image
        } = this.props

        console.log(this.props.image)
        return (
            <>
                    <img className='card_img card' src={this.props.image} />
                    <h2 className='card_project_name card'>{project_name}</h2>
                    <p className='card_project_type card'>{project_type}</p>
            </>
        )
    }
}
