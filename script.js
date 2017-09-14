$(function() {
    
    const field = $('#field');
    let total = '';

    //clear main field button
    $('#clear').on('click', () => {
        total = '';
        field.val(total);
    });

    //delete one number from the main field
    $('#delete').on('click', () => {
        total = total.slice(0, -1);
        field.val(total);
    });

    //print selected number
    $('.number').on('click', function() {
        let currentNum = $(this).text();
        total += `${currentNum}`;
        field.val(total);
    });

    //print selected operator 
    $('.operator').on('click', function() {
        let currentOperator = $(this).text();
        //prevention double dot
        if (currentOperator == '.') {
            let items = total.split(/(?=[+-/*])/);
            let lastItem = items[items.length - 1];
            let isDot = lastItem.includes('.');
            if (isDot) {
                return;
            }
        }
        let lastNumber = total.toString().slice(-1);
        if ($.isNumeric(lastNumber) == true) {
            total += `${currentOperator}`;
            field.val(total);
        }
    });

    //calc the total outcome
    $('#outcome').on('click', function() {
        total = eval(total);
        field.val(total);
    });

});