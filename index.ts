export const handler = (event)=> {
    let response
    if (event.httpMethod === "GET" && event.path === "/first") {
         response = {statusCode:200,
            body:JSON.stringify("hello world")}
            
        
    }
    return response

}