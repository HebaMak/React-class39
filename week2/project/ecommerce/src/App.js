import './App.css';
import Categories from './components/Categories';
import Products from './components/Products';
import ProductContext from './hooks/context';

function App() {
  return (
    <ProductContext>
      <h1 className="title">Products</h1>
      <Categories />
      <Products />
    </ProductContext>
  );
}

export default App;
