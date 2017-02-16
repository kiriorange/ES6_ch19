function foo(x) {
    x = x || -1;
    return x;
}
console.log(`${foo()}/${foo(null)}/${foo(0)}`);
function bar(x=-1) {
    return x;
}
console.log(`${bar()}/${bar(null)}/${bar(0)}`);

