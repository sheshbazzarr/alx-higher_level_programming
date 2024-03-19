#!/usr/bin/python3
for i in range(ord('z'), ord('a') - 1, -1):
    if i % 2 == 0:
        value = 0
    else:
        value = 32
    print('{}'.format(chr(i - value)), end='')
