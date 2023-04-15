const { exec } = require('child_process');
const fs = require('fs')

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');
   function os_func() {
    this.execCommand = function (cmd) {
        return new Promise((resolve, reject)=> {
           exec(cmd, (error, stdout, stderr) => {
             if (error) {
                reject(error);
                return;
            }
            resolve(stdout)
           });
       })
   }
}
export default function handler(req, res) {
  const { method } = req
  if(method!="POST"){    
    res.status(200).json({ name: 'Method not supported' })
    return
  }
  else{
    console.log(req.body)
    const args = [`-u ${req.body}`, '-silent', '-j','-es info']; // replace with your app arguments
    const appPath = './nuclei'; // replace with the path to your app

    // execute the app with the given arguments
    exec(`${appPath} ${args.join(' ')}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`${appPath} ${args.join(' ')}`)
      // create a new data object and save it to MongoDB
      console.log(stdout.toString('UTF8').split('\n'));

      // send a response to the client
      res.status(200).json({ data: stdout.toString('UTF8').split('\n') })
    });
    
    
  }
  
}
