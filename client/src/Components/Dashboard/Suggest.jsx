import React, { useState, useEffect } from 'react'
import Styles from "./Suggest.module.css"
import Axios from "axios"
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux"
import { follow1 } from "../../Redux/Registration/action"

function Suggest() {

    const dispatch = useDispatch();
    var object_id = useSelector((state) => state.regi.object_id);
    const [sugg, setSugg] = useState([]);

    const follow = (id) => {
        const pay = {
            sec: id,
            mine: object_id
        }
        dispatch(follow1(pay))
    }

    useEffect(() => {
        Axios.get("http://localhost:2244/users", {})
            .then((res) => setSugg(res.data.data))
    }, [])

    return (
        <div className={Styles.sug}>
            <div className={Styles.inp1}>
                <img alt="" style={{ marginTop: "35px", marginRight: "10px" }} />
                <input className={Styles.inp} placeholder="Search Twitter" />
            </div>

            <div className={Styles.body}>
                <h3>You might Like</h3>
                {sugg?.map((itm) => <div className={Styles.follow}>
                    <img src="https://i.ibb.co/BcZY96n/blankprofile.png" alt="" width="100px" height="100px" />
                    <div>
                        <h4>{itm.name}</h4>
                        <p style={{ marginTop: "-20px"}}>@{itm.name}</p>
                        <Button onClick={() => follow(itm._id)} variant="contained" style={{ backgroundColor: "#1DA1F2", width: "100px", textAlign: "left", color: "white", fontWeight: "800", cursor: "pointer" }}>Follow</Button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Suggest
