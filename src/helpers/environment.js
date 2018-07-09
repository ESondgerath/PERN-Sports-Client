let APIURL = '';

switch (window.location.hostname) {
    case 'localhost':
        APIURL = 'http://localhost:3000'
        break;
    case 'eas-pernsports.herokuapp.com':
        APIURL = 'https://eas-pernsports.herokuapp.com'
}
export default APIURL;