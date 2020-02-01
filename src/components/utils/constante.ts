export const GITHUB_NAME = "melvynx";

export const GITHUB_KEY = "cb15fc5496778827637f265238600794d28f3e07";

export const WEBSITE_NAME = "VonQey";

export type TypeTopic = {
  title: string;
  user: string;
  message: string;
  answer?: Array<TypeAnswerChat>;
};

export type TypeAnswerChat = {
  user: string;
  message: string;
};

//HomePage : Array of card

export const cardHomePage: Array<TypeCustomCardHomePage> = [
  {
    image: "images/shuffleImage.png",
    title: "Shuffle Sentence !",
    body:
      "It's an application to shuffle how many sentence you want, you can't have one result, or a numbered list for result !",
    link: "/randomword"
  },
  {
    image: "images/numberBase.jpg",
    title: "Base convertor",
    body:
      "Calculator for change base 2 to base 10 and base 16, or inverse ! It's in really time, faster and easy !",
    link: "/transform"
  },
  {
    image:
      "https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA",
    title: "GitHub MelvynX",
    body: "It's a page who resens my GitHub pages !!!",
    link: "/github"
  }
];

//Type

export type TypeCustomCardHomePage = {
  image: string;
  title: string;
  body: string;
  link: string;
};
