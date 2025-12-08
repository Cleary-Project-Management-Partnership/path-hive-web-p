import { useState, useEffect } from 'react';
// At the top of Dashboard.jsx
// import {
//   CreatePortfolio,
//   PortfolioView,
//   CreateInitiative,
//   InitiativeView
// } from '../components/DashboardComponents';

// import {
//   QuestionsView,
//   MeetingsView,
//   CreateMeeting
// } from '../components/QuestionsAndMeetings';

// import { generateInitiativePDF } from '../utils/pdfGenerator';
import { CreatePortfolio, PortfolioView } from '../components/Portfolio';
import { CreateOrganization, OrganizationView } from '../components/Organization';
import { CreateInitiative } from '../components/CreateInitiative';
import { InitiativeView } from '../components/InitiativeView';
import { QuestionsView } from '../components/Questions';
import { CreateMeeting, MeetingDetailsView, MeetingsView } from '../components/Meetings';
import { generateInitiativePDF } from '../utils/generatPDF';
import { Sidebar } from '../components/Sidebar';
import { HomeView } from '../components/HomeView';
import { generateMeetingPDF } from '../utils/generatePDF2';
// At top of Dashboard.jsx
// import { MeetingsView, CreateMeeting, MeetingDetailsView } from '../components/MeetingModule';
// import { generateMeetingPDF } from '../utils/meetingPdfGenerator';
// // Main Dashboard Component
// export default function Dashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [currentView, setCurrentView] = useState('home'); // home, org, portfolio, initiative, questions, meetings
//   const [selectedOrg, setSelectedOrg] = useState(null);
//   const [selectedPortfolio, setSelectedPortfolio] = useState(null);
//   const [selectedInitiative, setSelectedInitiative] = useState(null);
  
//   // Data states
//   const [organizations, setOrganizations] = useState([]);
//   const [portfolios, setPortfolios] = useState([]);
//   const [initiatives, setInitiatives] = useState([]);
//   const [meetings, setMeetings] = useState([]);

//   // Load data from localStorage on mount
//   useEffect(() => {
//     const loadedOrgs = JSON.parse(localStorage.getItem('organizations') || '[]');
//     const loadedPortfolios = JSON.parse(localStorage.getItem('portfolios') || '[]');
//     const loadedInitiatives = JSON.parse(localStorage.getItem('initiatives') || '[]');
//     const loadedMeetings = JSON.parse(localStorage.getItem('meetings') || '[]');
    
//     setOrganizations(loadedOrgs);
//     setPortfolios(loadedPortfolios);
//     setInitiatives(loadedInitiatives);
//     setMeetings(loadedMeetings);
//   }, []);

//   // Save data to localStorage
//   const saveToStorage = (key, data) => {
//     localStorage.setItem(key, JSON.stringify(data));
//   };

//   return (
//     <div className="flex h-screen bg-gray-50 pt-20"> {/* pt-20 for header */}
//       {/* Sidebar */}
//       <Sidebar
//         isOpen={sidebarOpen}
//         toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
//         organizations={organizations}
//         onSelectOrg={(org) => {
//           setSelectedOrg(org);
//           setCurrentView('org');
//         }}
//         onCreateOrg={() => setCurrentView('createOrg')}
//         currentView={currentView}
//         setCurrentView={setCurrentView}
//       />

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto p-8">
//         {currentView === 'home' && (
//           <HomeView
//             organizations={organizations}
//             portfolios={portfolios}
//             initiatives={initiatives}
//             onCreateOrg={() => setCurrentView('createOrg')}
//           />
//         )}

//         {currentView === 'createOrg' && (
//           <CreateOrganization
//             onSave={(org) => {
//               const newOrgs = [...organizations, { ...org, id: Date.now() }];
//               setOrganizations(newOrgs);
//               saveToStorage('organizations', newOrgs);
//               setCurrentView('home');
//             }}
//             onCancel={() => setCurrentView('home')}
//           />
//         )}

