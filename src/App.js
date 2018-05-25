import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'hover.css/css/hover.css';

import { translate } from 'react-i18next';




import createRoutes from './routes/Routes';

const routes = createRoutes();
class App extends Component {
  render() {
    return routes;
  }
}

export default translate('translations')(App);
