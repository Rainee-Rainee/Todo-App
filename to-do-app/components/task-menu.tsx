import TasksForm from "./tasks-form";
import TaskBoard from "./task-board";
import {useState} from 'react';
import styles from '../styles/task-menu.module.scss';

function TaskMenu (): JSX.Element {
    const [tasks, setTasks] = useState<string[]>([]);

    const getTask = (task: string): void => {
        setTasks([...tasks, task])
    };

    const remove = (index: number): void => {
        setTasks((prevTasks) =>
        prevTasks.filter((_, taskIndex) => taskIndex !== index)
      );
    }

    return (
        <div className={styles.menu}>
            <TasksForm getTask={getTask}/>
            <TaskBoard tasks={tasks} remove={remove}/>
        </div>
    );
}

export default TaskMenu;