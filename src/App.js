import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Banner, Header, Home, Services, ProductDetails, Footer, EmptyBag } from './components'

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
            </div>
            </Switch>
        </div>     
        </div>
      </Router>
  );
}

export default App;
