'use strict';

module.exports = function(Course) {
    Course.remoteMethod('getActiveAccounts', {
      http: {path: '/:id/activeAccounts', verb: 'get'},
      accepts: {arg: 'id', type: 'string', required: true},
      returns: {arg: 'accounts', type: 'array', root: true}
    }); 
    Course.getActiveAccounts = function(id, cb) {
      Course.findById(id, {
        include: {
          relation: 'accounts',
          scope: {
            where: {status: 'Active'}
          }
        }
      }, cb);
    };
  };