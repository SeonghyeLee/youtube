
//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const CONFIRM_ACCOUNT = "/confirm-account";

const COURSES = "/courses";
const COURSES_NEW = "/new";
const COURSES_MINE = "/mine";


const API = "/api";
const API_DOCUMENT = "/document";

const API_V1 = API+"/v1";
const API_V1_BUY = "/buy";
const API_V1_REFUND= "/refund";

const API_V2 = API+"/v2";
const API_V2_REMOVE = "/remove";
const API_V2_EDIT = "/edit";


const routes = {

    home: HOME,
    join: HOME+JOIN,
    login: HOME+LOGIN,
    confirmAccount: HOME+CONFIRM_ACCOUNT,
    
    courses: COURSES,
    coursesNew: COURSES_NEW,
    coursesMine: COURSES_MINE,
    
    
    api: API,
    apiDocument: API_DOCUMENT,
    
    apiV1: API_V1,
    apiV1Buy: API_V1_BUY,
    apiV1Refund: API_V1_REFUND,
    
    apiV2: API_V2,
    apiV2Remove: API_V2_REMOVE,
    apiV2Edit: API_V2_EDIT
}

export default routes;