type ProjectTag = {
    name: string;
    color: string;
};

const projectTags: Record<string, ProjectTag> = {
    "lua": {
        "name": "Lua",
        "color": "bg-blue-500 text-blue-900"
    },
    "laravel": {
        "name": "Laravel",
        "color": "bg-red-400 text-red-900"
    },
    "data-handling": {
        "name": "Data Handling",
        "color": "bg-green-400 text-green-900"
    },
    "ui-ux": {
        "name": "UI/UX",
        "color": "bg-indigo-400 text-indigo-900"
    },
    "nostalgic": {
        "name": "Nostalgic",
        "color": "bg-yellow-400 text-yellow-900"
    },
};

export default projectTags;