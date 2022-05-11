//next

const loggerMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log("前の状態", store.getState());
    console.log("action : ", action);
    next(action);
    console.log("変わった状態", store.getState());
    console.groupEnd();
}

export default loggerMiddleware;