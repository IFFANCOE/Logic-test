function Print(y) {

    for (let i = 1; i <= y; i++) {

        for (let j = 1; j <= y; j++) {
            if (i % y == 0 || i % y == 1)
            process.stdout.write("x")
            else if (i == j || i + j == y + 1)
            process.stdout.write("x")
            else
            process.stdout.write("0")

        }
        process.stdout.write("\n")
    }

}

Print(7)
