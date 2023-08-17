import React from "react";
import { BsCheckCircleFill } from 'react-icons/bs'

export default function Challenges() {
    return (
        <div>
            <link rel="stylesheet" href="../css/styles.css" />
            <link rel="stylesheet" href="../css/suka.css" />
            <div className="card-body__upper d-flex flex-column">
                <h5 className="color-white font-size18 line-height-22 font-weight600 letter-spacing-2">
                    Free Bundle1
                </h5>
                <p className="font-size14 line-height-20 font-weight400 flex-grow-1">
                    Interested in what we offer but unsure of getting it? Feel free to use the free bundles to get your hands dirty!
                </p>
                <div className="row pt-3">
                    <div className="col-12">
                        <a className="btn btn-htb-filled btn-htb-green" href="link to register, if not logged in, else go to challenges">
                            Click here to try our free challenges!
                        </a>
                    </div>
                </div>
            </div>
            <div className="divider my-4"></div>
            <div className="row flex-grow-1">
                <div className="col-12 card-body__features">
                    <p className="color-white font-weight500 line-height-22 font-size16">
                        With the free bundle, you get:
                    </p>
                    <ul className="benefits-list color-main font-weight400 font-size14 line-height-20 pl-0">
                        <li className="d-flex align-items-center">
                            <i className="mr-2 htb-icon-check font-size12 color-green "></i>
                            < BsCheckCircleFill />  One Free Beginner-level challenge!
                        </li>
                        <li className="d-flex align-items-center">
                            <i className="mr-2 htb-icon-check font-size12 color-green"></i>
                            Unlimited Attempts!
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    /* ... Additional bundles sections ... */
);
}
