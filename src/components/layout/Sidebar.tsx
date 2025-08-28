import React from 'react';
import { 
  Home, 
  Users, 
  Calendar, 
  Dumbbell, 
  BarChart3, 
  Settings, 
  CreditCard,
  UserCheck,
  Target,
  Smartphone
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <Home className="h-5 w-5" /> },
  { id: 'members', label: 'Members', icon: <Users className="h-5 w-5" /> },
  { id: 'classes', label: 'Classes', icon: <Calendar className="h-5 w-5" /> },
  { id: 'instructors', label: 'Instructors', icon: <UserCheck className="h-5 w-5" /> },
  { id: 'equipment', label: 'Equipment', icon: <Dumbbell className="h-5 w-5" /> },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="h-5 w-5" /> },
  { id: 'mobile', label: 'Mobile App', icon: <Smartphone className="h-5 w-5" /> },
  { id: 'billing', label: 'Billing', icon: <CreditCard className="h-5 w-5" /> },
  { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, onTabChange }) => {
  return (
    <aside className={cn(
      'fixed inset-y-0 left-0 z-50 w-64 bg-card/90 backdrop-blur-xl border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 shadow-xl',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    )}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-border">
          <div className="w-10 h-10 bg-gradient-to-r from-fitness-green to-fitness-blue rounded-lg flex items-center justify-center shadow-lg ring-2 ring-fitness-green/30 animate-glow">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-fitness-green to-fitness-blue bg-clip-text text-transparent">FitnessFlow</h2>
            <p className="text-xs text-muted-foreground">Gym Management</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 group',
                activeTab === item.id
                  ? 'bg-gradient-to-r from-fitness-green/20 to-fitness-blue/20 text-fitness-green border border-fitness-green/30 shadow-md backdrop-blur-sm'
                  : 'text-muted-foreground hover:bg-fitness-green/10 hover:text-foreground hover:border-fitness-green/20 border border-transparent'
              )}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Upgrade Banner */}
        <div className="p-4 border-t border-border">
          <div className="bg-gradient-to-r from-fitness-orange to-fitness-red rounded-lg p-4 text-white shadow-lg border border-fitness-orange/30">
            <h3 className="font-semibold text-sm">Upgrade to Pro</h3>
            <p className="text-xs opacity-90 mt-1">Get advanced analytics and unlimited members</p>
            <button className="mt-3 w-full bg-white/10 backdrop-blur-sm text-white py-2 rounded-md text-sm font-medium hover:bg-white/20 transition-all duration-200 border border-white/20">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;