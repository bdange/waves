import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends Component {
  render() {
    const onSuccess = payment => {
      //console.log(JSON.stringify(payment));
      //{"paid":true,"cancelled":false,"payerID":"CWPZQWE733ETC","paymentID":"PAYID-L2HVLEA840301067P077221J","paymentToken":"EC-23C619773E9140627","returnUrl":"https://www.paypal.com/checkoutnow/error?paymentId=PAYID-L2HVLEA840301067P077221J&token=EC-23C619773E9140627&PayerID=CWPZQWE733ETC","address":{"recipient_name":"John Doe","line1":"1 Main St","city":"San Jose","state":"CA","postal_code":"95131","country_code":"US"},"email":"sb-o947c41415918@personal.example.com"}

      this.props.onSuccess(payment);
    };

    const onCancel = data => {
      console.log(JSON.stringify(data));
    };

    const onError = err => {
      console.log(JSON.stringify(err));
    };

    let env = 'sandbox';
    let currency = 'USD';
    let total = this.props.toPay;

    const client = {
      sandbox:
        'AeuOirAD82DVPk9RfmYF3o0P-OnwbGvTB4VEflv5RnPy-kt-PH5mctJSzlKi1aYiLpETiTdCeZ_PD0wK',
      production: ''
    };

    return (
      <div>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: 'large',
            color: 'blue',
            shape: 'rect',
            label: 'checkout'
          }}
        />
      </div>
    );
  }
}
