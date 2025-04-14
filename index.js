
const fs = require('fs');

if (!fs.existsSync('./jobgenie')){
    fs.mkdirSync('./jobgenie');
    console.log('jobgenie directory created successfully');
}
