'use strict';

module.exports = function(Account) {
    Account.remoteMethod('getCourses', {
        description: 'Gets all courses for a specific account',
        accepts: {arg: 'id', type: 'string', required: true, http: {source: 'path'}},
        returns: {arg: 'courses', type: 'array', root: true},
        http: {path: '/:id/courses', verb: 'get'}
      });
      
      Account.getCourses = function(id, cb) {
        Account.findById(id, {
          include: {
            relation: 'courses'
          }
        }, cb);
      };
      

};
