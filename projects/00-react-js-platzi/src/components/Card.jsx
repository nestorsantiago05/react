const Card = (({ tittle = "-", description = "-" }) => {
    return (
        <section>
            <h2>{tittle}</h2>
            <p>{description}</p>
        </section>
    )
});

export default Card;