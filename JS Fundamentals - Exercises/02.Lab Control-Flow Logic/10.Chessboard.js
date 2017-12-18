function chessboard([n]) {
    let html = '<div class="chessboard">\n';

    for (let i = 0; i < n; i++) {
        html += '   <div>\n';
        for (let j = 0; j < n; j++) {

            let whiteBlack = (i + j) % 2 == 0 ? 'black' : 'white';
            html += `       <span class="${whiteBlack}"></span>\n`;

        }
        html += '   </div>\n';
    }

    html += '</div>';
    console.log(html);
}

chessboard(['3']);
chessboard(['5']);
chessboard(['8']);