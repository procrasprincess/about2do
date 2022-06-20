import type { RequestHandler } from "@sveltejs/kit";

// create endpoint that responses to a get request
export const get: RequestHandler =  () => {
    return{
        status: 200,
        body: "Hello from the API!"
    }
}