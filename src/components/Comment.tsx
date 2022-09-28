import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

interface Comment {
  id: string
  date: Date;
  comment: string;
}

interface CommentProps {
  comment: Comment
  onDeleteComment: (comment: string) => void;
}

export function Comment({ comment,onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  const commentDateRelativetoNow = formatDistanceToNow(comment.date, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleDeleteComment() {
    onDeleteComment(comment.id)
  }

  function handleLikeComment(){
    setLikeCount(oldState => oldState + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/sousa-v.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Victor Sousa</strong>
              <time title="26 de Setembro às 16:38" dateTime="2022-09-26 16:38">
                {commentDateRelativetoNow}
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comment.comment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
