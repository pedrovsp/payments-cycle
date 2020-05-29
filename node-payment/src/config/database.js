const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/payment', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.Error.messages.general.required = "'{PATH}' is required"
mongoose.Error.messages.Number.min = "'{VALUE}' is lesser than minimun value '{MIN}'"
mongoose.Error.messages.Number.max = "'{VALUE}' is greater than minimun value '{MAX}'"
mongoose.Error.messages.String.enum = "'{VALUE}' is mot a valid '{PATH}'"
mongoose.Error.messages.general.required = "'{PATH}' is required"