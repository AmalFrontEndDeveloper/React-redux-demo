export enum ENDPOINT {
    GET_USER_DETAILS = 'User/GetAll',

    // ==================================  Role API  =================================
    GET_ROLE_ACCESS = 'Role/GetRoleAccess',
    GET_ROLE_TYPES = 'Role/GetRoleTypes',
    GET_USER_STORY_TYPES = 'Role/GetUserStoryTypes',
    ROLE_UPDATE = 'Role/Update',
    ROLE_SINGLE_DETAILS = 'Role/Get',

    // ==================================  Customer API  ============================
    GET_ALL_CUSTOMER = 'Customer/GetAll',
    CUSTOMER_ADD = 'Customer/Add',
    CUSTOMER_UPDATE = 'Customer/Update',
    CUSTOMER_DELETE = 'Customer/Delete',
    CUSTOMER_SINGLE_DETAILS = 'Customer/Get',

    // ==================================  User Role API  ============================
    GET_ALL_USER_ROLE = 'UserRole/GetAll',
    USER_ROLE_ADD = 'UserRole/Add',
    USER_ROLE_UPDATE = 'UserRole/Update',
    USER_ROLE_DELETE = 'UserRole/Delete',
    USER_ROLE_SINGLE_DETAILS = 'UserRole/Get',

    // ==================================  Rate  API  =================================
    RATE_GET_ALL ="Rate/GetAll",
    RATE_SINGLE_RECORD_DETAILS="Rate/Get",
    ADD_RATE="Rate/Add",
    UPDATE_RATE="Rate/Update",
    DELETE_RATE="Rate/Delete"


}