import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'

//Import higher order components
import { useStateValue } from '../StateProvider'

// Import styles and icons
import './Subtotal.css'

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        {/* price */}
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" /> This Order Contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
