function capitalizeWords(text) {
    text = text.split(' ').map(word => word[0].toUpperCase() + word.substring(1).toLowerCase());
    console.log(text.join(' '));
}
capitalizeWords('Capitalize these words');
capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');