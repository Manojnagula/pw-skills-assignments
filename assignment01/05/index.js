const fs = require('fs');
fs.unlink("assignment01/05/nodejs_architecture.txt",(err)=>{
    if(err){
        console.log("error in deleting the file");
    }else{
        console.log("successfully deleted");
    }

})