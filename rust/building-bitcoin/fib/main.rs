/// factorical implementation with an iterator
fn factorical_iter(num: usize) -> usize {
    (1..num)
        .fold(1, |acc,x| acc * x)
}

/// factorical implemented with a loop ans mutable variable
fn factorical_loop(num: usize) -> usize {
    let mut sum = 1;
    for x in 2..num {
        sum *= x;
    }
    sum
}

/// fibbonaci implementation with loop
fn fibbonaci(n: usize) -> usize {
    let mut a = 1;
    let mut b = 1;
    for _ in 1..n {
        let old_a = a;
        a = b;
        b += old_a;
    }
    b
}

fn main() {
    let x = factorical_iter(12);
    let y = factorical_loop(20);
    let fib = fibbonaci(35);
    println!("factorial 1: {}, factorial 2: {}, fibbonaci: {}", x, y, fib);
}