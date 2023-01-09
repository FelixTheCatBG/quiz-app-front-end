import axios from 'axios';

const apiUrl = 'http://localhost:3005/teams';
const userApiUrl = 'http://localhost:3005/users';
const userTeamApiUrl = 'http://localhost:3005/team_users';

export function getAllTeams() {
    return axios.get(apiUrl);
}

export function getTeamById(id) {
    return axios.get(`${apiUrl}/${id}`);
}

export function deleteTeam(id) {
    return axios.delete(`${apiUrl}/${id}`);
}

export function saveTeam(team) {
    if (team.id) {
        return axios.put(`${apiUrl}/${team.id}`, team);
    }
    team.points = 0;
    return axios.post(`${apiUrl}`, team);
}

export function getAllUsersForTeam(teamId){
    return axios.get(`${userTeamApiUrl}?team_id=${teamId}`);
}

export function getCaptainNameById(id) {
    return axios.get(`${userApiUrl}/${id}`);
}