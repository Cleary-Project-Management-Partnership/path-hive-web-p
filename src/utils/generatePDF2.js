// src/utils/meetingPdfGenerator.js
// Install: npm install jspdf

import jsPDF from 'jspdf';

export function generateMeetingPDF(meeting) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;
  const maxWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  // Helper function to add new page if needed
  const checkNewPage = (requiredSpace = 20) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper function to add text with word wrap
  const addText = (text, fontSize = 10, isBold = false, color = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(...color);
    
    if (!text || text.trim() === '') {
      text = 'Not provided';
      doc.setTextColor(150, 150, 150);
    }
    
    const lines = doc.splitTextToSize(String(text), maxWidth);
    
    checkNewPage(lines.length * fontSize * 0.5);
    
    lines.forEach(line => {
      doc.text(line, margin, yPosition);
      yPosition += fontSize * 0.5;
    });
    yPosition += 5;
    doc.setTextColor(0, 0, 0); // Reset color
  };

  // Helper for section headers
  const addSectionHeader = (title) => {
    checkNewPage(30);
    yPosition += 5;
    doc.setFillColor(37, 99, 235); // Blue
    doc.rect(margin, yPosition - 8, maxWidth, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin + 5, yPosition);
    doc.setTextColor(0, 0, 0);
    yPosition += 15;
  };

  // Helper for subsection headers
  const addSubHeader = (title) => {
    checkNewPage(20);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(37, 99, 235);
    doc.text(title, margin, yPosition);
    yPosition += 8;
    doc.setTextColor(0, 0, 0);
  };

  // ==========================================
  // COVER PAGE
  // ==========================================
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 90, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.text('PATH-HIVE', pageWidth / 2, 30, { align: 'center' });
  
  doc.setFontSize(22);
  doc.text('Meeting Report', pageWidth / 2, 50, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(meeting.title, pageWidth / 2, 70, { align: 'center' });
  
  doc.setFontSize(10);
  doc.text(`Meeting #${meeting.sequenceNumber}`, pageWidth / 2, 82, { align: 'center' });
  
  doc.setTextColor(0, 0, 0);
  yPosition = 110;

  // ==========================================
  // MEETING INFORMATION
  // ==========================================
  addSectionHeader('Meeting Information');
  
  addSubHeader('Title');
  addText(meeting.title, 10);
  
  addSubHeader('Date & Time');
  addText(`${new Date(meeting.date).toLocaleDateString()} at ${meeting.time}`, 10);
  
  addSubHeader('Admin');
  addText(`${meeting.admin.name} (${meeting.admin.email})`, 10);
  
  if (meeting.url) {
    addSubHeader('Meeting URL');
    addText(meeting.url, 10, false, [37, 99, 235]);
  }
  
  if (meeting.description) {
    addSubHeader('Description');
    addText(meeting.description, 10);
  }

  // ==========================================
  // PARTICIPANTS
  // ==========================================
  if (meeting.participants && meeting.participants.length > 0) {
    addSectionHeader('Participants');
    meeting.participants.forEach((p, index) => {
      addText(`${index + 1}. ${p.name} - ${p.email}`, 10);
    });
  }

  // ==========================================
  // ESSENTIAL QUESTIONS (11 Questions)
  // ==========================================
  if (meeting.essentialQuestions) {
    const essentialQuestionsTemplate = [
      { id: 'whatAchieve', label: 'What do we want to achieve?' },
      { id: 'why', label: 'Why?' },
      { id: 'successCriteria', label: 'Success Criteria' },
      { id: 'sponsors', label: 'Sponsors' },
      { id: 'beneficiaries', label: 'Beneficiaries' },
      { id: 'deliveryTeam', label: 'Delivery Team' },
      { id: 'problemStructure', label: 'Problem Structure' },
      { id: 'currentState', label: 'Current State Assessment' },
      { id: 'risks', label: 'Potential Risks and Challenges' },
      { id: 'monitoring', label: 'Monitoring and Reporting' },
      { id: 'interviews', label: 'Interviews Needed' }
    ];

    addSectionHeader('Essential Questions');
    
    essentialQuestionsTemplate.forEach((q, index) => {
      checkNewPage(40);
      addSubHeader(`${index + 1}. ${q.label}`);
      const answer = meeting.essentialQuestions[q.id];
      addText(answer || 'Not answered', 10);
      yPosition += 3;
    });
  }

  // ==========================================
  // CUSTOM QUESTIONS
  // ==========================================
  if (meeting.customQuestions && meeting.customQuestions.length > 0) {
    addSectionHeader('Custom Questions');
    
    meeting.customQuestions.forEach((cq, index) => {
      checkNewPage(40);
      addSubHeader(`Q${index + 1}: ${cq.question || 'No question'}`);
      addText(cq.answer || 'Not answered', 10);
      yPosition += 3;
    });
  }

  // ==========================================
  // FOOTER ON EACH PAGE
  // ==========================================
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    
    // Footer text
    const footerText = `PATH-HIVE Meeting Report | Page ${i} of ${pageCount} | Generated: ${new Date().toLocaleDateString()}`;
    doc.text(footerText, pageWidth / 2, pageHeight - 10, { align: 'center' });
    
    // Optional: Add meeting title in footer
    doc.setFontSize(7);
    doc.text(meeting.title, margin, pageHeight - 10);
  }

  // ==========================================
  // SAVE PDF
  // ==========================================
  const fileName = `Meeting_${meeting.sequenceNumber}_${meeting.title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
}

// Export a preview function (optional - for viewing in browser)
export function previewMeetingPDF(meeting) {
  const doc = new jsPDF();
  // Same generation logic as above...
  // Instead of doc.save(), use:
  const pdfBlob = doc.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, '_blank');
}