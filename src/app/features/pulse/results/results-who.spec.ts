import { respondentLabels } from './results-who';

describe( 'respondentLabels', () => {
  const survey = {
    title: 'Hiring',
    description: '',
    questions: [
      { id: 'company', questionText: 'Company name', questionType: 'text', options: [] },
      { id: 'name', questionText: 'Your full name', questionType: 'text', options: [] },
      { id: 'email', questionText: 'Your email', questionType: 'email', options: [] },
      { id: 'why', questionText: 'Why?', questionType: 'textarea', options: [] },
    ],
  };
  const base = { surveyId: 's', tenantId: 't', responses: [] };

  it( 'prefers the collected name, then a name question, then email, then submission order', () => {
    const labels = respondentLabels( survey, [
      { ...base, id: 'late', submittedAt: '2026-11-17T12:00:00Z', answers: { why: 'x' } },
      { ...base, id: 'collected', submittedAt: '2026-11-16T09:00:00Z', answers: { name: 'Typed Name' }, respondent: { name: 'Ann Lee', email: 'ann@example.com' } },
      { ...base, id: 'asked', submittedAt: '2026-11-16T10:00:00Z', answers: { company: 'Acme', name: '  Thomas Fekry ' } },
      { ...base, id: 'emailOnly', submittedAt: '2026-11-16T11:00:00Z', answers: { company: 'Acme', email: 'e@example.com' } },
      { ...base, id: 'early', submittedAt: '2026-11-15T08:00:00Z', answers: {} },
    ] );
    expect( labels.get( 'collected' ) ).toBe( 'Ann Lee' );
    expect( labels.get( 'asked' ) ).toBe( 'Thomas Fekry' );
    expect( labels.get( 'emailOnly' ) ).toBe( 'e@example.com' );
    expect( labels.get( 'early' ) ).toBe( 'Respondent 1' );
    expect( labels.get( 'late' ) ).toBe( 'Respondent 5' );
  } );
} );
