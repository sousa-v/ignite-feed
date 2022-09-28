import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string
}

export function Comment({content}: CommentProps) {
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
            {content}
          </p>
        </div>
        <footer>
          <button><ThumbsUp size={20}/> Aplaudir <span>20</span></button>
        </footer>
      </div>
    </div>
  );
}
