import React, { Component } from 'react';
import JobSearch from '../components/shared/jobSearch';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing">
      <div className="mui-container mui--text-center">
         <h2 className="branding">The can-do job searcher that's right for you</h2>
        <JobSearch history={this.props.history} />
      </div>

      </div>
    );
  }
}

export default Landing;
