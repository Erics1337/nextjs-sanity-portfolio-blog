import { atom } from 'recoil'

export const blogState = atom({
    key: 'currentCategory',
    default: ''
})