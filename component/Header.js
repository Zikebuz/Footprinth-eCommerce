import { FaShoppingCart } from 'react-icons/fa';



function Header() {
return <div className="layout-header">
    <h2 className="brand">Footprinth</h2>
    <p>
      <a className="snipcart-checkout snipcart-summary cart-link" href="cart">
        <FaShoppingCart /> <span className="snipcart-total-price custom-cart">NGN 0.00</span>
      </a>
    </p>
  </div>
}

export default Header;