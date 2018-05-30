import React, { Component } from 'react';
import 'bulma-extensions/bulma-pricingtable/dist/bulma-pricingtable.min.css';
import { PricingTable } from '../components/pricing_table/pricingTable';
import { PricingPlan } from '../components/pricing_table/pricingPlan';
import faReact from '@fortawesome/fontawesome-free-brands/faReact';
import faToolbox from '@fortawesome/fontawesome-free-solid/faToolbox';
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket';
import WelcomeText from '../components/welcome/WelcomeText';
import logo from '../wisemedia_logo_white.svg';

class SquirrelTestAssignment extends Component {
  render() {
    return (
      <div>
        <section className="hero is-small is-danger is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src={logo} alt="BrandLogo" width="150" height="100" />
              <WelcomeText text={'Test assignment'} font={'Bangers'} />
            </div>
          </div>
        </section>
        <section className='hero is-fullheight'>
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-three-quarters">
                  <div className="content">
                    <p className="has-text-grey-light has-text-centered">
                      <strong>Create a Ruby on Rails application from scratch. </strong>
                      Integrate the <strong>OpenWeatherMap 5 days/3 hour forecast API method. </strong>
                      Write the integration yourself. <strong>Gather data from 3 cities: </strong><i>Tallinn, Tartu and Brno. </i>
                      Store and display the data.
                      <strong>The data should be easy to understand.</strong>
                    </p>
                  </div>
                  <PricingTable>
                    <PricingPlan
                      planHeader={'Requirements'}
                      planClasses={'animated fadeInDownBig'}
                      icon={faToolbox}
                      isFeatures={'is-features'}
                      iconSize={'4x'}
                      planItems={[
                        'Web UI',
                        'API Integration',
                        'Inserting Data',
                        'Querying the API',
                        'Test coverage',
                        'User authentication',
                        'Verify permissions'
                      ]}
                    />
                    <PricingPlan
                      planHeader={'Easy path'}
                      planClasses={'is-active animated fadeInLeftBig'}
                      icon={faReact}
                      iconSize={'4x'}
                      iconColor={'has-text-primary'}
                      isSpinning={true}
                      planItems={[
                        <strong>Index, show and modify</strong>,
                        <strong>Optional</strong>,
                        <strong>Web UI</strong>,
                        <strong>N/A</strong>,
                        <i>Optional</i>,
                        <i>Optional</i>,
                        <i>Optional</i>,
                      ]}
                    />
                    <PricingPlan
                      planHeader={'Advanced path'}
                      planClasses={'animated fadeInRightBig'}
                      icon={faRocket}
                      iconSize={'4x'}
                      iconColor={'has-text-danger'}
                      planItems={[
                        <strong>Index and show</strong>,
                        <strong>Required</strong>,
                        <strong>API</strong>,
                        <strong>On user input</strong>,
                        <strong>A few relecant cases</strong>,
                        <i>Optional</i>,
                        <i>Optional</i>
                      ]}
                    />
                  </PricingTable>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default SquirrelTestAssignment;
