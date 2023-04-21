import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <Link href="/" className="logo">
        <img src="stripecheck-logo.png" alt="logo" style={{ width: '180px' }} />
      </Link>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
        title="View cart"
        role="button"
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
