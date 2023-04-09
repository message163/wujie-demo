import('remote/addList').then(({ addList }) => {
    let app = document.getElementById("app");

    app.innerHTML = "<h2>host</h2>";
    addList()
})