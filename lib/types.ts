import { links } from "./data";

// const currentLanguage = "es";

export type SectionName = (typeof links)[number]["name"];

// export type SectionName = typeof currentLanguage extends "es" ? typeof links_es[number]["name"] : typeof links_en[number]["name"];

// const currentLanguage = "es";

// export type SectionName = typeof currentLanguage extends "es" ? typeof links.es[number]["name"] : typeof links.en[number]["name"];