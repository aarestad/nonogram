function buildGrid(rows, cols, grid) {
    for (var i = 0; i < rows; i++) {
        var row = $('<tr></tr>');

        for (var j = 0; j < cols; j++) {
            var cell = $('<td></td>').data('row', i).data('col', j)
            .mouseover(function() {
                $(this).addClass('over');
                $('#location').text('row=' + $(this).data('row') + '; col=' + $(this).data('col'));
            }).mouseout(function() {
                $(this).removeClass('over');
                $('#location').text('');
            }).click(function() {
                $(this).toggleClass('active');
            });

            row.append(cell);
        }

        grid.append(row);
    }
}