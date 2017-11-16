import React from 'react';
import TextField from 'material-ui/TextField';


const CoverLetter = (props) => {
  return <div className="cover-letter">

    <TextField
    value={  props.jobObj.coverLetter}
    data-key="coverLetter"
    onChange={(event) => props.jobModifier(event.target)}
    floatingLabelText="Cover letter"
    multiLine={true}
    fullWidth={true}
    /><br />

  </div>
}

export default CoverLetter

