import React, { useState, useEffect } from 'react'
import M from "materialize-css";

export const Landing = () => {

    const [val, setVal] = useState('');
    const [encode, setEncode] = useState('');
    const [key, setKey] = useState('')
    const [decstr, setDecstr] = useState('')
    const [deckey, setDeckey] = useState('')
    const [decval, setDecval] = useState('')

    const encodedata = () => {
        localStorage.clear()
        var str = []
        for (var i = 0; i < val.length; i++) {
            str[i] = val.charCodeAt(i)
            if (str[i] < 92 && str[i] >= 65) {
                console.log("input string should be in lowercase only")
                M.toast({ html: "no capital letter allowed in input string", classes: "#c62828 red darken-3" });

                return
            }
        }
        if (val === "") {
            console.log("empty string")
            M.toast({ html: "blank input string not allowed", classes: "#c62828 red darken-3" });

            return
        }

        fetch(`/encode/${val}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result.out)
                console.log(result.key)
                // console.log(typeof (result))
                setEncode(result.out)
                setKey(result.key)
                localStorage.setItem("key", result.key)

            })

    }

    const decodedata = () => {
        var k = localStorage.getItem("key")


        if (decstr === "") {

            M.toast({ html: "please enter string to decode", classes: "#c62828 red darken-3" });

            return
        }



        fetch(`/decode/${decstr}/${k}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.text())
            .then((result) => {
                console.log(result)

                setDecval(result)


            })

    }


    return (
        <div className="container " style={{ marginTop: "40px" }}>
            <div className="row">
                <div className="col-6">
                    <input
                        type="text"
                        placeholder="Enter  string to encode"
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                    />

                    <button style={{ marginTop: "15px" }} onClick={() => encodedata()} class="btn waves-effect waves-light" type="submit" name="action">encode
                    <i class="material-icons right">send</i>
                    </button>

                    {
                        encode ?
                            <div style={{ marginTop: "30px" }}>
                                <h6>encoded value  : {encode}</h6>


                            </div>
                            :
                            <div>
                            </div>
                    }


                </div>
                <div className="col-6">
                    <input
                        type="text"
                        placeholder="Enter encoded value to decode"
                        value={decstr}
                        onChange={(e) => setDecstr(e.target.value)}


                    />

                    <button style={{ marginTop: "15px" }} onClick={() => decodedata()} class="btn waves-effect waves-light" type="submit" name="action">decode
                    <i class="material-icons right">send</i>
                    </button>
                    {
                        decval ?
                            <div style={{ marginTop: "30px" }}>
                                <h6>original string: {decval}</h6>


                            </div>
                            :
                            <div>
                            </div>
                    }

                </div>
            </div>

        </div>
    )
}
