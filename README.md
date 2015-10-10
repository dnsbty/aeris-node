# aeris-node

# Install
`$ npm install aeris --save`

# Use

```js
var Aeris = require('aeris');
var client = new Aeris('your client ID', 'your client secret', 'Provo', 'UT');
```

# Examples

```js
var Aeris = require('aeris');
var client = new Aeris('your client ID', 'your client secret', 'Provo', 'UT');

client.sunmoon({filter: 'sun,moon'}, function(err, data) {
	if (err) throw err;
	else console.log(data);
})
```