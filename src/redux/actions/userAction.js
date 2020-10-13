export const USER_UPDATE = 'USER_UPDATE'

export function updateUser(newUser) {
    return {
        type : 'USER_UPDATE',
        payload : {
            user : newUser
        }
    }
}

export function getUsers() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(users => console.log(users))
        .then(user => user.map(data => console.log(data.name)))
        .catch(err => console.log(err))
    }
}