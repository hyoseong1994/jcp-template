import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Reouter from './routers';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Reouter />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
