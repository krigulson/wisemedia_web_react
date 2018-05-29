import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WelcomeText from '../components/welcome/WelcomeText';
import PostsIndex from '../components/blog/index';
import Page from '../pages/index';
import SquirrelTestAssignment from '../pages/SquirrelTestAssignment';
import MainLayout from '../layouts/MainLayout';
import BlogLayout from '../layouts/BlogLayout';

import { I18n } from 'react-i18next';
import Clean from '../layouts/Clean';


const renderMergedProps = (component,  ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      return renderMergedProps(component, props, rest);
    }} />
  );
}

const Layout = (props) => {
  return (
    React.createElement(props.layout, { children: renderMergedProps(props.contentComponent, props) })
  )
}

const createRoutes = () => (
  <I18n>
    {
      (t) => {
        return (
          <BrowserRouter>
            <Switch>
              <PropsRoute exact path="/" component={Layout} color={"primary"} text={t('Hello folks!')} contentComponent={WelcomeText} layout={MainLayout}/>
              <PropsRoute exact path="/about-us" component={Layout} text={t('About us')} contentComponent={Page} layout={MainLayout} />
              <PropsRoute exact path="/where-i-am" component={Layout} text={t('Where I am then?')} contentComponent={WelcomeText} layout={MainLayout} />
              <PropsRoute exact path="/blog" component={Layout} contentComponent={PostsIndex} layout={BlogLayout} />
              <PropsRoute exact path="/purple-squirrel-test" component={Layout} contentComponent={SquirrelTestAssignment} layout={Clean} />
            </Switch>
          </BrowserRouter>
        )
      }
    }
  </I18n>
);

export default createRoutes;
