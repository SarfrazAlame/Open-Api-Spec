import { Todo } from "./todos";

export type TodoCreationParams = Pick<Todo, "title" | "description">


export class TodoService {
    public get(todoId: string): Todo {
        return {
            id: todoId,
            title: "mocked todo",
            description: "mocked description",
            done: false
        }
    }
    public create(TodoCreationParams:TodoCreationParams):Todo{
        console.log("mock db call")
        return {
            id:"1",
            title:"create title",
            description:"create description",
            done:false
        }
    }
}