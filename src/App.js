import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Header, Search, Home, Services, ProductDetails, Footer } from './components'

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__main">
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/product:id" component={ ProductDetails }/>
          </div>
          <Services />
          <Footer />
        </div>     
        </div>
      </Router>
  );
}

export default App;
