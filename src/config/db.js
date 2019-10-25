const mongoose = require('mongoose')
mongoose
  .connect(
    'mongodb+srv://root:toor@cluster0-l9xfy.mongodb.net/test?retryWrites=true&w=majority'
  )
  .then(() => console.log('connected'))
  .catch(e => console.log(e))
