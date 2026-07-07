import { client } from "./client";
import {
  SETTINGS_QUERY,
  HOME_QUERY,
  ABOUT_QUERY,
  CONTACT_QUERY,
  PRICING_QUERY,
} from "./queries";

export const getSettings = () => client.fetch(SETTINGS_QUERY);
export const getHome = () => client.fetch(HOME_QUERY);
export const getAbout = () => client.fetch(ABOUT_QUERY);
export const getContact = () => client.fetch(CONTACT_QUERY);
export const getPricing = () => client.fetch(PRICING_QUERY);