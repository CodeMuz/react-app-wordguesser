export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';

interface InterfaceSetName {
  type: typeof SET_NAME, 
  payload: string
}
// type SetAge = {type: typeof SET_AGE, payload: number}

export const setName = (name: string): InterfaceSetName => {
    return {
      payload:name,
      type:SET_NAME
    }
}
// const setAge = (age: number): SetAge => {
//     return {type: SET_AGE, payload: age}
// }

// export type Actions = SetName | SetAge;