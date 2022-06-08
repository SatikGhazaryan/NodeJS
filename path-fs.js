const path = require("path");
const thisPath = path.resolve();
//console.log(thisPath);
const fs = require("fs/promises");
const filePath = path.join(thisPath, "package.json");
//console.log(filePath);

// //Read a file
// fs.readFile(filePath, "utf8").then((text) => {
//   console.log(text);
// });

// //or -Read a file
// let fileContent = fs.readFile("package.json", "utf8").then((text) => {
//   console.log(text);
// });

// //Create a folder
// fs.mkdir("new_folder", (err) => {
//   if (err) throw err;
// });

// //Create a sub folder
// fs.mkdir("new_folder/sub_folder", { recursive: true }, (err) => {
//   if (err) throw err;
// });

// //write file
// fs.writeFile("file.txt", "Node.js", (err) => {
//   if (err) throw err;
// });
// // rename file
// fs.rename("file.txt", "my_file.txt", (err) => {
//   if (err) throw err;
// });

// //copy file
// fs.copyFile("file.txt", "new_file.txt", (err) => {
//   if (err) throw err;
// });

fs.stat("./file.txt", (err, status) => {
  if (err) throw err;
  if (status.isDirectory()) {
    console.log("this is deriactory");
  }
  if (status.isFile()) {
    console.log("this is fail");
  }
});
