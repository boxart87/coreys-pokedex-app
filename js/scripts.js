var repository = [
    { name: 'Bulbasaur', height: 0.7, types: [' grass', ' poison'], abilities: [' chlorophyll', ' overgrow'] },
    { name: 'Charmeleon', height: 1.1, types: ' fire', abilities: [' blaze', ' solar-power'] },
    { name: 'Squirtle', height: 0.5, types: ' water', abilities: [' rain-dish', ' torrent'] },
];

repository.forEach(function (currentItem) {
    document.write('<h1>' + currentItem.name + '</h1>' + '<p><strong>Height:</strong> ' + currentItem.height + 'm');
    if (currentItem.height > 1) {
        document.write(' - Wow, that\'s big! </p>')
    }
    else {
        document.write('</p>')
    }
    document.write(' <p><strong>Type(s):</strong> ' + currentItem.types + '</p>' + ' <p><strong>Abilities:</strong>' + currentItem.abilities + '</p><hr>');
});