console.log(process.argv)
// printed an Array:
/* 
    [
    '/usr/local/bin/node',
    '/Users/tommy/Documents/Node JS/Notes-App/app.js',
    'SonVu'
    ]
*/

console.log(process.argv[0])
// printed:
/* 
  '/usr/local/bin/node',
*/

console.log(process.argv[2])
// printed:
/* 
  SonVu
*/