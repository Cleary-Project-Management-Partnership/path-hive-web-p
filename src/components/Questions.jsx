// src/components/QuestionsAndMeetings.jsx
// Part 3: Questions Form and Meetings Management

import { useState, useEffect } from 'react';
import { ArrowLeft, Save, Download, Plus, Trash2, Calendar, Clock, MapPin, Link as LinkIcon, Mail, User } from 'lucide-react';

// ============================================
// QUESTIONS VIEW - Multi-step form with 11 essential questions
// ============================================
export function QuestionsView({ initiative, onSave, onBack, onGeneratePDF }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState(initiative.questions || {});
  const [customQuestions, setCustomQuestions] = useState(formData.customQuestions || []);

  // Save progress automatically
  useEffect(() => {
    const saveData = { ...formData, customQuestions };
    onSave(saveData);
  }, [formData, customQuestions]);

  const sections = [
    {
      title: "1. Essential Questions",
      fields: [
        { id: 'whatAchieve', label: 'What do we want to achieve?', type: 'textarea', required: true },
        { id: 'why', label: 'Why?', type: 'textarea', required: true },
        { id: 'successCriteria', label: 'Success Criteria', type: 'textarea', required: true }
      ]
    },
    {
      title: "2. Stakeholders Analysis",
      subtitle: "Add key stakeholders (name, department, position, contact)",
      fields: [
        { id: 'sponsors', label: 'Sponsors', type: 'stakeholder-list' },
        { id: 'beneficiaries', label: 'Beneficiaries', type: 'stakeholder-list' },
        { id: 'deliveryTeam', label: 'Delivery Team', type: 'stakeholder-list' },
        { id: 'external', label: 'External Stakeholders', type: 'stakeholder-list' }
      ]
    },
    {
      title: "3. Problem Structure",
      fields: [
        { id: 'inputs', label: 'Input(s)', type: 'textarea', placeholder: 'What inputs are required?' },
        { id: 'solution', label: 'Solution (tools/structure/model/interfaces)', type: 'textarea', placeholder: 'What solutions will we use?' },
        { id: 'outputs', label: 'Output(s)', type: 'textarea', placeholder: 'What outputs will we produce?' }
      ]
    },
    {
      title: "4. Current State Assessment",
      subtitle: "Where are we now?",
      fields: [
        { id: 'personnel', label: 'Personnel', type: 'textarea' },
        { id: 'budget', label: 'Budget', type: 'textarea' },
        { id: 'technology', label: 'Technology', type: 'textarea' },
        { id: 'data', label: 'Data', type: 'textarea' },
        { id: 'interfaces', label: 'Interfaces', type: 'textarea' },
        { id: 'timeline', label: 'Timeline', type: 'textarea' }
      ]
    },
    {
      title: "5. Risk & Governance",
      fields: [
        { id: 'risks', label: 'Potential Risks and Challenges', type: 'textarea' },
        { id: 'monitoring', label: 'Monitoring and Reporting / How Decisions Will Be Made', type: 'textarea' },
        { id: 'interviews', label: 'Do we need to perform interviews (external or internal) to gain insights?', type: 'select', options: ['Yes', 'No', 'To Be Determined'] }
      ]
    },
    {
      title: "6. Custom Questions & Conclusion",
      fields: [
        { id: 'customQuestions', label: 'User Added Questions', type: 'custom-questions' },
        { id: 'conclusion', label: 'Initial Conclusion/Feedback/Buy-in from Participants', type: 'textarea' }
      ]
    }
  ];

  const handleFieldChange = (fieldId, value) => {
    setFormData({ ...formData, [fieldId]: value });
  };

  const addStakeholder = (fieldId) => {
    const stakeholders = formData[fieldId] || [];
    stakeholders.push({ name: '', department: '', position: '', contact: '' });
    handleFieldChange(fieldId, stakeholders);
  };

  const updateStakeholder = (fieldId, index, field, value) => {
    const stakeholders = [...(formData[fieldId] || [])];
    stakeholders[index] = { ...stakeholders[index], [field]: value };
    handleFieldChange(fieldId, stakeholders);
  };

  const removeStakeholder = (fieldId, index) => {
    const stakeholders = formData[fieldId] || [];
    handleFieldChange(fieldId, stakeholders.filter((_, i) => i !== index));
  };

  const addCustomQuestion = () => {
    if (customQuestions.length < 10) {
      setCustomQuestions([...customQuestions, { question: '', answer: '' }]);
    }
  };

  const updateCustomQuestion = (index, field, value) => {
    const updated = [...customQuestions];
    updated[index] = { ...updated[index], [field]: value };
    setCustomQuestions(updated);
  };

  const removeCustomQuestion = (index) => {
    setCustomQuestions(customQuestions.filter((_, i) => i !== index));
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'textarea':
        return (
          <div key={field.id} className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <textarea
              value={formData[field.id] || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={field.placeholder}
            />
          </div>
        );

      case 'select':
        return (
          <div key={field.id} className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.label}
            </label>
            <select
              value={formData[field.id] || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select an option</option>
              {field.options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        );

      case 'stakeholder-list':
        const stakeholders = formData[field.id] || [];
        return (
          <div key={field.id} className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">{field.label}</label>
              <button
                onClick={() => addStakeholder(field.id)}
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" />
                Add {field.label}
              </button>
            </div>
            
            {stakeholders.map((stakeholder, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 mb-3 border border-gray-200">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    value={stakeholder.name || ''}
                    onChange={(e) => updateStakeholder(field.id, index, 'name', e.target.value)}
                    placeholder="Name"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    value={stakeholder.department || ''}
                    onChange={(e) => updateStakeholder(field.id, index, 'department', e.target.value)}
                    placeholder="Department"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    value={stakeholder.position || ''}
                    onChange={(e) => updateStakeholder(field.id, index, 'position', e.target.value)}
                    placeholder="Position"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    value={stakeholder.contact || ''}
                    onChange={(e) => updateStakeholder(field.id, index, 'contact', e.target.value)}
                    placeholder="Contact"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <button
                  onClick={() => removeStakeholder(field.id, index)}
                  className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  Remove
                </button>
              </div>
            ))}

            {stakeholders.length === 0 && (
              <p className="text-sm text-gray-500 italic">No {field.label.toLowerCase()} added yet</p>
            )}
          </div>
        );

      case 'custom-questions':
        return (
          <div key={field.id} className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">{field.label}</label>
              <button
                onClick={addCustomQuestion}
                disabled={customQuestions.length >= 10}
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4" />
                Add Question ({customQuestions.length}/10)
              </button>
            </div>

            {customQuestions.map((cq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 mb-3 border border-gray-200">
                <input
                  type="text"
                  value={cq.question}
                  onChange={(e) => updateCustomQuestion(index, 'question', e.target.value)}
                  placeholder="Your question"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-2"
                />
                <textarea
                  value={cq.answer}
                  onChange={(e) => updateCustomQuestion(index, 'answer', e.target.value)}
                  placeholder="Answer"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <button
                  onClick={() => removeCustomQuestion(index)}
                  className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 mt-2"
                >
                  <Trash2 className="w-3 h-3" />
                  Remove Question
                </button>
              </div>
            ))}

            {customQuestions.length === 0 && (
              <p className="text-sm text-gray-500 italic">No custom questions added</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const currentSectionData = sections[currentSection];
  const isLastSection = currentSection === sections.length - 1;
  const isFirstSection = currentSection === 0;

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-5 h-5" />
        Back to Initiative
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {/* Progress Bar */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-900">Essential Questions</h2>
            <button
              onClick={onGeneratePDF}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm"
            >
              <Download className="w-4 h-4" />
              Generate PDF
            </button>
          </div>
          <div className="flex items-center gap-2">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full ${
                  index <= currentSection ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Section {currentSection + 1} of {sections.length}
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{currentSectionData.title}</h3>
          {currentSectionData.subtitle && (
            <p className="text-sm text-gray-600 mb-6">{currentSectionData.subtitle}</p>
          )}

          <div className="space-y-4">
            {currentSectionData.fields.map(field => renderField(field))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-6">
            <button
              onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
              disabled={isFirstSection}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <span className="text-sm text-gray-600">
              {currentSection + 1} / {sections.length}
            </span>

            <button
              onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
              disabled={isLastSection}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
