import { Building2, Menu, Plus, X } from "lucide-react";

// Sidebar Component
export function Sidebar({ isOpen, toggleSidebar, organizations, onSelectOrg, onCreateOrg, currentView, setCurrentView }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-200
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        mt-20 lg:mt-20
      `}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Workshop Tool</h2>
              <button 
                onClick={toggleSidebar}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            <button
              onClick={() => setCurrentView('home')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'home' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Building2 className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </button>

            <button
              onClick={onCreateOrg}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">New Organization</span>
            </button>

            {/* Organizations List */}
            {organizations.length > 0 && (
              <div className="pt-4">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Organizations
                </h3>
                {organizations.map(org => (
                  <button
                    key={org.id}
                    onClick={() => onSelectOrg(org)}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-left"
                  >
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm truncate">{org.name}</span>
                  </button>
                ))}
              </div>
            )}
          </nav>
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed bottom-6 right-6 z-40 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
      >
        <Menu className="w-6 h-6" />
      </button>
    </>
  );
}