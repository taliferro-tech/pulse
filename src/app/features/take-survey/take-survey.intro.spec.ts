import { introLines } from './take-survey.component';

describe( 'Paid-report pulse intro (anatomy of an offer)', () => {
  it( 'turns "Label: text" lines into the offer rows', () => {
    expect( introLines( 'What it is: A Tech Diagnosis.\nPrice: The preview is free.' ) ).toEqual( [
      { label: 'What it is', text: 'A Tech Diagnosis.' },
      { label: 'Price', text: 'The preview is free.' },
    ] );
  } );

  it( 'keeps a line without a label as plain text and skips blanks', () => {
    expect( introLines( 'A few questions about what is going wrong.\n\n' ) ).toEqual( [ { label: '', text: 'A few questions about what is going wrong.' } ] );
  } );

  it( 'is empty for no description, so the pulse opens on question 1', () => {
    expect( introLines( '' ) ).toEqual( [] );
    expect( introLines( null ) ).toEqual( [] );
  } );
} );
