global.Promise = require('bluebird');
const ploverx = require('ploverx');
const app = ploverx({ applicationRoot: __dirname });
app.run();
