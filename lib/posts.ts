export interface PostData {
  id: string;
  title: string;
  date: string;
}

const allPosts = {
  "pre-rendering": {
    id: "pre-rendering",
    title: "Pre-Rendering",
    date: "8-12-2021",
  },
  "ssg-ssr": { id: "ssg-ssr", title: "SSG-SSR", date: "8-14-2021" },
};

export function getPostData(id: string): PostData {
  return allPosts[id];
}

export interface PostId {
  params: { id: string };
}

export function getAllPostIds(): PostId[] {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return Object.keys(allPosts).map((id) => {
    return {
      params: {
        id,
      },
    };
  });
}
