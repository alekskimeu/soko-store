import { Header, Search, Categories, Products, Bag, Services, Footer } from './components'

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
        <Search />
      </div>
      <div className="app__main">
        <div className="container">
          <Categories />
          <Products />
          <Bag />
        </div>
        <Services />
        <Footer />
      </div>
     
    </div>
  );
}

export default App;
