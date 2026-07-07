import { groq } from "next-sanity";

export const SERVICES_QUERY = groq`*[_type == "service"] | order(order asc){
  _id,
  title,
  excerpt,
  "slug": slug.current,
  image
}`;

export const SERVICES_NAV_QUERY = groq`*[_type == "service"] | order(order asc){
  title,
  "slug": slug.current
}`;

export const SERVICE_BY_SLUG_QUERY = groq`*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  excerpt,
  "slug": slug.current,
  image,
  sections[]{ heading, image, text, highlighted }
}`;

export const SERVICE_SLUGS_QUERY = groq`*[_type == "service" && defined(slug.current)]{
  "slug": slug.current
}`;

export const SETTINGS_QUERY = groq`*[_type == "settings"][0]{
  siteName, logo, facebook, instagram
}`;

export const HOME_QUERY = groq`*[_type == "home"][0]{
  heroImage,
  faq[]{ question, answer }
}`;

export const ABOUT_QUERY = groq`*[_type == "about"][0]{
  heading, text, image, mission, vision,
  values[]{ title, text }
}`;

export const CONTACT_QUERY = groq`*[_type == "contact"][0]{
  phone, email, address, hours
}`;
export const PRICING_QUERY = groq`*[_id == "pricing2"][0]{
  items[]{ name, category, price }
}`;