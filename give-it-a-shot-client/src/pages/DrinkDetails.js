import React, { useState, useEffect } from "react";

import { Results } from "../components/Results";
import { Option } from "../components/Option";
import DrinksApi from "../backend/drinks";


function DrinkDetails(props) {
    const results = props;

    const [drink, setDrinkDetails] = useState({})

    const getDrinkDetails = () => {
        console.log(props)
        DrinksApi.getDrinkDetails(props.id).then(data => {
            console.log(data)
            setDrinkDetails(data);
        })
    }

    useEffect(() => {
        getDrinkDetails();
    }, [])

    return (
        <div>
            <h1>DRINK INFO!</h1>
            <h3>{props.idDrink}</h3>
        </div>
    )
}

export default DrinkDetails
