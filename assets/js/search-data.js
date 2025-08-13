// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-i-recently-defended-my-phd-and-am-getting-ready-to-move-to-across-the-country-to-boston-to-work-in-rachel-denison-s-lab-at-bu",
          title: 'I recently defended my PhD and am getting ready to move to across...',
          description: "",
          section: "News",},{id: "news-super-excited-that-my-review-paper-representational-structures-as-a-unifying-framework-for-attention-with-viola-is-now-published-in-trends-in-cognitive-sciences-feel-free-to-get-in-touch-if-you-have-any-questions-or-thoughts",
          title: 'Super excited that my review paper “Representational structures as a unifying framework for...',
          description: "",
          section: "News",},{id: "news-my-first-preprint-from-my-postdoc-is-online-check-it-out-on-biorxiv-a-dynamic-spatiotemporal-normalization-model-for-continuous-vision",
          title: 'My first preprint from my Postdoc is online! Check it out on biorXiv:...',
          description: "",
          section: "News",},{id: "news-a-new-paper-with-mert-and-viola-is-out-in-jneuro-investigating-the-flexibility-of-feature-based-attention-using-ssveps-zooming-in-and-out-selective-attention-modulates-color-signals-in-early-visual-cortex-for-narrow-and-broad-ranges-of-task-relevant-features",
          title: 'A new paper with Mert and Viola is out in JNeuro, investigating the...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/afchapman.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%67%75%73%63@%62%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/afchapman", "_blank");
        },
      },{
        id: 'social-osf',
        title: 'Open Science Framework',
        section: 'Socials',
        handler: () => {
          window.open("https://osf.io/v46um/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=GjpdpusAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/angusfchapman", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
