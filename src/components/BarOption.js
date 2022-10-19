export default function BarOption() {
    return (
        <div class="content-options">
            <button id="btnSearch">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
                id="city"
                type="search"
                placeholder="Enter a city..."
                onkeydown="if (event.keyCode == 13) document.getElementById('btnSearch').click()"
            />
            <button id="btnLocation">
                <i class="fa-solid fa-location-dot"></i>
            </button>
        </div>
    );
}  