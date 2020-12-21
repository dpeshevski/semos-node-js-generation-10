const os = require('os');

console.log('Operating system information');
console.log(`os.arch() ${os.arch()}`);
console.log(`os.platform() ${os.platform()}`);
console.log(`type ${os.type()}`);
console.log(`uptime ${os.uptime()}`);
console.log('hostname', os.hostname());
console.log('release', os.release());

console.log('Path');
console.log('homedir', os.homedir());
console.log('tempdir', os.tmpdir());

console.log("Memory");
console.log('free', os.freemem());
console.log('total', os.totalmem());
