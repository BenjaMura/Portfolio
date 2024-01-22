import { links_es, links_en } from "./data";

const currentLanguage = "es";

export type SectionName = typeof currentLanguage extends "es" ? typeof links_es[number]["name"] : typeof links_en[number]["name"];
