import React, { useEffect, useState } from "react";
import './covid.css';

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
       getCovidData();
        
    }, []);
    return (
        <>
            <section>
                <h1>Live Tracking</h1>
                <h2> Covid-19 coronavirus application</h2>
                <ul>
                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>our </span>active case </p>
                                <p className="card__total card__small">{data.active}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>our </span>recovered case </p>
                                <p className="card__total card__small">{data.recovered}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>our </span>confirmed case </p>
                                <p className="card__total card__small">{data.confirmed}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>our </span>last update time case </p>
                                <p className="card__total card__small">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>our </span>deaths </p>
                                <p className="card__total card__small">{data.deaths}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>our </span>deltaconfirmed case </p>
                                <p className="card__total card__small">{data.deltaconfirmed}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span>our </span>migratedother case </p>
                                <p className="card__total card__small">{data.migratedother}</p>
                            </div>
                        </div>
                    </li>
                </ul>
           
        </section>
    </>
    )
}
export default Covid;
