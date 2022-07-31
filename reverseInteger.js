const x = 0;



function what123(x) {
    let solution;
    if (x < 0) solution = parseInt([...x.toString()].reverse().join('')) * -1;
    if (x > 0) solution = parseInt([...x.toString()].reverse().join(''));
    return solution > (2 ** 31) || solution < ((2 ** 31) * -1) - 1 ? 0 : solution;
}
