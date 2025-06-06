const Coursedata =[
  {
    "name": "Introduction to Python",
    "desc": "Get started with Python programming. Learn about Python's history, setup your development environment, and write your first Python programs.",
    "modules": [
      {
        "name": "What is Python?",
        "desc": "Learn the basics of Python, its history, and why it's a great language for beginners.",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "Welcome to Python!"
          },
          {
            "type": "paragraph",
            "text": "Python is a high-level, interpreted, general-purpose programming language. It emphasizes code readability and a clean syntax."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "A Brief History"
          },
          {
            "type": "paragraph",
            "text": "Python was created by Guido van Rossum and first released in 1991. The name 'Python' is derived from the British comedy group Monty Python."
          },
          {
            "type": "list",
            "items": [
              "1991: Python's first release.",
              "2000: Python 2.0 introduced, with features like list comprehensions and garbage collection.",
              "2008: Python 3.0 introduced, with major changes to the language."
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Why Learn Python?"
          },
          {
            "type": "paragraph",
            "text": "Python is popular due to its simplicity, versatility, and extensive libraries. It's used for:"
          },
          {
            "type": "list",
            "items": [
              "Web Development",
              "Data Science and Machine Learning",
              "Scripting and Automation",
              "Game Development",
              "Education"
            ]
          },
          {
            "type": "blockquote",
            "text": "Python's design philosophy emphasizes code readability (notably using significant whitespace) and a syntax that allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java."
          }
        ]
      },
      {
        "name": "Setting Up Your Environment",
        "desc": "Learn how to install Python and set up a basic development environment.",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "Installing Python"
          },
          {
            "type": "paragraph",
            "text": "You'll need to install Python on your computer to write and run Python code."
          },
          {
            "type": "list",
            "items": [
              "Go to the official Python website: [https://www.python.org/downloads/](https://www.python.org/downloads/)",
              "Download the installer for your operating system (Windows, macOS, or Linux).",
              "During installation, make sure to check the box that adds Python to your PATH environment variable. This allows you to run Python from the command line."
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Verifying the Installation"
          },
          {
            "type": "paragraph",
            "text": "After installation, open your command prompt or terminal and type the following command to check if Python is installed correctly:"
          },
          {
            "type": "code",
            "language": "bash",
            "code": "python --version"
          },
          {
            "type": "paragraph",
            "text": "You should see the Python version number printed in the console (e.g., Python 3.x.x)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Choosing an IDE (Integrated Development Environment)"
          },
          {
            "type": "paragraph",
            "text": "An IDE provides a user-friendly environment for writing and running code. Popular choices include:"
          },
          {
            "type": "list",
            "items": [
              "VS Code (with Python extension)",
              "PyCharm (Community Edition is free)",
              "Sublime Text (with Python packages)"
            ]
          },
          {
            "type": "paragraph",
            "text": "Install your preferred IDE and configure it to use the Python interpreter you just installed."
          }
        ]
      },
      {
        "name": "Your First Python Program",
        "desc": "Write and run your first Python program: \"Hello, World!\"",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "The 'Hello, World!' Program"
          },
          {
            "type": "paragraph",
            "text": "The 'Hello, World!' program is a classic introductory program that prints the message 'Hello, World!' to the console."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Writing the Code"
          },
          {
            "type": "paragraph",
            "text": "Open your text editor or IDE and create a new file.  Type the following code:"
          },
          {
            "type": "code",
            "language": "python",
            "code": "print(\"Hello, World!\")"
          },
          {
            "type": "paragraph",
            "text": "Save the file with a `.py` extension (e.g., `hello.py`)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Running the Code"
          },
          {
            "type": "paragraph",
            "text": "Open your command prompt or terminal, navigate to the directory where you saved `hello.py`, and run the following command:"
          },
          {
            "type": "code",
            "language": "bash",
            "code": "python hello.py"
          },
          {
            "type": "paragraph",
            "text": "You should see the output 'Hello, World!' printed on the console."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Explanation"
          },
          {
            "type": "paragraph",
            "text": "The `print()` function is a built-in function in Python that displays output to the console.  The text within the parentheses is what gets printed."
          },
          {
            "type": "blockquote",
            "text": "Congratulations! You've written and executed your first Python program."
          }
        ]
      }
    ]
  },
  {
    "name": "Basic Syntax and Data Types",
    "desc": "Learn about Python's basic syntax, variables, data types, and operators.",
    "modules": [
      {
        "name": "Python Syntax",
        "desc": "Understand the fundamental rules of Python syntax.",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "Python's Clean Syntax"
          },
          {
            "type": "paragraph",
            "text": "Python is known for its clear and readable syntax, which emphasizes code readability.  Let's explore some key elements:"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Indentation"
          },
          {
            "type": "paragraph",
            "text": "Indentation is crucial in Python. Unlike many other languages that use curly braces `{}` or keywords (e.g. `begin` and `end`) to define code blocks, Python uses indentation. This enhances readability."
          },
          {
            "type": "code",
            "language": "python",
            "code": "if x > 10:\n    print(\"x is greater than 10\")  # Indented block\n    print(\"This line is also part of the if block\")\nprint(\"This line is outside the if block\") # Not indented"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Comments"
          },
          {
            "type": "paragraph",
            "text": "Comments are used to explain code and are ignored by the Python interpreter. Single-line comments start with a `#`.  Multi-line comments (docstrings) are enclosed in triple quotes `\"\"\"` or `'''`."
          },
          {
            "type": "code",
            "language": "python",
            "code": "# This is a single-line comment\n\n\"\"\"\nThis is a multi-line comment.\nIt can span multiple lines.\n\"\"\"\n\nprint(\"Hello\")  # This is another comment"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Statements"
          },
          {
            "type": "paragraph",
            "text": "Python statements are instructions that the Python interpreter executes. They often involve keywords, expressions, and operators. Each statement typically appears on a new line."
          },
          {
            "type": "code",
            "language": "python",
            "code": "x = 10  # Assignment statement\nprint(x)  # Function call statement"
          }
        ]
      },
      {
        "name": "Variables and Data Types",
        "desc": "Understand variables, data types, and how to work with different kinds of data in Python.",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "Variables"
          },
          {
            "type": "paragraph",
            "text": "Variables are used to store data in your program. They are essentially named storage locations."
          },
          {
            "type": "code",
            "language": "python",
            "code": "name = \"Alice\"  # String variable\nage = 30         # Integer variable\nheight = 5.8     # Float variable"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Data Types"
          },
          {
            "type": "paragraph",
            "text": "Data types define the kind of values a variable can hold. Python has several built-in data types:"
          },
          {
            "type": "list",
            "items": [
              "Integers (`int`): Whole numbers (e.g., 10, -5).",
              "Floating-point numbers (`float`): Numbers with decimal points (e.g., 3.14, -2.5).",
              "Strings (`str`): Sequences of characters (e.g., \"Hello\", 'World').",
              "Booleans (`bool`): Represents truth values (e.g., `True`, `False`)."
            ]
          },
          {
            "type": "code",
            "language": "python",
            "code": "x = 10\nprint(type(x))  # Output: <class 'int'>\n\ny = \"Hello\"\nprint(type(y))  # Output: <class 'str'>"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Type Conversion"
          },
          {
            "type": "paragraph",
            "text": "You can convert data from one type to another using built-in functions."
          },
          {
            "type": "code",
            "language": "python",
            "code": "num_str = \"10\"\nnum_int = int(num_str)  # Convert string to integer\nprint(type(num_int))  # Output: <class 'int'>\n\nnum_float = float(num_int) # Convert integer to float"
          }
        ]
      },
      {
        "name": "Operators and Expressions",
        "desc": "Explore different types of operators and how to build expressions in Python.",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "Operators"
          },
          {
            "type": "paragraph",
            "text": "Operators are symbols that perform operations on values or variables."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Arithmetic Operators"
          },
          {
            "type": "paragraph",
            "text": "Used for mathematical calculations."
          },
          {
            "type": "list",
            "items": [
              "+ (Addition)",
              "- (Subtraction)",
              "* (Multiplication)",
              "/ (Division)",
              "// (Floor division - integer division)",
              "% (Modulo - remainder)",
              "** (Exponentiation)"
            ]
          },
          {
            "type": "code",
            "language": "python",
            "code": "x = 10\ny = 3\nprint(x + y)    # Output: 13\nprint(x % y)    # Output: 1\nprint(x ** y)   # Output: 1000"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Comparison Operators"
          },
          {
            "type": "paragraph",
            "text": "Used to compare values and return a boolean value (`True` or `False`)."
          },
          {
            "type": "list",
            "items": [
              "== (Equal to)",
              "!= (Not equal to)",
              "> (Greater than)",
              "< (Less than)",
              ">= (Greater than or equal to)",
              "<= (Less than or equal to)"
            ]
          },
          {
            "type": "code",
            "language": "python",
            "code": "a = 5\nb = 10\nprint(a < b)  # Output: True\nprint(a == b) # Output: False"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Logical Operators"
          },
          {
            "type": "paragraph",
            "text": "Used to combine or modify boolean expressions."
          },
          {
            "type": "list",
            "items": [
              "and (Returns True if both operands are true)",
              "or (Returns True if at least one operand is true)",
              "not (Reverses the boolean value)"
            ]
          },
          {
            "type": "code",
            "language": "python",
            "code": "x = True\ny = False\nprint(x and y)   # Output: False\nprint(x or y)    # Output: True\nprint(not x)     # Output: False"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Expressions"
          },
          {
            "type": "paragraph",
            "text": "Expressions are combinations of values, variables, operators, and function calls that evaluate to a single value."
          },
          {
            "type": "code",
            "language": "python",
            "code": "result = (10 + 5) * 2  # The parentheses determine order of operations.\nprint(result) # Output: 30"
          }
        ]
      }
    ]
  },
  {
    "name": "Control Flow",
    "desc": "Learn about conditional statements and loops, essential for controlling the flow of execution in your programs.",
    "modules": [
      {
        "name": "Conditional Statements: if, elif, else",
        "desc": "Master conditional statements and branching logic.",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "Introduction to Conditional Statements"
          },
          {
            "type": "paragraph",
            "text": "Conditional statements allow your program to make decisions based on certain conditions.  They are fundamental for creating dynamic and responsive programs."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "The `if` Statement"
          },
          {
            "type": "paragraph",
            "text": "The `if` statement executes a block of code only if a specified condition is true."
          },
          {
            "type": "code",
            "language": "python",
            "code": "age = 18\nif age >= 18:\n  print(\"You are an adult.\")"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "The `elif` Statement"
          },
          {
            "type": "paragraph",
            "text": "The `elif` (else if) statement checks another condition if the preceding `if` condition is false. You can use multiple `elif` statements."
          },
          {
            "type": "code",
            "language": "python",
            "code": "score = 75\nif score >= 90:\n  print(\"Grade: A\")\nelif score >= 80:\n  print(\"Grade: B\")\nelif score >= 70:\n  print(\"Grade: C\")"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "The `else` Statement"
          },
          {
            "type": "paragraph",
            "text": "The `else` statement executes a block of code if none of the preceding `if` or `elif` conditions are true."
          },
          {
            "type": "code",
            "language": "python",
            "code": "number = 7\nif number % 2 == 0:\n  print(\"Even\")\nelse:\n  print(\"Odd\")"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Nested `if` Statements"
          },
          {
            "type": "paragraph",
            "text": "You can nest `if` statements within other `if`, `elif`, or `else` statements to create more complex decision-making logic."
          },
          {
            "type": "code",
            "language": "python",
            "code": "if age >= 18:\n  print(\"You are an adult.\")\n  if has_license:\n    print(\"You can drive.\")\n  else:\n    print(\"You cannot drive.\")\nelse:\n  print(\"You are a minor.\")"
          }
        ]
      },
      {
        "name": "Loops: for and while",
        "desc": "Learn to use loops to iterate over sequences or repeat code blocks.",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "Introduction to Loops"
          },
          {
            "type": "paragraph",
            "text": "Loops are used to execute a block of code multiple times. Python provides two main types of loops: `for` loops and `while` loops."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "The `for` Loop"
          },
          {
            "type": "paragraph",
            "text": "The `for` loop is used to iterate over a sequence (e.g., a list, tuple, string, or range). It's often used when you know in advance how many times you need to repeat a process."
          },
          {
            "type": "code",
            "language": "python",
            "code": "fruits = [\"apple\", \"banana\", \"cherry\"]\nfor fruit in fruits:\n  print(fruit)"
          },
          {
            "type": "paragraph",
            "text": "You can use the `range()` function to create a sequence of numbers."
          },
          {
            "type": "code",
            "language": "python",
            "code": "for i in range(5):\n  print(i)  # Output: 0 1 2 3 4"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "The `while` Loop"
          },
          {
            "type": "paragraph",
            "text": "The `while` loop executes a block of code as long as a specified condition is true. It's ideal for situations where you don't know in advance how many times you'll need to loop."
          },
          {
            "type": "code",
            "language": "python",
            "code": "count = 0\nwhile count < 3:\n  print(count)\n  count += 1"
          },
          {
            "type": "paragraph",
            "text": "Be careful to avoid infinite loops. Ensure the condition eventually becomes false, or use loop control statements (`break`) to exit the loop."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Looping with `else`"
          },
            {
            "type": "paragraph",
            "text": "Loops can also have an `else` block. The `else` block executes after the loop finishes normally (i.e., without a `break`)."
          },
          {
            "type": "code",
            "language": "python",
            "code": "for i in range(3):\n    print(i)\nelse:\n    print(\"Loop finished normally\")"
          }
        ]
      },
      {
        "name": "Loop Control Statements",
        "desc": "Learn how to control the flow within loops using `break` and `continue`.",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "Loop Control Statements"
          },
          {
            "type": "paragraph",
            "text": "Loop control statements allow you to modify the behavior of loops."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "The `break` Statement"
          },
          {
            "type": "paragraph",
            "text": "The `break` statement immediately terminates the loop, and the program continues execution at the statement immediately following the loop."
          },
          {
            "type": "code",
            "language": "python",
            "code": "for i in range(10):\n  if i == 5:\n    break\n  print(i)  # Output: 0 1 2 3 4"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "The `continue` Statement"
          },
          {
            "type": "paragraph",
            "text": "The `continue` statement skips the rest of the current iteration and proceeds to the next iteration of the loop. It allows you to skip certain iterations based on a condition."
          },
          {
            "type": "code",
            "language": "python",
            "code": "for i in range(5):\n  if i == 2:\n    continue\n  print(i)  # Output: 0 1 3 4"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Example: Searching in a List"
          },
          {
            "type": "paragraph",
            "text": "Let's search for an item in a list and use `break` to exit the loop once the item is found."
          },
          {
            "type": "code",
            "language": "python",
            "code": "numbers = [1, 2, 3, 4, 5]\nsearch_value = 3\nfound = False\n\nfor number in numbers:\n  if number == search_value:\n    print(\"Found!\")\n    found = True\n    break\n\nif not found:\n  print(\"Not found\")"
          }
        ]
      }
    ]
  },
  {
    "name": "Data Structures",
    "desc": "Explore lists, tuples, dictionaries, and sets – essential data structures for organizing and manipulating data in Python.",
    "modules": [
      {
        "name": "Lists",
        "desc": "Learn about lists: their creation, manipulation, and common operations.",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "Introduction to Lists"
          },
          {
            "type": "paragraph",
            "text": "Lists are ordered, mutable sequences of items.  They are one of the most versatile data structures in Python, allowing you to store collections of various data types."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Creating Lists"
          },
          {
            "type": "paragraph",
            "text": "Lists are created using square brackets `[]`."
          },
          {
            "type": "code",
            "language": "python",
            "code": "my_list = [1, 2, 3, \"apple\", \"banana\"]"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Accessing List Elements"
          },
          {
            "type": "paragraph",
            "text": "You access elements in a list using their index (position), starting from 0."
          },
          {
            "type": "code",
            "language": "python",
            "code": "print(my_list[0])  # Output: 1\nprint(my_list[3])  # Output: apple"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "List Operations"
          },
          {
            "type": "paragraph",
            "text": "Lists support various operations:"
          },
          {
            "type": "list",
            "items": [
              "Adding elements: `append()`, `insert()`, `extend()`",
              "Removing elements: `remove()`, `pop()`, `del`",
              "Slicing: Extracting a portion of the list using indices",
              "Sorting: `sort()` (in-place) and `sorted()` (returns a new sorted list)",
              "List comprehensions: Concise way to create lists based on existing ones (covered in a later module)."
            ]
          },
          {
            "type": "code",
            "language": "python",
            "code": "my_list.append(4)  # Add element to the end\nmy_list.insert(1, \"orange\") # Insert at index 1\nprint(my_list)\nmy_list.remove(\"apple\")  # Remove by value\nprint(my_list)\nprint(my_list[1:3])  # Slicing"
          }
        ]
      },
      {
        "name": "Tuples and Sets",
        "desc": "Discover tuples (immutable sequences) and sets (unordered collections of unique elements).",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "Tuples"
          },
          {
            "type": "paragraph",
            "text": "Tuples are similar to lists, but they are immutable, meaning their elements cannot be changed after creation. Tuples are defined using parentheses `()`."
          },
          {
            "type": "code",
            "language": "python",
            "code": "my_tuple = (1, 2, 3, \"apple\")\nprint(my_tuple[0]) # Accessing elements by index\n# my_tuple[0] = 4  # This would raise an error because tuples are immutable."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Advantages of Tuples"
          },
          {
            "type": "list",
            "items": [
              "Immutability provides data integrity (prevents accidental modification).",
              "More efficient than lists in terms of memory usage and speed, especially for large datasets.",
              "Can be used as keys in dictionaries (lists cannot be used as dictionary keys because they are mutable)."
            ]
          },
          {
            "type": "heading",
            "level": 2,
            "text": "Sets"
          },
          {
            "type": "paragraph",
            "text": "Sets are unordered collections of unique items. They are defined using curly braces `{}` (or the `set()` constructor).  Sets are useful for removing duplicates and performing mathematical set operations."
          },
          {
            "type": "code",
            "language": "python",
            "code": "my_set = {1, 2, 3, 3, 4}\nprint(my_set) # Output: {1, 2, 3, 4} (duplicates are automatically removed)\nmy_set.add(5)  # Adding an element\nprint(my_set)\nmy_set.remove(2) # Removing an element"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Set Operations"
          },
          {
            "type": "paragraph",
            "text": "Sets support various operations:"
          },
          {
            "type": "list",
            "items": [
              "Union: `set1 | set2` (or `set1.union(set2)`) - Returns all elements from both sets.",
              "Intersection: `set1 & set2` (or `set1.intersection(set2)`) - Returns elements common to both sets.",
              "Difference: `set1 - set2` (or `set1.difference(set2)`) - Returns elements in set1 but not in set2.",
              "Symmetric difference: `set1 ^ set2` (or `set1.symmetric_difference(set2)`) - Returns elements in either set1 or set2, but not both."
            ]
          },
          {
            "type": "code",
            "language": "python",
            "code": "set1 = {1, 2, 3}\nset2 = {3, 4, 5}\nprint(set1 | set2)       # Output: {1, 2, 3, 4, 5}\nprint(set1 & set2)       # Output: {3}\nprint(set1 - set2)       # Output: {1, 2}\nprint(set1 ^ set2)       # Output: {1, 2, 4, 5}"
          }
        ]
      },
      {
        "name": "Dictionaries",
        "desc": "Explore dictionaries: key-value pairs and their usage.",
        "content": [
          {
            "type": "heading",
            "level": 2,
            "text": "Dictionaries"
          },
          {
            "type": "paragraph",
            "text": "Dictionaries are unordered collections of key-value pairs.  They are highly versatile and allow you to store and retrieve data efficiently using a unique key to access the associated value."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Creating Dictionaries"
          },
          {
            "type": "paragraph",
            "text": "Dictionaries are created using curly braces `{}`. Each item in a dictionary is a key-value pair, separated by a colon `:`.  Key-value pairs are separated by commas."
          },
          {
            "type": "code",
            "language": "python",
            "code": "my_dict = {\"name\": \"Alice\", \"age\": 30, \"city\": \"New York\"}"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Accessing Dictionary Values"
          },
          {
            "type": "paragraph",
            "text": "You access values in a dictionary using their keys within square brackets `[]`."
          },
          {
            "type": "code",
            "language": "python",
            "code": "print(my_dict[\"name\"])  # Output: Alice\nprint(my_dict[\"age\"])   # Output: 30"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Dictionary Operations"
          },
          {
            "type": "paragraph",
            "text": "Dictionaries support several operations:"
          },
          {
            "type": "list",
            "items": [
              "Adding or updating key-value pairs: `my_dict[\"key\"] = value`",
              "Removing key-value pairs: `del my_dict[\"key\"]`, `pop()`",
              "Getting all keys: `my_dict.keys()`",
              "Getting all values: `my_dict.values()`",
              "Checking if a key exists: `\"key\" in my_dict`"
            ]
          },
          {
            "type": "code",
            "language": "python",
            "code": "my_dict[\"occupation\"] = \"Engineer\"  # Adding a new key-value pair\nprint(my_dict)\n\nmy_dict[\"age\"] = 31  # Updating existing key-value pair\nprint(my_dict)\n\ndel my_dict[\"city\"]\nprint(my_dict)\n\nprint(\"name\" in my_dict) # Output: True"
          }
        ]
      }
    ]
  }]

export default Coursedata