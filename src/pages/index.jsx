import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPages } from '../actions/pages';
import WelcomeText from '../components/welcome/WelcomeText';
import Markdown from 'react-remarkable';

class Page extends Component {
  componentWillMount() {
    this.props.fetchPages();
  }
  renderContent() {
    return this.props.pages.map((page, index) => {
      return (
        <div>
          <WelcomeText text={'About us'} />
          <div className="columns">
            <div className="column is-offset-2 is-8">
              <div className="content is-medium" key={page.sys.id}>
                <Markdown>
                  {page.fields.body}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
        <div className="container section">
          {this.renderContent()}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { pages: state.pages.all };
}
export default connect(mapStateToProps, { fetchPages })(Page);
