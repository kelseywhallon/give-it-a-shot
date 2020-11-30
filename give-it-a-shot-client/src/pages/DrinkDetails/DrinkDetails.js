import React, { useState, useEffect } from "react";
import DrinksApi from "../../backend/drinks";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import styles from "./Details.module.scss";
import { Button } from '../../components/Button';


export const DrinkDetails = props => {
    console.log(props)
    const backListener = props.history.listen((location, action) => {
        if (action === "POP") {
            console.log("back back to results");
        }
    });

    const [idDrink, setIdDrink] = useState("")
    const [drink, setDrinkDetails] = useState({})

    const getDrinks = () => {
        let location = props.history.location
        console.log(location.pathname)
        let idDrink = location.pathname.slice(7);
        console.log(idDrink)

        DrinksApi.getDrinkDetails(idDrink).then(data => {
            console.log(data[0])
            setIdDrink(idDrink)
            setDrinkDetails(data[0]);
        })
    }

    useEffect(() => {
        getDrinks();
    }, [])


    return (
        <div className={`${styles.container} ${styles.options}`}>
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
                    <br /> {drink.strGlass}
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
                        onClick={() => props.history.push({
                            pathname:'/quiz',
                        }) }
                        content="Back to Results"
                    />
                </Card.Footer>
            </Card>
        </div>
    )
}
