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
          "Enim nostrud est consequat anim sit irure consequat consequat irure irure.",
      },
      {
        type: "paragraph",
        content:
          "Enim nostrud est consequat anim sit irure consequat consequat irure irure.",
      },
      {
        type: "paragraph",
        content:
          "Enim nostrud est consequat anim sit irure consequat consequat irure irure.",
      },
      {
        type: "link",
        content: "Enim nostrud ",
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
          "Enim nostrud est consequat anim sit irure consequat consequat irure irure.",
      },
      {
        type: "paragraph",
        content:
          "Enim nostrud est consequat anim sit irure consequat consequat irure irure.",
      },
      {
        type: "paragraph",
        content:
          "Enim nostrud est consequat anim sit irure consequat consequat irure irure.",
      },
      {
        type: "link",
        content: "Enim nostrud ",
      },
      {
        type: "link",
        content: "Enim nostrud ",
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
          "Enim nostrud est consequat anim sit irure consequat consequat irure irure.",
      },
      {
        type: "paragraph",
        content:
          "Enim nostrud est consequat anim sit irure consequat consequat irure irure.",
      },
      {
        type: "paragraph",
        content:
          "Enim nostrud est consequat anim sit irure consequat consequat irure irure.",
      },
      {
        type: "link",
        content: "Enim nostrud ",
      },
      {
        type: "link",
        content: "Enim nostrud ",
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
