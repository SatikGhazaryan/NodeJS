//buf = Buffer.from("S");
buf = Buffer.alloc(10);
console.log(buf);
buf.fill("a");
console.log(buf);
console.log(buf.indexOf("a"));