//         {currentView === 'org' && selectedOrg && (
//           <OrganizationView
//             organization={selectedOrg}
//             portfolios={portfolios.filter(p => p.organizationId === selectedOrg.id)}
//             onCreatePortfolio={() => setCurrentView('createPortfolio')}
//             onSelectPortfolio={(portfolio) => {
//               setSelectedPortfolio(portfolio);
//               setCurrentView('portfolio');
//             }}
//             onBack={() => setCurrentView('home')}
//           />
//         )}

//         {currentView === 'createPortfolio' && (
//           <CreatePortfolio
//             organizationId={selectedOrg?.id}
//             onSave={(portfolio) => {
//               const newPortfolios = [...portfolios, { ...portfolio, id: Date.now() }];
//               setPortfolios(newPortfolios);
//               saveToStorage('portfolios', newPortfolios);
//               setCurrentView('org');
//             }}
//             onCancel={() => setCurrentView('org')}
//           />
//         )}

//         {currentView === 'portfolio' && selectedPortfolio && (
//           <PortfolioView
//             portfolio={selectedPortfolio}
//             initiatives={initiatives.filter(i => i.portfolioId === selectedPortfolio.id)}
//             onCreateInitiative={() => setCurrentView('createInitiative')}
//             onSelectInitiative={(initiative) => {
//               setSelectedInitiative(initiative);
//               setCurrentView('initiative');
//             }}
//             onBack={() => setCurrentView('org')}
//           />
//         )}

//         {currentView === 'createInitiative' && (
//           <CreateInitiative
//             portfolioId={selectedPortfolio?.id}
//             onSave={(initiative) => {
//               const newInitiatives = [...initiatives, { ...initiative, id: Date.now(), questions: {} }];
//               setInitiatives(newInitiatives);
//               saveToStorage('initiatives', newInitiatives);
//               setCurrentView('portfolio');
//             }}
//             onCancel={() => setCurrentView('portfolio')}
//           />
//         )}

//         {currentView === 'initiative' && selectedInitiative && (
//           <InitiativeView
//             initiative={selectedInitiative}
//             meetings={meetings.filter(m => m.initiativeId === selectedInitiative.id)}
//             onViewQuestions={() => setCurrentView('questions')}
//             onViewMeetings={() => setCurrentView('meetings')}
//             onBack={() => setCurrentView('portfolio')}
//           />
//         )}

//         {currentView === 'questions' && selectedInitiative && (
//           <QuestionsView
//             initiative={selectedInitiative}
//             onSave={(questions) => {
//               const updatedInitiatives = initiatives.map(i => 
//                 i.id === selectedInitiative.id ? { ...i, questions } : i
//               );
//               setInitiatives(updatedInitiatives);
//               saveToStorage('initiatives', updatedInitiatives);
//               setSelectedInitiative({ ...selectedInitiative, questions });
//             }}
//             onBack={() => setCurrentView('initiative')}
//             onGeneratePDF={() => generatePDF(selectedInitiative)}
//           />
//         )}

//         {currentView === 'meetings' && selectedInitiative && (
//           <MeetingsView
//             initiative={selectedInitiative}
//             meetings={meetings.filter(m => m.initiativeId === selectedInitiative.id)}
//             onCreateMeeting={() => setCurrentView('createMeeting')}
//             onBack={() => setCurrentView('initiative')}
//           />
//         )}

//         {currentView === 'createMeeting' && (
//           <CreateMeeting
//             initiativeId={selectedInitiative?.id}
//             onSave={(meeting) => {
//               const newMeetings = [...meetings, { ...meeting, id: Date.now() }];
//               setMeetings(newMeetings);
//               saveToStorage('meetings', newMeetings);
//               setCurrentView('meetings');
//             }}
//             onCancel={() => setCurrentView('meetings')}
//           />
//         )}
//       </main>
//     </div>
//   );
// }


