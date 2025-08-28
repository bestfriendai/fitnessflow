// Stripe integration for payment processing
// This is a template - integrate with actual Stripe when ready

export interface StripeConfig {
  publishableKey: string;
  secretKey?: string; // Only for backend
}

export const stripeConfig: StripeConfig = {
  publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_example',
  // Secret key should only be used on backend
};

// Payment plans matching the landing page pricing
export const paymentPlans = {
  starter: {
    id: 'price_starter',
    name: 'Starter',
    basePrice: 149, // per month per location
    memberPrice: 3, // per month per active member
    stripePriceId: 'price_1234567890', // Replace with actual Stripe price ID
    features: [
      'Up to 100 members',
      'Basic scheduling',
      'Member management',
      'Mobile app access',
      'Email support'
    ]
  },
  professional: {
    id: 'price_professional',
    name: 'Professional',
    basePrice: 149,
    memberPrice: 3,
    stripePriceId: 'price_0987654321',
    features: [
      'Up to 500 members',
      'Advanced analytics',
      'Equipment tracking',
      'Automated campaigns',
      'Priority support',
      'Custom integrations'
    ]
  },
  enterprise: {
    id: 'price_enterprise',
    name: 'Enterprise',
    basePrice: 149,
    memberPrice: 3,
    stripePriceId: 'price_1122334455',
    features: [
      'Unlimited members',
      'Multi-location support',
      'Advanced reporting',
      'White-label mobile app',
      'Dedicated success manager',
      'API access'
    ]
  }
};

export class StripeService {
  private static stripe: unknown = null;

  static async initializeStripe() {
    if (typeof window !== 'undefined' && !this.stripe) {
      // Uncomment when ready to integrate Stripe
      /*
      const { loadStripe } = await import('@stripe/stripe-js');
      this.stripe = await loadStripe(stripeConfig.publishableKey);
      */
    }
    return this.stripe;
  }

  static async createCheckoutSession(planId: string, memberCount: number = 0) {
    const plan = Object.values(paymentPlans).find(p => p.id === planId);
    if (!plan) {
      throw new Error('Invalid plan selected');
    }

    const totalAmount = plan.basePrice + (memberCount * plan.memberPrice);

    // Mock checkout session for demo
    console.log('Creating checkout session:', {
      planId,
      planName: plan.name,
      memberCount,
      totalAmount,
      stripePriceId: plan.stripePriceId
    });

    // In production, this would call your backend to create a Stripe checkout session
    return {
      sessionId: 'cs_test_example123',
      url: 'https://checkout.stripe.com/pay/cs_test_example123'
    };
  }

  static async redirectToCheckout(sessionId: string) {
    const stripe = await this.initializeStripe();
    if (!stripe) {
      console.error('Stripe not initialized');
      return;
    }

    // Mock redirect for demo
    console.log('Redirecting to checkout session:', sessionId);
    
    // In production:
    /*
    const { error } = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    
    if (error) {
      console.error('Stripe checkout error:', error);
    }
    */
  }

  static async handleSubscriptionWebhook(webhookData: Record<string, unknown>) {
    // Handle Stripe webhooks for subscription events
    console.log('Processing Stripe webhook:', webhookData);
    
    switch (webhookData.type) {
      case 'checkout.session.completed':
        // Handle successful checkout
        break;
      case 'invoice.payment_succeeded':
        // Handle successful payment
        break;
      case 'invoice.payment_failed':
        // Handle failed payment
        break;
      case 'customer.subscription.deleted':
        // Handle subscription cancellation
        break;
      default:
        console.log('Unhandled webhook event type:', webhookData.type);
    }
  }

  static calculateMRR(gyms: number, avgMembersPerGym: number = 200): number {
    // Monthly Recurring Revenue calculation
    const baseRevenue = gyms * paymentPlans.professional.basePrice;
    const memberRevenue = gyms * avgMembersPerGym * paymentPlans.professional.memberPrice;
    return baseRevenue + memberRevenue;
  }

  static calculateARR(mrr: number): number {
    // Annual Recurring Revenue
    return mrr * 12;
  }
}