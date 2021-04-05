import { Header, Categories, Products, Bag } from './components'

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__main">
        <div className="container">
          <Categories />
          <Products />
          <Bag />
        </div>
        
      </div>
     
    </div>
  );
}

export default App;
