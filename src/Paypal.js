import React from 'react';

import { PayPalButton } from "react-paypal-button-v2";


class Paypal extends React.Component {
    render() {
        return (
          <PayPalButton
            amount="0.01"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
                console.log(JSON.stringify(details));
              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                  orderId: data.orderID
                })
              });
            }}
            options={{
              clientId:
                "AeGv3j0lQQgpIShnSGDQcYUGpbCuXSSqvTqo1ZlTGiCG7L731zkfYMLyCB4GS0bYjp-WDSlop6h1JPgS"
            }}
          />
        );
    }
}
export default Paypal;