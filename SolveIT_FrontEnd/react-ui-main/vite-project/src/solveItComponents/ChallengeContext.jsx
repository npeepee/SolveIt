import React, { createContext, useContext, useState } from 'react';

const ChallengeContext = createContext();

export function useChallenges() {
    return useContext(ChallengeContext);
}

export function ChallengeProvider({ children }) {
    const [challenges, setChallenges] = useState([]);

    const addChallenge = (newChallenge) => {
        setChallenges([...challenges, newChallenge]);
    };

    const deleteChallenge = (id) => {
        setChallenges(challenges.filter((c, index) => index !== id));
    };

    const value = {
        challenges,
        addChallenge,
        deleteChallenge
    };

    return (
        <ChallengeContext.Provider value={value}>
            {children}
        </ChallengeContext.Provider>
    );
}
