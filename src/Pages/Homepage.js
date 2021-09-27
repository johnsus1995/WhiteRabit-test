import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RegisterAction } from '../Redux/actions';

function Homepage(props) {

    const [data, setData] = useState()
    const [fetchErr, setFetchErr] = useState("")

    const fetchApi = async () => {
        try {
            const url = "https://randomuser.me/api/0.8/?results=20";
            const response = await fetch(url);
            const parsedData = await response.json()

            const strData = JSON.stringify(parsedData)
            localStorage.setItem("usersData", strData)
            // const locStorStr=localStorage.getItem("usersData") //string

            // const locStorObj=JSON.parse(locStorStr)
            setData(parsedData.results)
        } catch (error) {
            console.log(error)
            setFetchErr("Failed to load data, please try after some time")
        }

    }

    useEffect(() => {
        fetchApi();
    }, [])

    console.log(props)

    return (

        <div>
            <div>
                <h1>List of Users</h1>
            </div>
            {data ? <div><ul>
                {data && data.map((item, index) => (
                    <li key={index}>{item.user.name.first + " " + item.user.name.last}</li>
                ))}
            </ul></div> 
            : <h3>Loading...</h3>}

        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        RegisterAction: (e) => {
            dispatch(RegisterAction(e));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

