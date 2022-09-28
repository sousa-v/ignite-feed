import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["Post muito bacana hein!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativetoNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    setComments((comments) => [...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const newComment = event.target.value;
    setNewCommentText(newComment);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativetoNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          switch (line.type) {
            case "paragraph":
              return <p key={line.content}>{line.content}</p>;
            case "link":
              return (
                <span key={line.content}>
                  <a href="#">#{line.content}</a>
                </span>
              );
          }
        })}
      </div>

      <form
        onSubmit={(event) => handleCreateNewComment(event)}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback!</strong>
        <textarea
          name="comment"
          value={newCommentText}
          onChange={(event) => handleNewCommentChange(event)}
          placeholder="Deixe seu comentario"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} />;
        })}
      </div>
    </article>
  );
}
