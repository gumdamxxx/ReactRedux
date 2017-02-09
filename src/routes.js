import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import  { AppWeather, AppPost } from './components/app';
import PostsNew from './components/posts_new';
import PostsIndex from './components/posts_index';
import PostsShow from './components/posts_show';

class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={AppWeather}></Route>
                <Route path="posts" component={AppPost}>
                    <Route path="new" component={PostsNew}></Route>
                    <Route path="index" component={PostsIndex}></Route>
                    <Route path="/:id" component={PostsShow}></Route>
                </Route>
                <Route path="*" component={AppWeather}></Route>

            </Router>
        )
    }
}

export default Routes;

// export default (
//     <Route path="/" components={AppWeather}>
//         <Route path="posts" components={AppPost}>
//             <IndexRoute components={AppWeather} />
//             <Route path="new" components={PostsNew}></Route>
//             <Route path="index" components={PostsIndex}></Route>
//             <Route path="/:id" components={PostsShow}></Route>
//         </Route>
//         <Route path="*" components={AppWeather}></Route>
//     </Route>
// )

// export default (
//     <Router history={hashHistory}>
//         <Route path="new" component={PostsNew}>
//         </Route>
//     </Router>
// )
