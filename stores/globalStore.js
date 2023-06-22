import { create } from "zustand";
export const useStore=create(set=>({
    current: "home",
    atHome: ()=> set({current: "home"}),
    atSkill: ()=> set({current: "skill"}),
    atContact: ()=> set({current: "contact"}),
    atGithub: ()=> set({current: "github"}),
    menuState: true,
    setMenuState: ()=> set(state=>({menuState: !state.menuState})),
}))