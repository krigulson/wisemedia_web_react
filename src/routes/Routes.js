import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { I18n } from 'react-i18next';
// Import layouts
import MainLayout from '../layouts/MainLayout';
import BlogLayout from '../layouts/BlogLayout';
import Clean from '../layouts/Clean';
// Import components
import PostsIndex from '../components/blog/index';
import Page from '../pages/index';
import Landing from '../pages/LandingPage';
import SquirrelTestAssignment from '../pages/SquirrelTestAssignment';
import Map from '../components/GoogleMap';



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
              <PropsRoute exact path="/" component={Layout} contentComponent={Landing} layout={MainLayout}/>
              <PropsRoute exact path="/about-us" component={Layout} contentComponent={Page} layout={MainLayout} />
              <PropsRoute exact path="/where-i-am" component={Layout} text={t('Where I am then?')} contentComponent={Map} layout={MainLayout} />
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
