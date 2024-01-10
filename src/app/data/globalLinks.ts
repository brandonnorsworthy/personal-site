type GlobalLink = {
  name: string;
  description?: string;
  url: string;
  coming: string;
  override?: boolean;
  ignore?: boolean;
  externalLink?: boolean;
  sublinks?: GlobalLinkSublink[];
}

type GlobalLinkSublink = {
  name: string;
  description?: string;
  coming?: string;
  ignore?: boolean;
  externalLink?: boolean;
}

const globalLinks: GlobalLink[] = [
  {
    name: "Home",
    url: "/",
    coming: "TBD",
    ignore: true,
  },
  {
    name: "Wedding",
    url: "/wedding",
    coming: "Q1/2024",
  },
  {
    name: "Roadmap",
    url: "/roadmap",
    coming: "Q4/2023",
    override: true,
  },
  {
    name: "Hobbies",
    url: "/hobbies",
    coming: "Q1/2024",
    override: true,
    sublinks: [
      { name: "Guitar" },
      { name: "Gaming" },
      { name: "Photography" },
      { name: "Cooking" },
      { name: "Juggling" },
      { name: "Gardening" },
      { name: "Programming" },
    ]
  },
  {
    name: "Blog",
    url: "/blog",
    coming: "Q1/2024",
    override: true,
  },
  {
    name: "Servers",
    description: "A menu of my deployed container servers for games (Terraria, ARK... ) so everyone can check the status of the servers and see if they are online or not.",
    url: "/servers",
    coming: "Q1/2024",
  },
  {
    name: "Projects",
    url: "/projects",
    coming: "Q2/2024",
    sublinks: [
      {
        name: "BrandonGPT",
        description: "Completely unlocked LLM that will give you anything you want it to reply with with no limitations.",
        coming: "Q2/2024",
      },
      {
        name: "Bitter",
        description: "A social media platform that is a mix of twitter and reddit. Able to post 280 characters and upvote/downvote posts. Used for me to document my thoughts to reflect later",
        externalLink: true,
        coming: "Q1/2024",
      },
      {
        name: "Global Activity",
        description: "A activity tracker similar to github contributions across all platforms, github, bitter, bitbucket, stackoverflow, blogposts, wakatime, etc",
        coming: "TBD",
      },
      {
        name: "Colors of War Game Remake",
        description: "Remake of the game Colors of War, in the browser but with free multiplayer",
        externalLink: true,
        coming: "TBD",
      },
      {
        name: "EngagmentAI",
        description: "A secret project that will have the ability to mimic users with their own personalities and activities, will be added to bitter",
        coming: "TBD",
      },
      {
        name: "Guitar: Music Theory",
        description: "A website that will teach you music theory and how to play guitar, visual fretboard where you place scales and chords based on what is asked to help memorize the fretboard",
        coming: "Q1/2024",
      },
    ],
  },
]

export default globalLinks;