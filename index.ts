export const handler = (event)=>{
    if (event.httpMethod === "GET" && event.path === "/first") {
        const response:any = {statusCode:200,
            body:"hello world"}
            return response
        
    }
}