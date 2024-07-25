// Given an array of user objects and error codes:
// write a function to find all errors for a particular user
// write another function to find all occurences of a particular error
// write another function to filter the list of users to those who have
// expereienced a sepcified error multiple times

interface User {
  id: number;
}

type ErrorCode = "A" | "B" | "C";

interface KeystrokeError {
  id: number;
  userId: number;
  errorType: ErrorCode;
}
const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

const errorLog: KeystrokeError[] = [
  { id: 1, userId: 1, errorType: "A" },
  { id: 2, userId: 1, errorType: "B" },
  { id: 3, userId: 1, errorType: "C" },
  { id: 5, userId: 2, errorType: "A" },
  { id: 6, userId: 2, errorType: "A" },
  { id: 7, userId: 2, errorType: "A" },
];

function getErrorsByUserId(
  userId: number,
  errors: KeystrokeError[]
): KeystrokeError[] {
  // iterate through errors array, filter by error.userId === userId arg and return
  const errorsByUser = errors.filter((err) => err.userId === userId);
  return errorsByUser;
}
// console.log(getErrorsByUserId(1, errorLog)); // error.id 1,2,3

function getAllErrorsByCode(
  errorCode: string,
  errors: KeystrokeError[]
): KeystrokeError[] {
  // iterate through errors array and filter by error.errorType === errorCode
  const errorsByCode = errors.filter((err) => err.errorType === errorCode);
  return errorsByCode;
}
// console.log(getAllErrorsByCode("A", errorLog)); // ids 1,5,6
// console.log(getAllErrorsByCode("D", errorLog)); // []

function getUsersWithMultipleErrors(
  users: User[],
  errors: KeystrokeError[],
  errorType: string
): User[] {
  // filter users such that the only users returned have experienced errorType > 1 time
  // array to keep track of userIds that have had multiple errors
  const usersWithMultipleErrors: number[] = [];
  // object userErrors for userId: errorCode[]
  const userErrors: { [key: number]: ErrorCode[] } = {};
  // loop through errors
  errors.forEach((error) => {
    // check if userErrors has an entry for this current user's error
    // if it does
    if (userErrors.hasOwnProperty(error.userId)) {
      // this user already has some errors logged
      // if userErrors[userId] includes errorType we are looking for
      if (userErrors[error.userId].includes(error.errorType)) {
        // found a multiple target error, push onto userIds array
        usersWithMultipleErrors.push(error.userId);
      } else {
        // else it is the first occurence of this error
        // push error.errorType onto userErrors[userId]
        userErrors[error.userId].push(error.errorType);
      }
    } else {
      // else it doesnt exist yet
      // so add error.userId = [error.errorType]
      userErrors[error.userId] = [error.errorType];
    }
  });
  // console.log({ userErrors });
  // console.log({ usersWithMultipleErrors });
  // loop ends should have a list of ids with multiple target errors
  // create a set so only unique ids remain
  const uniqueUserIds = Array.from(new Set(usersWithMultipleErrors));
  // filter users if  usersWithMultipleErrors.includes(user.id)
  // return filtered list
  return users.filter((user) => uniqueUserIds.includes(user.id));
}

console.log(getUsersWithMultipleErrors(users, errorLog, "A"));
