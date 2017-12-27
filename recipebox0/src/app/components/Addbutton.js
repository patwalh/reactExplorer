import React, {Component} from 'react';
import {render} from 'react-dom';

export class Addbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ing: []
    }
  }
  sendMethod() {
    this.props.sendData([
      this.state.name, ...this.state.ing
    ]);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  handleIngredientsChange(e) {
    this.setState({ing: e.target.value.split(',')})
  }

  render() {
    return (<div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Add Items</button>
      <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="container-fluid">
              <br/>
              <form>
                <div className="form-group">
                  <label htmlFor="usr">Name:</label>
                  <input type="text" className="form-control" id="usr" onChange={this.handleNameChange.bind(this)}></input>
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Ingredients:</label>
                  <textarea className="form-control" rows="5" id="comment" onChange={this.handleIngredientsChange.bind(this)}></textarea>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.sendMethod.bind(this)}>Add Item</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }

}
