const initState = {
    todos:[]
}

export const todoReducer = (state =initState, {type,payload}) => {
    let todoList = [];
    switch(type) {
        case 'ADD_TODO':
            todoList = [...state.todos, payload];
            return {todos:todoList};
        case 'REMOVE_TODO':
            todoList = state.todos.filter(todo => todo.id !== payload)
            return {todos:todoList};
        case "ADD_COMMENT":
            const {id, comment} = payload;
            todoList = state.todos;
            const todoItem = todoList.find((todo) => todo.id === id);
            todoItem.comments.push(comment);
            return {todos: todoList};
        default:
            return state;
    }
}