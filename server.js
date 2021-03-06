var databox = require('node-databox');
const https = require('https');
const fs = require('fs');

const store = process.env.DATABOX_STORE_ENDPOINT;

//My https cred generated by the container manager
const HTTPS_SECRETS = JSON.parse( fs.readFileSync("/run/secrets/DATABOX_PEM") );
const credentials = {
  key:  HTTPS_SECRETS.clientprivate || '',
  cert: HTTPS_SECRETS.clientcert || '',
};	


/*
databox.catalog.listAvailableStores().then((stores) => console.log(stores));

databox.catalog.walkStoreCatalogs().then((stores) => console.log(JSON.stringify(stores, null, '\t'))).catch((err) => console.error(err));

databox.catalog.mapStoreCatalogs((cat, i) => {
	console.log('Store ' + i + ':', JSON.stringify(cat, null, '\t'));
}).catch((err) => console.error(err));

databox.export.longpoll('https://export.amar.io/', { foo: 'bar' })
	.then((response) => console.log(response))
	.catch((err) => console.error(err));


var notifications = databox.notifications.connect(href)

notifications.on('open', () => {
	//console.log('Store notificaitons connection open');
});

notificaitons.on('data', function (storeHostname, dataSourceID, data) {
	//console.log(storeHostname, dataSourceID, data);
});
*/

//start the https server for the App UI
https.createServer(credentials, function (req, res) {
  //The https server is setup to offer the  UI for your App
  //you can use any framework you like to display the interface.
  res.writeHead(200);
  res.end("<html><body><h1>hello world! from a databox app</h1></body></html>\n");
}).listen(8080);