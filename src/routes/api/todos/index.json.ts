import type { RequestHandler } from "@sveltejs/kit";
import { text } from "svelte/internal";

// todo: persist in database
let todos: Todo[] = [];

// create endpoint that responses to a get request
export const get: RequestHandler =  () => {
    
    return{
        status: 200,
        body: todos
        // body: "Hello from the API!"
    }
}

// post
export const post: RequestHandler = async ({ request }) => {

    const body = await request.formData();

    // everytime create an item, add the text of that item to the todo array
    todos.push({
        created_at: new Date(),
        text: body.get("text"),
        done: false
    });
    
    // console.log(body.get("text"));
    
    return {
        // http code to tell browser we want to redirect after submitting form
        status: 303,
        // body: body.get("text")
        headers: {
            location: "/"
        }
    }
}