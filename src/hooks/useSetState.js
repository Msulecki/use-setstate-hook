import { useState } from 'react';

export const useSetState = (initialState = {}) => {
    const [mergedState, setMergedStates] = useState(initialState);
    const setState = next => {
        setMergedStates(prev => ({
            ...prev,
            ...next
        }));
    };
    return [mergedState, setState];
};