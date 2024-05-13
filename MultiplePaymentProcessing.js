class PaymentProvider {
  processPayment(amount) {
    throw new Error('processPayment method must be implemented');
  }
}

class StripeProvider extends PaymentProvider {
  processPayment(amount) {
    console.log(`Processing payment of ${amount} via Stripe...`);
    // code to interact Stripe API
  }
}

class BraintreeProvider extends PaymentProvider {
  processPayment(amount) {
    console.log(`Processing payment of ${amount} via Braintree...`);
    // code to interact Braintree API
  }
}

class PayPalProvider extends PaymentProvider {
  processPayment(amount) {
    console.log(`Processing payment of ${amount} via PayPal...`);
    // code to interact PayPal API
  }
}

// payment provider factory
class PaymentProviderFactory {
  static createProvider(providerName) {
    switch (providerName.toLowerCase()) {
      case 'stripe':
        return new StripeProvider();
      case 'braintree':
        return new BraintreeProvider();
      case 'paypal':
        return new PayPalProvider();
      default:
        throw new Error('Invalid payment provider');
    }
  }
}

// order processing code
const customerChoice = 'Stripe'; // This is we got from user input
const selectedProvider = PaymentProviderFactory.createProvider(customerChoice);
selectedProvider.processPayment(100); // payment amount
