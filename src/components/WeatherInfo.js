export default function WeatherInfo(props) {
    function formatTime() {
        let hours = props.data.date.getHours();
        let minutes = props.data.date.getMinutes();
    
        if (hours < 10)
            hours = `0${ hours }`;
        if (minutes < 10)
            minutes = `0${ minutes }`;
        
        return (hours < 12) ? `${ hours }:${ minutes } AM` : `${ hours }:${ minutes } PM`;
    }

    return (
        <div className="content-info">
            <div className="info-details">
                <h2 id="place">{ props.data.city }, { props.data.country }</h2>
                <p id="daytime">Last update: { formatTime() }</p>
                <p>
                    Humidity: <span id="humidity">{ props.data.humidity } %</span>
                </p>
                <p>
                    Wind: <span id="wind">{ props.data.wind } km/h</span>
                </p>
            </div>
            <div className="info-general">
                <div className="flex-center">
                    <i id="icon"></i>
                    <div className="info-temp">
                        <h1 id="temperature">{ Math.round(props.data.temperature) }</h1>
                        <span>°</span>
                        <span>C</span>
                    </div>
                </div>
                <p id="climate">{ props.data.climate }</p>
            </div>
        </div>
    );
}  