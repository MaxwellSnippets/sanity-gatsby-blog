export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "636e7af052032d08b5835a71",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-rwv1e5vf",
                  apiId: "d390daec-7bea-4935-ada4-4011d62d2213",
                },
                {
                  buildHookId: "636e7af1d8fd82091dbf4a85",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ff4pxfp8",
                  apiId: "9303da77-108c-4acf-93ae-9bb47e7da31d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/MaxwellSnippets/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ff4pxfp8.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
