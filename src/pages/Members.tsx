import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { 
  Users, 
  Plus, 
  Search, 
  Mail, 
  Phone, 
  MoreVertical,
  UserCheck,
  Edit,
  TrendingUp,
  Clock
} from 'lucide-react';
import type { Member } from '../types';

const Members: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const mockMembers: Member[] = [
    {
      id: '1',
      gym_id: 'gym1',
      email: 'john.doe@email.com',
      name: 'John Doe',
      phone: '+1 (555) 123-4567',
      emergency_contact: '+1 (555) 987-6543',
      membership_type: 'Premium',
      membership_status: 'active',
      join_date: new Date('2024-01-15'),
      last_visit: new Date('2024-08-18'),
      total_visits: 85,
      avatar: undefined,
      billing_info: {
        amount: 79.99,
        billing_cycle: 'monthly',
        next_billing_date: new Date('2024-09-15'),
        payment_method: 'Credit Card',
        status: 'active'
      },
      created_at: new Date('2024-01-15'),
      updated_at: new Date('2024-08-18')
    },
    {
      id: '2',
      gym_id: 'gym1',
      email: 'jane.smith@email.com',
      name: 'Jane Smith',
      phone: '+1 (555) 234-5678',
      emergency_contact: '+1 (555) 876-5432',
      membership_type: 'Basic',
      membership_status: 'active',
      join_date: new Date('2024-03-20'),
      last_visit: new Date('2024-08-19'),
      total_visits: 45,
      billing_info: {
        amount: 39.99,
        billing_cycle: 'monthly',
        next_billing_date: new Date('2024-09-20'),
        payment_method: 'Debit Card',
        status: 'active'
      },
      created_at: new Date('2024-03-20'),
      updated_at: new Date('2024-08-19')
    },
    {
      id: '3',
      gym_id: 'gym1',
      email: 'mike.wilson@email.com',
      name: 'Mike Wilson',
      phone: '+1 (555) 345-6789',
      emergency_contact: '+1 (555) 765-4321',
      membership_type: 'VIP',
      membership_status: 'inactive',
      join_date: new Date('2023-11-10'),
      last_visit: new Date('2024-07-15'),
      total_visits: 120,
      billing_info: {
        amount: 129.99,
        billing_cycle: 'monthly',
        next_billing_date: new Date('2024-09-10'),
        payment_method: 'Credit Card',
        status: 'past_due'
      },
      created_at: new Date('2023-11-10'),
      updated_at: new Date('2024-07-15')
    }
  ];

  const memberStats = [
    { label: 'Total Members', value: '1,247', change: '+12%', icon: <Users className="h-5 w-5" /> },
    { label: 'Active Members', value: '1,180', change: '+8%', icon: <UserCheck className="h-5 w-5" /> },
    { label: 'New This Month', value: '47', change: '+23%', icon: <TrendingUp className="h-5 w-5" /> },
    { label: 'Avg. Monthly Visits', value: '14.2', change: '+5%', icon: <Clock className="h-5 w-5" /> }
  ];

  const filteredMembers = mockMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || member.membership_status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'suspended':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getBillingStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'past_due':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {memberStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change} from last month</p>
                </div>
                <div className="text-primary-600">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Member Management */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-bold text-neutral-900">Member Management</h2>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Member
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search members..."
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
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>

          {/* Members Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">Member</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">Contact</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">Membership</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">Billing</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">Last Visit</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900">{member.name}</p>
                          <p className="text-sm text-neutral-500">ID: {member.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                          <Mail className="h-4 w-4" />
                          {member.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                          <Phone className="h-4 w-4" />
                          {member.phone}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-semibold text-neutral-900">{member.membership_type}</p>
                        <p className="text-sm text-neutral-500">
                          ${member.billing_info.amount}/{member.billing_info.billing_cycle}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(member.membership_status)}`}>
                        {member.membership_status.charAt(0).toUpperCase() + member.membership_status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getBillingStatusColor(member.billing_info.status)}`}>
                        {member.billing_info.status.replace('_', ' ').charAt(0).toUpperCase() + member.billing_info.status.replace('_', ' ').slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm">
                        <p className="text-neutral-900">{member.last_visit.toLocaleDateString()}</p>
                        <p className="text-neutral-500">{member.total_visits} total visits</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-neutral-200">
            <p className="text-sm text-neutral-600">
              Showing {filteredMembers.length} of {mockMembers.length} members
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">1</Button>
              <Button size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Members;