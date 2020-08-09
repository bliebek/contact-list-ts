export interface Person {
    id: string,
    jobTitle: string,
    emailAddress: string,
    firstNameLastName: string
}

export interface PersonState {
    list: Person[],
    loading: boolean,
    error?: string
}
