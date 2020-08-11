export interface Person {
    id: string,
    jobTitle: string,
    emailAddress: string,
    firstNameLastName: string,
    selected?: boolean
}

export interface PersonState {
    list: Person[],
    loading: boolean,
    error?: Error
}
