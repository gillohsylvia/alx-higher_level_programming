#!/usr/bin/python3
def uniq_add(my_list=[]):
    new = set(my_list)
    sam = 0
    for i in new:
        sam += i
    return sam

