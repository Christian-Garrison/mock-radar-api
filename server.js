import 'dotenv/config';
import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('build/db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Access Control
server.use((req, res, next) => {
  const isAuthorized = (req) =>
    req.headers.authorization === process.env.API_KEY;

  if (isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
});

// Add custom routes before JSON Server router
server.get('/v1/search', (req, res) => {
  res.jsonp(req.query);
});

// Customize response
router.render = (req, res) => {
  res.jsonp({
    meta: {
      status: 200,
    },
    addresses: res.locals.data,
  });
};

server.use('/v1/search', router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});
