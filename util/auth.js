export function createUser(){
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]');
}