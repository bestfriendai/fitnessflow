import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface HeaderProps {
  onMenuToggle: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, title }) => {
  return (
    <header className="bg-card/80 backdrop-blur-lg border-b border-border px-4 py-3 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuToggle}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold text-foreground bg-gradient-to-r from-fitness-green to-fitness-blue bg-clip-text text-transparent">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block w-80">
          <Input
            placeholder="Search members, classes, equipment..."
            icon={<Search className="h-4 w-4" />}
          />
        </div>

        <Button variant="ghost" size="sm" className="relative hover:bg-fitness-green/10">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-fitness-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            3
          </span>
        </Button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-fitness-green to-fitness-blue rounded-full flex items-center justify-center ring-2 ring-fitness-green/30">
            <User className="h-4 w-4 text-white" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">Gym Owner</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;