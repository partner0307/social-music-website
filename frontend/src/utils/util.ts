import _ROUTERS from "@/constants/route.constant";


export const tokillo = (n: number) =>
  Number(n) < 1000 ? String(n) : `${~~(Number(n) / 1000)}k`;

type RouteKey = keyof typeof _ROUTERS;

export const routerer = (...args: RouteKey[]) => 
  args.map(route => "/" + _ROUTERS[route]?.replace("/", "")).join("");