import React from 'react'
import Styles from "./Home.module.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className={Styles.home}>
            <div className={Styles.banner}></div>
            <div className={Styles.join}>
                <div className={Styles.top}>
                    <TwitterIcon color="primary" fontSize="large" />
                </div>
                <div className={Styles.mid}>
                    <p>Happening now</p>
                    <h1>Join Twitter today.</h1>
                </div>

                <div className={Styles.bottom}>
                    <div className={Styles.log}>
                        <Link to={"/SignUp"} style={{ textDecoration: "none" }}><p className={Styles.sign}>Sign Up</p></Link>
                    </div>
                    <div className={Styles.log}>
                        <Link to={"/SignIn"} style={{ textDecoration: "none" }}><p className={Styles.sign}>Login</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
