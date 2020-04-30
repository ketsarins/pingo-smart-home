export interface ILogin {
    /**
     * This is the OAuth 2.0 grant type that highly-trusted apps use to access an API.
     */
    grant_type: 'password', 

    /**
     * Credentials - username
     */
    username: string; 

    /**
     * Credentials - password
     */
    password: string;

    /**
     * The application's Client ID
     */
    client_id: string,

    /**
     * The application's Client Secret
     */
    client_secret: string
}
