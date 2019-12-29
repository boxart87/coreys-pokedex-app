var repository = [
    { name: 'Bulbasaur', height: 0.7, types: [' grass', ' poison'], abilities: [' chlorophyll', ' overgrow'] },
    { name: 'Charmeleon', height: 1.1, types: ' fire', abilities: [' blaze', ' solar-power'] },
    { name: 'Squirtle', height: 0.5, types: ' water', abilities: [' rain-dish', ' torrent'] },
];

/*Commenting out for now because previous task hasent been reviewed yet and i want Gurpreet to be able to see the code.
for (var i = 0; i < repository.length; i++) {
    document.write('<h1>' + repository[i].name + '</h1>' + '<p><strong>Height:</strong> ' + repository[i].height + 'm');
    if (repository[i].height > 1) {
        document.write(' - Wow, that\'s big! </p>')
    }
    else {
        document.write('</p>')
    }
    document.write(' <p><strong>Type(s):</strong> ' + repository[i].types + '</p>' + ' <p><strong>Abilities:</strong>' + repository[i].abilities + '</p><hr>');
}
*/

repository.forEach(function (currentItem) {
    document.write('<h1>' + currentItem.name + '</h1>' + '<p><strong>Height:</strong> ' + currentItem.height + 'm');
    if (currentItem.height > 1) {
        document.write(' - Wow, that\'s big! </p>')
    }
    else {
        document.write('</p>')
    }
    document.write(' <p><strong>Type(s):</strong> ' + currentItem.types + '</p>' + ' <p><strong>Abilities:</strong>' + currentItem.abilities + '</p><hr>');
})