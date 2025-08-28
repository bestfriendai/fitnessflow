import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Users, 
  DollarSign,
  Calendar,
  Clock,
  Download
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const Analytics: React.FC = () => {
  const [timeframe, setTimeframe] = useState('monthly');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const revenueData = [
    { month: 'Jan', revenue: 18000, members: 180, classes: 145 },
    { month: 'Feb', revenue: 20000, members: 195, classes: 160 },
    { month: 'Mar', revenue: 22000, members: 210, classes: 175 },
    { month: 'Apr', revenue: 21000, members: 205, classes: 170 },
    { month: 'May', revenue: 23000, members: 220, classes: 180 },
    { month: 'Jun', revenue: 24680, members: 235, classes: 195 },
  ];

  const membershipDistribution = [
    { name: 'Basic', value: 450, color: '#3b82f6' },
    { name: 'Premium', value: 320, color: '#d946ef' },
    { name: 'VIP', value: 180, color: '#f97316' },
  ];

  const classPopularity = [
    { name: 'HIIT', attendance: 85, capacity: 100 },
    { name: 'Yoga', attendance: 92, capacity: 100 },
    { name: 'Pilates', attendance: 78, capacity: 100 },
    { name: 'Spin', attendance: 95, capacity: 100 },
    { name: 'CrossFit', attendance: 88, capacity: 100 },
  ];

  const peakHours = [
    { hour: '6:00', members: 45 },
    { hour: '7:00', members: 85 },
    { hour: '8:00', members: 120 },
    { hour: '9:00', members: 95 },
    { hour: '10:00', members: 65 },
    { hour: '11:00', members: 55 },
    { hour: '12:00', members: 75 },
    { hour: '17:00', members: 90 },
    { hour: '18:00', members: 135 },
    { hour: '19:00', members: 110 },
    { hour: '20:00', members: 85 },
    { hour: '21:00', members: 45 },
  ];

  const keyMetrics = [
    {
      title: 'Monthly Revenue',
      value: '$24,680',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: <DollarSign className="h-6 w-6" />,
      description: 'Total revenue this month'
    },
    {
      title: 'Member Retention',
      value: '87.4%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: <Users className="h-6 w-6" />,
      description: '3-month rolling average'
    },
    {
      title: 'Class Utilization',
      value: '84.2%',
      change: '+5.7%',
      changeType: 'positive' as const,
      icon: <Calendar className="h-6 w-6" />,
      description: 'Average class fill rate'
    },
    {
      title: 'Avg. Session Duration',
      value: '72 min',
      change: '+3.5%',
      changeType: 'positive' as const,
      icon: <Clock className="h-6 w-6" />,
      description: 'Time spent per visit'
    }
  ];

  const memberEngagement = [
    { category: 'High Engagement', count: 420, percentage: 35.4 },
    { category: 'Medium Engagement', count: 580, percentage: 48.9 },
    { category: 'Low Engagement', count: 187, percentage: 15.7 },
  ];

  const equipmentUsage = [
    { equipment: 'Treadmills', usage: 94, maintenance: 2 },
    { equipment: 'Free Weights', usage: 89, maintenance: 1 },
    { equipment: 'Cable Machines', usage: 76, maintenance: 3 },
    { equipment: 'Rowing Machines', usage: 65, maintenance: 1 },
    { equipment: 'Spin Bikes', usage: 92, maintenance: 0 },
  ];

  const revenueBySource = [
    { source: 'Memberships', amount: 18500, percentage: 75 },
    { source: 'Personal Training', amount: 3200, percentage: 13 },
    { source: 'Classes', amount: 2100, percentage: 8.5 },
    { source: 'Merchandise', amount: 880, percentage: 3.5 },
  ];

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Performance Analytics</h1>
          <p className="text-neutral-600">Comprehensive insights into your gym's performance</p>
        </div>
        <div className="flex gap-2">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="weekly">Last 7 Days</option>
            <option value="monthly">Last 30 Days</option>
            <option value="quarterly">Last 3 Months</option>
            <option value="yearly">Last 12 Months</option>
          </select>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary-600">
                  {metric.icon}
                </div>
                <span className={`text-sm font-medium ${
                  metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-1">{metric.value}</h3>
              <p className="text-sm font-medium text-neutral-700 mb-1">{metric.title}</p>
              <p className="text-xs text-neutral-500">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue & Member Growth */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-neutral-900">Revenue Trend</h3>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={selectedMetric === 'revenue' ? 'default' : 'outline'}
                  onClick={() => setSelectedMetric('revenue')}
                >
                  Revenue
                </Button>
                <Button
                  size="sm"
                  variant={selectedMetric === 'members' ? 'default' : 'outline'}
                  onClick={() => setSelectedMetric('members')}
                >
                  Members
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey={selectedMetric} 
                  stroke="#f43f5e" 
                  fill="#f43f5e" 
                  fillOpacity={0.1}
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold text-neutral-900">Membership Distribution</h3>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={membershipDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                >
                  {membershipDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Class Analytics */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-neutral-900">Class Performance</h3>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={classPopularity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attendance" fill="#d946ef" />
              <Bar dataKey="capacity" fill="#e5e7eb" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Peak Hours & Member Engagement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold text-neutral-900">Daily Peak Hours</h3>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={peakHours}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="members" 
                  stroke="#f97316" 
                  strokeWidth={3}
                  dot={{ fill: '#f97316' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold text-neutral-900">Member Engagement</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {memberEngagement.map((segment, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-neutral-700">{segment.category}</span>
                    <span className="text-sm text-neutral-600">{segment.count} members</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full" 
                      style={{width: `${segment.percentage}%`}}
                    ></div>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-sm text-neutral-500">{segment.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Equipment Usage */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-neutral-900">Equipment Utilization</h3>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">Equipment Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">Usage Rate</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">Maintenance Issues</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {equipmentUsage.map((equipment, index) => (
                  <tr key={index} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-medium text-neutral-900">{equipment.equipment}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-20 bg-neutral-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" 
                            style={{width: `${equipment.usage}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-neutral-700">{equipment.usage}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        equipment.maintenance === 0 
                          ? 'bg-green-100 text-green-800' 
                          : equipment.maintenance <= 2 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {equipment.maintenance} issues
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        equipment.usage >= 85 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {equipment.usage >= 85 ? 'Optimal' : 'Under-utilized'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Breakdown */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-neutral-900">Revenue Sources</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {revenueBySource.map((source, index) => (
              <div key={index} className="text-center p-4 bg-neutral-50 rounded-lg">
                <p className="text-2xl font-bold text-neutral-900">${source.amount.toLocaleString()}</p>
                <p className="text-sm font-medium text-neutral-700 mb-2">{source.source}</p>
                <div className="w-full bg-neutral-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" 
                    style={{width: `${source.percentage}%`}}
                  ></div>
                </div>
                <p className="text-xs text-neutral-500">{source.percentage}% of total</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;