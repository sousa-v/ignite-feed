import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <Post author="Victor Sousa" content="my post" />
    </div>
  );
}
