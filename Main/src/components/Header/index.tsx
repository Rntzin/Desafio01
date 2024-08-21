import styles from './Header.module.css'

import logo from '../assets/Logo.svg'
import plus from '../assets/plus.svg'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props){
    const [title, setTtitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        onAddTask(title);
        setTtitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTtitle(event.target.value);
    }
    return (
            <header className={styles.header}>
                <img src={logo} alt='Logo ToDo List'/>

                <form className ={styles.newTaskForm} onSubmit={handleSubmit}>
                    <input 
                        placeholder='Adicione uma nova tarefa' 
                        onChange={onChangeTitle} 
                        value={title}/>
                    <button>
                        Criar
                        <img src={plus}/>
                    </button>
                </form>
            </header>
    )
}