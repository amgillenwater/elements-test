import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

//this is a test key associated with a stripe account i made, not lumen's stripe acct
const PUBLISHABLE_KEY = 'pk_test_51N4On7Fkgwpl28Kyc9HjXRafjtIQRfZlpWt7GoqESTs4AUdTo5Gl5hwIUi48JNVWC66JlIwKrt5BI6yx9tvJEXjX00o7fKtL8u'
const stripePromise = loadStripe(PUBLISHABLE_KEY)

export default function StripeWrapper(){
  return(
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  )
}