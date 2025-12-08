
// ============================================
// CREATE INITIATIVE

import { Save } from "lucide-react";
import { useState } from "react";

// ============================================
export function CreateInitiative({ portfolioId, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    champion: '',
    sponsorPosition: '',
    sponsorDepartment: '',
    portfolioId
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Initiative</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initiative Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Customer Portal Upgrade"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initiative Champion *
            </label>
            <input
              type="text"
              value={formData.champion}
              onChange={(e) => setFormData({ ...formData, champion: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sponsor Position *
              </label>
              <input
                type="text"
                value={formData.sponsorPosition}
                onChange={(e) => setFormData({ ...formData, sponsorPosition: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="CTO"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sponsor Department *
              </label>
              <input
                type="text"
                value={formData.sponsorDepartment}
                onChange={(e) => setFormData({ ...formData, sponsorDepartment: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Technology"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => onSave(formData)}
              disabled={!formData.name.trim() || !formData.champion.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Create Initiative
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
