/* Unit 11: beginner steps, in order. */
const UNIT11_LESSONS = [
  {
    "id": "l86",
    "title": "Import a toolbox",
    "icon": "\ud83e\uddf0",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Import a toolbox",
        "body": "A module is reusable Python code grouped under a name. import makes a module available to your program. The standard library includes modules supplied with Python; no package installation is needed for these lessons.",
        "code": "import math\nprint(math.sqrt(9))",
        "out": "3.0"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "import math loads the math module. math.sqrt(9) calls its square-root function: a square root multiplied by itself gives the original value. The dot selects a tool from the module.",
        "code": "import math\nprint(math.sqrt(9))",
        "out": "3.0"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "import math\nprint(math.sqrt(9))",
        "expect": "3.0"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Import before using the name. math.sqrt is the function; math.sqrt(...) calls it. sqrt needs a nonnegative number in this real-number example. Not every third-party package is included in this app.",
        "code": "import math\nprint(math.sqrt(9))",
        "out": "3.0"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does import math make available?",
        "options": [
          "The math module",
          "A phone calculator app",
          "Every package on the internet"
        ],
        "answer": 0,
        "why": "It makes the standard-library math module available under its name."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "import ",
        "post": "\nprint(math.sqrt(9))",
        "options": [
          "math",
          "\"math\"",
          "sqrt()"
        ],
        "answer": "math",
        "why": "It makes the standard-library math module available under its name."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Import math and print math.sqrt applied to any positive numeric literal.",
        "starter": "",
        "hint": "import math\nprint(math.sqrt(9))",
        "solution": "import math\nprint(math.sqrt(9))",
        "rule": "module_import"
      }
    ]
  },
  {
    "id": "l87",
    "title": "Round up with ceil",
    "icon": "\u2b06\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Round up with ceil",
        "body": "math.ceil returns the smallest integer that is not below a number. For a positive partial amount, it rounds upward. This helps when you need enough whole containers.",
        "code": "import math\nitems = 7\ncapacity = 3\nprint(math.ceil(items / capacity))",
        "out": "3"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "math.ceil(7 / 3) gives 3: two containers of capacity 3 cannot hold 7 items, so you need three. Division happens before ceil receives its result.",
        "code": "import math\nitems = 7\ncapacity = 3\nprint(math.ceil(items / capacity))",
        "out": "3"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "import math\nitems = 7\ncapacity = 3\nprint(math.ceil(items / capacity))",
        "expect": "3"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "ceil is not normal rounding to the nearest number. It always chooses the integer at or above the value: ceil(2.1) is 3. Keep capacity positive so division is meaningful.",
        "code": "import math\nitems = 7\ncapacity = 3\nprint(math.ceil(items / capacity))",
        "out": "3"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is math.ceil(2.1)?",
        "options": [
          "2",
          "3",
          "2.1"
        ],
        "answer": 1,
        "why": "The smallest integer not below 2.1 is 3."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(math.",
        "post": "(items / capacity))",
        "options": [
          "ceil",
          "sqrt",
          "int"
        ],
        "answer": "ceil",
        "why": "The smallest integer not below 2.1 is 3."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Import math, store a positive item count and a positive capacity, and print math.ceil(items / capacity) using your two variables.",
        "starter": "",
        "hint": "import math\nitems = 7\ncapacity = 3\nprint(math.ceil(items / capacity))",
        "solution": "import math\nitems = 7\ncapacity = 3\nprint(math.ceil(items / capacity))",
        "rule": "module_ceil"
      }
    ]
  },
  {
    "id": "l88",
    "title": "Import one tool by name",
    "icon": "\ud83d\udce5",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Import one tool by name",
        "body": "from module import tool brings one named tool into your program directly. Then call that tool without the module prefix. This is another import style, not another kind of function.",
        "code": "from math import sqrt\nprint(sqrt(16))",
        "out": "4.0"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "from math import sqrt makes sqrt available as a name. sqrt(16) calls it directly. This form alone does not create a math name in your program.",
        "code": "from math import sqrt\nprint(sqrt(16))",
        "out": "4.0"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "from math import sqrt\nprint(sqrt(16))",
        "expect": "4.0"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Avoid import *: it fills your program with names you did not choose. A clear explicit import makes it easier to see where a tool came from. Do not write math.sqrt unless you also imported math.",
        "code": "from math import sqrt\nprint(sqrt(16))",
        "out": "4.0"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "After from math import sqrt, which call works directly?",
        "options": [
          "sqrt(16)",
          "math(16)",
          "from.sqrt(16)"
        ],
        "answer": 0,
        "why": "The imported function is available under the name sqrt."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "from math import ",
        "post": "\nprint(sqrt(16))",
        "options": [
          "sqrt",
          "\"sqrt\"",
          "sqrt()"
        ],
        "answer": "sqrt",
        "why": "The imported function is available under the name sqrt."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Use from math import sqrt, then print sqrt applied to a positive numeric literal without a math prefix.",
        "starter": "",
        "hint": "from math import sqrt\nprint(sqrt(16))",
        "solution": "from math import sqrt\nprint(sqrt(16))",
        "rule": "module_from"
      }
    ]
  },
  {
    "id": "l89",
    "title": "Give a module a nickname",
    "icon": "\ud83c\udff7\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Give a module a nickname",
        "body": "as assigns an alias, a different local name for an imported module. The module itself does not change. A short alias can help when used clearly and consistently.",
        "code": "import math as maths\nprint(maths.sqrt(25))",
        "out": "5.0"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "import math as maths makes maths the local name. Call maths.sqrt(25). The original name math is not added by that statement.",
        "code": "import math as maths\nprint(maths.sqrt(25))",
        "out": "5.0"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "import math as maths\nprint(maths.sqrt(25))",
        "expect": "5.0"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Use the alias in later calls. Importing as maths and calling math.sqrt will fail in a fresh program. Aliases are optional; choose clarity rather than the shortest spelling.",
        "code": "import math as maths\nprint(maths.sqrt(25))",
        "out": "5.0"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "In this program, which name points to the module?",
        "options": [
          "maths",
          "as",
          "sqrt"
        ],
        "answer": 0,
        "why": "The as clause chooses maths as the program's module name."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "import math ",
        "post": " maths",
        "options": [
          "as",
          "in",
          "is"
        ],
        "answer": "as",
        "why": "The as clause chooses maths as the program's module name."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Import math with your own alias. Print the aliased module's sqrt of a positive numeric literal.",
        "starter": "",
        "hint": "import math as maths\nprint(maths.sqrt(25))",
        "solution": "import math as maths\nprint(maths.sqrt(25))",
        "rule": "module_alias"
      }
    ]
  },
  {
    "id": "l90",
    "title": "Turn records into JSON text",
    "icon": "\ud83d\udce6",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Turn records into JSON text",
        "body": "JSON is a text format for exchanging simple data. json.dumps converts a Python value such as your list of records into JSON text. This is called serialization: turning data into text that can be stored or passed on.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nprint(text)",
        "out": "[{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "import json loads the standard-library JSON module. text = json.dumps(books) returns a string, not a file. JSON text uses double quotes around field names and string values.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nprint(text)",
        "out": "[{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nprint(text)",
        "expect": "[{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "dumps has an s for a string result. It does not save to storage. We will write the returned text into a practice file later. Avoid manually assembling JSON with quotes.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nprint(text)",
        "out": "[{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does json.dumps return?",
        "options": [
          "A text string",
          "A permanently saved file",
          "A screenshot"
        ],
        "answer": 0,
        "why": "dumps returns JSON text representing the value you gave it."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "text = json.",
        "post": "(books)",
        "options": [
          "dumps",
          "loads",
          "print"
        ],
        "answer": "dumps",
        "why": "dumps returns JSON text representing the value you gave it."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Import json, create at least two valid book records, convert the list with json.dumps, store the returned string and print it.",
        "starter": "",
        "hint": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nprint(text)",
        "solution": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nprint(text)",
        "rule": "module_dumps"
      }
    ]
  },
  {
    "id": "l91",
    "title": "Get records back from JSON",
    "icon": "\ud83d\udd13",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Get records back from JSON",
        "body": "json.loads reads JSON text and reconstructs the corresponding Python data. A list of records can make a round trip: Python list to JSON string and back to a Python list.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nrestored = json.loads(text)\nprint(restored[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "restored = json.loads(text) reads the string made by dumps. Now restored[0][\"title\"] works as before. loads reads a string, not a filename.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nrestored = json.loads(text)\nprint(restored[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nrestored = json.loads(text)\nprint(restored[0][\"title\"])",
        "expect": "Sky"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Invalid JSON raises json.JSONDecodeError. Valid JSON is not necessarily valid book data: it could contain a number or records missing fields. These exercises decode their own known records, not untrusted imported data.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nrestored = json.loads(text)\nprint(restored[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is restored after this round trip?",
        "options": [
          "A list of dictionaries",
          "Always a string",
          "A filename"
        ],
        "answer": 0,
        "why": "loads reconstructs the list and dictionaries represented by the JSON string."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "restored = json.",
        "post": "(text)",
        "options": [
          "loads",
          "dumps",
          "read"
        ],
        "answer": "loads",
        "why": "loads reconstructs the list and dictionaries represented by the JSON string."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Import json. Make at least two book records, serialize them with dumps, decode that text with loads, and print the first restored record's title.",
        "starter": "",
        "hint": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nrestored = json.loads(text)\nprint(restored[0][\"title\"])",
        "solution": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntext = json.dumps(books)\nrestored = json.loads(text)\nprint(restored[0][\"title\"])",
        "rule": "module_loads"
      }
    ]
  }
];
