import styles from './task.module.css'
import trash from '../assets/trash.svg'
import check from '../assets/check.svg'
import { ITask } from '../../App'

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
    return (
        <div className={styles.task}>
            <button 
                className={styles.checkContainer} 
                onClick={()=> onComplete(task.id)}>
                {task.isCompleted ? <img src={check}/> : <div />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <img src={trash}/>
            </button>
        </div>
    )
}