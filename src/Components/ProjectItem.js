import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
        <li id="listItem" className ="Project">
            <strong>{this.props.project.title}</strong>: {this.props.project.category} <a id="del" href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>&nbsp;X&nbsp;</a>
        </li>
    );
  }
}

// ProjectItem.propTypes = {
//    project: React.PropTypes.object,
//    onDelete: React.PropTypes.func
// }

export default ProjectItem;