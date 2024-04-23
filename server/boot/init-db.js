module.exports = function(app) {
    // Models
    const Organization = app.models.Organization;
    const Account = app.models.Account;
    const Course = app.models.Course;
    const Classroom = app.models.Classroom;
  
    // Sample Data
    const organizations = [
      { name: "Tech University" },
      { name: "Health Institute" }
    ];
  
    const classrooms = [
      { name: "Room 101" },
      { name: "Room 102" }
    ];
  
    const courses = [
      { name: "Intro to Computer Science", status: "Active", date: new Date(2023, 8, 1) },
      { name: "Fundamentals of Health", status: "Active", date: new Date(2023, 8, 2) }
    ];
  
    const accounts = [
      { name: "John Doe", email: "john.doe@example.com" },
      { name: "Jane Smith", email: "jane.smith@example.com" }
    ];
  
    // Insert Data Functions
    function insertModelData(model, data, message) {
      model.count((err, count) => {
        if (err) throw err;
        if (count === 0) {
          model.create(data, (err, records) => {
            if (err) throw err;
            console.log(message, records);
          });
        }
      });
    }
  
    // Insert data
    insertModelData(Organization, organizations, 'Organizations created:');
    insertModelData(Classroom, classrooms, 'Classrooms created:');
    insertModelData(Course, courses, 'Courses created:');
    insertModelData(Account, accounts, 'Accounts created:');
  };
  