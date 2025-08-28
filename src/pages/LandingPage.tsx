import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Target, 
  Users, 
  Calendar, 
  Dumbbell, 
  BarChart3, 
  Smartphone,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Zap,
  Shield,
  Clock,
  DollarSign
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Member Management',
      description: 'Automated billing, retention campaigns, and member engagement tracking with smart analytics.'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Class Scheduling',
      description: 'Intelligent scheduling with instructor management, room optimization, and automated notifications.'
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: 'Equipment Tracking',
      description: 'Preventive maintenance scheduling, issue tracking, and asset management for all gym equipment.'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile App',
      description: 'Member mobile experience with workout tracking, social features, and seamless check-ins.'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Performance Analytics',
      description: 'Real-time insights on member engagement, revenue trends, and operational efficiency.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Automation',
      description: 'Automated workflows for billing, marketing campaigns, and member communication.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Owner, FitCore Gym',
      content: 'FitnessFlow transformed our operations. Member retention increased by 40% and we saved 15 hours per week on admin tasks.',
      rating: 5,
      gymSize: '450 members'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Manager, Iron Paradise',
      content: 'The mobile app keeps our members engaged even outside the gym. Class bookings increased by 60% since implementation.',
      rating: 5,
      gymSize: '320 members'
    },
    {
      name: 'Emma Davis',
      role: 'Owner, Zen Studio',
      content: 'Equipment maintenance tracking alone pays for itself. We prevented 3 major breakdowns last month.',
      rating: 5,
      gymSize: '180 members'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 149,
      memberPrice: 3,
      features: [
        'Up to 100 members',
        'Basic scheduling',
        'Member management',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 149,
      memberPrice: 3,
      features: [
        'Up to 500 members',
        'Advanced analytics',
        'Equipment tracking',
        'Automated campaigns',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 149,
      memberPrice: 3,
      features: [
        'Unlimited members',
        'Multi-location support',
        'Advanced reporting',
        'White-label mobile app',
        'Dedicated success manager',
        'API access'
      ],
      popular: false
    }
  ];

  const stats = [
    { value: '600+', label: 'Gyms & Studios' },
    { value: '240K+', label: 'Active Members' },
    { value: '$1.4M', label: 'ARR Generated' },
    { value: '99.9%', label: 'Uptime SLA' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">FitnessFlow</h1>
                <p className="text-xs text-neutral-500">Gym Management SaaS</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-neutral-600 hover:text-neutral-900">Features</a>
              <a href="#pricing" className="text-neutral-600 hover:text-neutral-900">Pricing</a>
              <a href="#testimonials" className="text-neutral-600 hover:text-neutral-900">Testimonials</a>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                  🚀 Trusted by 600+ Gyms
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Transform Your{' '}
                <span className="text-gradient">Fitness Business</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Complete gym and studio management platform with automated billing, 
                member engagement, and mobile app. Increase retention by 40% and save 15+ hours per week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  14-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  No setup fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Cancel anytime
                </div>
              </div>
            </div>
            
            {/* Hero Image/Demo */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Dashboard Overview</h3>
                    <p className="text-sm text-neutral-600">Real-time gym analytics</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">↗ 24%</p>
                    <p className="text-sm text-green-700">Member Growth</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">$47K</p>
                    <p className="text-sm text-blue-700">Monthly Revenue</p>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Member Retention</span>
                    <span className="text-sm text-green-600 font-semibold">87%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg shadow-lg z-20 animate-bounce">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold text-sm">4.9/5 Rating</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-lg shadow-lg z-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-neutral-900">Setup Complete</p>
                    <p className="text-xs text-neutral-600">Ready in 5 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Everything You Need to <span className="text-gradient">Scale Your Gym</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Complete fitness business management platform with AI-powered insights and member engagement tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Loved by <span className="text-gradient">Gym Owners</span> Worldwide
            </h2>
            <p className="text-xl text-neutral-600">See how FitnessFlow transforms fitness businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                      <p className="text-sm text-neutral-600">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary-600">{testimonial.gymSize}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Simple, <span className="text-gradient">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              $149/month per location + $3/month per active member. No hidden fees.
            </p>
            <div className="bg-white rounded-lg p-4 inline-block shadow-sm">
              <p className="text-sm text-neutral-600 mb-2">Example: 200-member gym</p>
              <p className="text-2xl font-bold text-gradient">$749/month</p>
              <p className="text-xs text-neutral-500">($149 base + $600 for members)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-gradient">${plan.price}</span>
                      <span className="text-neutral-600">/month</span>
                    </div>
                    <p className="text-neutral-600">+ ${plan.memberPrice}/month per active member</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">All plans include 14-day free trial • No setup fees • Cancel anytime</p>
            <div className="flex justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-purple-500" />
                <span>Money-back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Gym?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join 600+ gyms already growing with FitnessFlow. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-neutral-100">
              Start Free Trial - No Credit Card Required
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-6">Setup in 5 minutes • Free migration support included</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <Target className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">FitnessFlow</span>
              </div>
              <p className="text-neutral-400">
                Complete gym and studio management platform for modern fitness businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Mobile App</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">System Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 mt-8 text-center text-neutral-400">
            <p>&copy; 2024 FitnessFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;