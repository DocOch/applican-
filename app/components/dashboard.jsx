import React from 'react';
import { connect } from 'react-redux';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import JobStepper from './jobStepper';
import { updateJobStatusAPI, toggleJobListingStatus, deleteJob } from '../actions/actions';


const Dashboard = props => (
  <Container>
    <h2>Job Search Summary</h2>
    <Row>
      <Col xs="2">
        <Panel>
          <div>
            Total Job Applications
          </div>
        </Panel>
      </Col>
      <Col xs="2" >
        <Panel>
          <div>
            Total Job Applications
          </div>
        </Panel>
      </Col>
      <Col xs="6">
        <Panel>
          <div>
            Chart
          </div>
        </Panel>
      </Col>
    </Row>
    <Row>
      <h3>Saved Jobs</h3>
      <table className="mui-table">
        <thead>
          <tr>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.userJobs.filter(job => job.status < 0).map(job =>
            (<tr key={Math.random()}>
              <td width={50}>
                <span>
                  <button
                    className="mui-btn mui-btn--fab mui-btn--danger mui-btn--small"
                    onClick={() => props.addJobToQueue(job)}
                  >+
                  </button>
                </span>
              </td>
              <td>{job.jobTitle}</td>
              <td>{job.company}</td>
              <td>{job.date}</td>
            </tr>))
          }
        </tbody>
      </table>
    </Row>
    <Row>
      <h3>In Progress</h3>
      <table className="mui-table">
        <thead>
          <tr>
            <th>Remove</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Date</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {props.userJobs.filter(job => job.status >= 0).map(job =>
            (<tr key={Math.random()}>
              <td width={50}>
                <button
                  className="mui-btn mui-btn--fab mui-btn--accent mui-btn--small"
                  onClick={() => props.deleteJob(job)}
                >+</button>
              </td>
              <td>{job.jobTitle}</td>
              <td>{job.company}</td>
              <td>{job.date}</td>
              <td>
                <JobStepper job={job} handleProgressClick={props.toggleJobStatus}/>
              </td>
            </tr>))
          }
        </tbody>
      </table>
    </Row>
  </Container>

);

const mapStateToProps = state => ({ userJobs: state.userJobs });
const mapDispatchToProps = dispatch => ({
  addJobToQueue(job) {
    dispatch(updateJobStatusAPI(job, 0));
  },
  toggleJobStatus(numString, job) {
    const incrementer = Number(numString);
    dispatch(updateJobStatusAPI(job, incrementer));
  },
  deleteJob(job) {
    dispatch(deleteJob(job));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
