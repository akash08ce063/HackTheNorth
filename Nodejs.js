/*var http = require("http"); 
var greeting = require("./greetings");
console.log(greeting.sayHello());
var cheerio = require("cheerio");
$ = cheerio.load('<html><head></head><body><div id="content"><div id="sidebar"></div><div id="main"><div id="breadcrumbs"></div><table id="data"><tr><th>Name</th><th>Address</th></tr><tr><td class="name">John</td><td class="address">Address of John</td></tr><tr><td class="name">Susan</td><td class="address">Address of Susan</td></tr></table></div></div></body></html>');
$('#data .name').each(function(){
	console.log($(this).text());

});
var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});


	response.write("Hello world");	
	response.end();

});

server.listen(8888);

*/

var request = require('request');
var cheerio = require('cheerio');

pools = {
    'Aloha': 3,
    'Beaverton': 15,
    'Conestoga': 12,
    'Harman': 11,
    'Raleigh': 6,
    'Somerset': 22,
    'Sunset': 5,
    'Tualatin Hills': 2
};
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (pool in pools) {
    var url = 'http://www.thprd.org/schedules/schedule.cfm?cs_id=' + pools[pool];
    request(url, function(err, resp, body) {
        if (err)
            throw err;
        $ = cheerio.load(body);
        console.log(pool);
        // TODO: scraping goes here!
    });
}