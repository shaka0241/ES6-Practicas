import "./styles.css";

var marcas = [ 'adidas', 'puma', 'nike' ]

marcas.forEach(function(marcas){
	console.log(marcas)
});



document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
