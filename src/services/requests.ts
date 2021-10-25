/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export type User = { name: string; username:string; password:string}
export type UserList = Array<User>

export async function login(username:string,password:string){
    const request = await fetch('./login.json')
    const userJson: UserList = await request.json()
    return userJson.find(s => s.password === password && s.username == username)
}

export async function getUser(){
    const request = await fetch('./login.json')
    const user: User = await request.json()
    return user 
}


