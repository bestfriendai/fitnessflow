import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Smartphone, 
  Users, 
  Calendar, 
  Trophy, 
  Heart,
  Activity,
  MessageSquare,
  Bell,
  QrCode,
  Download,
  Share2,
  Star,
  Target,
  Zap
} from 'lucide-react';

const MobileApp: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState('workouts');

  const appStats = [
    { label: 'Active Users', value: '1,180', change: '+15%', icon: <Users className="h-5 w-5" /> },
    { label: 'Daily Sessions', value: '427', change: '+23%', icon: <Activity className="h-5 w-5" /> },
    { label: 'Avg. Rating', value: '4.8', change: '+0.2', icon: <Star className="h-5 w-5" /> },
    { label: 'Retention Rate', value: '87%', change: '+5%', icon: <Target className="h-5 w-5" /> }
  ];

  const features = [
    {
      id: 'workouts',
      name: 'Workout Tracking',
      description: 'Members can log workouts, track progress, and follow personalized routines',
      icon: <Activity className="h-6 w-6" />,
      engagement: '92%'
    },
    {
      id: 'classes',
      name: 'Class Booking',
      description: 'Book and manage class reservations, view schedules, and join waitlists',
      icon: <Calendar className="h-6 w-6" />,
      engagement: '78%'
    },
    {
      id: 'social',
      name: 'Social Features',
      description: 'Connect with gym buddies, share achievements, and join challenges',
      icon: <MessageSquare className="h-6 w-6" />,
      engagement: '65%'
    },
    {
      id: 'nutrition',
      name: 'Nutrition Tracking',
      description: 'Log meals, track macros, and get personalized nutrition recommendations',
      icon: <Heart className="h-6 w-6" />,
      engagement: '54%'
    }
  ];

  const memberJourney = [
    {
      stage: 'Check-in',
      description: 'QR code scanning for contactless gym entry',
      icon: <QrCode className="h-5 w-5" />,
      usage: '95%'
    },
    {
      stage: 'Workout',
      description: 'Track exercises, sets, reps, and rest times',
      icon: <Activity className="h-5 w-5" />,
      usage: '87%'
    },
    {
      stage: 'Progress',
      description: 'View analytics, achievements, and goal progress',
      icon: <Trophy className="h-5 w-5" />,
      usage: '73%'
    },
    {
      stage: 'Social',
      description: 'Share workouts and connect with other members',
      icon: <Share2 className="h-5 w-5" />,
      usage: '61%'
    }
  ];

  const mockScreenshots = {
    workouts: [
      { name: 'Workout Dashboard', description: 'Overview of current workout plan and progress' },
      { name: 'Exercise Library', description: 'Comprehensive database with video demonstrations' },
      { name: 'Progress Analytics', description: 'Detailed charts showing strength and cardio improvements' }
    ],
    classes: [
      { name: 'Class Schedule', description: 'Browse and book upcoming fitness classes' },
      { name: 'Class Details', description: 'View instructor info, difficulty, and equipment needed' },
      { name: 'Booking History', description: 'Track past and upcoming class reservations' }
    ],
    social: [
      { name: 'Activity Feed', description: 'See friends\' workouts and achievements' },
      { name: 'Challenges', description: 'Join gym-wide fitness challenges and competitions' },
      { name: 'Leaderboards', description: 'Weekly and monthly fitness rankings' }
    ],
    nutrition: [
      { name: 'Meal Tracker', description: 'Log meals and track daily nutrition intake' },
      { name: 'Recipe Suggestions', description: 'Healthy recipes based on fitness goals' },
      { name: 'Macro Dashboard', description: 'Visual breakdown of daily macronutrient intake' }
    ]
  };

  return (
    <div className="space-y-6">
      {/* App Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {appStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change} this month</p>
                </div>
                <div className="text-primary-600">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* App Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* App Preview */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-neutral-900">FitnessFlow Mobile</h2>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  iOS
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Android
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Phone Mockup */}
            <div className="mx-auto w-64 h-96 bg-neutral-900 rounded-3xl p-2 relative">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                {/* Status Bar */}
                <div className="bg-neutral-100 h-6 flex items-center justify-between px-4 text-xs">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                    <span>100%</span>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="p-4 h-full bg-gradient-to-br from-primary-50 to-secondary-50">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">Welcome back!</h3>
                    <p className="text-sm text-neutral-600">Ready for today's workout?</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-sm">Today's Goal</span>
                        <span className="text-primary-600 text-sm">75%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <h4 className="font-semibold text-sm mb-2">Quick Actions</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                            <QrCode className="h-4 w-4 text-primary-600" />
                          </div>
                          <span className="text-xs">Check In</span>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                            <Calendar className="h-4 w-4 text-secondary-600" />
                          </div>
                          <span className="text-xs">Book Class</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Highlights */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold text-neutral-900">Key Features</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedFeature === feature.id 
                      ? 'bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200' 
                      : 'bg-neutral-50 hover:bg-neutral-100'
                  }`}
                  onClick={() => setSelectedFeature(feature.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      selectedFeature === feature.id ? 'bg-primary-500 text-white' : 'bg-white text-primary-500'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-900 mb-1">{feature.name}</h4>
                      <p className="text-sm text-neutral-600 mb-2">{feature.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-500">User Engagement</span>
                        <span className="text-sm font-semibold text-green-600">{feature.engagement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Member Journey */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-neutral-900">Member Journey</h3>
          <p className="text-neutral-600">How members interact with the mobile app during their gym experience</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {memberJourney.map((stage, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  {index < memberJourney.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-neutral-200 transform -translate-y-1/2 z-0"></div>
                  )}
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white mx-auto relative z-10">
                    {stage.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">{stage.stage}</h4>
                <p className="text-sm text-neutral-600 mb-3">{stage.description}</p>
                <div className="bg-neutral-100 rounded-full px-3 py-1 inline-block">
                  <span className="text-sm font-semibold text-neutral-700">{stage.usage} adoption</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feature Screenshots */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-neutral-900">
            {features.find(f => f.id === selectedFeature)?.name} Screens
          </h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockScreenshots[selectedFeature as keyof typeof mockScreenshots]?.map((screen, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg mb-4 flex items-center justify-center">
                  <Smartphone className="h-16 w-16 text-neutral-400" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">{screen.name}</h4>
                <p className="text-sm text-neutral-600">{screen.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Push Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary-600" />
              <h3 className="text-xl font-semibold text-neutral-900">Push Notifications</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: 'Workout Reminder', message: 'Time for your leg day workout! 💪', time: '2h ago', color: 'bg-blue-100 text-blue-800' },
                { type: 'Class Alert', message: 'Your yoga class starts in 15 minutes', time: '15m ago', color: 'bg-green-100 text-green-800' },
                { type: 'Achievement', message: 'Congratulations! 30-day streak unlocked 🏆', time: '1d ago', color: 'bg-yellow-100 text-yellow-800' },
                { type: 'Social', message: 'Sarah liked your workout progress', time: '2d ago', color: 'bg-purple-100 text-purple-800' }
              ].map((notification, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${notification.color}`}>
                        {notification.type}
                      </span>
                      <span className="text-xs text-neutral-500">{notification.time}</span>
                    </div>
                    <p className="text-sm text-neutral-700">{notification.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent-600" />
              <h3 className="text-xl font-semibold text-neutral-900">Engagement Metrics</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-neutral-700">Daily Active Users</span>
                  <span className="text-sm font-bold text-neutral-900">74%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{width: '74%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-neutral-700">Session Duration</span>
                  <span className="text-sm font-bold text-neutral-900">12.5 min</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-accent-500 to-accent-600 h-2 rounded-full" style={{width: '83%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-neutral-700">Feature Adoption</span>
                  <span className="text-sm font-bold text-neutral-900">89%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: '89%'}}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">4.8</p>
                  <p className="text-sm text-neutral-600">App Store Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">92%</p>
                  <p className="text-sm text-neutral-600">User Satisfaction</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MobileApp;