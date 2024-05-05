import TwitterIcon from "./icons/Twitter";
import TelegramIcon from "./icons/Telegram";
import DiscordIcon from "./icons/Discord";
import WebsiteIcon from "./icons/Website";
import MediumIcon from "./icons/Medium";
import GithubIcon from "./icons/Github";
import GitbookIcon from "./icons/Gitbook";

export type Route = {
  name: string;
  path?: string;
  link?: string;
  subMenus?: SubMenu[];
  key: string;
  icon?: () => JSX.Element;
  disabled?: boolean;
};

export type SubMenu = Route;

export const MAX_NUMBER = 5;

export const MOBILE_MAX_NUMBER = 5;

export const routes: Route[] = [
  {
    key: "swap",
    name: `Swap`,
    path: "/swap",
  },
  {
    key: "marketplace",
    name: `Marketplace`,
    path: "/marketplace/collections",
  },
  {
    key: "wallet",
    name: `Wallet`,
    path: `/wallet`,
  },
  {
    key: "voting",
    name: `Voting`,
    path: `/voting`,
  },
  {
    key: "followUS",
    name: `Follow US`,
    subMenus: [
      { key: "followUS_twitter", name: `Twitter`, link: "https://twitter.com/waste2earn", icon: TwitterIcon },
      { key: "followUS_Telegram", name: `Telegram`, link: "https://t.me/waste2earn", icon: TelegramIcon },

      { key: "followUS_Medium", name: `Medium`, link: "https://waste2earn.medium.com/", icon: MediumIcon },
      { key: "followUS_Gitbook", name: `Gitbook`, link: "https://waste2earn.gitbook.io/", icon: GitbookIcon },
      { key: "followUS_Github", name: `Github`, link: "https://github.com/wastopia", icon: GithubIcon },
      { key: "followUS_Discord", name: `Discord`, link: "https://discord.gg/UFDTQkBfEB", icon: DiscordIcon },
      { key: "followUS_Website", name: `Website`, link: "http://waste2earn.xyz/", icon: WebsiteIcon },
    ],
  },
  {
    key: "feedback",
    name: "White listing",
    link: "https://forms.gle/A7NUvs66g8NiBTYQ8",
  },
  // {
  //   key: "version",
  //   name: `Version ${version}`,
  //   path: "",
  //   disabled: true,
  // },
];
