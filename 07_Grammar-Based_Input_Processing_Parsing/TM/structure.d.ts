export type RobotsTxt = {
    agents: {
        [userAgent: string]: {
            Allow: string[];
            Disallow: string[];
        };
    };
    Sitemap: string[];
    Host?: string;
};

/**
Contohnya kayak gini:
{
  "agents": {
    "*": {
      "Allow": [
        "/markets/kabu/stkcomp/$",
        "/markets/kabu/gyoshucomp/$"
      ],
      "Disallow": [
        "/.tools",
        "/markets/kabu/stkcomp/",
        "/markets/kabu/gyoshucomp/",
        "/.resources/k-components/rtoaster/"
      ]
    },
    "ccbot": {
      "Allow": [],
      "Disallow": [
        "/"
      ]
    },
    "gptbot": {
      "Allow": [],
      "Disallow": [
        "/"
      ]
    }
  },
  "Sitemap": [
    "https://www.nikkei.com/sitemap.xml",
    "https://www.nikkei.com/sitemaps/topics_sitemap_index.xml"
  ]
}
 */