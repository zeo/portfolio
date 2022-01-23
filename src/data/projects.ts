import CosmoImage from '../assets/projects/cosmo.webp';
import MiningSystemImage from '../assets/projects/summit_mining.png';
import UnboxingSystemImage from '../assets/projects/elite_unboxing.png';
import GangSystemImage from '../assets/projects/gangs.png';
import ScoreboardImage from '../assets/projects/scoreboard.png';
import YearSeasonSystemImage from '../assets/projects/time_system.png';
import WarSystemImage from '../assets/projects/war_system.png';

type Project = {
    name: string;
    description: string;
    image: string;
    url?: string;
    tags?: string[];
    timeFrame?: string;
};

const projects: Project[] = [
    {
        'name': 'Cosmo',
        // eslint-disable-next-line max-len
        'description': 'With the development of Cosmo, we were challenged of building a secure, maintainable and flexible code-base. To help with this we used the Laravel framework, a powerful and well maintained framework. For the rest I had to make sure clients could easily navigate through the site with an outstanding experience.',
        'image': CosmoImage,
        'url': 'https://demo.tbdscripts.com',
        'tags': ['laravel', 'data-handling', 'ui-ux'],
        'timeFrame': '2020 - now',
    },
    {
        'name': 'Mining System',
        // eslint-disable-next-line max-len
        'description': 'This mining / crafting system was commissioned by a former Garry\\\'s Mod community, it had several core features such as mining ores with different tools and crafting items with the mined ores.  Some included side but game-changing features are the radioactive ores and upgrades to make mining more efficient. The UI also has several features to navigate easily such as searching for your favourite items.',
        'image': MiningSystemImage,
        'tags': ['lua', 'data-handling'],
        'timeFrame': '2 months (including revisions)',
    },
    {
        'name': 'Unboxing System',
        // eslint-disable-next-line max-len
        'description': 'I was hired by a well-known Garry\\\'s Mod community to create the frontend menu of their unboxing system. This had to be done using their internal UI library and design scheme to match the theme of the server. The main menu also had to be easily accessible for every player, independent on their time on the server.',
        'image': UnboxingSystemImage,
        'tags': ['lua', 'ui-ux'],
        'timeFrame': '1 month'
    },
    {
        'name': 'Gang System',
        // eslint-disable-next-line max-len
        'description': 'A gang system I made for a DarkRP server, its features ranged from bank, to roles, to allies. The menu was done using XeninUI and had to be integrated into the F4 menu he was already using on the server, so the menu was easily accessible for players and matches the main theme of the server..',
        'image': GangSystemImage,
        'tags': ['lua', 'ui-ux', 'data-handling'],
        'timeFrame': '3 months (including revisions)',
    },
    {
        'name': 'Scoreboard',
        // eslint-disable-next-line max-len
        'description': 'A sleek, modern scoreboard made for a Garry\\\'s Mod gaming community. The scoreboard is made using XeninUI (this was requested by the client) and includes sorting, searching and integrations with multiple custom addons that were on the server.',
        'image': ScoreboardImage,
        'tags': ['lua', 'ui-ux'],
        'timeFrame': '1 month (including revisions)',
    },
    {
        'name': 'Year/Season System',
        // eslint-disable-next-line max-len
        'description': 'This was my very first GLua project, it\\\'s a simple year and season system. The season changed every 10 minutes the server is online, and the data gets stored over multiple sessions.',
        'image': YearSeasonSystemImage,
        'tags': ['lua', 'nostalgic'],
        'timeFrame': 'approx. 5 days',
    },
    {
        'name': 'War System',
        // eslint-disable-next-line max-len
        'description': 'A war system I made for a community a couple years back, definitely not one of my better project but I learned a lot from even this small project. It allows you to select a faction against which you want to start a war and a reason, after that the music starts playing and the war begins..',
        'image': WarSystemImage,
        'tags': ['lua', 'nostalgic'],
        'timeFrame': 'approx. 2 weeks',
    },
];

export default projects;