// Full name
let re = /^[a-z ,.'-]+$/i {1,6};

// Storm style
function adjustRange(range) {
    document.getElementById("rangevalue").innerHTML = range;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectregion');
	s.style.display = "block";
	s.textContent = sel.value;
	
}