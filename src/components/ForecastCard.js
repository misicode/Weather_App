export default function ForecastCard() {
    return (
        <div className="forecast-card">
            <h3>Day</h3>
            <div className="forecast-info">
                <div className="flex-center">
                    <i className="fa-solid"></i>
                    <div>
                        <p className="temp-max"></p>
                        <p className="temp-min"></p>
                    </div>
                </div>
                <p className="clim-week"></p>
                <div className="forecast-details">
                    <hr />
                    <p>
                        Humidity: <span className="humi-week"></span>
                    </p>
                    <p>
                        Wind: <span className="wind-week"></span>
                    </p>
                </div>
            </div>
        </div>
    );
}  