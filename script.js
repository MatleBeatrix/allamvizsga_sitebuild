const money = [
    {
        title: "US Dollar",
        sub: "$",
        text: "USD"
    },
    {
        title: "Euro",
        sub: "€",
        text: "EUR"
    },
    {
        title: "Chinese Yuan",
        sub: "¥",
        text: "CNY"
    },
    {
        title: "Thai Baht",
        sub: "฿",
        text: "THB"
    },
    {
        title: "British Pound Sterling",
        sub: "£",
        text: "GBP"
    },
    {
        title: "Ghanaian Cedi",
        sub: "₵",
        text: "GHS"
    },
    {
        title: "Japanese Yen",
        sub: "￥",
        text: "JPY"
    },
    {
        title: "Polish Zloty",
        sub: "zł",
        text: "PLN"
    }
    
]

const addMoney = (money, index)=> {
    return (
    `<div class="card">
        <div class="data">
            <div class="">${money.title}</div>
            <div class="">${money.sub}</div>
            <div class="">${money.text}</div>
        </div>
        <button class="saveButton">
            Save
            <span class="material-icons">
            arrow_forward
            </span>
        </button>
    </div>`)
}



function loadEvent() {
    console.log(`Az oldal betöltödött.`);
    money.map((m, index) => {
        document.getElementById("container").insertAdjacentHTML("beforeend", addMoney(m, index));
    })
}

window.addEventListener("load", loadEvent);