// // Replace the placeholder generatePDF function with:
// function generatePDF(initiative) {
//   generateInitiativePDF(initiative);
// }


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  
  // Selection states
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [selectedMeeting, setSelectedMeeting] = useState(null); // IMPORTANT!
  
  // Data states
  const [organizations, setOrganizations] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [initiatives, setInitiatives] = useState([]);
  const [meetings, setMeetings] = useState([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadedOrgs = JSON.parse(localStorage.getItem('organizations') || '[]');
    const loadedPortfolios = JSON.parse(localStorage.getItem('portfolios') || '[]');
    const loadedInitiatives = JSON.parse(localStorage.getItem('initiatives') || '[]');
    const loadedMeetings = JSON.parse(localStorage.getItem('meetings') || '[]');
    
    setOrganizations(loadedOrgs);
    setPortfolios(loadedPortfolios);
    setInitiatives(loadedInitiatives);
    setMeetings(loadedMeetings);
  }, []);

  // Save data to localStorage
  const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  return (
    <div className="flex h-screen bg-gray-50 pt-20">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        organizations={organizations}
        onSelectOrg={(org) => {
          setSelectedOrg(org);
          setCurrentView('org');
        }}
        onCreateOrg={() => setCurrentView('createOrg')}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {/* HOME VIEW */}
        {currentView === 'home' && (
          <HomeView 
            organizations={organizations}
            portfolios={portfolios}
            initiatives={initiatives}
            onCreateOrg={() => setCurrentView('createOrg')}
            onSelectOrg={(org) => {
              setSelectedOrg(org);
              setCurrentView('org');
            }}
          />
        )}

        {/* CREATE ORGANIZATION */}
        {currentView === 'createOrg' && (
          <CreateOrganization
            onSave={(org) => {
              const newOrgs = [...organizations, { ...org, id: Date.now() }];
              setOrganizations(newOrgs);
              saveToStorage('organizations', newOrgs);
              setCurrentView('home');
            }}
            onCancel={() => setCurrentView('home')}
          />
        )}

        {/* ORGANIZATION VIEW */}
        {currentView === 'org' && selectedOrg && (
          <OrganizationView
            organization={selectedOrg}
            portfolios={portfolios.filter(p => p.organizationId === selectedOrg.id)}
            onCreatePortfolio={() => setCurrentView('createPortfolio')}
            onSelectPortfolio={(portfolio) => {
              setSelectedPortfolio(portfolio);
              setCurrentView('portfolio');
            }}
            onBack={() => setCurrentView('home')}
          />
        )}

        {/* CREATE PORTFOLIO */}
        {currentView === 'createPortfolio' && selectedOrg && (
          <CreatePortfolio
            organizationId={selectedOrg.id}
            onSave={(portfolio) => {
              const newPortfolios = [...portfolios, { ...portfolio, id: Date.now() }];
              setPortfolios(newPortfolios);
              saveToStorage('portfolios', newPortfolios);
              setCurrentView('org');
            }}
            onCancel={() => setCurrentView('org')}
          />
        )}

        {/* PORTFOLIO VIEW */}
        {currentView === 'portfolio' && selectedPortfolio && (
          <PortfolioView
            portfolio={selectedPortfolio}
            initiatives={initiatives.filter(i => i.portfolioId === selectedPortfolio.id)}
            onCreateInitiative={() => setCurrentView('createInitiative')}
            onSelectInitiative={(initiative) => {
              setSelectedInitiative(initiative);
              setCurrentView('initiative');
            }}
            onBack={() => setCurrentView('org')}
          />
        )}

        {/* CREATE INITIATIVE */}
        {currentView === 'createInitiative' && selectedPortfolio && (
          <CreateInitiative
            portfolioId={selectedPortfolio.id}
            onSave={(initiative) => {
              const newInitiatives = [...initiatives, { ...initiative, id: Date.now(), questions: {} }];
              setInitiatives(newInitiatives);
              saveToStorage('initiatives', newInitiatives);
              setCurrentView('portfolio');
            }}
            onCancel={() => setCurrentView('portfolio')}
          />
        )}

        {/* INITIATIVE VIEW */}
        {currentView === 'initiative' && selectedInitiative && (
          <InitiativeView
            initiative={selectedInitiative}
            meetings={meetings.filter(m => m.initiativeId === selectedInitiative.id)}
            onViewQuestions={() => setCurrentView('questions')}
            onViewMeetings={() => setCurrentView('meetings')}
            onBack={() => setCurrentView('portfolio')}
          />
        )}

        {/* =============================================== */}
        {/* MEETINGS PANEL - FIXED VERSION */}
        {/* =============================================== */}
        {currentView === 'meetings' && selectedInitiative && (
          <MeetingsView
            initiative={selectedInitiative}
            meetings={meetings.filter(m => m.initiativeId === selectedInitiative.id)}
            onCreateMeeting={() => {
              console.log('Create meeting clicked');
              setCurrentView('createMeeting');
            }}
            onSelectMeeting={(meeting) => {
              console.log('Meeting selected:', meeting);
              setSelectedMeeting(meeting);
              setCurrentView('meetingDetails');
            }}
            onBack={() => {
              console.log('Back to initiative');
              setCurrentView('initiative');
            }}
          />
        )}

        {/* CREATE MEETING */}
        {currentView === 'createMeeting' && selectedInitiative && (
          <CreateMeeting
            initiativeId={selectedInitiative.id}
            meetings={meetings.filter(m => m.initiativeId === selectedInitiative.id)}
            onSave={(meeting) => {
              console.log('Saving meeting:', meeting);
              const newMeetings = [...meetings, { ...meeting, id: Date.now() }];
              setMeetings(newMeetings);
              saveToStorage('meetings', newMeetings);
              setCurrentView('meetings');
            }}
            onCancel={() => {
              console.log('Cancel meeting creation');
              setCurrentView('meetings');
            }}
          />
        )}

        {/* MEETING DETAILS */}
        {currentView === 'meetingDetails' && selectedMeeting && (
          <MeetingDetailsView
            meeting={selectedMeeting}
            onEdit={() => {
              console.log('Edit meeting');
              setCurrentView('editMeeting');
            }}
            onDelete={() => {
              console.log('Delete meeting');
              if (window.confirm('Are you sure you want to delete this meeting?')) {
                const updatedMeetings = meetings.filter(m => m.id !== selectedMeeting.id);
                setMeetings(updatedMeetings);
                saveToStorage('meetings', updatedMeetings);
                setCurrentView('meetings');
                setSelectedMeeting(null);
              }
            }}
            onBack={() => {
              console.log('Back to meetings');
              setCurrentView('meetings');
            }}
            onSave={(updatedMeeting) => {
              console.log('Save meeting updates:', updatedMeeting);
              const updatedMeetings = meetings.map(m => 
                m.id === updatedMeeting.id ? updatedMeeting : m
              );
              setMeetings(updatedMeetings);
              saveToStorage('meetings', updatedMeetings);
              setSelectedMeeting(updatedMeeting);
            }}
            onGeneratePDF={() => {
              console.log('Generate PDF');
              generateMeetingPDF(selectedMeeting);
            }}
          />
        )}

        {/* EDIT MEETING */}
        {currentView === 'editMeeting' && selectedMeeting && selectedInitiative && (
          <CreateMeeting
            initiativeId={selectedInitiative.id}
            existingMeeting={selectedMeeting}
            meetings={meetings.filter(m => m.initiativeId === selectedInitiative.id)}
            onSave={(updatedMeeting) => {
              console.log('Update meeting:', updatedMeeting);
              const updatedMeetings = meetings.map(m => 
                m.id === selectedMeeting.id ? { ...updatedMeeting, id: selectedMeeting.id } : m
              );
              setMeetings(updatedMeetings);
              saveToStorage('meetings', updatedMeetings);
              setSelectedMeeting({ ...updatedMeeting, id: selectedMeeting.id });
              setCurrentView('meetingDetails');
            }}
            onCancel={() => {
              console.log('Cancel edit');
              setCurrentView('meetingDetails');
            }}
          />
        )}
      </main>
    </div>
  );
}
