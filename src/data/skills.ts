import CSharpLogo from '../assets/skills/csharp.svg?component';
import LaravelLogo from '../assets/skills/laravel.svg?component';
import LuaLogo from '../assets/skills/lua.svg?component';
import TypeScriptLogo from '../assets/skills/typescript.svg?component';
import VueLogo from '../assets/skills/vue.svg?component';

type Skill = {
    name: string;
    icon: any;
};

const skills: Skill[] = [
    { name: 'Laravel', icon: LaravelLogo },
    { name: 'Vue.JS', icon: VueLogo },
    { name: 'TypeScript', icon: TypeScriptLogo },
    { name: 'C#', icon: CSharpLogo },
    { name: 'Lua', icon: LuaLogo },
];

export default skills;
