import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false}src="https://github.com/sousa-v.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Victor Sousa</strong>
              <time title="26 de Setembro às 16:38" dateTime="2022-09-26 16:38">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário"><Trash size={24}/></button>
          </header>
          <p>
            Amet minim non laboris anim exercitation id eiusmod cupidatat minim
            tempor quis reprehenderit irure.
          </p>
        </div>
        <footer>
          <button><ThumbsUp size={20}/> Aplaudir <span>20</span></button>
        </footer>
      </div>
    </div>
  );
}
