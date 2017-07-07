

    import React from 'react';
    import ReactDOM from 'react-dom';

    // import Router from './js/Router.js';
    // import { Router, Route, Link } from 'react-router'
    // import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化

const One = () => (
    <div>
        <h2>首页</h2>
    </div>
)

const Two = () => (
    <div>
        <h2>我是第二页</h2>
    </div>
)

const Lists = ({ match }) => (
    <div>
        <h3>{match.params.ListsId}</h3>
    </div>
)

const List = ({ match }) => (
    <div>
        <h2>我是一个列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/我是第一个哈哈`}>
                    列表下边的第一个
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/我是第二个呵呵`}>
                    列表下边的第二个
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/我是第三个嘿嘿`}>
                    列表下边的第三个
                </Link>
            </li>
        </ul>
        <Route path={`${match.url}/:ListsId`} component={Lists}/>
        <Route exact path={match.url} render={() => (
            <h3>点击上边的列表项此处显示与url地址一样的...</h3>
        )}/>
    </div>
)

const RouterList = () => (
    <Router>
        <div>
            <Link to="/">首页</Link>
            <br/>
            <Link to="/two">第二页</Link>
            <br/>
            <Link to="/Lists">一个列表</Link>
            <br/>
            <Route exact path="/" component={One}/>
            <Route path="/two" component={Two}/>
            <Route path="/Lists" component={List}/>
        </div>
    </Router>
)
export default RouterList
