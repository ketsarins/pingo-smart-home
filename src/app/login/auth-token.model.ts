export interface IAuthToken {
    idToken?: string, // TODO:: Should not null
    tokenType: string,
    accessToken: string,
    refreshToken?: string, // TODO:: Should not null
    expiresIn?: number // TODO:: Should not null
}