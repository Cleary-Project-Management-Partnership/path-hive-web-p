// src/components/DashboardComponents.jsx
// Part 2: All Form Components and Views

import { useState } from 'react';
import { ArrowLeft, Plus, Save, X, Calendar, Users, FileText, Download } from 'lucide-react';

// ============================================
// CREATE PORTFOLIO
// ============================================
export function CreatePortfolio({ organizationId, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'operation-improvement',
    organizationId
  });

  const categories = [
    { value: 'operation-improvement', label: 'Operation Improvement' },
    { value: 'innovation', label: 'Innovation' },
    { value: 'mandatory', label: 'Mandatory' },
    { value: 'well-being', label: 'Well-being' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Portfolio</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Portfolio Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Digital Transformation 2024"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Portfolio Category *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => onSave(formData)}
              disabled={!formData.name.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Create Portfolio
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

// ============================================
// PORTFOLIO VIEW
// ============================================
export function PortfolioView({ portfolio, initiatives, onCreateInitiative, onSelectInitiative, onBack }) {
  return (
    <div className="max-w-7xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-5 h-5" />
        Back to Organization
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{portfolio.name}</h1>
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
          {portfolio.category.replace('-', ' ').toUpperCase()}
        </span>
      </div>

      <button
        onClick={onCreateInitiative}
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Create Initiative
      </button>

      {initiatives.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No initiatives yet. Create one to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {initiatives.map(initiative => (
            <button
              key={initiative.id}
              onClick={() => onSelectInitiative(initiative)}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{initiative.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Champion: {initiative.champion}</span>
                    <span>•</span>
                    <span>Sponsor: {initiative.sponsorPosition}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    initiative.questions && Object.keys(initiative.questions).length > 0
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {initiative.questions && Object.keys(initiative.questions).length > 0 ? 'In Progress' : 'Not Started'}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
