#!/usr/bin/python3
for start in range(0, 10):
    for last in range(start + 1, 10):
        if start == 8 and last == 9:
            print('89')
        else:
            print('{}{}, '.format(start, last), end='')
