const mongoose = require('mongoose');
const url = "mongodb+srv://paramsingh200473200473:param564@cluster0.nok7aj6.mongodb.net/OpenGalaxy?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;