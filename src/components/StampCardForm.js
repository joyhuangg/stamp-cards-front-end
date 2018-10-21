import React from 'react';

const StampCardForm = (props) => {
  return (
    <div>
      <form onSubmit={(e) => props.updateCode(e)}>
        <label htmlFor="code">Enter Code</label>
        <input type="text" id="code" name="code"/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default StampCardForm;
