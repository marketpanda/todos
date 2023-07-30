import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
export default function Tasks({ tasks, setTasks }) {
    useEffect(() => {
        const storedTasks = localStorage.getItem('theTasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);
    const RemoveTask = (id) => {
        const getFilter = tasks.filter((task) => task.id != id);
        setTasks(getFilter);
        localStorage.setItem('theTasks', JSON.stringify(getFilter));
        console.log('removed', id);
    };
    const parseTime = (t) => {
        return new Date(t).toLocaleString();
    };
    const changeStatus = (id, status) => {
        setTasks((prevTasks) => prevTasks.map((task) => task.id == id ? { ...task, status: status } : task));
        console.log(id, status);
        console.log(tasks);
    };
    const sortByName = () => {
        console.log('by name');
        const sortName = [...tasks].sort((a, b) => a.task > b.task ? 1 : -1);
        console.log(sortName);
        setTasks(sortName);
    };
    const sortByDate = () => {
        console.log('by date');
        const sortDate = [...tasks].sort((a, b) => a.time - b.time);
        console.log(sortDate);
        setTasks(sortDate);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'taskBar', children: [_jsxs("div", { className: 'sortBox', children: [_jsx("div", { children: "Sory by:" }), _jsxs("div", { children: [_jsx("a", { href: "#", onClick: sortByName, children: "Task Name" }), " |"] }), _jsx("div", { children: _jsx("a", { href: "#", onClick: sortByDate, children: "Date Created" }) })] }), _jsx("ul", { children: tasks.map((task) => {
                        return _jsxs("li", { children: [_jsxs("span", { children: [task.task, _jsx("div", { className: 'date', children: parseTime(task.time) })] }), _jsx("span", { className: 'taskRightIcons', children: _jsxs("span", { className: 'statusWrap', children: [_jsx("button", { className: task.status == 'todo' ? "bStatus" : "", onClick: () => changeStatus(task.id, 'todo'), children: "TODO" }), _jsx("button", { className: task.status == 'inprogress' ? "bStatus" : "", onClick: () => changeStatus(task.id, 'inprogress'), children: "IN PROGRESS" }), _jsx("button", { className: task.status == 'completed' ? "bStatus" : "", onClick: () => changeStatus(task.id, 'completed'), children: "COMPLETED" }), _jsx("button", { onClick: () => RemoveTask(task.id), children: " x " })] }) })] }, task.id);
                    }) })] }) }));
}
