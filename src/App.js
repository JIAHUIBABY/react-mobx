import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
@inject('homeStore')
@observer
class ComponentName extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.homeStore.num}</h3>
        <button onClick={() => { this.props.homeStore.add() }}>加一</button>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props.homeStore.total)
  }
}
export default ComponentName;
