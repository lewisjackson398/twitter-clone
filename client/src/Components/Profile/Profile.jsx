import React from 'react'
import Styles from "./Profile.module.css"
import { useSelector } from "react-redux"

function Profile() {
    var tweets = useSelector((state) => state.regi.tweets);
    var name = useSelector((state) => state.regi.name);
    var following = useSelector((state) => state.regi.following);
    var follower = useSelector((state) => state.regi.follower);

    console.log(following, follower)

    return (
        <div className={Styles.prof}>
            <div className={Styles.cover}>
                <img src="https://i.ibb.co/C8sbMYM/Salecycle-logo.png" height="100%" width="100%" object-fit="contain" alt="" />
            </div>
            <div className={Styles.dp}>
                <img src="https://i.ibb.co/BcZY96n/blankprofile.png" alt="" height="100%" width="100%" object-fit="contain"/>
            </div>
            <div className={Styles.details}>
                <p className={Styles.name}>{name}</p>
                <p className={Styles.usr}>@{name}</p>
                <p>{following.length}<span> Following</span>  {follower.length}<span> Follower</span></p>
            </div>
            <h4 className={Styles.tw}>Tweets</h4>
            <div className={Styles.tweets}>
                {tweets?.map((itm) => {
                    return <div className={Styles.tweet}>
                        <h1>{itm}</h1>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Profile
