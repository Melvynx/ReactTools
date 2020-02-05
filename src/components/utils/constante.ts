export const GITHUB_NAME = "melvynx";

export const GITHUB_KEY = "cb15fc5496778827637f265238600794d28f3e07";

export const WEBSITE_NAME = "VonQey";

export type TypeTopic = {
  title: string;
  user: string;
  message: string;
  date: string;
  answer?: Array<TypeAnswerChat>;
};

export type TypeAnswerChat = {
  user: string;
  message: string;
};

//HomePage : Array of card

export const cardHomePage: Array<TypeCustomCardHomePage> = [
  {
    image:
      "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Shuffle Sentence !",
    body:
      "It's an application to shuffle how many sentence you want, you can't have one result, or a numbered list for result !",
    link: "/randomword"
  },
  {
    image:
      "https://img.freepik.com/vettori-gratuito/collezione-di-numeri-colorati-con-design-piatto_23-2147811939.jpg?size=338&ext=jpg",
    title: "Base convertor",
    body:
      "Calculator for change base 2 to base 10 and base 16, or inverse ! It's in really time, faster and easy !",
    link: "/transform"
  },
  {
    image:
      "https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA",
    title: "GitHub MelvynX",
    body: "It's a page who resens my GitHub pages !!! We can see all repos.",
    link: "/github"
  },
  {
    image:
      "https://media.istockphoto.com/illustrations/forum-special-blue-banner-background-illustration-id1017086734?k=6&m=1017086734&s=170667a&w=0&h=6GzMMFXCAeXQl7Q_fUTscOS6rhHnRGFx5CXRnnmNB-I=",
    title: "Simple Forum",
    body: "Create you're Topic. Search you're idea. Let's you're mine.",
    link: "/forum"
  }
];

//Type

export type TypeCustomCardHomePage = {
  image: string;
  title: string;
  body: string;
  link: string;
};
