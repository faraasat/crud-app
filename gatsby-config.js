module.exports = {
  siteMetadata: {
    title: `Gatsby CRUD App`,
    description: `This is an App which have all basic functionalities od Create, Read, Update and Delete and we are using faunadb and netlify functions.`,
    author: `@farasat`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
