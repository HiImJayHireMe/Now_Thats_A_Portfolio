# -*- coding: utf-8 -*-
# __author__ = 'jay'
#
#
# Problem Statement
#
# Educators are always coming up with new ways to teach math to students. In 2011, an educational software company, All Computer Math (ACM), developed an application to display products in a traditional grade school math format. ACM is now working on an updated version of the software that will display results in a lattice format that some students find to be easier when multiplying larger numbers.
#
# An example would be when multiplying 345 * 56 = 19320 as given below, using a lattice grid with 2 rows and 3 columns, which appears inside a surrounding frame:
#
# +---------------+
# |   3   4   5   |
# | +---+---+---+ |
# | |1 /|2 /|2 /| |
# | | / | / | / |5|
# |1|/ 5|/ 0|/ 5| |
# | +---+---+---+ |
# |/|1 /|2 /|3 /| |
# | | / | / | / |6|
# |9|/ 8|/ 4|/ 0| |
# | +---+---+---+ |
# |/ 3 / 2 / 0    |
# +---------------+
# The first operand, 345, is displayed above the top of the grid with each digit centered horizontally above its column of the grid, and the second operand, 56, is displayed along the righthand side with each digit centered vertically at the center of its row in the grid. A single cell of the grid, such as
#
# +---+
# |3 /|
# | / |
# |/ 0|
# +---+
# represents the product of the digit of the first operand that is above its column and the digit of the second operand that is to the right of its row. In our example, this cell represents the product 5 times 6 = 30 that results when multiplying the 5 in 345 and the 6 in 56. Note that the 10's digit of that product is placed in the upper left portion of this cell and the 1's digit in the lower right.
#
# The overall product is then computed by summing along the diagonals in the lattice that represent the same place values in the result. For example, in our first problem the product 19320 was computed as: 1's digit = 0 10's digit = 5 + 3 + 4 = 12, thus 2 with a carry of 1 100's digit = (1 carry) + 2 + 0 + 2 + 8 = 13, thus 3 with a carry of 1 1000's digit = (1 carry) + 2 + 5 + 1 = 9 10000's digit = 1
#
# The resulting product is placed with the one's digit below the grid at the far right and, depending on its length, with the most significant digits wrapped around the left side of the grid. Each digit of the final product appears perfectly aligned with the corresponding diagonal summands. To provide an aesthetic view, we use a series of minus (-) characters for horizontal lines, pipe (|) characters for vertical lines, and slash (/) characters for diagonal lines. Furthermore, we use a plus (+) character wherever a horizontal and vertical line meet. Each multiplication lattice is subsequently "boxed" by an outer border. There is a row containing the first operand which is between the topmost border and the top line of the grid, and a row between the bottom of the grid and the bottom border, which contains some portion of the resulting product. There is one column between the leading | and the left edge of the inner grid, which may contain a portion of the resulting product, and one column after the right edge of the inner grid but before the rightmost | border, which contains the second operand. If the product is not long enough to wrap around the bottom-left corner, the column between the left border and the left edge of the grid will containing only spaces. (See the later example of 3 x 3.)
#
# Leading zeros should be displayed within lattice grid cells, but leading zeros should never be displayed in the product, nor should there ever be a slash (/) character prior to the leading digit of the product. For example, consider the product of 12 * 27 = 324 below:
#
# +-----------+
# |   1   2   |
# | +---+---+ |
# | |0 /|0 /| |
# | | / | / |2|
# | |/ 2|/ 4| |
# | +---+---+ |
# | |0 /|1 /| |
# | | / | / |7|
# |3|/ 7|/ 4| |
# | +---+---+ |
# |/ 2 / 4    |
# +-----------+
# Note that in the top-right grid of the lattice, the product 2 * 2 = 04 is displayed with the zero for the tens digit. However, there is no thousands digit displayed in the product 324, nor is there any slash displayed above the digit 3 in that product.
#
# Input Format
#
# The input contains one or more tests. Each test contains two positive integers, A and B, such that 1 ≤ A ≤ 9999 and 1 ≤ B ≤ 9999. The last data set will be followed by a line containing 0 0.
#
# Output Format
#
# For each data set, produce the grid that illustrates how to multiply the two numbers using the lattice multiplication technique.
#
# The tables must be formatted precisely as outlined by the rules and examples provided.
#
# Sample Input
#
# 345 56 12 27 1 68 9999 7 3 3 0 0
#
# Sample Output
#
# +---------------+
# |   3   4   5   |
# | +---+---+---+ |
# | |1 /|2 /|2 /| |
# | | / | / | / |5|
# |1|/ 5|/ 0|/ 5| |
# | +---+---+---+ |
# |/|1 /|2 /|3 /| |
# | | / | / | / |6|
# |9|/ 8|/ 4|/ 0| |
# | +---+---+---+ |
# |/ 3 / 2 / 0    |
# +---------------+
# +-----------+
# |   1   2   |
# | +---+---+ |
# | |0 /|0 /| |
# | | / | / |2|
# | |/ 2|/ 4| |
# | +---+---+ |
# | |0 /|1 /| |
# | | / | / |7|
# |3|/ 7|/ 4| |
# | +---+---+ |
# |/ 2 / 4    |
# +-----------+
# +-------+
# |   1   |
# | +---+ |
# | |0 /| |
# | | / |6|
# | |/ 6| |
# | +---+ |
# | |0 /| |
# | | / |8|
# |6|/ 8| |
# | +---+ |
# |/ 8    |
# +-------+
# +-------------------+
# |   9   9   9   9   |
# | +---+---+---+---+ |
# | |6 /|6 /|6 /|6 /| |
# | | / | / | / | / |7|
# |6|/ 3|/ 3|/ 3|/ 3| |
# | +---+---+---+---+ |
# |/ 9 / 9 / 9 / 3    |
# +-------------------+
# +-------+
# |   3   |
# | +---+ |
# | |0 /| |
# | | / |3|
# | |/ 9| |
# | +---+ |
# |  9    |
# +-------+
import itertools


