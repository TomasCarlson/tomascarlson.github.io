module.exports = {
  siteMetadata: {
    title: "Tomás Carlson",
    siteUrl: `https://www.tomascarlson.com`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
        exclude: ['/admin'],
      },
    },
    `gatsby-transformer-remark`,
  ],
};
