import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import TaskWrap from './components/TaskWrap';
import SignIn from './components/SignIn';
import Front from './components/Front';
export default function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'wrap', children: [_jsx("h3", { children: _jsx("span", { className: 'title', children: "Tasks" }) }), _jsx("div", { className: 'menus', children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(NavLink, { className: ({ isActive }) => (isActive ? 'activeButton' : 'inactiveButton'), to: '/', children: "Home" }) }), _jsx("li", { children: _jsx(NavLink, { className: ({ isActive }) => (isActive ? 'activeButton' : 'inactiveButton'), to: 'task_manager', children: "Tasks Manager" }) }), _jsx("li", { children: _jsx(NavLink, { className: ({ isActive }) => (isActive ? 'activeButton' : 'inactiveButton'), to: 'login', children: "Sign In" }) }), _jsx("li", { children: _jsx(NavLink, { className: ({ isActive }) => (isActive ? 'activeButton' : 'inactiveButton'), to: 'register', children: "Sign Up" }) })] }) }), _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Front, {}) }), _jsx(Route, { path: 'register', element: _jsx(SignUp, {}) }), _jsx(Route, { path: 'login', element: _jsx(SignIn, {}) }), _jsx(Route, { path: 'task_manager', element: _jsx(TaskWrap, { newTask: newTask, setNewTask: setNewTask, tasks: tasks, setTasks: setTasks }) })] })] }) }));
}
