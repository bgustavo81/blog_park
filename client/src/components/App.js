import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PostDelete from './post/PostDelete';
import PostList from './post/PostList';
import PostNew from './post/PostNew';
import PostShow from './post/PostShow';
import PostUpdate from './post/PostUpdate';
import MapNav from './MapNav';
import ParkShow from './ParkShow';
import Landing from './Landing';
import Header from './Header';
import Footer from './Footer';
import history from '../history';




const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                    <Route path='/' exact component={Landing} />
                    <Route path='/post/delete/:id' exact component={PostDelete} />
                    <Route path='/post/new' exact component={PostNew} />
                    <Route path='/post/edit/:id' exact component={PostUpdate} />
                    <Route path='/post/:id' exact component={PostShow} />
                    <Route path='/posts' exact component={PostList} />
                    <Route path='/map' exact component={MapNav} />
                    <Route path='/map/:id' exact component={ParkShow} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    )
};

export default App;