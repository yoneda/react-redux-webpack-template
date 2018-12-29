import React from "react";
import { connect } from 'react-redux'

const AboutContainer = ({count}) => {
  return(
    <div>
      <p>texttext</p>
      <p>count: {count}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    count: state.count
  }
}

export default connect(mapStateToProps)(AboutContainer)