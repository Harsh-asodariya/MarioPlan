const initState = {
    projects: [
        { id: '1', title: '11111', content: '1111111111111111111' },
        { id: '2', title: '22222', content: '2222222222222222222' },
        { id: '3', title: '33333', content: '3333333333333333333' }
    ]
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            return state;
        default:
            return state;
    }
}

export default ProjectReducer;