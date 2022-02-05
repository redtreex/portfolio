window.onload = () => {
    fetch(document.location.href)
        .then(res => {
            const last_edit = res.headers.get("last-modified")
            document.getElementById("last-edit").innerHTML = "Last Modified: "+ last_edit
        })
}