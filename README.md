# alphacoding-tinytales

algorithm for this assignment..
the encoding part is done applying some logics on the ascii valueof alphabates of string.
in this assignment as it is required that the encoded string should be of shoter length so i am making the encoded string exactly by incrementing the loop varible +2,it gives the resultant string exactly half of the length of the string if string length is even and if string length is odd then i am just putting the ascii of last character at the end.
for (let i = 0; i < s.length - 1; i += 2) this is loop condition in this loop i have to work on generating encoded string and the key.
the encoded output i generating on the basis of the diffeence of the ascii value of ith index and (i+1)th if it gives value less than 0 then i am adding it i with 97 and concating the char value in the output string, i.e out = out.concat(String.fromCharCode(s.charCodeAt(i + 1) - s.charCodeAt(i) + 97));
if the difference if ith and (i+1)th is positive then i am concatinating string into by adding 65 to the charcode.
i.e  out = out.concat(String.fromCharCode(s.charCodeAt(i) - s.charCodeAt(i + 1) + 65));.
if the string length is odd then at the last position of the output string i am putting the ascii of the alphabate.
i.e if (s.length % 2 != 0) {
        var z = s.charCodeAt((s.length - 1));
        out = out.concat(z);
    }
for storing the key value i am just concatinating sum of the ascii of ith and (i+1)th followed by the character which is generated after subtracting the ascii of ith and (i+1)th
in lower case(i.e adding 97 to that)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This Assignment is made using Node js and React js.Backend server is created with express.
where as front-end is designed with React js.For making the page responsive bootstrap-4 styling(grid system) has been used.Also materialize css has been used for presenting
toast, if there is some error at client side.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Backend structure and working:
backend file consist of main file app.js and one folder route inside route folder the server.js file where the API for encoding and deccoding has been written.
1. app.js
2. routes/server.js

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

'/encode/:id' this api is responsible for generating the alphanumeric code for the string entered by user.as the required encoded string should be shortened 
in length so i have used key as decoding will be done on the basis of the key generated by this route.so overall this route generates encoded string as well as the key ,on 
the basis of which the decoding of encoded string will be performed.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

'/decode/:id/:key' this route is responsible for generating the original string by taking encoded string as a input and generate the actual text.this route also accepts key in its url,which is not given by user explicitly.I am saving the key value in the local storage of application.and when the decoding function runs the key value is fetched from localstorage and then the storage is cleared

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Server side dependency includes only express

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Client side description Components of client side :-

1. The client folder is the folder created by create-react-app
2 .where the only folder that is changed is src inside src app.js is resposnible for        rendering the route /.
3. on this route the component Landing.js is rendered for serving all the UI material      i.e (input form, button)
4. The click of encode button calls a function encodedata() where the code for              validating the user input and calling the server api i.e '/encode/:id' is written
5. The click of decode button calls a function decodedata() where the code for              validating the user input and calling the server api i.e '/encode/:id/:key' is          written

Dependencies in the client side :-

1. react
2. react-dom
3. react-router-dom
4. react-script
5. materialize-cs

key point:- I have used hooks for storing and setting the data and on the basis of that data, the UI is rendering

Deployment description:- I have deployed this project on heroku. Link :- https://alphacoding.herokuapp.com/

As this project is live so i am not attaching the screenshots of the testcases, as user can check it himself.


