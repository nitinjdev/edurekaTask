var yargs = require("yargs");
var fs = require("fs");
// cmd command : node yarnCommand.js file --fileName='myFirstTaskSuccess'

// Create add command
yargs.command({
  command: "file",
  describe: "enter file name",
  builder: {
    fileName: {
      describe: "files",
      demandOption: true, // Required
      type: "string",
    },
  },

  // Function for your command
  handler(argv) {
    console.log("file name:", argv.fileName);

    fs.stat(argv.fileName, function (err) {
      if (err) {
        // file not exist , create new
        fs.writeFile(argv.fileName, "You are awesome", function (err) {
          if (err) {
            console.log("File already exists, enter different name");
          } else {
            console.log("file created");
            fs.appendFile(
              "fileName.txt",
              `${argv.fileName},`,
              function (err, data) {
                if (err) {
                  console.log("File appending err");
                } else {
                  console.log("File appending successful");
                }
              }
            );
          }
        });
      } else {
        console.log("File already exists, enter different name");
      }
    });
  },
});

yargs.parse();
