import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// Shopify //
import {AppProvider} from "@shopify/polaris";
import "@shopify/polaris/styles.css";

ReactDOM.render(
	// <BrowserRouter>
	// 	<App />
	// </BrowserRouter>,
	<AppProvider>
		<App />
		</AppProvider>,
	document.getElementById('root')
)