import React, { Component } from 'react';
import Project from './Project';

export default class Project_list extends Component {
    render() {
        const projects = this.props.projects;
        return (
            <div className='project_list'>
                <ul className='cards-container'>
                {
                    projects.map(project => {
                        return <li><a href={project.url} style={{textDecoration: 'none'}}><Project key={project.id} {...project} /></a></li>
                    })
                }
                </ul>
            </div>
        )
    }
}

