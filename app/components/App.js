import React from 'react'
import _ from 'lodash'
// import NOTNEEDEDPasswordInput from './PasswordInput'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.listJobs = this.listJobs.bind(this)
    this.setJobIndex = this.setJobIndex.bind(this)
    this.showJobInfo = this.showJobInfo.bind(this)
    this.state = {
      edit: false,
      jobIndex: null,
      jobs: [
        {
          jobRole: 'JuniorDev',
          company: 'Isobar',
          interviewDate: 'NA',
          contactName: 'John Smith',
          testComplete: true,
          coverLetter: '',
        },
        {
          jobRole: 'MediumDev',
          company: 'ZenDesk',
          interviewDate: 'NA',
          contactName: 'Patti Smith',
          testComplete: true,
          coverLetter: '',
        },
        {
          jobRole: 'UltraDev',
          company: 'Oddyssey',
          interviewDate: 'NA',
          contactName: 'Steve Jobs',
          testComplete: true,
          coverLetter: '',
        }
      ]
    }
  }

  listJobs(job, index) {
    return <li onClick={() => this.setJobIndex(job) }
    key={index}>
    {job.jobRole}</li>
  }

  setJobIndex(job) {
    this.setState({
      jobIndex: _.findIndex(this.state.jobs, job)
    })
  }

  showJobInfo() {
    if (this.state.jobIndex != null) {
      // var jobObj = this.state.jobs[this.state.jobIndex]
      var {jobRole, company, contactName, interviewDate, coverLetter, testComplete} = this.state.jobs[this.state.jobIndex];
    }
    if (this.state.jobIndex != null) {
      return <div>
        <p>job role: {jobRole}</p>
        <p>company: {company}</p>
        <p>contact name: {contactName}</p>
        <p>interview date: {interviewDate}</p>
        {testComplete ? <p>test complete: yes</p> : <p>test complete: no</p> }
        <p>cover letter: {coverLetter}</p>
      </div>
    } else {
      return <h2>click on a job from the left</h2>
    }
  }

  editJob() {
    return <input value="junior dev"></input>
  }


  render() {
    var currentJob = this.state.jobs[this.state.jobIndex]
    return (
      <div className="wrapper">

        <div className="side-bar">
          <h2>Job List</h2>
          <ul>
            {this.state.jobs.map(this.listJobs)}
          </ul>
        </div>

        <div className="job-info">
          {this.state.jobIndex != null && <h2>Job Info</h2>}
          {this.state.jobIndex != null && <button>edit</button>}
          {this.showJobInfo()}  
        </div>

      </div>
    )
  }

}

module.exports = App