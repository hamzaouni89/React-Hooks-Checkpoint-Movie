import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movie, handleDelete }) => {
    return (
        <div>
            <Card style={{ width: '19rem' }} className="mx-4 my-3">
                <Card.Img variant="top" src={movie.posterUrl} style={{ height: "500px" }} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.description}
                    </Card.Text>
                    <Card.Text>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            isHalf={true}
                            value={movie.rate}
                        />
                    </Card.Text>
                    <div className="d-flex justify-content-around">
                        <Button variant="primary" onClick={() => handleDelete(movie.id)}>Delete</Button>
                        <Button variant="primary">Go somewhere</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
