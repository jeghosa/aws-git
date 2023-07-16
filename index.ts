export const handler = async(event)=> {
    console.log(event)
    let response
    if (event.httpMethod === "GET" && event.path === "/first") {
         response = {statusCode:200,
            body:"hello world"}
            
        
    }
    return response

}