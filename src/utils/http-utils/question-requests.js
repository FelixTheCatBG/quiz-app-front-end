import axios from 'axios';

const apiUrl = 'http://localhost:3005/questions';

export function getAllQuestions() {
    return axios.get(apiUrl);
}
export function getAllQuestionsForTopic(topicId) {
    return axios.get(`${apiUrl}?topic_id=${topicId}`);
    
}
export function getQuestionById(id) {
    return axios.get(`${apiUrl}/${id}`);
}

export function deleteQuestion(id) {
    return axios.delete(`${apiUrl}/${id}`);
}

export function saveQuestion(question) {
    if (question.id) {
        return axios.put(`${apiUrl}/${question.id}`, question);
    }

    return axios.post(`${apiUrl}`, question);
}