// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "AstroMelody";
export const SITE_TITLE = "Ning's Travel Blog";
export const SITE_DESCRIPTION = "A Trip Diary of a software engineer";
export const LIGHT_THEME = 'corporate';
export const DARK_THEME = 'halloween';

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "旅遊部落格";
export const Tags_DESCRIPTION =
  "記錄我的旅遊點點滴滴";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in AstroMelody`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in AstroMelody`,
    description: `Browse all articles under the ${category} category in AstroMelody`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/europe/", title: "歐洲" },
  { href: "/category/asia/", title: "亞洲" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/core-concepts-concepts-why-astro/", title: "Astro" },
  { href: "/posts/assets-guides-styling/", title: "Styling" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "i-tabler-rss", label: "RSS" },
  {
    href: "https://twitter.com/astrodotbuild",
    icon: "i-tabler-brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/isooosi",
    icon: "i-tabler-brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
