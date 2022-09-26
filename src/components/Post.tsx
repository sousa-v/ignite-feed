interface PostProps {
  author: string;
  content: string;
}

import styles from "./Post.module.css"

export function Post({ author, content }: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/sousa-v.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Victor Sousa</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title="26 de Setembro às 16:38" dateTime="2022-09-26 16:38">
          Publicado à 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
          <p>inventore eligendi praesentium, aliquid ipsa exercitationem culpa</p>
          <p>voluptas dolores <a href="#">aperiam alias</a> distinctio voluptates cupiditate autem</p>
          <p><a href="#">porro modi animi dignissimos facere ipsam?</a></p>
        </p>
      </div>
    </article>
  );
}
