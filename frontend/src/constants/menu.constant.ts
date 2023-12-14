import { FaUserAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import _ROUTERS from "./route.constant";

const MenuData: any = [
    {
      icon: IoHome,
      text: "Home",
      router: _ROUTERS._HOME,
    },
    {
      icon: FaUserAlt,
      text: "Profile",
      router: _ROUTERS._PROFILE,
    },
    {
      icon: IoStarSharp,
      text: 'Battles',
      router: _ROUTERS._BRACKETS
    }
    // {
    //   icon: FaUserAlt,
    //   text: 'Brackets',
    //   router: '#',
    //   submenus: [
    //     {
    //       icon: FaUserAlt,
    //       text: 'Launch Tournament',
    //       router: '#'
    //     },
    //     {
    //       icon: FaUserAlt,
    //       text: 'Yearly',
    //       router: '#'
    //     },
    //     {
    //       icon: FaUserAlt,
    //       text: 'Quarterly',
    //       router: '#'
    //     },
    //     {
    //       icon: FaUserAlt,
    //       text: 'Weekly',
    //       router: '#'
    //     },
    //     {
    //       icon: FaUserAlt,
    //       text: 'Community',
    //       router: _ROUTERS._BRACKETS
    //     },
    //   ]
    // },
    // {
    //   icon: FaUserAlt,
    //   text: 'Store',
    //   router: '#',
    //   submenus: [
    //     {
    //       icon: FaUserAlt,
    //       text: 'Producer Packs',
    //       router: '#'
    //     }
    //   ]
    // }
];

export { MenuData };