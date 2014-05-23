/**
 * Exports
 */

module.exports = vhost;

/**
 * Create a new vhost
 *
 *   vhost('api.mysite.com', middleWare);
 *   vhost('*.mysite.com', otherMiddleware);
 *
 * @param {String} hostname
 * @param {Function} server
 * @api public
 */

function vhost(hostname, server) {
  if (!hostname) throw new Error('Vhost hostname required');
  if (!server) throw new Error('provide a callback to be executed');

  // check if path is matched with this.subdomains

  // if path is matched yield next middleware

  // if path is not matched yield next middleware in chain

};




/**
https://github.com/expressjs/vhost/blob/master/index.js
 * Vhost:
 *
 *   Setup vhost for the given `hostname` and `server`.
 *
 *     connect()
 *       .use(connect.vhost('foo.com', fooApp))
 *       .use(connect.vhost('bar.com', barApp))
 *       .use(connect.vhost('*.com', mainApp))
 *
 *  The `server` may be a Connect server or
 *  a regular Node `http.Server`.
 *
 * @param {String} hostname
 * @param {Server} server
 * @return {Function}
 * @api public


module.exports = function vhost(hostname, server){
  if (!hostname) throw new Error('vhost hostname required');
  if (!server) throw new Error('vhost server required');
  var regexp = new RegExp('^' + hostname.replace(/[^*\w]/g, '\\$&').replace(/[*]/g, '(?:.*?)')  + '$', 'i');
  if (server.onvhost) server.onvhost(hostname);
  return function vhost(req, res, next){
    if (!req.headers.host) return next();
    var host = req.headers.host.split(':')[0];
    if (!regexp.test(host)) return next();
    if ('function' == typeof server) return server(req, res, next);
    server.emit('request', req, res);
  };
};
 */