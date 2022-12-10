#!/usr/bin/python3
"""
Write a script that takes in the name of a state as an argument and
lists all cities of that state, using the database hbtn_0e_4_usa
"""

import MySQLdb
import sys

if __name__ == '__main__':
    db = MySQLdb.connect(
        host="localhost",
        user=sys.argv[1],
        passwd=sys.argv[2],
        db=sys.argv[3],
        port=3306)

    cur = db.cursor()
    arg = sys.argv[4]
    cur.execute("SELECT cities.name \
                FROM cities \
                JOIN states ON cities.state_id = states.id \
                WHERE states.name = %(name)s", {"name": arg}
                )
    cities = cur.fetchall()
    list_c = [item for city in cities for item in city]
    print(", ".join(list_c))

    cur.close()
    db.close()
