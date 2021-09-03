import { useCallback, useReducer } from 'react'

const httpReducer = (currentState, action) => {
    switch (action.type) {
        case 'SEND':
            return { loading: true, error: false, data: null, extra: null, identifier: action.identifier };
        case 'RESPONSE':
            return { ...currentState, loading: false, data:action.responseData ,extra:action.extra };
        case 'ERROR':
            return { loading: false, error: action.error };
        case 'CLEAR':
            return { ...currentState, error: null };
        default:
            throw new Error('Should not get there!');
    }
}

const useHttp = () => {
    const [httpStatus, dispatchHttpStatus] = useReducer(httpReducer, { loading: false, error: null, data: null, extra: null, identifier: null });

    const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifier) => {
        dispatchHttpStatus({ type: 'SEND', identifier: reqIdentifier });
        fetch(url, {
            headers: { 'Content-Type': 'application/json' },
            method: method,
            body: body,
        }).then(response => {
            return response.json();
        }).then(responseData => {
            dispatchHttpStatus({ type: 'RESPONSE', responseData: responseData, extra: reqExtra });
        }).catch(error => {
            dispatchHttpStatus({ type: 'ERROR', error: error.message });
        });
    }, []);

    return {
        isLoading: httpStatus.loading,
        data: httpStatus.data,
        error: httpStatus.error,
        sendRequest: sendRequest,
        reqExtra: httpStatus.extra,
        reqIdentifier:httpStatus.identifier,
    };
};

export default useHttp;
