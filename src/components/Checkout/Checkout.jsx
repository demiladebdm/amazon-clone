import React from 'react'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from 'react-currency-format'

// Import fixed components
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

//Import styles and Icons
import './Checkout.css'

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();


  return (
    <div className='checkout'>

      <div className="checkout__left">
          <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
          
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
            </div>
          ) : (
            <div>
              <h2 className='checkout__title'>Your Shopping Basket</h2>

              {/* List out all of the checkouts */}
              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )} 
      </div>
      {basket.length > 0 && 
      (
        //react-currency-format
        <div className="checkout__right">
          <h1>Subtotal</h1>
          <Subtotal />
        </div>
      )}

    </div>
      
  )
}

export default Checkout
