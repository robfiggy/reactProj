import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItem;
    if(this.props.projects) {
      projectItem = this.props.projects.map(project => {
        return <ProjectItem onDelete={this.deleteProject.bind(this)} 
                key={project.title} project={project} />
      
    });
  }

  return (
      <div id="latest" className="Projects">
      <h1>Latest</h1>
      {projectItem}
      </div>
      );
    }
  }  

// Projects.propTypes = {
//   projects: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// }

export default Projects;