import axios from 'axios';


const apiUrl = 'http://localhost:3005/team_users';

export function getAll() {
    return axios.get(apiUrl);
}

export function getByTeamAndUser(teamId, userId) {
    return axios.get(`${apiUrl}/?team_id=${teamId}&user_id=${userId}`);
}

export function deleteUserFromTeam(id) {
    return axios.delete(`${apiUrl}/${id}`);
}

export function addUserInTeam(userToTeam) {
    return axios.post(`${apiUrl}`, userToTeam);
}

export function getAllUsersForTeam(teamId){
    return axios.get(`${apiUrl}?team_id=${teamId}`);
}