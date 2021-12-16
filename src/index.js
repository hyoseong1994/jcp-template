import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routers from 'routers';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routers />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
