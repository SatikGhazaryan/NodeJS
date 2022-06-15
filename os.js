const os = require("os");
//info about user
const user = os.userInfo();
console.log(user);
//system uptime
console.log(os.uptime());

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
