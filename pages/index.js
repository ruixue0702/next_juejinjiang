import React from 'react'
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import Head from 'next/head'

import { connect, useDispatch } from 'react-redux'
import withRedux from "next-redux-wrapper";
import { getGoldList } from '../store/gold'
import { getGithubList } from '../store/github'

import Gold from '../components/Gold'
import Github from '../components/Github'
import "./index.less"


class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="h100">
                <Head>
                    <title>My page title</title>
                    {/* 定义key属性来避免重复的<head>标签，保证<head>只渲染一次
                    在卸载组件时，<head>的内容将被清除。请确保每个页面都在其<head>定义了所需要的内容 */}
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"  key="viewport" />
                </Head>
                <Layout height="100%">
                    <Header>Header</Header>
                    <Content className="container" >
                        <div className="conlr conleft">
                            <Gold className="h100"/>
                        </div>
                        <div className="conlr conright">
                            <Github className="h100"/>
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}
IndexPage.getInitialProps = async ({ reduxStore }) => {
    await reduxStore.dispatch(getGoldList)
    await reduxStore.dispatch(getGithubList)
    return reduxStore.getState()
}
export default connect()(IndexPage)