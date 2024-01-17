import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import Form from './Form'
import axios from 'axios'

const statuses = {
    "Срочно": 'text-rose-400 bg-rose-400/10',
    "Средняя срочность": 'text-green-400 bg-green-400/10',
    "Низкая срочность": 'text-gray-500 bg-gray-100/10',
}
const environments = {
  "Средняя срочность": 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
  "Срочно": 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
  "Низкая срочность": 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
}
const todosList = [
  {
    id: 1,
    href: '#',
    taskName: 'Сверстать прикол',
    executor: 'Иванов И.И.',
    customer: 'Иванов M.И.',
    urgency: 'Срочно',
    done: false
  },
  {
    id: 2,
    href: '#',
    taskName: 'Сверстать мем',
    executor: 'Иванов И.И.',
    customer: 'Иванов M.И.',
    urgency: 'Средняя срочность',
    done: false
  },
  {
    id: 3,
    href: '#',
    taskName: 'Сверстать регистрацию',
    executor: 'Иванов И.И.',
    customer: 'Иванов M.И.',
    urgency: 'Средняя срочность',
    done: false
  },
  {
    id: 4,
    href: '#',
    taskName: 'Сверстать профиль',
    executor: "Иванов И.И.",
    customer: 'Иванов M.И.',
    urgency: 'Средняя срочность',
    done: true
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Todolist() {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {

    }, [todos])

    useEffect(() => {
        // async function fetchData () {
        //     const response = await axios.get('http://localhost:3000/api/todos')
        //     if (response.status !== 200) return console.log(response.error);
        //     setTodos(response.data)
        // }
        axios.get('http://localhost:3000/api/todos')
            .then((res) => {
                setTodos(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    
    function markDone(id) {
        let todoIndex = todos.findIndex(el => el.id === id);
        let newTodos = [...todos];
        if (!newTodos[todoIndex]) return;
        newTodos[todoIndex].done = !newTodos[todoIndex].done;
        setTodos(newTodos);
        axios.put('http://localhost:3000/api/todos', newTodos[todoIndex]);
    }

    function deleteTask(id) {
        setTodos(todos.filter(el => el.id !== id));
        axios.delete('http://localhost:3000/api/todos/' + id + '/');
    }

    function addTask(taskInfo) {
        axios.post('http://localhost:3000/api/todos', taskInfo)
            .then((res) => {
                setTodos([...todos, res.data]);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="todolist flex justify-between items-start">
            <div className="flex flex-col w-1/2">
                <h1 className="text-4xl text-white font-bold mb-5">Задачи</h1>
                <ul role="list" className="divide-y divide-white/5">
                    {todos.map((todo) => (
                        <li key={todo.id} className="relative flex flex-col items-start py-4 cursor-pointer gap-4">
                            <div className="relative flex items-center space-x-4 py-4 cursor-pointer w-full" onClick={() => markDone(todo.id)}>
                                <div className="min-w-0 flex-auto">
                                    <div className="flex items-center gap-x-3">
                                    <div className={classNames(statuses[todo.urgency], 'flex-none rounded-full p-1')}>
                                        <div className="h-2 w-2 rounded-full bg-current" />
                                    </div>
                                    <h2 className={classNames("min-w-0 text-sm font-semibold leading-6 text-white", todo.done === true ? "line-through text-white/50":"")}>
                                        <a href={todo.href}>
                                        <span>{todo.taskName}</span>
                                        </a>
                                    </h2>
                                    </div>
                                    <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                                    <p className="whitespace-nowrap">{todo.customer}</p>
                                    <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <p className="whitespace-nowrap">{todo.executor}</p>
                                    </div>
                                </div>
                                <div
                                    className={classNames(
                                    environments[todo.urgency],
                                    'rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                    )}
                                >
                                    {todo.urgency}
                                </div>
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={(e) => {e.stopPropagation()}}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                            </div>
                            <button 
                                className="bg-rose-500 p-2 rounded-md text-white text-sm"
                                onClick={() => deleteTask(todo.id)}
                            >Удалить</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Form addTask={addTask}/>
        </div>
    )
}