# 0x0F. Python - Object-relational mapping

## Background Context

In this project, I will link two amazing worlds: Databases and Python!

- In the first part, I will use the module MySQLdb to connect to a MySQL database and execute your SQL queries.

- In the second part, I will use the module SQLAlchemy (don’t ask me how to pronounce it…) an Object Relational Mapper (ORM). 

The biggest difference is: no more SQL queries! Indeed, the purpose of an ORM is to abstract the storage to the usage. With an ORM, your biggest concern will be “What can I do with my objects” and not “How this object is stored? where? when?”. You won’t write any SQL queries only Python code. Last thing, your code won’t be “storage type” dependent. You will be able to change your storage easily without re-writing your entire project.

Without ORM:
```
conn = MySQLdb.connect(host="localhost", port=3306, user="root", passwd="root", db="my_db", charset="utf8")
cur = conn.cursor()
cur.execute("SELECT * FROM states ORDER BY id ASC") # HERE I have to know SQL to grab all states in my database
query_rows = cur.fetchall()
for row in query_rows:
    print(row)
cur.close()
conn.close()
```
---

With ORM:
```
engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format("root", "root", "my_db"), pool_pre_ping=True)
Base.metadata.create_all(engine)

session = Session(engine)
for state in session.query(State).order_by(State.id).all(): # HERE: no SQL query, only objects!
    print("{}: {}".format(state.id, state.name))
session.close()
```
---

# **Learning Objectives**
**General**


-   Why Python programming is awesome
-   How to connect to a MySQL database from a Python script
-   How to SELECT rows in a MySQL table from a Python script
-   How to INSERT rows in a MySQL table from a Python script
-   What ORM means
-   How to map a Python Class to a MySQL table
---
# **Requirements**


-   Allowed editors: vi, vim, emacs
-   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.8.5)
-   Your files will be executed with MySQLdb version 2.0.x
-   Your files will be executed with SQLAlchemy version 1.4.x
-   All your files should end with a new line
-   The first line of all your files should be exactly #!/usr/bin/python3
-   A README.md file, at the root of the folder of the project, is mandatory
-   Your code should use the pycodestyle (version 2.8.*)
-   All your files must be executable
-   The length of your files will be tested using wc
-   All your modules should have a documentation (python3 -c 'print(__import__("my_module").__doc__)')
-   All your classes should have a documentation (python3 -c 'print(__import__("my_module").MyClass.__doc__)')
-   All your functions (inside and outside a class) should have a documentation (python3 -c 'print(__import__("my_module").my_function.__doc__)' and python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)')
-   A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
-   You are not allowed to use execute with sqlalchemy


BY SHESHBAZZAR