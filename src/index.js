const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	await fs.writeFile(fileName,fileContent)
}

const myFileReader = async (fileName) => {
	await fs.readFile(fileName,(err,data)=>{if(err) console.log(err); else {return data}})
}


const myFileUpdater = async (fileName, fileContent) => {
	await fs.appendFile(fileName,fileContent,(err)=>console.log(err))
}

const myFileDeleter = async (fileName) => {
	await fs.unlink(fileName,(err)=> console.log(err))
}


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }