/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  title: 'IAEW — Integraciones',
  tagline: 'Catálogo de servicios y eventos de la Clase 06',
  organizationName: 'IAEW 2026',
  theme: 'sunset',
  homepageLink: 'https://www.eventcatalog.dev/',
  // Supports static or server. Static renders a static site, server renders a server side rendered site
  // large catalogs may benefit from server side rendering
  output: 'static',
  // By default set to false, add true to get urls ending in /
  trailingSlash: false,
  // Change to make the base url of the site different, by default https://{website}.com/docs,
  // changing to /company would be https://{website}.com/company/docs,
  base: '/',
  // Resource search is the default lightweight search. Change this to { type: 'indexed' }
  // to enable full-content search. Indexed search requires running a build to generate the index.
  search: {
    type: 'resource',
  },
  // Customize the navigation for your docs sidebar.
  // read more at https://eventcatalog.dev/docs/development/customization/customize-sidebars/documentation-sidebar
  navigation: {
    pages: ['list:all'],
  },
  // Customize the logo, add your logo to public/ folder
  logo: {
    alt: 'EventCatalog Logo',
    src: '/logo.png',
    text: 'IAEW 2026',
  },
  // This lets you copy markdown contents from EventCatalog to your clipboard
  // Including schemas for your events and services
  llmsTxt: {
    enabled: true,
  },
  // required random generated id used by eventcatalog
  cId: '6d03f346-a990-4e5a-a476-0fec9e89f9b8',
  // required by eventcatalog
  tsd: 1790546612398,
};
