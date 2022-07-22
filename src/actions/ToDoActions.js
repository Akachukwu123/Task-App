export const AddTodoAction = (task, date, time) => (dispatch,getState) => {
    const {
      Todo: {todos},
    } = getState ();

    const hasTodo = todos.find((i) => i.task === task);
    
    if (!hasTodo && task !== ''){
        dispatch({
          type: "ADD_TASK",
          payload:[{ id: task, task, date, time}, ...todos], 
        });
    }
};

 


export const RemoveAction = (todo) => (dispatch,getState) => {
    const {
      Todo: {todos},
    } = getState ();

    dispatch({
      type: "REMOVE_TASK",
      payload: todos.filter((t) => t.id !== todo.id), 
    });
};
 