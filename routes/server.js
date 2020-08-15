const express = require('express');
const { json } = require('express');
const router = express.Router()


router.get("/encode/:id", (req, res) => {
    res.setHeader('Content-Type', 'application/json');



    var s = req.params.id
    s = s.replace(/ /g, "")
    if (s === "") {
        return res.status(422).send(json({ error: "please enter the string for encoding" }))
    }
    console.log(s)
    var key = "";
    var out = "";

    for (let i = 0; i < s.length - 1; i += 2) {


        var y = (s.charCodeAt(i) + s.charCodeAt(i + 1));


        key = key.concat(y);


        key = key.concat(String.fromCharCode((i + 97) % 122));

        if (s[i] >= s[i + 1]) {

            out = out.concat(String.fromCharCode(s.charCodeAt(i) - s.charCodeAt(i + 1) + 65));

        }
        else {

            out = out.concat(String.fromCharCode(s.charCodeAt(i + 1) - s.charCodeAt(i) + 97));

        }

    }

    if (s.length % 2 != 0) {
        var z = s.charCodeAt((s.length - 1));


        out = out.concat(z);


    }
    //console.log("The encode is " + out);
    //console.log("Key to decode is " + key);
    res.status(200).json({ out, key })

})


router.get("/decode/:id/:key", (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    var s = req.params.id
    var key = req.params.key
    // console.log(key)
    // console.log(s)
    var last = "";
    var out = "";
    var index = 0;
    var co = -1;
    for (var i = 0; i < s.length; i++) {
        var sub = 0;
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90)
            sub = (s.charCodeAt(i) - 65);

        if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
            sub = (s.charCodeAt(i) - 97) * -1;

        if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
            co++;
            last = last.concat(s.slice(i, i + 1));
        }
        else {
            var curr = "";

            for (var j = index; j < key.length; j++, index++) {
                if (key.charCodeAt(j) >= 48 && key.charCodeAt(j) <= 57) {

                    curr = curr.concat(String.fromCharCode(key.charCodeAt(j)));
                }
                else {
                    break;
                }
            }
            index++;
            var add = parseInt(curr, 10);
            var x, y;
            x = (add + sub) / 2;
            y = add - x;
            out = out.concat(String.fromCharCode(x));
            out = out.concat(String.fromCharCode(y));




        }
    }

    if (co != -1) {
        out = out.concat(String.fromCharCode(last));
        // console.log("Your decoded " + out);
    }
    //console.log("Your decoded " + out);
    res.send(out)




})



module.exports = router