const url = 'https://bbc-good-food-api.p.rapidapi.com/collection/breakfast-recipes/recipes/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '22e9e9e7d0mshb1034fff1b2f83ep18914ajsn7327df5a364c',
		'X-RapidAPI-Host': 'bbc-good-food-api.p.rapidapi.com'
	}
};

async function apiCall() {
	const response = await fetch(url, options)
	const {results} = JSON.parse(await response.text());
	let cartona ='';
	for(const iterator of results){
		cartona+=`<div class="col-4 p-5 mt-2 ">
    	<div>
      		<div>
        	<img src="${iterator.imageSrc}"  alt="...">
      		</div>

      		<div>
          		<h2 class="">${iterator.recipeName}</h2>
          		<p class="fs-3">${iterator.description}</p>
          		<a href="#" class="btn btn-primary">order now</a>
      		</div>

   		</div>
    
  </div>
`

	}
	


	document.getElementById('root').innerHTML = cartona;
}


apiCall();


// div class="continor">
//   <div class="d-flex p-3 justify-content-between">
//     <div class="col-lg-3 border border-dark-subtle">
//       <div class="row g-0">
//         <div class="row-cols-lg-1">
//           <img src="${iterator.imageSrc}" alt="...">
//         </div>
//         <div class="col-lg-6 text-center " style="margin-left: 70px;" >
//           <div class="card-body">
//             <h5 class="card-title">${iterator.recipeName}</h5>
//             <p class="card-text">${iterator.description}</p>
//             <a href="#" class="btn btn-primary">Order now</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div> 
// </div>
