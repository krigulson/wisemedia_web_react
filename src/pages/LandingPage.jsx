import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import { Transition, animated } from 'react-spring'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'

const defaultStyles = {
  color: 'white',
  fontFamily: 'Bangers',
  textTransform: 'uppercase',
  marginLeft: '1rem',
}

class Landing extends Component {
  state = {
    items: [],
  };
  componentDidMount() {
    let { items } = this.state;
    let checklist = [
      'working with innovative technologies',
      'being part of a really wise team',
      'gaining experience from the best'
    ]
    checklist.forEach((text, i) => {
      setTimeout(() => {
        items.push(text);
        this.setState({ items: items });
      }, 2000 * (i + 1));
    });
  }

  render () {
    const {items} = this.state;
    return (
      <I18n>
        {
          (t) => {
            return (
              <section className="hero is-medium is-danger is-bold">
                <div className="hero-body">
                  <div className="container">
                    <div className="columns is-centered">
                      <div className="column is-two-thirds is-offset-1">
                        <Transition
                          native
                          keys={ items }
                          from={{ opacity: 0, height: 0 }}
                          enter={{ opacity: 1, height: 35 }}>
                          {items.map(item => styles =>
                            <div>
                              <span className="icon has-text-success">
                                <FontAwesomeIcon icon={faCheck} className={'is-size-6-touch is-size-2-desktop'} />
                              </span>
                              <animated.span
                                className="is-size-6-touch is-size-2-desktop"
                                style={{ ...defaultStyles, ...styles }}
                              >
                                {t(item)}
                              </animated.span>
                            </div>
                          )}
                        </Transition>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )
          }
        }
      </I18n>
    )
  }
}

export default Landing;
