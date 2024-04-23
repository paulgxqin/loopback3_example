'use strict';

module.exports = function(Classroom) {
    Classroom.remoteMethod('getCourses', {
        http: {path: '/:id/courses', verb: 'get'},
        accepts: {arg: 'id', type: 'string', required: true},
        returns: {arg: 'courses', type: 'array', root: true}
      });
      
      Classroom.getCourses = function(id, cb) {
        Classroom.findById(id, {
          include: {
            relation: 'courses'
          }
        }, cb);
      };

      Classroom.remoteMethod('getCoursesByDate', {
        http: {path: '/:id/coursesByDate', verb: 'get'},
        accepts: [
          {arg: 'id', type: 'string', required: true},
          {arg: 'startDate', type: 'date', required: true, http: {source: 'query'}},
          {arg: 'endDate', type: 'date', required: true, http: {source: 'query'}}
        ],
        returns: {arg: 'courses', type: 'array', root: true}
      });
      
      Classroom.getCoursesByDate = function(id, startDate, endDate, cb) {
        Classroom.findById(id, {
          include: {
            relation: 'courses',
            scope: {
              where: {
                and: [
                  {date: {gte: startDate}},
                  {date: {lte: endDate}}
                ]
              }
            }
          }
        }, cb);
      };

      Classroom.remoteMethod('getEmpty', {
        http: {path: '/empty', verb: 'get'},
        returns: {arg: 'classrooms', type: 'array', root: true}
      });
      
      Classroom.getEmpty = function(cb) {
        Classroom.find({
          where: {
            courseId: null 
          }
        }, cb);
      };
      
      
          

};
