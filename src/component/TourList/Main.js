import { useState, useEffect } from "react";
import Loading from "./Loading"
import Tours from "./Tours"
import {} from "./index.css"

const url = "https://course-api.com/react-tours-project";

function Main() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours)
    }

    const fetchTours = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const tours = await res.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTours();
    }, []);

    if(loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if(tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>ours of tour</h2>
                    <button
                        className="btn"
                        onClick={() => fetchTours()}
                    >
                        refresh
                    </button>
                </div>
            </main>
        )
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    )
}

export default Main;