import React, { useState } from 'react'
import Styles from "./Public.module.css"
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux"
import { tweet } from "../../Redux/Registration/action"

function Public() {
    const dispatch = useDispatch();
    var tweets = useSelector((state) => state.regi.tweets);
    var object_id = useSelector((state) => state.regi.object_id);
    var following = useSelector((state) => state.regi.following);
    console.log(following, tweets)

    const [val, setVal] = useState("")
    const twe = () => {
        var pay = {
            "id": object_id,
            "tweet": [...tweets, val],
        }
        dispatch(tweet(pay))
    }

    return (
        <div className={Styles.main}>
            <div className={Styles.top}>
                <h2>Home</h2>
            </div>
            <div className={Styles.mine}>
                <div className={Styles.minetop}>
                    <img src="https://i.ibb.co/BcZY96n/blankprofile.png" alt="" />
                    <input className={Styles.inp} value={val} onChange={(e) => setVal(e.target.value)} placeholder="What's happening?" />
                </div>
                <div className={Styles.minebottom}>
                    <Button onClick={() => twe()} variant="contained" style={{ backgroundColor: "#1DA1F2", width: "100px", marginLeft: "70%", marginBottom: "10px", borderRadius: "20px" }}>Tweet</Button>
                </div>
            </div>
            <div className={Styles.all}>
                {following?.map((itm) => {
                    if (itm.tweets.length >= 1) {
                        return <div className={Styles.tweet}>
                            <h1 className={Styles.test}>{itm.tweets[0]}</h1>
                            <p className={Styles.test2}>{`By @${itm.name}`}</p>
                        </div>
                    }
                    return null;
                })
                }
            </div>
        </div>
    )
}

export default Public
