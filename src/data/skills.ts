import CSharpLogo from '../assets/skills/csharp.svg?component';
import LaravelLogo from '../assets/skills/laravel.svg?component';
import LuaLogo from '../assets/skills/lua.svg?component';
import TypeScriptLogo from '../assets/skills/typescript.svg?component';
import VueLogo from '../assets/skills/vue.svg?component';
import { Component } from 'vue';

type Skill = {
    name: string;
    icon: any;
};

const skills: Skill[] = [
    { name: 'C#', icon: CSharpLogo },
    { name: 'Laravel', icon: LaravelLogo },
    { name: 'Lua', icon: LuaLogo },
    { name: 'TypeScript', icon: TypeScriptLogo },
    { name: 'Vue.JS', icon: VueLogo },
];

export default skills;