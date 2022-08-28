const cf=document.querySelector('.item2 #cf');

fetch('http://localhost:8000/results')
     .then(response=>{return response.json()})
     .then(data=>{
        console.log(data[0]);
        cf.innerHTML=data[0].dt;
        // const date=`<h3 id='cf'>`+data[0].dt+`</h3>`;
        // cf.insertAdjacentHTML("beforeend",date);
    })
     .catch(err=>console.log(err));