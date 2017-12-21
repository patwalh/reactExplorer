import React from 'react';
import { render } from 'react-dom';



export class View extends React.Component {

render(){

    return(
      <div contentEditable='true' dangerouslySetInnerHTML={{ __html: this.props.val }}></div>
    )
  }
}
