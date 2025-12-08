import { ArrowLeft, FolderKanban, Plus } from "lucide-react";
import { useState } from "react";

// PDF Generation Function (placeholder - you'll need jsPDF library)
function generatePDF(initiative) {
  alert('PDF Generation will be implemented with jsPDF library. Initiative: ' + initiative.name);
  // Implementation with jsPDF will be in the next artifact
}

// Additional component shells (to be implemented in next artifact)
export function CreateOrganization({ onSave, onCancel }) {
  const [name, setName] = useState('');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Organization</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter organization name"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => onSave({ name })}
              disabled={!name.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create
            </button>
            <button
              onClick={onCancel}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OrganizationView({ organization, portfolios, onCreatePortfolio, onSelectPortfolio, onBack }) {
  return (
    <div className="max-w-7xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-5 h-5" />
        Back to Dashboard
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{organization.name}</h1>
        <p className="text-gray-600">Manage portfolios within this organization</p>
      </div>

      <button
        onClick={onCreatePortfolio}
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Create Portfolio
      </button>

      {portfolios.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
          <FolderKanban className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No portfolios yet. Create one to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map(portfolio => (
            <button
              key={portfolio.id}
              onClick={() => onSelectPortfolio(portfolio)}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-left"
            >
              <FolderKanban className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{portfolio.name}</h3>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                {portfolio.category}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}