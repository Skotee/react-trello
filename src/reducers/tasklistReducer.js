const initialState = [
    {
        title: "Zadania na dzisiaj, lista pierwsza",
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