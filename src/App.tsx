import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Victor Sousa"
            content="Voluptate consequat quis enim est ea. Incididunt ipsum tempor est adipisicing. Ex nisi in eiusmod magna quis anim cillum aute nostrud. Adipisicing tempor proident commodo veniam sunt qui magna. Occaecat mollit officia minim occaecat aute proident sit sit culpa ad tempor anim voluptate ut. Fugiat exercitation deserunt eiusmod id dolor irure ea et ut. Duis nostrud sunt consectetur sit mollit eiusmod officia cupidatat excepteur tempor nulla in.

Incididunt aliqua excepteur aute non cupidatat aliqua nisi eu sit duis fugiat non minim do. Laboris veniam id et sunt occaecat cillum id nulla et cillum adipisicing amet reprehenderit. Aute voluptate mollit sint consequat ea esse. Aliqua ullamco Lorem amet elit dolore qui."
          />
          <Post
            author="Victor Sousa"
            content="Dolore deserunt reprehenderit eu adipisicing aliqua elit. Pariatur eiusmod anim Lorem laboris. Fugiat enim cillum cupidatat tempor laborum culpa. Id Lorem laborum non ut minim mollit tempor incididunt dolore irure do aute.

Sunt do amet Lorem nulla consequat cupidatat exercitation. Amet enim laboris laborum fugiat. Quis in ad cupidatat do. Eiusmod laborum pariatur esse incididunt Lorem voluptate ad mollit eiusmod incididunt."
          />
        </main>
      </div>
    </div>
  );
}
