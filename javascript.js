function result (temp, tempScale) {

    let F = 1;
    let C = 1;
    let K = 1;


    if (tempScale === 'F') {
        F = temp;
        C = calc_cels_faren(F);
        K = calc_kelv_cels(C);
    } else if (tempScale === 'C') {
        C = temp;
        F = calc_faren_cels(C);
        K = calc_kelv_cels(C);
    } else {
        K = temp;
        C = calc_cels_kelv(K);
        F = calc_faren_cels(C);
    }

    console.log('K', K, 'C', C, 'F', F);
}

result(15, 'F');


function calc_kelv_cels(C) {
    return C + 273.15;
}

function calc_faren_cels(C) {
    return (C * 9 / 5) + 32;
}

function calc_cels_kelv(K) {
    return K - 273.15;
}

function calc_cels_faren(F) {
    return (F - 32) * 5 / 9;
}