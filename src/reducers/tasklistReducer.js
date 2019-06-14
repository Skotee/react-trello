const initialState = [
    {
        title: "Beginner",
        id: 0,
        tasks: [
            {
                id: 0,
                text: "pierwszy opis listy pierwszej"
            },
            {
                id: 1,
                text: "drugi opis listy pierwszej"
            }
        ]
    },
    {
        title: "Intermediate",
        id: 1,
        tasks: [
            {
                id: 0,
                text: "pierwszy opis listy drugiej"
            },
            {
                id: 1,
                text: "drugi opis listy drugiej"
            },
            {
                id: 2,
                text: "trzeci opis listy drugiej"
            }
        ]
    },
    {
        title: "Advanced",
        id: 2,
        tasks: [{
                id: 0,
                text: "pierwszy opis listy trzeciej"
            },
            {
                id: 1,
                text: "drugi opis listy trzeciej"
            },
            {
                id: 2,
                text: "trzeci opis listy trzeciej"
            },
            {
                id: 3,
                text: "czwarty opis listy trzeciej"
            }
        ]
    }
];


const tasklistReducer = (state = initialState, action) => {
    switch (action.type)
    {
        default:
            return state;
    }
}

export default tasklistReducer;