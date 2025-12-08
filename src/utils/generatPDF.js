// src/utils/pdfGenerator.js
// Install: npm install jspdf

import jsPDF from 'jspdf';

export function generateInitiativePDF(initiative) {
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
  const addText = (text, fontSize = 10, isBold = false) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    const lines = doc.splitTextToSize(text, maxWidth);
    
    checkNewPage(lines.length * fontSize * 0.5);
    
    lines.forEach(line => {
      doc.text(line, margin, yPosition);
      yPosition += fontSize * 0.5;
    });
    yPosition += 5;
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

  // Cover Page
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 80, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('PATH-HIVE', pageWidth / 2, 30, { align: 'center' });
  
  doc.setFontSize(20);
  doc.text('Initiative Report', pageWidth / 2, 45, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(initiative.name, pageWidth / 2, 60, { align: 'center' });
  
  doc.setTextColor(0, 0, 0);
  yPosition = 100;

  // Initiative Details
  addSectionHeader('Initiative Information');
  addText(`Initiative Name: ${initiative.name}`, 12, true);
  addText(`Champion: ${initiative.champion}`);
  addText(`Sponsor Position: ${initiative.sponsorPosition}`);
  addText(`Sponsor Department: ${initiative.sponsorDepartment}`);

  const questions = initiative.questions || {};

  // Section 1: Essential Questions
  if (questions.whatAchieve || questions.why || questions.successCriteria) {
    addSectionHeader('1. Essential Questions');
    
    if (questions.whatAchieve) {
      addText('What do we want to achieve?', 11, true);
      addText(questions.whatAchieve);
    }
    
    if (questions.why) {
      addText('Why?', 11, true);
      addText(questions.why);
    }
    
    if (questions.successCriteria) {
      addText('Success Criteria', 11, true);
      addText(questions.successCriteria);
    }
  }

  // Section 2: Stakeholders
  const stakeholderTypes = [
    { key: 'sponsors', label: 'Sponsors' },
    { key: 'beneficiaries', label: 'Beneficiaries' },
    { key: 'deliveryTeam', label: 'Delivery Team' },
    { key: 'external', label: 'External Stakeholders' }
  ];

  const hasStakeholders = stakeholderTypes.some(type => 
    questions[type.key] && questions[type.key].length > 0
  );

  if (hasStakeholders) {
    addSectionHeader('2. Stakeholders Analysis');
    
    stakeholderTypes.forEach(type => {
      const stakeholders = questions[type.key];
      if (stakeholders && stakeholders.length > 0) {
        addText(type.label, 11, true);
        stakeholders.forEach((s, i) => {
          addText(`${i + 1}. ${s.name} - ${s.position}, ${s.department} (${s.contact})`, 9);
        });
        yPosition += 3;
      }
    });
  }

  // Section 3: Problem Structure
  if (questions.inputs || questions.solution || questions.outputs) {
    addSectionHeader('3. Problem Structure');
    
    if (questions.inputs) {
      addText('Inputs:', 11, true);
      addText(questions.inputs);
    }
    
    if (questions.solution) {
      addText('Solution (tools/structure/model/interfaces):', 11, true);
      addText(questions.solution);
    }
    
    if (questions.outputs) {
      addText('Outputs:', 11, true);
      addText(questions.outputs);
    }
  }

  // Section 4: Current State
  const currentStateFields = [
    { key: 'personnel', label: 'Personnel' },
    { key: 'budget', label: 'Budget' },
    { key: 'technology', label: 'Technology' },
    { key: 'data', label: 'Data' },
    { key: 'interfaces', label: 'Interfaces' },
    { key: 'timeline', label: 'Timeline' }
  ];

  const hasCurrentState = currentStateFields.some(field => questions[field.key]);

  if (hasCurrentState) {
    addSectionHeader('4. Current State Assessment - Where Are We Now?');
    
    currentStateFields.forEach(field => {
      if (questions[field.key]) {
        addText(`${field.label}:`, 11, true);
        addText(questions[field.key]);
      }
    });
  }

  // Section 5: Risk & Governance
  if (questions.risks || questions.monitoring || questions.interviews) {
    addSectionHeader('5. Risk & Governance');
    
    if (questions.risks) {
      addText('Potential Risks and Challenges:', 11, true);
      addText(questions.risks);
    }
    
    if (questions.monitoring) {
      addText('Monitoring and Reporting / Decision Making:', 11, true);
      addText(questions.monitoring);
    }
    
    if (questions.interviews) {
      addText('Need for Interviews:', 11, true);
      addText(questions.interviews);
    }
  }

  // Section 6: Custom Questions
  if (questions.customQuestions && questions.customQuestions.length > 0) {
    addSectionHeader('6. Custom Questions');
    
    questions.customQuestions.forEach((cq, i) => {
      if (cq.question) {
        addText(`Q${i + 1}: ${cq.question}`, 11, true);
        if (cq.answer) {
          addText(cq.answer);
        }
      }
    });
  }

  // Conclusion
  if (questions.conclusion) {
    addSectionHeader('Initial Conclusion / Feedback');
    addText(questions.conclusion);
  }

  // Footer on each page
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `Generated by PATH-HIVE Workshop Tool | Page ${i} of ${pageCount} | ${new Date().toLocaleDateString()}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  // Save the PDF
  const fileName = `${initiative.name.replace(/\s+/g, '_')}_Report_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
}

// Alternative: Generate PDF with better formatting (advanced version)
export function generateInitiativePDFAdvanced(initiative) {
  // This would use more advanced jsPDF features like:
  // - autoTable plugin for better tables
  // - Custom fonts
  // - Images and logos
  // - More sophisticated styling
  
  // For now, use the basic version above
  generateInitiativePDF(initiative);
}