const studentDetails = {
  firstName: "Akshay",
  lastName: "Khurana",
  subjects: [
    {
      subjectName: "Maths",
      subjectMarks: 76,
      anotherKey: "ABC",
    },
    {
      subjectName: "Science",
      subjectMarks: 76,
    },
    {
      subjectName: "History",
      subjectMarks: 76,
    },
  ],
};

/*

    Table 1 - StudentDetails -> RollNumber, Name, MobileNumber, Address, Marks
    Table 2 - StudentMarks -> RollNumber, History, Maths, Physics
    Table 3 - StudentLeaves -> RollNumber, Count


    Here, Roll Number is the primary key for both the tables 

    View All Data - Select * from StudentDetails
    View Selected Data -Select MobileNumber, RollNumber from StudentDetails


*/

const table1Data = [
  {
    rollNumber: 1,
    name: "Akshay Khurana",
    mobileNumber: "+919557",
    address: "Meerut",
    marks: {
      history: 76,
      maths: 90,
      physics: 88,
    },
    leavesThisMonth: {
      count: 2,
    },
  },
  {
    rollNumber: 1,
    name: "Akshay Khurana",
    mobileNumber: "+919557",
    address: "Meerut",
    marks: "No Marks",
  },
];


// CRUD Operations?

/*

    C - Create -> Used for adding a new record (insertOne, insertMany)
    R - Read -> Used for reading a record ()
    U - Update -> Used for updating a record
    D - Delete -> Used for deleting a record


    Atomicity?

*/


/*


*/
