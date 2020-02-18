var pokemonRepository = (function () {
    var repository = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    var $pokemonModalContainer = document.querySelector('#pokemon-modal-container');
    var $pokemonList = document.querySelector('ul');

    function add(pokemon) {
        repository.push(pokemon);
    }

    function getAll() {
        return repository;
    }

    function addListItem(pokemon) {
        var listItem = document.createElement('li');
        var button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        listItem.appendChild(button);
        $pokemonList.appendChild(listItem);
        button.addEventListener('click', function () {
            showDetails(pokemon)
        });
    }

    //show detais of clicked pokemon
    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                var pokemon = {
                    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.name = item.name;
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.weight = details.weight;
            //COMMENTING OUT UNTIL I CAN RESERCH MORE ON HOW TO GET THIS INFO PROPERLY
            //item.types = Object.keys(details.types);
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showModal(item) {

        //clear existing modal content
        $pokemonModalContainer.innerHTML = '';

        var pokemonModal = document.createElement('div');
        pokemonModal.classList.add('pokemon-modal');

        //this adds new content for the modal

        //adds close button
        var pokemonCloseButtonElement = document.createElement('button');
        pokemonCloseButtonElement.classList.add('pokemon-modal-close');
        pokemonCloseButtonElement.innerText = 'Close';
        pokemonCloseButtonElement.addEventListener('click', hideModal);

        //adds a header displaying the pokemon name
        var pokemonName = document.createElement('h2');
        pokemonName.innerText = item.name;

        //adds an image of the pokemon
        var pokemonImage = document.createElement('img');
        pokemonImage.src = item.imageUrl;
        pokemonImage.classList.add('pokemon-img')


        //adds a wrapper to pokemon info so i can organize it into a grid
        var pokemonGrid = document.createElement('div');
        pokemonGrid.classList.add('pokemon-grid');

        //COMMENTING OUT UNTIL I CAN RESERCH MORE ON HOW TO GET THIS INFO PROPERLY
        //adds grid item h2 for pokemon type
        //var pokemonType = document.createElement('h3');
        //pokemonType.classList.add('pokemon-grid_item');
        //pokemonType.innerText = 'Type(s)';

        //adds grid item p for pokemon type info
        //var pokemonTypeInfo = document.createElement('p');
        //pokemonTypeInfo.classList.add('pokemon-grid_item');
        //pokemonTypeInfo.innerText = item.types;

        //adds grid item h2 for pokemon height
        var pokemonHeight = document.createElement('h3');
        pokemonHeight.classList.add('pokemon-grid_item');
        pokemonHeight.innerText = 'Height';

        //adds grid item p for pokemon height info
        var pokemonHeightInfo = document.createElement('p');
        pokemonHeightInfo.classList.add('pokemon-grid_item');
        pokemonHeightInfo.innerText = item.height + 'm';

        //adds grid item h2 for pokemon weight
        var pokemonWeight = document.createElement('h3');
        pokemonWeight.classList.add('pokemon-grid_item');
        pokemonWeight.innerText = 'Weight';

        //adds grid item p for pokemon weight info
        var pokemonWeightInfo = document.createElement('p');
        pokemonWeightInfo.classList.add('pokemon-grid_item');
        pokemonWeightInfo.innerText = item.weight + 'kg';

        //appends grid items

        //COMMENTING OUT UNTIL I CAN RESERCH MORE ON HOW TO GET THIS INFO PROPERLY
        //pokemonGrid.appendChild(pokemonType);
        //pokemonGrid.appendChild(pokemonTypeInfo);
        pokemonGrid.appendChild(pokemonHeight);
        pokemonGrid.appendChild(pokemonHeightInfo);
        pokemonGrid.appendChild(pokemonWeight);
        pokemonGrid.appendChild(pokemonWeightInfo);

        //appends modal
        pokemonModal.appendChild(pokemonCloseButtonElement);
        pokemonModal.appendChild(pokemonName);
        pokemonModal.appendChild(pokemonImage);
        pokemonModal.appendChild(pokemonGrid);

        //appends modal container
        $pokemonModalContainer.appendChild(pokemonModal);

        $pokemonModalContainer.classList.add('is-visible');
    }

    //hide details only when clicking either outside modal or close button
    function hideModal() {
        $pokemonModalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && $pokemonModalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    $pokemonModalContainer.addEventListener('click', (e) => {
        var target = e.target;
        if (target === $pokemonModalContainer) {
            hideModal();
        }
    })

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
        hideModal: hideModal
    };

})();


pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});