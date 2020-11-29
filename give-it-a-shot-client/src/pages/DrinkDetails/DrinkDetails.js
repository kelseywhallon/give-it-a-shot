import React, { useState, useEffect } from "react";
// import { Results } from "../../components/Results";
// import { Option } from "../../components/Option";
import DrinksApi from "../../backend/drinks";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import styles from "./Details.module.scss";
import {Button} from '../../components/Button';


export const DrinkDetails = props => {

    const [drink, setDrinkDetails] = useState({})

    useEffect(() => {
        getDrinkDetails();
    }, [])

    const getDrinkDetails = () => {
        DrinksApi.getDrinkDetails(drink).then(data => {
            console.log(data[0])
            setDrinkDetails(data[0]);
        })
    }


    return (
        <div className={`${styles.container} ${styles.options}` }>
        <Card className={`${styles.card}`} style={{ width: '30rem' }}>
            <Card.Img className={`${styles.cardImg}`} variant="top" src={drink.strDrinkThumb} />
            <Card.Body className={`${styles.cardBody}`}>
                <h1 className={`${styles.drinkName}`}> {drink.strDrink} </h1>
                <Card.Text className={`${styles.category}`}>
                    <p>
                        Drink Category: 
                        <br /> {drink.strCategory}
                    </p>
                    <p>
                    Type of Glass: 
                    <br />{drink.strGlass}
                    </p>
                </Card.Text>
            </Card.Body>
            <ListGroup className={`${styles.ingredients}`}>
                <h3>Inredients:</h3>
                <ListGroupItem>{drink.strIngredient1}</ListGroupItem>
                <ListGroupItem>{drink.strIngredient2}</ListGroupItem>
                <ListGroupItem>{drink.strIngredient3}</ListGroupItem>
                <ListGroupItem>{drink.strIngredient4}</ListGroupItem>
            </ListGroup>
            <Card.Footer>
                <Button
                    className={`${styles.detailButton}`}
                    type="submit"
                    // onClick={}
                    content="Back to Results"
                />
            </Card.Footer>
        </Card>
        </div>
    )
}
