import React, {Component} from 'react'

export default class Lib extends Component {

  render() {
    var area = this.props.area;
    var data = this.props.data;

    var libTemplate = data.map(function (item, index) {
      return (
        <div key={index} className={index % 2 == 0 ? "lib_item1" : "lib_item2"}>
          <p className="lib_name">
            {item.url ?
              <a className="lib_url" href={item.url} target="_blank">{item.name}<span className="font-icon-link"/></a> : <span className="lib_url">{item.name}</span>}
          </p>
          <div className="lib_table">
            <div className="lib_row1">
              {item.desc && item.desc}
            </div>
            <div className="lib_row2">
              {item.usage && <a href={item.usage} target="_blank" className="lib_usage">Usage</a>}
            </div>
            <div className="lib_row3">
              {item.github && <a href={item.github} target="_blank" className="lib_github"></a>}
            </div>
          </div>
          {item.gradle &&
          <div className="lib_table">
            <div className="lib_row_gradle1">Gradle:&nbsp;</div>
            <div className="lib_row_gradle2">
              <pre className="lib_pre"><code className="lib_gradle">{item.gradle}</code></pre>
            </div>
          </div>
          }
          <div className="lib_table">
            <div className="lib_row_license">
              {item.license &&
              <a href={item.license_url} target="_blank" className="lib_license">{item.license}</a>}
            </div>
            <div className="lib_row_bintray">
              {item.bintray_latest_version &&
              <p className="lib_bintray_latest_version">
                <a href={item.bintray_latest_version} target="_blank">
                  <img src={item.bintray_img_version} alt="Download"/>
                </a>
              </p>}
            </div>
          </div>
          {item.list &&
          <div style={{marginTop: "25px"}}>{
            item.list.map(function (item, index) {
              return (
                <div className="lib_table">
                  <div className="lib_row_gradle3">{item.name}:&nbsp;</div>
                  {item.gradle &&
                  <div className="lib_row_gradle4">
                    <pre className="lib_pre"><code className="lib_gradle">{item.gradle}</code></pre>
                  </div>
                  }
                </div>
              )
            })
          }</div>
          }
          {item.list2 &&
            <div>{
              item.list2.map(function (item, index) {
                return (
                  <div>
                  <div className="lib_table">
                    <div className="lib_row_gradle5">{item.name}:&nbsp;</div>
                    {item.gradle &&
                    <div className="lib_row_gradle6">
                      <pre className="lib_pre"><code className="lib_gradle">{item.gradle}</code></pre>
                    </div>
                    }
                  </div>
                  {item.desc &&
                    <div className="lib_table" style={{marginBottom:"15px"}}>{item.desc}</div>
                  }
                  </div>
                )
              })
            }
            </div>
          }
        </div>
      )
    })

    return (
      <div id={area + "Area"} className={area == 0 ? "accordion-body collapse lib" : "accordion-body collapse lib"}>
        <div className="accordion-inner lib">
          {libTemplate}
        </div>
      </div>
    )
  }
}