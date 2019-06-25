var http=require("http");

function myfun(req,resp)
{
	resp.write("<h1>Hello World</h1>");
	resp.end();
}
var server=http.createServer(myfun);
server.listen(2000);
console.log("Server is listening on 2000");
