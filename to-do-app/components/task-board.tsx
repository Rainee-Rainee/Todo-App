import styles from "@/styles/task-board.module.scss";

interface PropTypes {
  tasks: string[];
  remove: (index: number) => void;
}

function TaskBoard({ tasks, remove }: PropTypes): JSX.Element {
  const tasksList = tasks.map((task, index) => {
    return (
      <li className={styles.listitem} key={index} onClick={() => remove(index)}>
        {task}
      </li>
    );
  });

  return (
    <div className={styles.board}>
      <div className={styles.title}>Tasks</div>
      <ul>{tasksList}</ul>
    </div>
  );
}

export default TaskBoard;