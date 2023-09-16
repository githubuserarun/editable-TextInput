import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {textInput: '', savedInput: '', isEditable: true}

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onChangeStatus = () => {
    const {textInput} = this.state
    this.setState({savedInput: textInput})
    this.setState(prev => ({
      isEditable: !prev.isEditable,
    }))
  }

  render() {
    const {savedInput, isEditable, textInput} = this.state
    const btn = isEditable ? 'Save' : 'Edit'
    console.log(savedInput)
    return (
      <div>
        <div className="textContainer">
          <div>
            <h1>Editable Text Input</h1>
          </div>
          <div className="content">
            {isEditable ? (
              <input
                type="text"
                value={textInput}
                onChange={this.onChangeTextInput}
              />
            ) : (
              <p>{savedInput}</p>
            )}
            <button type="button" onClick={this.onChangeStatus}>
              {btn}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default EditableText
