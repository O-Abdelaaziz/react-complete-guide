import React, { useCallback, useReducer } from 'react'

const httpReducer = (currentState, action) => {
    switch (action.type) {
        case 'SEND':
            return { loading: true, error: false, data: null };
        case 'RESPONSE':
            return { ...currentState, loading: false, data: action.responseData };
        case 'ERROR':
            return { loading: false, error: action.error };
        case 'CLEAR':
            return { ...currentState, error: null };
        default:
            throw new Error('Should not get there!');
    }
}

const useHttp = () => {
    const [httpStatus, dispatchHttpStatus] = useReducer(httpReducer, { loading: false, error: null, data: null });

    const sendRequest = useCallback((url, method, body) => {
        dispatchHttpStatus({ type: 'SEND' });
        fetch(url, {
            headers: { 'Content-Type': 'application/json' },
            method: method,
            body: body,
        }).then(response => {
            response.json();
        }).then(responseData => {
            dispatchHttpStatus({ type: 'RESPONSE', responseData: responseData });
        }).catch(error => {
            dispatchHttpStatus({ type: 'ERROR', error: error.message });
        });
    }, []);

    return {
        isLoading: httpStatus.loading,
        data: httpStatus.data,
        error: httpStatus.error,
        sendRequest: sendRequest
    };
};

export default useHttp;
