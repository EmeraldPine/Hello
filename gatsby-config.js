module.exports = {
  siteMetadata: {
    title: `Ryan Chang's Personal Website`,
    description: `Personal website to showcase work experience. Build on GatsbyJS, ReactJS, and TailwindCSS.`,
    author: `Ryan Chang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
    },
    /* For Tailwind CSS */
    `gatsby-plugin-postcss`,

  ],
}
