import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Banner, Header, Home, ProductDetails, EmptyBag, GuestBag, CheckOut } from './components'

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Banner />
        <div className="app__header">
          <Header />
        </div>
        <div className="app__main">
            <Switch>
            <Route path="/" exact component={Home} />
            <div className="container">              
              <Route path="/product:id" component={ProductDetails} />
              <Route path="/my-bag" component={EmptyBag} />
              <Route path="/checkout" component={CheckOut} />
              <div className="bag-container">
                <Route path="/guest-bag" component={GuestBag} />
              </div>
            </div>
            </Switch>
        </div>     
        </div>
      </Router>
  );
}

export default App;
