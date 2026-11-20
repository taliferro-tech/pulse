import { Survey } from '../../../models/survey.model';
import { SurveyResponseRecord } from '../../../services/survey-api.service';

/** "Your full name", "Name", "First name" - but not "Company name", "Project name"... */
const NAME_QUESTION = /\bname\b/i;
const NOT_A_PERSON = /company|business|organi[sz]ation|employer|product|project|team|school|brand|store|shop|pet|event|app\b/i;

/**
 * Who wrote each response, so Results can say "Thomas Fekry · Nov 17" under an
 * answer instead of just the date. In order: the collected name, a "name"
 * question's answer, the collected email, an email question's answer, then
 * "Respondent N" by submission order (1 = first in).
 */
export function respondentLabels ( survey: Survey, responses: SurveyResponseRecord[] ): Map<string, string> {
  const questions = survey.questions || [];
  const nameIds = questions
    .filter( ( q ) => q.id && ( q.questionType === 'text' || q.questionType === 'textarea' ) && NAME_QUESTION.test( q.questionText || '' ) && !NOT_A_PERSON.test( q.questionText || '' ) )
    .map( ( q ) => q.id! );
  const emailIds = questions.filter( ( q ) => q.id && q.questionType === 'email' ).map( ( q ) => q.id! );

  const ordered = [...responses].sort( ( a, b ) => new Date( a.submittedAt ).getTime() - new Date( b.submittedAt ).getTime() );
  const labels = new Map<string, string>();
  ordered.forEach( ( response, index ) => {
    const answers = response.answers || {};
    const first = ( ids: string[] ) => ids.map( ( id ) => clean( answers[id] ) ).find( Boolean );
    labels.set( response.id,
      clean( response.respondent?.name ) || first( nameIds ) ||
      clean( response.respondent?.email ) || first( emailIds ) ||
      `Respondent ${index + 1}` );
  } );
  return labels;
}

function clean ( value: unknown ): string {
  return typeof value === 'string' ? value.trim().slice( 0, 60 ) : '';
}
