export default function ForecastCard() {
    return (
        <div class="forecast-card">
            <h3>Day</h3>
            <div class="forecast-info">
                <div class="flex-center">
                    <i class="fa-solid"></i>
                    <div>
                        <p class="temp-max"></p>
                        <p class="temp-min"></p>
                    </div>
                </div>
                <p class="clim-week"></p>
                <div class="forecast-details">
                    <hr />
                    <p>
                        Humidity: <span class="humi-week"></span>
                    </p>
                    <p>
                        Wind: <span class="wind-week"></span>
                    </p>
                </div>
            </div>
        </div>
    );
}  