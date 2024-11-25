console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', userName => {
  process.stdout.write('Your name is: ' + userName.toString());
  process.exit();
});
