let APIURL = '';

switch (window.location.hostname) {
    case 'localhost':
        APIURL = 'http://localhost:3000'
        break;
    case 'eas-pernapp.herokuapp.com':
        APIURL = 'https://eas-pernapp.herokuapp.com'
}
export default APIURL;