import { Building2, Building2Icon, ChevronRight, FolderKanban, Plus, Target } from "lucide-react";

// Home View
export function HomeView({ organizations, portfolios, initiatives, onCreateOrg }) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Workshop Dashboard</h1>
        <p className="text-gray-600">Manage your organizations, portfolios, and initiatives</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Organizations</p>
              <p className="text-3xl font-bold text-gray-900">{organizations.length}</p>
            </div>
            <Building2 className="w-12 h-12 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Portfolios</p>
              <p className="text-3xl font-bold text-gray-900">{portfolios.length}</p>
            </div>
            <FolderKanban className="w-12 h-12 text-cyan-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Initiatives</p>
              <p className="text-3xl font-bold text-gray-900">{initiatives.length}</p>
            </div>
            <Target className="w-12 h-12 text-green-600" />
          </div>
        </div>
      </div>

      {/* Quick Start */}
      {organizations.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 border border-gray-200 text-center">
          <Building2Icon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Get Started</h3>
          <p className="text-gray-600 mb-6">Create your first organization to begin managing workshops</p>
          <button
            onClick={onCreateOrg}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Organization
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Organizations</h3>
          <div className="space-y-3">
            {organizations.slice(0, 5).map(org => (
              <div key={org.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Building2Icon className="w-5 h-5 text-gray-400" />
                  <span className="font-medium text-gray-900">{org.name}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}