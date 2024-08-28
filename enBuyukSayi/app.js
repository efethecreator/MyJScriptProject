function fibonacci(n) {
    var fibo = [0, 1];

    for (var i = 2; i < n; i++){
        var sonrakisayi = n[i-1] + n [i-2] 
        fibo.push(sonrakisayi)
    }
    return fibo
}
fibonacci(30);




