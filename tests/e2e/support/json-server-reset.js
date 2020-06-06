// derived from https://github.com/bahmutov/json-server-reset/blob/master/src/index.js
function jsonServerReset(req, res, next) {
  if (req.method === 'POST' && req.path === '/reset') {
    console.log('resetting database');
    const data = req.body || {};
    console.debug('new data %o', data);

    req.app.db.setState(data);
    // and immediately write the database file
    req.app.db.write();
    console.debug('have written updated data to disk');

    return res.sendStatus(200);
  }
  // not a POST /reset
  next();
}

module.exports = jsonServerReset;
