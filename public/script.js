const fromDateFixtures = document.querySelector("#fixtures-date-from")
const toDateFixtures = document.querySelector("#fixtures-date-to")

const getFixtures = (requestType) => {
    $.ajax({
        type: "POST",
        url: `/${requestType}/date`,
        data: {
            from: fromDateFixtures.value,
            to: toDateFixtures.value,
        },
        success: (fixtures)=>{
            let main = document.querySelector("main");
            $(main).html("")
            let list = $(main).html("<ol></ol>")
            fixtures.forEach((fixture)=>{
                $("ol").append(`
                    <form action="/fixture/${fixture._id}?_method=DELETE" method="POST">
                        <li class="h6">
                            <span class="h6">
                                ${ fixture.homeTeam.name}
                            </span>
                            <span class="h6 mx-3">
                                VS
                            </span>
                            <span class="h6">
                                ${ fixture.awayTeam.name}
                            </span>
                            <div class="h6">
                                (${moment(fixture.date).format("DD-MM-YYYY")})
                            </div>
                            <div class="d-flex">
                                <a href="/result/${fixture._id}/check" class="btn btn-sm btn-outline-primary mr-2">Set or view Result</a>
                                <input type="submit" value="Delete Fixture" class="btn btn-sm btn-outline-danger ml-2">
                            </div>
                        </li>
                    </form>
                `)
            })
        }
    })
}

fromDateFixtures.addEventListener("input", ()=>{
    getFixtures("fixture")
})
toDateFixtures.addEventListener("input", ()=>{
    getFixtures("fixture")
})
