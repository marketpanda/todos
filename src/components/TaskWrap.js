import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TaskForm from './TaskForm';
import Tasks from './Tasks';
export default function TaskWrap({ newTask, setNewTask, tasks, setTasks }) {
    return (_jsxs(_Fragment, { children: [_jsx(TaskForm, { newTask: newTask, setNewTask: setNewTask, tasks: tasks, setTasks: setTasks }), _jsx(Tasks, { tasks: tasks, setTasks: setTasks })] }));
}
