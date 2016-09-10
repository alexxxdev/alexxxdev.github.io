import React, { Component } from 'react'
import Lib from './Lib'

export default class Section extends Component {

  render() {
    var data = this.props.data;
    var sectionTemplate = data.map(function (item, index) {
      return (
        <div className="accordion-group" key={index}>
          <div className="accordion-heading accordionize app-section">
            <a className="accordion-toggle app-section-title" data-toggle="collapse" data-parent="#accordionArea" href={"#" + index + "Area"}>
              <p style={{margin: "auto"}}>{item.name}</p>
              <span className="font-icon-arrow-simple-down app-section-down"/>
            </a>
          </div>
          <Lib data={item.list} area={index}/>
        </div>
      )
    })

    return (
      <div className="accordion section" id="accordionArea">
        {sectionTemplate}
      </div>
    )
  }
}