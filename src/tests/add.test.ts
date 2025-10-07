// The function to test
export const add = (a: number, b: number): number => a * b;



// Jest test case

test('adds two numbers', () => {

   // Arrange
const a = 2;
const b = 3;

   // Act
const result =  add(a,b);

   // Assert
    expect(result).toBe(5);
});



// Development evironment : the place where write code and test  locally.
// Testing Evnvironment: used for quality ensurance and running automated tests.
// Production Environment: Where your application serves real users.



//build and deployment:
     //build: converting or compiles Typescript code into javascript code. packages your app for deployment.
     //Test: Runs automated test to catch bugs before deployment.
     // deployment: process of making your appplication live and accessible for users.



   // CI(Continuos Integration)
       // CI is the practice where developers frequently push code to a shared repository.
       //automated test run on every push to ensure that new changes dont break existing code.

       // CD(Continuous Deployment or Delivery)/
       