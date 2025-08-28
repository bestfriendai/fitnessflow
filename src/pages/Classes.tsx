import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { 
  Calendar, 
  Plus, 
  Clock, 
  Users, 
  MapPin,
  User,
  Search,
  Edit,
  MoreVertical,
  Star
} from 'lucide-react';

const Classes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');

  const mockClasses = [
    {
      id: '1',
      name: 'Morning Yoga Flow',
      instructor: 'Sarah Johnson',
      category: 'Yoga',
      difficulty: 'Beginner',
      duration: 60,
      capacity: 20,
      enrolled: 15,
      price: 25,
      room: 'Studio A',
      nextSession: new Date('2024-08-20T07:00:00'),
      rating: 4.8,
      description: 'Start your day with gentle yoga flows and mindful breathing.',
      equipment: ['Yoga Mat', 'Blocks', 'Straps']
    },
    {
      id: '2',
      name: 'HIIT Bootcamp',
      instructor: 'Mike Wilson',
      category: 'HIIT',
      difficulty: 'Advanced',
      duration: 45,
      capacity: 15,
      enrolled: 15,
      price: 35,
      room: 'Main Gym',
      nextSession: new Date('2024-08-20T08:30:00'),
      rating: 4.9,
      description: 'High-intensity interval training for maximum calorie burn.',
      equipment: ['Kettlebells', 'Battle Ropes', 'Medicine Balls']
    },
    {
      id: '3',
      name: 'Evening Pilates',
      instructor: 'Emma Davis',
      category: 'Pilates',
      difficulty: 'Intermediate',
      duration: 55,
      capacity: 25,
      enrolled: 18,
      price: 30,
      room: 'Studio B',
      nextSession: new Date('2024-08-20T18:00:00'),
      rating: 4.7,
      description: 'Core strengthening and flexibility with Pilates techniques.',
      equipment: ['Pilates Mat', 'Reformer', 'Resistance Bands']
    },
    {
      id: '4',
      name: 'Spin & Strength',
      instructor: 'Alex Turner',
      category: 'Cycling',
      difficulty: 'Intermediate',
      duration: 90,
      capacity: 20,
      enrolled: 12,
      price: 40,
      room: 'Spin Studio',
      nextSession: new Date('2024-08-20T19:30:00'),
      rating: 4.6,
      description: 'Combine cardio cycling with strength training circuits.',
      equipment: ['Spin Bikes', 'Dumbbells', 'Resistance Bands']
    }
  ];

  const classStats = [
    { label: 'Total Classes', value: '124', change: '+8', icon: <Calendar className="h-5 w-5" /> },
    { label: 'Weekly Sessions', value: '89', change: '+12', icon: <Clock className="h-5 w-5" /> },
    { label: 'Avg. Attendance', value: '82%', change: '+5%', icon: <Users className="h-5 w-5" /> },
    { label: 'Revenue/Class', value: '$847', change: '+15%', icon: <Star className="h-5 w-5" /> }
  ];

  const filteredClasses = mockClasses.filter(classItem => {
    const matchesSearch = classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         classItem.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || classItem.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getOccupancyColor = (enrolled: number, capacity: number) => {
    const percentage = (enrolled / capacity) * 100;
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {classStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change} this week</p>
                </div>
                <div className="text-primary-600">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Class Management */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-bold text-neutral-900">Class Schedule</h2>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                List View
              </Button>
              <Button
                variant={viewMode === 'calendar' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('calendar')}
              >
                Calendar
              </Button>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                New Class
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search classes or instructors..."
                icon={<Search className="h-4 w-4" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Categories</option>
              <option value="Yoga">Yoga</option>
              <option value="HIIT">HIIT</option>
              <option value="Pilates">Pilates</option>
              <option value="Cycling">Cycling</option>
              <option value="Strength">Strength</option>
            </select>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredClasses.map((classItem) => (
              <Card key={classItem.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{classItem.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                        <User className="h-4 w-4" />
                        {classItem.instructor}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{classItem.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-600 mb-4">{classItem.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-neutral-500" />
                      <span>{classItem.duration} min</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-neutral-500" />
                      <span>{classItem.room}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className={`h-4 w-4 ${getOccupancyColor(classItem.enrolled, classItem.capacity)}`} />
                      <span className={getOccupancyColor(classItem.enrolled, classItem.capacity)}>
                        {classItem.enrolled}/{classItem.capacity}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold">${classItem.price}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(classItem.difficulty)}`}>
                      {classItem.difficulty}
                    </span>
                    <span className="text-sm text-neutral-600">
                      Next: {classItem.nextSession.toLocaleDateString()} at{' '}
                      {classItem.nextSession.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-neutral-500 mb-2">Equipment:</p>
                    <div className="flex flex-wrap gap-1">
                      {classItem.equipment.map((item, index) => (
                        <span key={index} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Weekly Schedule Preview */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">This Week's Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day} className="border border-neutral-200 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-neutral-700 mb-2">{day}</h4>
                  <div className="space-y-2">
                    {mockClasses.slice(0, 2).map((classItem, classIndex) => (
                      <div key={classIndex} className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded p-2">
                        <p className="text-xs font-medium text-neutral-900">{classItem.name}</p>
                        <p className="text-xs text-neutral-600">
                          {classItem.nextSession.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Classes;