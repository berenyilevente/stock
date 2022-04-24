const dotenv = require("dotenv");
const { json } = require("express");
const http = require('http');
const https = require('https');
const { stringify } = require("querystring");


function getPromise(req) {
  dotenv.config();

  jsonObject = JSON.stringify(req.body);
  var auth = "Basic " + Buffer.from ( process.env.NMUSERNAME + ':' + process.env.NMPSW).toString('base64');
  const options = {
    hostname: process.env.NMDATABASE_URL,
    port: process.env.NMPORT,
    path: process.env.NMDATABASE_ROUTE + "/"+process.env.NMDATABASE_PRE+req.params.dbname+req.params.pars,
    //path: '/dbutil/BetonCem',//+req.path,
    method: req.params.method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": auth,
      "Content-Length": Buffer.byteLength(jsonObject, 'utf8')
    },
    //body:req.body
    body:jsonObject
    
  }

	return new Promise((resolve, reject) => {
  
    
		//http.get(options, (response) => {
      http.request(options, (response) => {
			let chunks_of_data = [];

      
			response.on('data', (fragments) => {
				chunks_of_data.push(fragments);
			});

			response.on('end', () => {
				let response_body = Buffer.concat(chunks_of_data);
				resolve(response_body.toString());
			});

			response.on('error', (error) => {
				reject(error);
			});
		}).write(jsonObject);
	});
}
  

// async function to make http request
//exports.makeSync = async function makeSynchronousRequest(request) {
  
async function makeSynchronousRequest(request) {
  //method, dbname, pars, bodyS, 
	try {
		let http_promise = getPromise(request);
		let response_body = await http_promise;
		// holds response from server that is passed when Promise is resolved
    return response_body;
	}
	catch(error) {
		// Promise rejected
		console.log(error);
	}
}




//module.exports = requestRedir;
module.exports = makeSynchronousRequest;

