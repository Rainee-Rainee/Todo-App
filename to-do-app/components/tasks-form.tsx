import { useRef } from 'react';
import styles from '../styles/tasks-form.module.scss';

interface PropTypes {
    getTask: (task: string) => void
}

function tasksForm({getTask}: PropTypes):JSX.Element {

    const inputRef = useRef<HTMLTextAreaElement>(null);
    
    const handleFocused = (): void => {
        inputRef.current?.setAttribute('placeholder', ' ');
    }

    const handleBlur = (): void => {
        inputRef.current?.setAttribute('placeholder', 'What task would you like to add?');
    }

    const handleSubmit = (): void => {
        if (inputRef.current) {
            if (inputRef.current.value != "") {
                getTask(inputRef.current.value);
                inputRef.current.value = "";
            }
            
          }
    }
    return (
        <div>
            <textarea className={styles.taskInput} ref={inputRef} maxLength={750} placeholder="What task would you like to add?" onFocus={handleFocused} onBlur={handleBlur}></textarea>

            <button className={styles.createTaskBtn} onClick={handleSubmit}> ➕ Create Task</button>
        </div>
    );
}

export default tasksForm;