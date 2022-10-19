export default function WeatherInfo() {
    return (
        <div class="content-info">
            <div class="info-details">
                <h2 id="place">Lima, PE</h2>
                <p id="daytime"></p>
                <p>
                    Humidity: <span id="humidity"></span>
                </p>
                <p>
                    Wind: <span id="wind"></span>
                </p>
            </div>
            <div class="info-general">
                <div class="flex-center">
                    <i id="icon"></i>
                    <div class="info-temp">
                        <h1 id="temperature">0</h1>
                        <span>°</span>
                        <span>C</span>
                    </div>
                </div>
                <p id="climate"></p>
            </div>
        </div>
    );
}  