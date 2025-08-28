import { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Classes from './pages/Classes';
import Equipment from './pages/Equipment';
import Analytics from './pages/Analytics';
import MobileApp from './pages/MobileApp';
import LandingPage from './pages/LandingPage';
import Instructors from './pages/Instructors';

function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <Dashboard />;
      case 'members':
        return <Members />;
      case 'classes':
        return <Classes />;
      case 'equipment':
        return <Equipment />;
      case 'analytics':
        return <Analytics />;
      case 'instructors':
        return <Instructors />;
      case 'mobile':
        return <MobileApp />;
      default:
        return <Dashboard />;
    }
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'landing':
        return 'FitnessFlow';
      case 'dashboard':
        return 'Dashboard';
      case 'members':
        return 'Member Management';
      case 'classes':
        return 'Class Schedule';
      case 'equipment':
        return 'Equipment Management';
      case 'analytics':
        return 'Performance Analytics';
      case 'instructors':
        return 'Instructor Management';
      case 'mobile':
        return 'Mobile App';
      default:
        return 'Dashboard';
    }
  };

  if (activeTab === 'landing') {
    return (
      <div className="min-h-screen bg-background">
        <LandingPage />
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="bg-gradient-to-r from-fitness-green to-fitness-blue text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold hover:scale-105 border border-fitness-green/30"
          >
            View Admin Dashboard →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        <Header
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          title={getPageTitle()}
        />
        <main className="p-6">
          {renderContent()}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;