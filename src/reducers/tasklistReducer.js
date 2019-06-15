import { CONSTANTS } from "../actions";

const initialState = [
    {
        title: "Beginner",
        id: `list-${0}`,
        tasks: [
            {
                id: `task-${0}`,
                text: "pierwszy opis listy pierwszej"
            },
            {
                id: `task-${1}`,
                text: "drugi opis listy pierwszej"
            }
        ]
    },
    {
        title: "Intermediate",
        id: `list-${1}`,
        tasks: [
            {
                id: `task-${2}`,
                text: "pierwszy opis listy drugiej"
            },
            {
                id: `task-${3}`,
                text: "drugi opis listy drugiej"
            },
            {
                id: `task-${4}`,
                text: "trzeci opis listy drugiej"
            }
        ]
    },
    {
        title: "Advanced",
        id: `list-${2}`,
        tasks: [{
                id: `task-${5}`,
                text: "pierwszy opis listy trzeciej"
            },
            {
                id: `task-${6}`,
                text: "drugi opis listy trzeciej"
            },
            {
                id: `task-${7}`,
                text: "trzeci opis listy trzeciej"
            },
            {
                id: `task-${8}`,
                text: "czwarty opis listy trzeciej"
            }
        ]
    }
];


const tasklistReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case CONSTANTS.DRAG_HAPPENED:
            const newState = [...state];
            const {
                    droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    draggableId
            } = action.payload;


            if(droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const task = list.tasks.splice(droppableIndexStart, 1);
                list.tasks.splice(droppableIndexEnd, 0, ...task);
            }

            return newState;

        default:
            return state;
    }
}

export default tasklistReducer;