function parimpar(n) {
    if(n % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimpar()
console.log(res)

// ou console.log(parimpar(4))