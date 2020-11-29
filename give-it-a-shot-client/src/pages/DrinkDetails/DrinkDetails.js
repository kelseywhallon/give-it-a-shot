import React, { useState, useEffect } from "react";
// import { Results } from "../../components/Results";
// import { Option } from "../../components/Option";
import DrinksApi from "../../backend/drinks";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import styles from "./Details.module.scss";


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
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={drink.strDrinkThumb} style={{width:300}}/>
            <Card.Body>
                <h1>{drink.strDrink}</h1>
                <Card.Text>
                    Drink Category: {drink.strCategory}
                    <br />
                    Type of Glass: {drink.strGlass}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem style={{size:18}}>Inredients:</ListGroupItem>
                <ListGroupItem>{drink.strIngredient1}</ListGroupItem>
                <ListGroupItem>{drink.strIngredient2}</ListGroupItem>
                <ListGroupItem>{drink.strIngredient3}</ListGroupItem>
                <ListGroupItem>{drink.strIngredient4}</ListGroupItem>
            </ListGroup>
            <Card.Footer>
                <Card.Link href="/quiz">Back to Results</Card.Link>
            </Card.Footer>
        </Card>
        </div>
    )
}
