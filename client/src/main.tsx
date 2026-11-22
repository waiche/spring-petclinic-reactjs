import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { browserHistory as history } from 'react-router';

require('./styles/less/petclinic.less');

// The Application
import Root from './Root';

// Render Application
const mountPoint = document.getElementById('mount');
ReactDOM.render(<Root history={history}/>, mountPoint);

declare var module: any;
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextApp = require('./Root').default;
    ReactDOM.render(<NextApp history={history} />, mountPoint);
  });
}
