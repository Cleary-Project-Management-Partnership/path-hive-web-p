
// ============================================
// INITIATIVE VIEW

import { ArrowLeft, Calendar, FileText } from "lucide-react";

// ============================================
export function InitiativeView({ initiative, meetings, onViewQuestions, onViewMeetings, onBack }) {
  const questionsCompleted = initiative.questions && Object.keys(initiative.questions).length > 0;

  return (
    <div className="max-w-7xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-5 h-5" />
        Back to Portfolio
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{initiative.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Champion</p>
            <p className="font-semibold text-gray-900">{initiative.champion}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Sponsor Position</p>
            <p className="font-semibold text-gray-900">{initiative.sponsorPosition}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Department</p>
            <p className="font-semibold text-gray-900">{initiative.sponsorDepartment}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Essential Questions Card */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Essential Questions</h3>
              <p className="text-sm text-gray-600">Complete the backbone questions for this initiative</p>
            </div>
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
              questionsCompleted ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
              {questionsCompleted ? 'In Progress' : 'Not Started'}
            </span>
          </div>

          <button
            onClick={onViewQuestions}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {questionsCompleted ? 'Continue Questions' : 'Start Questions'}
          </button>
        </div>

        {/* Meetings Card */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Meeting Panel</h3>
              <p className="text-sm text-gray-600">Manage meetings and notes for this initiative</p>
            </div>
            <Calendar className="w-10 h-10 text-cyan-600" />
          </div>
          
          <div className="mb-4">
            <p className="text-2xl font-bold text-gray-900">{meetings.length}</p>
            <p className="text-sm text-gray-600">Total Meetings</p>
          </div>

          <button
            onClick={onViewMeetings}
            className="w-full px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            View Meetings
          </button>
        </div>
      </div>
    </div>
  );
}