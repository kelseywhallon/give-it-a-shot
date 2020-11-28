import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { Results } from "../../components/Results";
import { Option } from "../Option";
import DrinksApi from "../../backend/drinks";

import React from 'react'

function DrinkDetails(props) {
    const [drink, setDrinkDetails] = useState({})

    // useEffect(() => {
    //     fetchDrink();
    // }, [])

    // const fetchDrink = () => {
    //     DrinksApi.DrinkDetails(props.drink).then(data => {
    //         setDrinkDetails()
    //     })
    // }
    
    return (
        <div>
            
        </div>
    )
}

export default DrinkDetails
