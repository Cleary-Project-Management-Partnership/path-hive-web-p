// src/components/MeetingModule.jsx
// Complete Meeting Module with Questions & PDF Generation

import { useState } from 'react';
import { 
  ArrowLeft, Plus, Save, Trash2, Edit2, Download, 
  Calendar, Clock, MapPin, Link as LinkIcon, Mail, User,
  FileText, CheckSquare
} from 'lucide-react';

// ============================================
// MEETINGS PANEL VIEW
// ============================================
export function MeetingsView({ initiative, meetings, onCreateMeeting, onSelectMeeting, onBack }) {
  return (
    <div className="max-w-7xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-5 h-5" />
        Back to Initiative
      </button>

      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Meeting Panel</h1>
            <p className="text-gray-600">Manage meetings for {initiative.name}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">{meetings.length}</div>
            <div className="text-sm text-gray-600">Total Meetings</div>
          </div>
        </div>
      </div>

      <button
        onClick={onCreateMeeting}
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Schedule New Meeting
      </button>

      {meetings.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No meetings scheduled yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {meetings
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((meeting) => (
              <button
                key={meeting.id}
                onClick={() => onSelectMeeting(meeting)}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        Meeting #{meeting.sequenceNumber}
                      </span>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        meeting.essentialQuestions ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {meeting.essentialQuestions ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{meeting.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(meeting.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {meeting.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Admin: {meeting.admin.name}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <FileText className="w-6 h-6" />
                  </div>
                </div>

                {meeting.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{meeting.description}</p>
                )}

                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{meeting.participants?.length || 0} Participants</span>
                  {meeting.customQuestions && meeting.customQuestions.length > 0 && (
                    <span>• {meeting.customQuestions.length} Custom Questions</span>
                  )}
                </div>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

// ============================================
// CREATE/EDIT MEETING FORM
// ============================================
export function CreateMeeting({ initiativeId, existingMeeting, onSave, onCancel, meetings = [] }) {
  const [formData, setFormData] = useState(existingMeeting || {
    sequenceNumber: meetings.length + 1,
    title: '',
    date: '',
    time: '',
    description: '',
    url: '',
    admin: { name: '', email: '' },
    participants: [],
    initiativeId
  });

  const [newParticipant, setNewParticipant] = useState({ name: '', email: '' });

  const addParticipant = () => {
    if (newParticipant.name && newParticipant.email) {
      setFormData({
        ...formData,
        participants: [...formData.participants, newParticipant]
      });
      setNewParticipant({ name: '', email: '' });
    }
  };

  const removeParticipant = (index) => {
    setFormData({
      ...formData,
      participants: formData.participants.filter((_, i) => i !== index)
    });
  };

  const handleSave = () => {
    if (formData.title && formData.date && formData.time && formData.admin.name && formData.admin.email) {
      onSave(formData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {existingMeeting ? 'Edit Meeting' : 'Schedule New Meeting'}
        </h2>
        
        <div className="space-y-6">
          {/* Meeting Number and Title */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Meeting #</label>
              <input
                type="number"
                value={formData.sequenceNumber}
                onChange={(e) => setFormData({ ...formData, sequenceNumber: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                min="1"
              />
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Project Kickoff Workshop"
              />
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time *</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Admin Info */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Admin Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Admin Name *</label>
                <input
                  type="text"
                  value={formData.admin.name}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    admin: { ...formData.admin, name: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email *</label>
                <input
                  type="email"
                  value={formData.admin.email}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    admin: { ...formData.admin, email: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="admin@example.com"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Meeting agenda, objectives, or notes..."
            />
          </div>

          {/* Meeting URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meeting URL</label>
            <input
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="https://zoom.us/j/..."
            />
          </div>

          {/* Participants */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Participants</h3>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={newParticipant.name}
                onChange={(e) => setNewParticipant({ ...newParticipant, name: e.target.value })}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Participant Name"
              />
              <input
                type="email"
                value={newParticipant.email}
                onChange={(e) => setNewParticipant({ ...newParticipant, email: e.target.value })}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="participant@example.com"
              />
              <button
                onClick={addParticipant}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {formData.participants.length > 0 && (
              <div className="space-y-2">
                {formData.participants.map((p, i) => (
                  <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{p.name}</p>
                        <p className="text-xs text-gray-600">{p.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeParticipant(i)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={handleSave}
              disabled={!formData.title || !formData.date || !formData.time || !formData.admin.name || !formData.admin.email}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {existingMeeting ? 'Update Meeting' : 'Create Meeting'}
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
// MEETING DETAILS VIEW
// ============================================
export function MeetingDetailsView({ meeting, onEdit, onDelete, onBack, onSave, onGeneratePDF }) {
  const [isEditing, setIsEditing] = useState(false);
  const [essentialQuestions, setEssentialQuestions] = useState(meeting.essentialQuestions || {});
  const [customQuestions, setCustomQuestions] = useState(meeting.customQuestions || []);

  const handleSaveQuestions = () => {
    onSave({
      ...meeting,
      essentialQuestions,
      customQuestions
    });
    setIsEditing(false);
  };

  const addCustomQuestion = () => {
    if (customQuestions.length < 5) {
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

  const essentialQuestionsTemplate = [
    { id: 'whatAchieve', label: 'What do we want to achieve?' },
    { id: 'why', label: 'Why?' },
    { id: 'successCriteria', label: 'Success Criteria' },
    { id: 'sponsors', label: 'Sponsors (name, department, position, contact)' },
    { id: 'beneficiaries', label: 'Beneficiaries' },
    { id: 'deliveryTeam', label: 'Delivery Team' },
    { id: 'problemStructure', label: 'Problem Structure (Inputs, Solution, Outputs)' },
    { id: 'currentState', label: 'Where are we now? (Personnel, Budget, Technology, Data, Interfaces, Timeline)' },
    { id: 'risks', label: 'Potential Risks and Challenges' },
    { id: 'monitoring', label: 'Monitoring and Reporting / How Decisions Will Be Made' },
    { id: 'interviews', label: 'Need for Interviews?' }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-5 h-5" />
        Back to Meetings
      </button>

      {/* Meeting Header */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                Meeting #{meeting.sequenceNumber}
              </span>
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                meeting.essentialQuestions ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {meeting.essentialQuestions ? 'Completed' : 'Pending'}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{meeting.title}</h1>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{new Date(meeting.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{meeting.time}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User className="w-4 h-4" />
                <span>Admin: {meeting.admin.name}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{meeting.admin.email}</span>
              </div>
            </div>

            {meeting.url && (
              <div className="mt-4">
                <a 
                  href={meeting.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <LinkIcon className="w-4 h-4" />
                  Join Meeting
                </a>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={onGeneratePDF}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              PDF
            </button>
            <button
              onClick={onEdit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
            <button
              onClick={onDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>

        {meeting.description && (
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Description</h3>
            <p className="text-gray-600 whitespace-pre-wrap">{meeting.description}</p>
          </div>
        )}

        {meeting.participants && meeting.participants.length > 0 && (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Participants ({meeting.participants.length})</h3>
            <div className="grid grid-cols-2 gap-3">
              {meeting.participants.map((p, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <User className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-600">{p.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Essential Questions Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Essential Questions (11)</h2>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              {meeting.essentialQuestions ? 'Edit Answers' : 'Add Answers'}
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-6">
            {essentialQuestionsTemplate.map((q, index) => (
              <div key={q.id}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {index + 1}. {q.label}
                </label>
                <textarea
                  value={essentialQuestions[q.id] || ''}
                  onChange={(e) => setEssentialQuestions({ 
                    ...essentialQuestions, 
                    [q.id]: e.target.value 
                  })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your answer..."
                />
              </div>
            ))}

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={handleSaveQuestions}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Questions
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {meeting.essentialQuestions ? (
              essentialQuestionsTemplate.map((q, index) => (
                <div key={q.id} className="border-b border-gray-100 pb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    {index + 1}. {q.label}
                  </h4>
                  <p className="text-gray-600 whitespace-pre-wrap">
                    {essentialQuestions[q.id] || 'Not answered yet'}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No answers provided yet. Click "Add Answers" to begin.</p>
            )}
          </div>
        )}
      </div>

      {/* Custom Questions Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Custom Questions (Max 5)</h2>
          {isEditing && customQuestions.length < 5 && (
            <button
              onClick={addCustomQuestion}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Question
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-4">
            {customQuestions.map((cq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">Question {index + 1}</span>
                  <button
                    onClick={() => removeCustomQuestion(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <input
                  type="text"
                  value={cq.question}
                  onChange={(e) => updateCustomQuestion(index, 'question', e.target.value)}
                  placeholder="Your question"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm mb-2"
                />
                <textarea
                  value={cq.answer}
                  onChange={(e) => updateCustomQuestion(index, 'answer', e.target.value)}
                  placeholder="Answer"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            ))}

            {customQuestions.length === 0 && (
              <p className="text-gray-500 italic text-center py-8">No custom questions added yet</p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {customQuestions.length > 0 ? (
              customQuestions.map((cq, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Q{index + 1}: {cq.question}
                  </h4>
                  <p className="text-gray-600 whitespace-pre-wrap">{cq.answer || 'Not answered'}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic text-center py-8">No custom questions added yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}