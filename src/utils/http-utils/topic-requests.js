import axios from 'axios';

const apiUrl = 'http://localhost:3005/topics';

export function getAllTopics() {
    return axios.get(apiUrl);
}

export function getTopicById(id) {
    return axios.get(`${apiUrl}/${id}`);
}

export function deleteTopic(id) {
    return axios.delete(`${apiUrl}/${id}`);
}

export function saveTopic(topic) {
    if (topic.id) {
        return axios.put(`${apiUrl}/${topic.id}`, topic);
    }

    return axios.post(`${apiUrl}`, topic);
}