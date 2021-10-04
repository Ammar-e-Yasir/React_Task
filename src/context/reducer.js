// export let data = {
//     snacks: 'Rio',
//     drink: 'Coffee',


// }


export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser: {},
    users: [
        {
            userName: 'haider',
            email: 'haider@',
            password: '123',
            role: 'trainer'
        },
        {
            userName: 'akram',
            email: 'asd@',
            password: '123',
            role: 'student'
        },
    ],
    students:[
        {
        studentName :'ali',
        rollNo : 222,
        obtainedMarks : 5000,
        totalMarks : 400,
        feedBack : 'A Grade'
        }
    ]
}
export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "UPDATE_DRINK":{
            return{
                ...state,
                drink:action.payload
            }
        }
        case "REGISTER_USER" : {
            
            
                let usersClone = state.users.slice(0);
                    usersClone.push(action.payload);
                    // console.log(state.users)
                    return {
                        ...state,
                        users : usersClone
                    }
                    
                }
        case "LOGIN_USER" : {
            console.log('Hello world');   
            return{
                ...state,
                authUser : action.payload
            }
        }
        
        case "ADD_STUDENTS":{
            let studentsClone =  state.students.slice(0);
            studentsClone.push(action.payload);
            console.log(state.students);
            return{
                ...state,
                students:studentsClone
            }
        }

                default:
                    return state;
                    
                }
                
                
            }