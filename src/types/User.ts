export interface User {
    author: string,
    qq: number,
    introduce: string,
    background: string
    socializing: {
        name: string,
        url: string
    }[]
}