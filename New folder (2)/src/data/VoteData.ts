// IMPORT ASSETS 
import planetMc from '../assets/vote/planetminecraft.webp';
import mcMp from '../assets/vote/minecraft-mp.webp';
import topG from '../assets/vote/topg.webp';
import mcServerList from '../assets/vote/minecraft-servernet.webp';
import serverPact from '../assets/vote/serverpact.webp';

export interface VoteSite {
  id: number;
  name: string;
  url: string; 
  image: string; 
  reward: string;
}

export const voteData: VoteSite[] = [
  {
    id: 1,
    name: "Planet Minecraft",
    url: "https://www.planetminecraft.com/server/tbfmc/",
    image: planetMc,
    reward: "$1000"
  },
  {
    id: 2,
    name: "Minecraft-MP",
    url: "https://minecraft-mp.com/server/352613/vote/",
    image: mcMp,
    reward: "$1000"
  },
  {
    id: 3,
    name: "TopG",
    url: "https://topg.org/minecraft-servers/server-678258",
    image: topG,
    reward: "$1000"
  },
  {
    id: 4,
    name: "Minecraft Server Net",
    url: "https://minecraft-server.net/vote/Controlbro/",
    image: mcServerList,
    reward: "$1000"
  }
];
