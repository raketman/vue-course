export const userService = {
    login,
    logout
};

function login(username, password) {
    console.log(username, password)
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

