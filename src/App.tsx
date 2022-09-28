import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/sousa-v.png",
      name: "Victor Sousa",
      role: "Fullstack Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Esse non aliqua Lorem irure.",
      },
      {
        type: "paragraph",
        content:
          "Amet labore culpa do voluptate exercitation consectetur do veniam do ad esse eiusmod commodo pariatur.",
      },
      {
        type: "paragraph",
        content:
          "Exercitation sit anim consectetur eu ipsum mollit in consectetur consequat excepteur non magna qui minim.",
      },
      {
        type: "link",
        content: "Enim nstrud ",
      },
      {
        type: "link",
        content: "Enim nostrud ",
      },
    ],
    publishedAt: new Date("2022-09-23 14:15"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Fullstack Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Exercitation reprehenderit qui esse pariatur duis cillum est nisi ex fugiat sint sit magna.",
      },
      {
        type: "paragraph",
        content:
          "Magna nisi aliquip labore quis exercitation minim sunt voluptate dolor minim velit voluptate dolore id.",
      },
      {
        type: "paragraph",
        content:
          "Ullamco id culpa sunt enim.",
      },
      {
        type: "link",
        content: "Enim notrd ",
      },
      {
        type: "link",
        content: "Eim nosrud ",
      },
    ],
    publishedAt: new Date("2022-09-25 14:15"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Fullstack Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Ex duis do deserunt laboris irure esse occaecat tempor.",
      },
      {
        type: "paragraph",
        content:
          "Qui excepteur aute magna irure fugiat aliquip esse quis ex cupidatat.",
      },
      {
        type: "paragraph",
        content:
          "Occaecat ut consectetur ipsum in incididunt proident aliqua tempor culpa anim minim voluptate consectetur aute.",
      },
      {
        type: "link",
        content: "nim nostrud l ",
      },
      {
        type: "link",
        content: "Enm nostrud ",
      },
    ],
    publishedAt: new Date("2022-09-27 14:15"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
