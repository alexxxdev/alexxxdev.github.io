import React, { Component } from 'react'
import ScrollUp from 'react-scroll-up'
import Section from './Section'

export default class App extends Component {
  render() {
    return (
      <div className="container app">
        <div className="row app-row">
          <div className="span12 app-title-page">
            <div className="title-page">
              <h2 className="title app-title">Welcome</h2>
              <h3 className="title-description app-desc">List of awesome Android libraries*</h3>
            </div>
          </div>
        </div>
        <div className="row app-row">
          <Section data={libs}/>
        </div>
        <ScrollUp showUnder={300}
                  easing={'easeOutCubic'}
                  duration={500}>
            <i className="font-icon-arrow-light-round-up-circle app-scroll-top"></i>
        </ScrollUp>
        <div className="row app-row" style={{marginTop:"20px"}}>
          *use a with a mind and only where it is really necessary
        </div>
        <div className="row app-row" style={{marginTop:"80px"}}>
          <p className="contact">Contacts:</p>
          <p className="contact"><span className="font-icon-social-email"/> <a href="mailto:alexxxdev@ya.ru" className="contact">alexxxdev@ya.ru</a></p>
          <p className="contact"><span className="icon-social-telegram"/> <a href="https://telegram.me/alexxxdev" className="contact">alexxxdev</a></p>
          <p className="contact"><span className="font-icon-social-skype"/> <a href="skype:alexxxdev" className="contact">alexxxdev</a></p>
          <p className="contact"><span className="font-icon-social-linkedin"/> <a href="https://www.linkedin.com/in/alexxxdev" className="contact">alexxxdev</a></p>
        </div>
      <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ru_RU" data-type="horizontal" data-theme="dark" data-vanity="alexxxdev"><a class="LI-simple-link" href='https://ru.linkedin.com/in/alexxxdev?trk=profile-badge'>Алексей Дерендяев</a></div>
      </div>
    )
  }
}
