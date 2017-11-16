import React from 'react'
import _ from 'lodash'
import JobDisplay from './JobDisplay'
import JobBar from './JobBar'

// import NOTNEEDEDPasswordInput from './PasswordInput'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.listJobs = this.listJobs.bind(this)
    this.setJobIndex = this.setJobIndex.bind(this)
    this.jobModifier = this.jobModifier.bind(this)
    this.booleanJobModifier = this.booleanJobModifier.bind(this)
    this.deleteJob = this.deleteJob.bind(this)
    this.newJob = this.newJob.bind(this)
    this.state = {
      jobIndex: null,
      jobs: [
        {
          jobRole: 'JuniorDev',
          company: 'Isobar',
          contactName: 'John Smith',
          interviewDate: 'NA',
          testComplete: false,
          coverLetter: 'blah',
          jobOffer: false,
          salary: '$50,000',
          dateApplied: 'November 11 2017'
        },
        {
          jobRole: 'MediumDev',
          company: 'ZenDesk',
          contactName: 'Patti Smith',
          interviewDate: 'NA',
          testComplete: false,
          coverLetter: 'blah',
          jobOffer: false,
          salary: '$50,000',
          dateApplied: 'November 11 2017'
        },
        {
          jobRole: 'UltraDev',
          company: 'Oddyssey',
          contactName: 'Steve Jobs',
          interviewDate: 'NA',
          testComplete: false,
          coverLetter: 'blah',
          jobOffer: false,
          salary: '$50,000',
          dateApplied: 'November 11 2017'
        }
      ]
    }
  }

  listJobs(job, index) {
    return <li onClick={() => this.setJobIndex(job)}
    key={index}>
    {job.jobRole}</li>
  }

  setJobIndex(job) {
    this.setState({
      jobIndex: _.findIndex(this.state.jobs, job)
    })
  }

  jobModifier(job) {
    var jobs = this.state.jobs
    jobs[this.state.jobIndex][job.dataset.key] = job.value
    this.setState({
      jobs: jobs,
      jobIndex: null
    })
  }

  booleanJobModifier(job) {
    if (job.value === "off") {
      var stateOfCheckbox = true
    } else if (job.value === "on") {
      var stateOfCheckbox = false
    }
    var jobs = this.state.jobs
    jobs[this.state.jobIndex][job.dataset.key] = stateOfCheckbox
    this.setState({
      jobs: jobs
    })
  }

  deleteJob(job) {
    var jobs = this.state.jobs
    jobs.splice([this.state.jobIndex], 1)
    this.setState({
      jobs: jobs,
      jobIndex: null
    })
  }

  newJob() {
    var jobs = this.state.jobs
    var newJobNum = this.state.jobs.length + 1
    var newJob = 
    {
      jobRole: 'new job ' + newJobNum,
      company: '',
      contactName: '',
      interviewDate: '',
      testComplete: false,
      coverLetter: '',
      jobOffer: false,
      salary: '',
      dateApplied: ''
    }

    var newJobsArr = new Array(...jobs, newJob)
    this.setState({
      jobs: newJobsArr
    })
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
          <button onClick={this.newJob}>new job application</button>
        </div>

        {this.state.jobIndex != null && <JobDisplay jobObj={currentJob}
        jobModifier={this.jobModifier}
        booleanJobModifier={this.booleanJobModifier}
        deleteJob={this.deleteJob}
        />}

      </div>
    )
  }
}

module.exports = App