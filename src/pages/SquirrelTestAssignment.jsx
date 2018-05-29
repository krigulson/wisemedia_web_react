import React, { Component } from 'react';
import 'bulma-extensions/bulma-pricingtable/dist/bulma-pricingtable.min.css';
import { PricingTable } from '../components/pricing_table/pricingTable';
import { PricingPlan } from '../components/pricing_table/pricingPlan';
import faReact from '@fortawesome/fontawesome-free-brands/faReact';
import WelcomeText from '../components/welcome/WelcomeText';

class SquirrelTestAssignment extends Component {
  render() {
    return (
      <div>
        <main>
          <section className='bd-index-fullscreen hero is-fullheight'>
            <WelcomeText text={'Test assignment'} />
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-half">
                    <PricingTable>
                      <PricingPlan
                        planHeader={'Easy path'}
                        planClasses={'is-active animated fadeInLeftBig'}
                        icon={faReact}
                        iconColor={'has-text-primary'}
                        isSpinning={true}
                        planItems={[
                          'Index, show and modify',
                          'Optional',
                          'Web UI'
                        ]}
                      />
                      <PricingPlan
                        planHeader={'Advanced path'}
                        planClasses={'is-danger animated fadeInRightBig'}
                        planItems={[
                          'Index and show',
                          'Required',
                          'API',
                          'On user input',
                          'A few relecant cases',
                          'Optional',
                          'Optional'
                        ]}
                      />
                    </PricingTable>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default SquirrelTestAssignment;
