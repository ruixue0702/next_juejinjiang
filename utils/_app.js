import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import createStore from "../store/store";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
	}
	console.log('pageProps', pageProps)
    return { pageProps };
  }

  render() {
    console.log('_app', this.props) 
    const { Component, pageProps, store } = this.props;
    return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
    );
  }
}

export default withRedux(createStore)(MyApp);