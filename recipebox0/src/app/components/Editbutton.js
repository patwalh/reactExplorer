import React, {Component} from 'react';
import {render} from 'react-dom';

export class Editbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.rec.title,
      ing: this.props.rec.ingredients
    }
  }
  handleClick() {
    this.props.sd([
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
      <button type="button" className="btn btn-default" data-toggle="modal" data-target={"#" + this.props.id + "model"}>Edit</button>
      <div className="modal fade" id={this.props.id + "model"} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="container-fluid">
              <br/>
              <form>
                <div className="form-group">
                  <label htmlFor="usr">Name:</label>
                  <input type="text" className="form-control" id="usr" defaultValue={this.props.rec.title} onChange={this.handleNameChange.bind(this)}></input>
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Comment:</label>
                  <textarea className="form-control" rows="5" id="comment" defaultValue={this.props.rec.ingredients} onChange={this.handleIngredientsChange.bind(this)}></textarea>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Save</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Exit</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }

}
