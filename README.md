<<<<<<< HEAD
# BERR2243-YIKBOON
Lab Questions 
Answer by completing the tasks above and observing results. 
JSON Questions 

1. Explain what is CRUD operations and how it is relates to the mongo functions in the exercise.
C=CREATE   Used to create object, the mongo function is insertone and insertmany
R= READ    Used to find and read the object and its information, the mongo function is findone and findmany
U=UPDATE   Used to uodate the object's information, mongo function updateone and updatemany
D=DELETE   Used to delete the object, mongo function is deleteone and deletemany

3. Identify all the mongo operators used in the exercise, then explain the usage for each.
$gte  used to represent greater than or equal to
%inc  used to represent increase

5. Replace the mongo functions in Task 5 to updateMany instead of updateOne, compare the difference based on the result in console and the mongo compass.


6. Replace the mongo functions in Task 6 to deleteMany instead of deleteOne, compare the difference based on the result in console and the mongo compass.
   
=======
1
# BERR2243-YIKBOON
Lab Questions 
Answer by testing your API in Postman and observing responses. 

1. POST Request: 
o What HTTP status code is returned when a ride is created successfully?
201 created

o What is the structure of the response body?
simple JSON object with one property
{
    "id": "690b4440b9956724c89b9f5c"
}

3. GET Request: 
o What happens if the rides collection is empty?
http status code 200 ok

o What data type is returned in the response (array/object)?
an empty list   【】

5. Fix PATCH and DELETE Error: 
o Catch the error when requesting PATCH or DELETE API, then try to fix 
the issue reported.

o If you try to update a non-existent ride ID, what status code is 
returned?
400 invalid rideid format

o What is the value of updated in the response if the update succeeds? 
1

o How does the API differentiate between a successful deletion and a 
failed one?
successful value=1 200 ok
failed value=0 404 not found

7. Users Endpoints: 
o Based on the exercise above, create the endpoints to handle the CRUD 
operations for users account

8. FrontEnd: 
o Upload the Postman JSON to any AI tools, and generate a simple HTML 
and JS Dashboard for you
>>>>>>> b5043dca8e0319d04c569e2acfe21577aae49d25
