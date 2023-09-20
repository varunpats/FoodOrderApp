import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const openCart = () => {
    setCartIsShown(true);
  }

  const closeCart = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart hideCart={closeCart} />}
      <Header showCart={openCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
