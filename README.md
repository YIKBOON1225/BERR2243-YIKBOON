# BERR2243-YIKBOON
Exercise Questions 
Answer these by completing the lab steps and observing results. 
  1. Code Execution & Output 
    o After running your index.js script: 
      § What exact text does the console display when the document is 
        inserted?
          Connected to MongoDB!
          Document inserted!
          Query result: {
            _id: new ObjectId('68ee4fc181b23e3256a0a3c8'),
            name: 'ALICE',
            age: 25
          }
     
      § What _id value is automatically assigned to the document?
          _id: new ObjectId('68ee4fc181b23e3256a0a3c8')
     
  2. Modify and Observe 
    o Change the name field in index.js to your own name and the age to 
      your birth year. Run the script again. 
        § What new _id is generated for this document?
          _id: new ObjectId('68ef8124b59cbc74af110c71')
       
        § What error occurs if you forget to call await	client.connect()?
          Connected to MongoDB!
          Error: MongoNotConnectedError: Client must be connected before running operations
              at autoConnect (/workspaces/BERR2243-YIKBOON/node_modules/mongodb/lib/operations/execute_operation.js:98:19)
              at executeOperation (/workspaces/BERR2243-YIKBOON/node_modules/mongodb/lib/operations/execute_operation.js:40:40)
              at Collection.insertOne (/workspaces/BERR2243-YIKBOON/node_modules/mongodb/lib/collection.js:154:63)
              at main (/workspaces/BERR2243-YIKBOON/index.js:14:26) {
            errorLabelSet: Set(0) {}
          }
     
3. MongoDB Connection Failure 
  o Intentionally break the MongoDB connection string (e.g., change the 
    port to 27018). 
      § What error message does NodeJS throw?
         Error: MongoServerSelectionError: connect ECONNREFUSED 127.0.0.1:27018
   
      § What is the exact text of the error code (e.g., ECONNREFUSED)?
         errno: -111,
        code: 'ECONNREFUSED',
        syscall: 'connect',
        address: '127.0.0.1',
        port: 27018
   
4. MongoDB Shell Query 
  o Use the MongoDB shell (not Compass) to: 
    § List all documents in the testDB.users collection.
        db.users.find()
        {
          _id: ObjectId('68ee4fc181b23e3256a0a3c8'),
          name: 'ALICE',
          age: 25
        }
        {
          _id: ObjectId('68ef8124b59cbc74af110c71'),
          name: 'YIK BOON',
          age: 22
        }
   
    § What command did you use? Paste the full output.
        use testDB
        already on db testDB
        use collectios
        switched to db collectios
        use testDB
        switched to db testDB
        show collections
        users
        db.users.find()
        {
          _id: ObjectId('68ee4fc181b23e3256a0a3c8'),
          name: 'ALICE',
          age: 25
        }
        {
          _id: ObjectId('68ef8124b59cbc74af110c71'),
          name: 'YIK BOON',
          age: 22
        }
   

5. File System & Dependencies 
  o What is the absolute path to your project’s package-lock.json file?
   /workspaces/BERR2243-YIKBOON/package-lock.json
   /workspaces/BERR2243-YIKBOON/node_modules/.package-lock.json

  o What exact version of the mongodb driver is installed? 
    "node_modules/mongodb": {
      "version": "6.20.0",
  
6. Troubleshooting Practice 
  o Stop the MongoDB service and run the script. 
    § What error occurs?
      Error: MongoServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017

    § What command restarts the service?
      net start mongodb
   
7. GitHub Repository Structure 
  o On GitHub, navigate to your repository’s. 
    § What timestamp is listed for your last commit?
      15/10/2025
   
    § How many files are present in this branch?
      7
   
8. Performance Observation 
   o Time how long it takes for the script to print "Connected	to	MongoDB!". 
    § What is the duration (in milliseconds)?
      Connected to MongoDB! (24 ms)
   
    § Does this time change if you run the script again? Why?
      Yes,the time changes slightly for a few milliseconds. This may because of the system CPU load and I/O scheduling.So a few milliseconds       of delay can change between runs especially on the first connection.
   
