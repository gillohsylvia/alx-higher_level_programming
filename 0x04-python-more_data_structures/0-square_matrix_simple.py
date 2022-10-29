#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    newList = [[x**2 for x in y]for y in matrix]
    return newList
