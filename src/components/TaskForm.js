import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AddTask } from './AddTask';
export default function TaskForm({ newTask, setNewTask, setTasks, tasks }) {
    return (_jsx("div", { className: 'addTaskForm', children: _jsxs("form", { children: [_jsx("input", { type: "text", placeholder: 'Type task here', value: newTask, onChange: (e) => setNewTask(e.target.value) }), _jsx("button", { onClick: (e) => AddTask({ newTask, setNewTask, tasks, setTasks, e }), children: "Add" })] }) }));
}
