from naga import mapv, second, first

bankstring = mapv(int, "11	11	13	7	0	15	5	5	4	4	1	1	7	1	15	11".split())


def distribute(banks):
    while True:
        banks = list(banks)
        idx, val = first(sorted(sorted(((idx, b) for idx, b in enumerate(banks)), key=first), key=second, reverse=True))
        banks[idx] = 0
        while val > 0:
            for i in range(min(idx + 1, len(banks)), len(banks)):
                if val > 0:
                    banks[i] += 1
                    val -= 1
            for i in range(min(idx + 1, len(banks))):
                if val > 0:
                    banks[i] += 1
                    val -= 1

        yield banks


def find_cycles(banks):
    seen = set()
    for n, b in enumerate(distribute(banks), start=1):
        b = tuple(b)
        if b in seen:
            return n
        seen.add(b)


def tests():
    assert next(distribute([0, 2, 7, 0])) == [2, 4, 1, 2]
    assert next(distribute([2, 4, 1, 2])) == [3, 1, 2, 3]
    assert next(distribute([3, 1, 2, 3])) == [0, 2, 3, 4]
    assert next(distribute([0, 2, 3, 4])) == [1, 3, 4, 1]
    assert next(distribute([1, 3, 4, 1])) == [2, 4, 1, 2]
    assert find_cycles([0, 2, 7, 0]) == 5


def main():
    print(find_cycles(bankstring))

if __name__ == '__main__':
    tests()
    main()
