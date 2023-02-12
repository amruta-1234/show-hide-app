// Write your code here
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {isFirstNameHidden: true, isLastNameHidden: true}

  onShowHideFirstName = () => {
    const {isFirstNameHidden} = this.state

    if (isFirstNameHidden === true) {
      this.setState({
        isFirstNameHidden: false,
      })
    }
    if (isFirstNameHidden === false) {
      this.setState({
        isFirstNameHidden: true,
      })
    }
  }

  onShowHideLastName = () => {
    const {isLastNameHidden} = this.state

    if (isLastNameHidden === true) {
      this.setState({
        isLastNameHidden: false,
      })
    }
    if (isLastNameHidden === false) {
      this.setState({
        isLastNameHidden: true,
      })
    }
  }

  render() {
    const {isFirstNameHidden, isLastNameHidden} = this.state

    return (
      <div>
        <h1>Show/Hide</h1>
        <div>
          <div>
            <button type="button" onClick={this.onShowHideFirstName}>
              Show/Hide Firstname
            </button>
            {!isFirstNameHidden ? <p>Joe</p> : ''}
          </div>
          <div>
            <button type="button" onClick={this.onShowHideLastName}>
              Show/Hide Lastname
            </button>
            {!isLastNameHidden ? <p>Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
