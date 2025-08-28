import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { 
  Dumbbell, 
  Plus, 
  Search,
  AlertTriangle,
  CheckCircle,
  Clock,
  Wrench,
  Edit,
  MoreVertical
} from 'lucide-react';

const Equipment: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const mockEquipment = [
    {
      id: '1',
      name: 'Commercial Treadmill Pro X1',
      category: 'Cardio',
      brand: 'TechFit',
      model: 'TX-2000',
      serialNumber: 'TF-TX2000-001',
      location: 'Cardio Zone A',
      status: 'working' as const,
      purchaseDate: new Date('2023-06-15'),
      warrantyExpiry: new Date('2025-06-15'),
      lastMaintenance: new Date('2024-07-15'),
      nextMaintenance: new Date('2024-09-15'),
      cost: 4500,
      maintenanceHistory: [
        { date: new Date('2024-07-15'), type: 'Routine', description: 'Belt alignment and lubrication' },
        { date: new Date('2024-04-10'), type: 'Repair', description: 'Display screen replacement' }
      ]
    },
    {
      id: '2',
      name: 'Olympic Barbell Set',
      category: 'Strength',
      brand: 'IronMax',
      model: 'IM-OLY-45',
      serialNumber: 'IM-OLY-002',
      location: 'Free Weights Area',
      status: 'working' as const,
      purchaseDate: new Date('2023-01-20'),
      warrantyExpiry: new Date('2028-01-20'),
      lastMaintenance: new Date('2024-08-01'),
      nextMaintenance: new Date('2024-11-01'),
      cost: 850,
      maintenanceHistory: [
        { date: new Date('2024-08-01'), type: 'Inspection', description: 'Safety inspection and cleaning' }
      ]
    },
    {
      id: '3',
      name: 'Cable Cross Machine',
      category: 'Strength',
      brand: 'FlexGym',
      model: 'FG-CCM-500',
      serialNumber: 'FG-CCM-003',
      location: 'Strength Training Zone',
      status: 'maintenance' as const,
      purchaseDate: new Date('2022-11-30'),
      warrantyExpiry: new Date('2024-11-30'),
      lastMaintenance: new Date('2024-08-18'),
      nextMaintenance: new Date('2024-08-25'),
      cost: 3200,
      maintenanceHistory: [
        { date: new Date('2024-08-18'), type: 'Repair', description: 'Cable replacement in progress' }
      ]
    },
    {
      id: '4',
      name: 'Rowing Machine Elite',
      category: 'Cardio',
      brand: 'CardioMax',
      model: 'CM-ROW-Elite',
      serialNumber: 'CM-ROW-004',
      location: 'Cardio Zone B',
      status: 'broken' as const,
      purchaseDate: new Date('2023-03-10'),
      warrantyExpiry: new Date('2025-03-10'),
      lastMaintenance: new Date('2024-06-20'),
      nextMaintenance: new Date('2024-08-22'),
      cost: 2800,
      maintenanceHistory: [
        { date: new Date('2024-08-19'), type: 'Repair', description: 'Motor failure - awaiting parts' },
        { date: new Date('2024-06-20'), type: 'Routine', description: 'Preventive maintenance completed' }
      ]
    }
  ];

  const equipmentStats = [
    { label: 'Total Equipment', value: '147', change: '+5', icon: <Dumbbell className="h-5 w-5" /> },
    { label: 'Working', value: '134', change: '+2', icon: <CheckCircle className="h-5 w-5" /> },
    { label: 'In Maintenance', value: '8', change: '+1', icon: <Wrench className="h-5 w-5" /> },
    { label: 'Issues', value: '5', change: '-2', icon: <AlertTriangle className="h-5 w-5" /> }
  ];

  const filteredEquipment = mockEquipment.filter(equipment => {
    const matchesSearch = equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         equipment.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         equipment.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || equipment.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || equipment.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'working':
        return 'bg-green-100 text-green-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'broken':
        return 'bg-red-100 text-red-800';
      case 'retired':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'working':
        return <CheckCircle className="h-4 w-4" />;
      case 'maintenance':
        return <Wrench className="h-4 w-4" />;
      case 'broken':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getMaintenancePriority = (nextMaintenance: Date) => {
    const today = new Date();
    const daysUntil = Math.ceil((nextMaintenance.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysUntil < 0) return { text: 'Overdue', color: 'text-red-600' };
    if (daysUntil <= 7) return { text: `${daysUntil} days`, color: 'text-orange-600' };
    return { text: `${daysUntil} days`, color: 'text-green-600' };
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {equipmentStats.map((stat, index) => (
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

      {/* Equipment Management */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-bold text-neutral-900">Equipment Management</h2>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Equipment
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search equipment..."
                icon={<Search className="h-4 w-4" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Status</option>
              <option value="working">Working</option>
              <option value="maintenance">Maintenance</option>
              <option value="broken">Broken</option>
              <option value="retired">Retired</option>
            </select>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Categories</option>
              <option value="Cardio">Cardio</option>
              <option value="Strength">Strength</option>
              <option value="Functional">Functional</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredEquipment.map((equipment) => (
              <Card key={equipment.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{equipment.name}</h3>
                      <p className="text-sm text-neutral-600">{equipment.brand} {equipment.model}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(equipment.status)}`}>
                        {getStatusIcon(equipment.status)}
                        {equipment.status.charAt(0).toUpperCase() + equipment.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">Location:</span>
                      <span className="font-medium">{equipment.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">Serial:</span>
                      <span className="font-mono text-xs">{equipment.serialNumber}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">Purchase Date:</span>
                      <span>{equipment.purchaseDate.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">Cost:</span>
                      <span className="font-semibold">${equipment.cost.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Maintenance Info */}
                  <div className="bg-neutral-50 rounded-lg p-3 mb-4">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-2">Maintenance</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-600">Last Service:</span>
                        <span>{equipment.lastMaintenance.toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-600">Next Due:</span>
                        <span className={getMaintenancePriority(equipment.nextMaintenance).color}>
                          {getMaintenancePriority(equipment.nextMaintenance).text}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Maintenance History */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-2">Recent Activity</h4>
                    <div className="space-y-2">
                      {equipment.maintenanceHistory.slice(0, 2).map((record, index) => (
                        <div key={index} className="text-sm border-l-2 border-primary-200 pl-3">
                          <div className="flex justify-between items-start">
                            <span className="font-medium">{record.type}</span>
                            <span className="text-neutral-500 text-xs">{record.date.toLocaleDateString()}</span>
                          </div>
                          <p className="text-neutral-600 text-xs mt-1">{record.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Warranty Status */}
                  <div className="border-t border-neutral-200 pt-3 mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-600">Warranty:</span>
                      <span className={equipment.warrantyExpiry > new Date() ? 'text-green-600' : 'text-red-600'}>
                        {equipment.warrantyExpiry > new Date() ? 'Active' : 'Expired'}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Until {equipment.warrantyExpiry.toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Schedule Service
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

          {/* Maintenance Calendar */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Upcoming Maintenance</h3>
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
                  {Array.from({ length: 7 }, (_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() + i);
                    return date;
                  }).map((date) => (
                    <div key={date.toDateString()} className="border border-neutral-200 rounded p-2 min-h-[100px]">
                      <div className="text-sm font-semibold text-neutral-700 mb-2">
                        {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </div>
                      <div className="space-y-1">
                        {mockEquipment
                          .filter(eq => {
                            const nextDate = new Date(eq.nextMaintenance);
                            return nextDate.toDateString() === date.toDateString();
                          })
                          .map((eq, index) => (
                            <div key={index} className="bg-primary-100 text-primary-800 text-xs p-1 rounded">
                              {eq.name.split(' ').slice(0, 2).join(' ')}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Equipment;