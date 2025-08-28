import React from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Users, Calendar, TrendingUp, Clock, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Active Members',
      value: '1,247',
      change: '+12%',
      changeType: 'positive' as const,
      icon: <Users className="h-6 w-6" />,
      color: 'text-fitness-blue'
    },
    {
      title: 'Monthly Revenue',
      value: '$24,680',
      change: '+8%',
      changeType: 'positive' as const,
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'text-fitness-green'
    },
    {
      title: 'Classes Today',
      value: '28',
      change: '+3',
      changeType: 'positive' as const,
      icon: <Calendar className="h-6 w-6" />,
      color: 'text-fitness-purple'
    },
    {
      title: 'Equipment Issues',
      value: '4',
      change: '-2',
      changeType: 'positive' as const,
      icon: <AlertTriangle className="h-6 w-6" />,
      color: 'text-fitness-red'
    }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 18000 },
    { month: 'Feb', revenue: 20000 },
    { month: 'Mar', revenue: 22000 },
    { month: 'Apr', revenue: 21000 },
    { month: 'May', revenue: 23000 },
    { month: 'Jun', revenue: 24680 },
  ];

  const membershipData = [
    { type: 'Basic', count: 450, revenue: 13500 },
    { type: 'Premium', count: 320, revenue: 19200 },
    { type: 'VIP', count: 180, revenue: 27000 },
  ];

  const upcomingClasses = [
    { name: 'Morning Yoga', time: '7:00 AM', instructor: 'Sarah Johnson', capacity: '15/20', status: 'Available' },
    { name: 'HIIT Training', time: '8:30 AM', instructor: 'Mike Wilson', capacity: '20/20', status: 'Full' },
    { name: 'Spin Class', time: '6:00 PM', instructor: 'Emma Davis', capacity: '18/25', status: 'Available' },
    { name: 'CrossFit', time: '7:30 PM', instructor: 'Alex Turner', capacity: '12/15', status: 'Available' },
  ];

  const maintenanceAlerts = [
    { equipment: 'Treadmill #3', issue: 'Belt replacement needed', priority: 'High', dueDate: 'Today' },
    { equipment: 'Rowing Machine #1', issue: 'Routine maintenance', priority: 'Medium', dueDate: '2 days' },
    { equipment: 'Cable Machine', issue: 'Cable fraying', priority: 'High', dueDate: 'Tomorrow' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className={`text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`${stat.color} bg-opacity-10 p-3 rounded-lg`}>
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Revenue Trend</h3>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#f43f5e" 
                  strokeWidth={3}
                  dot={{ fill: '#f43f5e' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Membership Distribution */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Membership Distribution</h3>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={membershipData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#d946ef" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Activity Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Classes */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Today's Classes</h3>
              <Clock className="h-5 w-5 text-neutral-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((classItem, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div>
                    <p className="font-medium text-neutral-900">{classItem.name}</p>
                    <p className="text-sm text-neutral-600">{classItem.instructor} • {classItem.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-neutral-900">{classItem.capacity}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      classItem.status === 'Full' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {classItem.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Maintenance Alerts */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Maintenance Alerts</h3>
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {maintenanceAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                  <div>
                    <p className="font-medium text-neutral-900">{alert.equipment}</p>
                    <p className="text-sm text-neutral-600">{alert.issue}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.priority === 'High' 
                        ? 'bg-red-200 text-red-800' 
                        : 'bg-yellow-200 text-yellow-800'
                    }`}>
                      {alert.priority}
                    </span>
                    <p className="text-sm text-neutral-600 mt-1">{alert.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;