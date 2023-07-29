document.addEventListener('DOMContentLoaded',() => {
    const form = document.getElementById('citySearchForm');
    const input = document.getElementById('citySearchInput');
    const cityResults = document.getElementById('citySearchResults');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const search =input.value.trim().toLowerCase();
        getCities(search)
    });

    function getCities(search) {
        fetch()
         .then((res) => res.json())
         .then((data)=>showCities(data))
         .catch((err) => console.log('error to get cities',err));
    }

    function showCities(cities) {
        cityResults.innerHTML = '';
        if(cities.length == 0) {
            cityResults.innerHTML = '<li> No city found</li>';
            return;
        }
    
    cities.forEach((city)=>{
        const li = document.createElement('li');
        li.textContent = `${city.name} (Count: &{city.count})`;
        cityResults.appendChild(li)
    })
  }
})