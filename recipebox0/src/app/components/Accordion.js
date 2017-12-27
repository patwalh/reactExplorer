import React from 'react';
import {render} from 'react-dom'
import {Panel} from './Panel'
import {Addbutton} from "./Addbutton"

export class Accordion extends React.Component {

  render() {
    const panelItems = this.props.rec.map((val, id) => <Panel rec={val} key={id} id={id} del={this.props.del} sd={this.props.sd
}/>);
    return (<div className="container-fluid">
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        {panelItems}
      </div>
      <Addbutton sendData={this.props.sd}/>
    </div>);
  }
}