def spaces(boxes):
    res = 5 + (4 * boxes) - 1
    return res

def outside(boxes):
    res = spaces(boxes)
    return res


def draw_top(h, l):
    plus_rule = lambda space: 5 % space == 0

    num_spaces = outside(boxes=l)
    printing_rules = {
        plus_rule: '+'
    }

    minus = '-'
    plus = '+'
    output = [plus]
    for space in range(1, num_spaces):
        output.append(minus)
    output.append(plus)

    res = printable_output = ''.join(output)
    print res


def get_digits(data):
    return list('57')


def draw_header(h, l, data):
    pipe = '|'
    output = [pipe]
    num_spaces = outside(boxes=l)

    digit_condition = lambda space: space % 4 == 0
    digits = get_digits(data)
    # printing_rules = {
    #     digit: lambda n: n
    # }

    empty_space = ' '
    for space in range(1, num_spaces):
        if digit_condition(space):
            output.append(digits.pop(0))
        else:
            output.append(empty_space)
    output.append(pipe)
    res = ''.join(output)
    print res


# def draw_box(col, row, data):
#     top_left =


def get_plus_coordinates(h, w):
    top_height = spaces(w)
    side_height = spaces(h)
    corners = tr, tl, br, bl = (0, 0), (side_height, 0), (0, top_height), (side_height, top_height)
    row_plus = lambda h, w: [(3 + 3*j, 3 + 3*i) for i, j in itertools.product(range(w), range(h))]


def draw_box(col, row, data):
    pass


def draw_grid(h, l, data=None):

    draw_top(h, l)
    draw_header(h, l, data)
    for row in range(l):
        for col in range(h):
            draw_box(col, row, data)
    # draw_footer(h, l, data)
    # draw_bottom(h, l)

def main():

    h, l = 2, 2
    draw_top(h, l)
    draw_header(h, l, data=get_digits(None))

if __name__ == '__main__':
    main()
