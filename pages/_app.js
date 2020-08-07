import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import globalCSS from '../styles/globals.css';
import { createGlobalStyle } from 'styled-components';
import NProgress from 'nprogress';

const GlobalStyle = createGlobalStyle`
  ${globalCSS}
`;

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<link rel="shortcut icon" href="/favicon.ico" />
				</Head>
				<Component {...pageProps} />
				<GlobalStyle />
			</>
		);
	}
}
