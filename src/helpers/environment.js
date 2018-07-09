let APIURL = '';

switch (window.location.hostname) {
    case 'localhost':
        APIURL = 'http://localhost:3000'
        break;
    case 'eas-pernsports-server.herokuapp.com':
        APIURL = 'https://eas-pernsports-server.herokuapp.com'
}
export default APIURL;