import React from 'react'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

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

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const JobDisplay = (props) => {
  return <div className="job-editor">

    <TextField
    className="input-item"
    floatingLabelText="Job Title"
    value={props.jobObj.jobRole}
    data-key="jobRole" 
    onChange={(event) => props.jobModifier(event.target)} /><br />

    <TextField
    floatingLabelText="Company name"
    value={props.jobObj.company}
    data-key="company"
    onChange={(event) => props.jobModifier(event.target)} /><br />

    <TextField
    floatingLabelText="Contact name"
    value={props.jobObj.contactName}
    data-key="contactName"
    onChange={(event) => props.jobModifier(event.target)} /><br />

    <TextField
    floatingLabelText="Date applied"
    value={props.jobObj.dateApplied}
    data-key="dateApplied"
    onChange={(event) => props.jobModifier(event.target)} /><br />

    <TextField
    floatingLabelText="Interview date"
    value={props.jobObj.interviewDate}
    data-key="interviewDate"
    onChange={(event) => props.jobModifier(event.target)} /><br />

    <TextField
    floatingLabelText="Salary"
    value={props.jobObj.salary}
    data-key="salary"
    onChange={(event) => props.jobModifier(event.target)} /><br />

    <Checkbox
    data-key="testComplete"
    label="Code test completed"
    checked={props.jobObj.testComplete}
    onCheck={(event) => props.booleanJobModifier(event.target)}
    style={styles.checkbox}
    /><br />

    <Checkbox
    data-key="jobOffer"
    label="Job offered"
    checked={props.jobObj.jobOffer}
    onCheck={(event) => props.booleanJobModifier(event.target)}
    style={styles.checkbox}
    /><br />

    <RaisedButton
    className="raised-button"
    label="Delete job"
    fullWidth={true}
    onClick={() => props.deleteJob()} />

  </div>
}

export default JobDisplay

