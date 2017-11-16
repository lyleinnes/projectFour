import React from 'react'

var tickOrNoTick = function(trueFalseState) {
  if (trueFalseState == true) {
    return "true"
  } else if (trueFalseState == false) {
    return ''
  }
}

var checkBoxValue = function(trueFalseState) {
  if (trueFalseState == true) {
    return "on"
  } else if (trueFalseState == false) {
    return "off"
  }
}

const JobDisplay = (props) => {
  return <div className="job-editor">

    <span>role: </span>
    <input value={props.jobObj.jobRole}
    data-key="jobRole" 
    onChange={(event) => props.jobModifier(event.target)} />

    <span>company: </span>
    <input value={props.jobObj.company}
    data-key="company"
    onChange={(event) => props.jobModifier(event.target)} />

    <span>contact: </span>
    <input value={props.jobObj.contactName}
    data-key="contactName"
    onChange={(event) => props.jobModifier(event.target)} />

    <span>date applied: </span>
    <input value={props.jobObj.dateApplied}
    data-key="dateApplied"
    onChange={(event) => props.jobModifier(event.target)} />

    <span>interview date: </span>
    <input value={props.jobObj.interviewDate}
    data-key="interviewDate"
    onChange={(event) => props.jobModifier(event.target)} />

    <span>salary: </span>
    <input
    value={props.jobObj.salary}
    data-key="salary"
    onChange={(event) => props.jobModifier(event.target)} />

    <span>code test completed? </span>
    <input type="checkbox"
    data-key="testComplete"
    onChange={(event) => props.booleanJobModifier(event.target)}
    checked={tickOrNoTick(props.jobObj.testComplete)}
    value={checkBoxValue(props.jobObj.testComplete)} />

    <span>job offer? </span>
    <input type="checkbox"
    data-key="jobOffer"
    onChange={(event) => props.booleanJobModifier(event.target)}
    checked={tickOrNoTick(props.jobObj.jobOffer)}
    value={checkBoxValue(props.jobObj.jobOffer)} />

    <span>cover letter: </span>
    <textarea value={  props.jobObj.coverLetter}
    data-key="coverLetter"
    onChange={(event) => props.jobModifier(event.target)}
    cols="160"
    rows="20"></textarea>

    <button onClick={() => props.deleteJob()}>delete job</button>

  </div>
}

export default JobDisplay

