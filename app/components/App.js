import React from 'react'
import _ from 'lodash'
import JobDisplay from './JobDisplay'
import CoverLetter from './CoverLetter'
import RaisedButton from 'material-ui/RaisedButton';


// import JobBar from './JobBar'

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
    this.updateCheck = this.updateCheck.bind(this)
    this.state = {
      jobIndex: 1,
      jobs: [
        {
          jobRole: 'JuniorDev',
          company: 'Isobar',
          contactName: 'John Smith',
          interviewDate: 'NA',
          testComplete: false,
          coverLetter: 'cover letter goes here',
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
          coverLetter: 'cover letter goes here',
          jobOffer: false,
          salary: '$75,000',
          dateApplied: 'November 11 2017'
        },
        {
          jobRole: 'UltraDev',
          company: 'Oddyssey',
          contactName: 'Steve Jobs',
          interviewDate: 'NA',
          testComplete: false,
          coverLetter: 'cover letter goes here',
          jobOffer: false,
          salary: '$140,000',
          dateApplied: 'November 11 2017'
        }
      ]
    }
  }

  listJobs(job, index) {
    return <RaisedButton
    key={index}
    label={job.jobRole}
    fullWidth={true}
    onClick={() => this.setJobIndex(job)} />

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
    })
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  booleanJobModifier(job) {
    var jobs = this.state.jobs
    jobs[this.state.jobIndex][job.dataset.key] = !jobs[this.state.jobIndex][job.dataset.key]
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
          <ul>
            {this.state.jobs.map(this.listJobs)}
          </ul>
            <div>
            <RaisedButton
            className="raised-button"
            label="New job application"
            fullWidth={true}
            onClick={this.newJob} />
          </div>
        </div>

        {this.state.jobIndex != null && <JobDisplay jobObj={currentJob}
        jobModifier={this.jobModifier}
        booleanJobModifier={this.booleanJobModifier}
        deleteJob={this.deleteJob}
        />}

        {this.state.jobIndex != null && <CoverLetter jobObj={currentJob}
        jobModifier={this.jobModifier}
        booleanJobModifier={this.booleanJobModifier}
        deleteJob={this.deleteJob}
        />}

      </div>
    )
  }
}

module.exports = App