export const showDispatchAction = store => next => action => {
    console.log('dispatching', action);

    return next(action);
};
