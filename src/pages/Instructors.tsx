import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { 
  UserCheck, 
  Plus, 
  Search,
  Star,
  Calendar,
  Phone,
  Mail,
  Edit,
  MoreVertical,
  Award,
  DollarSign
} from 'lucide-react';

const Instructors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('all');

  const mockInstructors = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      specialties: ['Yoga', 'Pilates', 'Meditation'],
      certifications: ['RYT-500', 'PMA-CPT', 'NASM-CPT'],
      bio: 'Passionate yoga instructor with 8+ years of experience in various yoga styles.',
      hourlyRate: 75,
      rating: 4.9,
      totalClasses: 234,
      monthlyEarnings: 3200,
      availability: [
        { day: 1, startTime: '07:00', endTime: '12:00' },
        { day: 3, startTime: '07:00', endTime: '12:00' },
        { day: 5, startTime: '07:00', endTime: '12:00' }
      ],
      upcomingClasses: [
        { name: 'Morning Yoga Flow', time: '07:00', date: '2024-08-20', enrolled: 15, capacity: 20 },
        { name: 'Evening Pilates', time: '18:00', date: '2024-08-20', enrolled: 18, capacity: 25 }
      ]
    },
    {
      id: '2',
      name: 'Mike Wilson',
      email: 'mike.wilson@email.com',
      phone: '+1 (555) 234-5678',
      specialties: ['HIIT', 'CrossFit', 'Strength Training'],
      certifications: ['NASM-CPT', 'CrossFit L2', 'ACSM-CPT'],
      bio: 'High-energy trainer specializing in functional fitness and strength conditioning.',
      hourlyRate: 85,
      rating: 4.8,
      totalClasses: 189,
      monthlyEarnings: 4100,
      availability: [
        { day: 1, startTime: '06:00', endTime: '10:00' },
        { day: 2, startTime: '06:00', endTime: '10:00' },
        { day: 4, startTime: '06:00', endTime: '10:00' }
      ],
      upcomingClasses: [
        { name: 'HIIT Bootcamp', time: '08:30', date: '2024-08-20', enrolled: 20, capacity: 20 },
        { name: 'Strength & Conditioning', time: '19:00', date: '2024-08-20', enrolled: 12, capacity: 15 }
      ]
    },
    {
      id: '3',
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      phone: '+1 (555) 345-6789',
      specialties: ['Pilates', 'Barre', 'Flexibility'],
      certifications: ['PMA-CPT', 'Barre Above', 'FMS L2'],
      bio: 'Dedicated to helping clients improve posture, flexibility, and core strength.',
      hourlyRate: 70,
      rating: 4.7,
      totalClasses: 156,
      monthlyEarnings: 2800,
      availability: [
        { day: 2, startTime: '09:00', endTime: '14:00' },
        { day: 4, startTime: '09:00', endTime: '14:00' },
        { day: 6, startTime: '09:00', endTime: '14:00' }
      ],
      upcomingClasses: [
        { name: 'Pilates Fundamentals', time: '10:00', date: '2024-08-20', enrolled: 14, capacity: 18 },
        { name: 'Barre Fusion', time: '11:30', date: '2024-08-20', enrolled: 16, capacity: 20 }
      ]
    }
  ];

  const instructorStats = [
    { label: 'Active Instructors', value: '24', change: '+3', icon: <UserCheck className="h-5 w-5" /> },
    { label: 'Avg. Rating', value: '4.8', change: '+0.1', icon: <Star className="h-5 w-5" /> },
    { label: 'Classes This Month', value: '456', change: '+67', icon: <Calendar className="h-5 w-5" /> },
    { label: 'Total Earnings', value: '$28.4K', change: '+12%', icon: <DollarSign className="h-5 w-5" /> }
  ];

  const filteredInstructors = mockInstructors.filter(instructor => {
    const matchesSearch = instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = filterSpecialty === 'all' || 
                           instructor.specialties.some(s => s.toLowerCase().includes(filterSpecialty.toLowerCase()));
    return matchesSearch && matchesSpecialty;
  });

  const getDayName = (dayNum: number) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[dayNum];
  };

  const getSpecialtyColor = (specialty: string) => {
    const colors: { [key: string]: string } = {
      'Yoga': 'bg-green-100 text-green-800',
      'Pilates': 'bg-purple-100 text-purple-800',
      'HIIT': 'bg-red-100 text-red-800',
      'CrossFit': 'bg-orange-100 text-orange-800',
      'Strength Training': 'bg-blue-100 text-blue-800',
      'Barre': 'bg-pink-100 text-pink-800',
      'Meditation': 'bg-indigo-100 text-indigo-800',
      'Flexibility': 'bg-teal-100 text-teal-800'
    };
    return colors[specialty] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructorStats.map((stat, index) => (
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

      {/* Instructor Management */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-bold text-neutral-900">Instructor Management</h2>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Instructor
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search instructors..."
                icon={<Search className="h-4 w-4" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
              className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Specialties</option>
              <option value="yoga">Yoga</option>
              <option value="pilates">Pilates</option>
              <option value="hiit">HIIT</option>
              <option value="crossfit">CrossFit</option>
              <option value="strength">Strength Training</option>
            </select>
          </div>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredInstructors.map((instructor) => (
              <Card key={instructor.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {instructor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900">{instructor.name}</h3>
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{instructor.rating}</span>
                          <span className="text-sm text-neutral-500">({instructor.totalClasses} classes)</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-neutral-600">
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {instructor.email}
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {instructor.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-neutral-600 mb-4">{instructor.bio}</p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, index) => (
                        <span key={index} className={`px-2 py-1 text-xs font-semibold rounded-full ${getSpecialtyColor(specialty)}`}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.certifications.map((cert, index) => (
                        <span key={index} className="flex items-center gap-1 text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded">
                          <Award className="h-3 w-3" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-neutral-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary-600">${instructor.hourlyRate}</p>
                      <p className="text-xs text-neutral-600">Hourly Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-green-600">${instructor.monthlyEarnings.toLocaleString()}</p>
                      <p className="text-xs text-neutral-600">This Month</p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Availability</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.availability.map((slot, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {getDayName(slot.day)} {slot.startTime}-{slot.endTime}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Classes */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Upcoming Classes</h4>
                    <div className="space-y-2">
                      {instructor.upcomingClasses.map((classItem, index) => (
                        <div key={index} className="flex items-center justify-between text-sm bg-white border border-neutral-200 rounded p-2">
                          <div>
                            <p className="font-medium text-neutral-900">{classItem.name}</p>
                            <p className="text-neutral-600">{classItem.date} at {classItem.time}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${
                              classItem.enrolled === classItem.capacity ? 'text-red-600' : 'text-green-600'
                            }`}>
                              {classItem.enrolled}/{classItem.capacity}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {classItem.enrolled === classItem.capacity ? 'Full' : 'Available'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-neutral-900">Top Performers</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockInstructors
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 3)
                .map((instructor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                        index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">{instructor.name}</p>
                        <p className="text-sm text-neutral-600">{instructor.totalClasses} classes</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{instructor.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-neutral-900">Specialty Distribution</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Array.from(new Set(mockInstructors.flatMap(i => i.specialties)))
                .map(specialty => ({
                  name: specialty,
                  count: mockInstructors.filter(i => i.specialties.includes(specialty)).length
                }))
                .sort((a, b) => b.count - a.count)
                .map((specialty, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getSpecialtyColor(specialty.name)}`}>
                      {specialty.name}
                    </span>
                    <span className="font-semibold text-neutral-900">{specialty.count}</span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-neutral-900">Monthly Earnings</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockInstructors
                .sort((a, b) => b.monthlyEarnings - a.monthlyEarnings)
                .map((instructor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-neutral-900">{instructor.name}</p>
                      <p className="text-sm text-neutral-600">${instructor.hourlyRate}/hr</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">${instructor.monthlyEarnings.toLocaleString()}</p>
                      <p className="text-sm text-neutral-600">This month</p>
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

export default Instructors;