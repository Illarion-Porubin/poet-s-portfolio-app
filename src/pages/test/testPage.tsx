import React from 'react';

interface Props {
    item: {
        name: string,
        content: string
    }
}

export const TestPage: React.FC<Props> = ({ item }) => {
    return (
        <>
            <h1>{item.name}</h1>
            <p>{item.content}</p>
        </>
    )
}
