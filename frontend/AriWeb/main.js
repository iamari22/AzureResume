window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 22;
    fetch (functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function Api");
        count = response.count;
        document.getElementById("Counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}