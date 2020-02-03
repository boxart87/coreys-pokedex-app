var pokemonRepository = (function () {
    var repository = [
        { name: 'Bulbasaur', height: 0.7, types: [' grass', ' poison'], abilities: [' chlorophyll', ' overgrow'] },
        { name: 'Charmeleon', height: 1.1, types: ' fire', abilities: [' blaze', ' solar-power'] },
        { name: 'Squirtle', height: 0.5, types: ' water', abilities: [' rain-dish', ' torrent'] },
    ];

    function add(pokemon) {
        repository.push(pokemon);
    };

    function getAll() {
        return repository;
    };

    function addListItem(pokemon) {
        var listItem = document.createElement('li');
        var button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        listItem.appendChild(button);
        button.addEventListener('click', function () {
            showDetails(pokemon)
        });
        $pokemonList.appendChild(listItem);
    };

    function showDetails(pokemon) {
        console.log(pokemon)
    };

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };

})();

var $pokemonList = document.querySelector('ul');


pokemonRepository.getAll().forEach(function (currentItem) {
    pokemonRepository.addListItem(currentItem);
});