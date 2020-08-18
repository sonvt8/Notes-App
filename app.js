const command = process.argv[2]

if(command === 'add'){
    console.log('add Note') //commandline: node app add  => return : add Note
} else if(command === 'remove'){
    console.log('remove Note') //commandline: node app remove  => return : remove Note
}

