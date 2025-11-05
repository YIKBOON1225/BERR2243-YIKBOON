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
