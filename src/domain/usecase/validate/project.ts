interface GetProjectUseCaseValidateInterface {
    getProject(ID: number): Promise<string | null>
}

export {
    GetProjectUseCaseValidateInterface
}