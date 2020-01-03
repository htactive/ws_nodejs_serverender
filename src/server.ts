import server from './app';

const port = 4242;

server.listen(port, () => {
  console.log('Listening on port '+ port);
});