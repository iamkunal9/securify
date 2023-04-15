const { exec } = require('child_process');
exec('./nuclei -u google.com -silent -json -o output.txt', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    // tailor the output as desired
  });