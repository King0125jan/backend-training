const date = new Date()
console.log(date)

let today= new Date
const month= today.getMonth()
console.log(month)

module.exports.date=date
module.exports.month=month
module.exports.getBatchInfo=getBatchInfo

function getBatchInfo(){
console.log("Plutonium, W3D3, the topic for today is Nodejs module system")
}