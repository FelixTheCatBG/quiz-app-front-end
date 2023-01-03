import axios from 'axios';

const apiUrl = 'http://localhost:3005/quizzes';
const quizTopicsApiUrl = 'http://localhost:3005/quiz_topics';

export function getAllQuizzes() {
    return axios.get(apiUrl);
}
export function getQuizById(id) {
    return axios.get(`${apiUrl}/${id}`);
}
export function getAllTopicsForQuiz() {
    return axios.get(quizTopicsApiUrl);
    
}
export function deleteQuiz(id) {
    return axios.delete(`${apiUrl}/${id}`);
}

export function saveQuiz(quiz) {
    if (quiz.id) {
        return axios.put(`${apiUrl}/${quiz.id}`, quiz);
    }

    return axios.post(`${apiUrl}`, quiz);
}