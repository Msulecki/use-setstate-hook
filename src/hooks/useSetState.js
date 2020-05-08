import { useState } from 'react';

export const useSetState = (initialState = {}) => {
    const [mergedState, setMergedStates] = useState(initialState);
    const setState = (next, callback) => {
        setMergedStates(prev => ({
            ...prev,
            ...next
        }));
        callback();
    };
    return [mergedState, setState];
};