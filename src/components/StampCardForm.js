import React from 'react';

const StampCardForm = (props) => {
  //patch or post if submit is correct
  //delete if stampcard is new
  return (
    <div>
      <form onSubmit={(e) => props.updateCode(e, props)}>
        <label htmlFor="code">Enter Store Code</label>
        <input type="text" id="code" name="code"/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default StampCardForm;
