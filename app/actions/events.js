export const GET_AGENDA = 'GET_AGENDA';
export const GET_AGENDA_RESULT = 'GET_AGENDA_RESULT';

export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_RESULT = 'GET_EVENTS_RESULT';

export const GET_EVALUATION = 'GET_EVALUATION';
export const GET_EVALUATION_RESULT = 'GET_EVALUATION_RESULT';

export const GET_ACTIVITY = 'GET_ACTIVITY';
export const GET_ACTIVITY_RESULT = 'GET_ACTIVITY_RESULT';

export const NEW_EVALUATION = 'NEW_EVALUATION';
export const NEW_EVALUATION_RESULT = 'NEW_EVALUATION_RESULT';



export const getAgenda = (page,startDate,endDate) => ({
    type: GET_AGENDA,
    page,
    startDate,
    endDate
})

export const getEvents = (page) => ({
    type: GET_EVENTS,
    page
})

export const getActivity = (slug) => ({
    type: GET_ACTIVITY,
    slug
})

export const getEvaluation = (slug) => ({
    type: GET_EVALUATION,
    slug
})

export const newEvaluation = (slug, score) => ({
    type: NEW_EVALUATION,
    slug,
    score
})





