module.exports = {
  siteMetadata: {
    title: "AudioCORE",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Ua9JgGC6vPQiOShSlT2Y-VR7oGM0gadWjVVURwiiSG0",
        spaceId: "bk4vpm653zwr",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
