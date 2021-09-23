import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RegisterAction } from '../Redux/actions';

function Homepage(props) {

    const [data, setData] = useState()

    const fetchApi = async () => {
        const url = "https://randomuser.me/api/0.8/?results=20";
        const response = await fetch(url);
        const parsedData = await response.json()

        const strData = JSON.stringify(parsedData)
        localStorage.setItem("usersData", strData)
        // const locStorStr=localStorage.getItem("usersData") //string

        // const locStorObj=JSON.parse(locStorStr)
        setData(parsedData.results)
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
            <ul>
                {data && data.map((item, index) => (
                    <li>{item.user.name.first + " " + item.user.name.last}</li>
                ))}
            </ul>
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

