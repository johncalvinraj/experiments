gr = (Math.sqrt(5) + 1) / 2

function f(x) {
    return x * (10-2*x)**2
}

function gss(f, a, b, tol = 1e-5){
    c = b - (b - a) / gr
    d = a + (b - a) / gr
    while (Math.abs(b - a) > tol){
        if (f(c) > f(d)) {
            b = d
        }
        else {
            a = c
        }
        c = b - (b - a) / gr
        d = a + (b - a) / gr
        console.log(`lower = ${a}, upper = ${b}`)
    }
    return (b + a) / 2
} 
p = gss(f, 0, 5)
console.log(p)