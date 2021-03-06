export const GITHUB_NAME = 'melvynx';

export const GITHUB_KEY = 'cb15fc5496778827637f265238600794d28f3e07';

export const WEBSITE_NAME = 'VonQey';

enum EnumRootDataBase {
  prod = 'chat',
  ninja = 'chat_ninja',
}

export const ROOT_DATABASE: EnumRootDataBase = EnumRootDataBase.prod;

export type TypeTopic = {
  title: string;
  user: string;
  user_id: string;
  message: string;
  date: string;
  answer?: Array<TypeAnswerChat>;
  auth?: TypeAuthForum;
  topicID?: string;
};

export type TypeTopicList = {
  topic: TypeTopic;
  key: string;
};

export type TypeAnswerChat = {
  user_id: string;
  user: string;
  message: string;
  date: string;
};

export type TypeArrayAnswer = {
  key: string;
  val: TypeAnswerChat;
};

export type TypeAuthDoc = {
  group: string;
  created_at: number;
  username: string;
};

export type TypeAuthForum = {
  auth: any;
  collection: TypeAuthDoc;
};
//HomePage : Array of card

export const cardHomePage: Array<TypeCustomCardHomePage> = [
  {
    image:
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    title: 'Shuffle Sentence !',
    body:
      "It's an application to shuffle how many sentence you want, you can't have one result, or a numbered list for result !",
    link: '/randomword',
  },
  {
    image:
      'https://img.freepik.com/vettori-gratuito/collezione-di-numeri-colorati-con-design-piatto_23-2147811939.jpg?size=338&ext=jpg',
    title: 'Base convertor',
    body:
      "Calculator for change base 2 to base 10 and base 16, or inverse ! It's in really time, faster and easy !",
    link: '/transform',
  },
  {
    image:
      'https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA',
    title: 'GitHub MelvynX',
    body: "It's a page who resens my GitHub pages !!! We can see all repos.",
    link: '/github',
  },
];

//Type

export type TypeCustomCardHomePage = {
  image: string;
  title: string;
  body: string;
  link: string;
};
