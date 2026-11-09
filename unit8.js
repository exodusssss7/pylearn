/* Unit 8: beginner steps, in order. */
const UNIT8_LESSONS = [
  {
    "id": "l65",
    "title": "Catch a conversion error",
    "icon": "\ud83d\udedf",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Catch a conversion error",
        "body": "An exception is a problem raised while code runs. int(\"hello\") raises ValueError. try/except lets you handle that specific problem with a useful message instead of stopping the program.",
        "code": "try:\n    number = int(\"hello\")\n    print(number)\nexcept ValueError:\n    print(\"Use whole-number text\")",
        "out": "Use whole-number text"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Put the risky conversion inside try:. Line up except ValueError: with try, and indent its recovery message. If ValueError occurs, Python skips the rest of try and runs that except block.",
        "code": "try:\n    number = int(\"hello\")\n    print(number)\nexcept ValueError:\n    print(\"Use whole-number text\")",
        "out": "Use whole-number text"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "try:\n    number = int(\"hello\")\n    print(number)\nexcept ValueError:\n    print(\"Use whole-number text\")",
        "expect": "Use whole-number text"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "ValueError has capital V and E. Catch the error you expect, not every possible error with a bare except. try cannot repair invalid Python syntax in the same program, such as a missing colon: the program must be parsed before it runs.",
        "code": "try:\n    number = int(\"hello\")\n    print(number)\nexcept ValueError:\n    print(\"Use whole-number text\")",
        "out": "Use whole-number text"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which error does int(\"hello\") raise?",
        "options": [
          "ValueError",
          "FileNotFoundError",
          "No error"
        ],
        "answer": 0,
        "why": "The string is not valid whole-number text, so the conversion raises ValueError."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "except ",
        "post": ":\n    print(\"Try digits\")",
        "options": [
          "ValueError",
          "\"ValueError\"",
          "valueerror"
        ],
        "answer": "ValueError",
        "why": "The string is not valid whole-number text, so the conversion raises ValueError."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Use try to convert invalid whole-number text with int and print the number. Add except ValueError with a helpful printed message.",
        "starter": "",
        "hint": "try:\n    number = int(\"hello\")\n    print(number)\nexcept ValueError:\n    print(\"Use whole-number text\")",
        "solution": "try:\n    number = int(\"hello\")\n    print(number)\nexcept ValueError:\n    print(\"Use whole-number text\")",
        "rule": "error_value"
      }
    ]
  },
  {
    "id": "l66",
    "title": "Keep going after recovery",
    "icon": "\ud83d\udeb6",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Keep going after recovery",
        "body": "A handled exception does not have to end the program. After try/except finishes, Python continues at the next statement outside it, whether try succeeded or the error was handled.",
        "code": "try:\n    number = int(\"oops\")\n    print(number)\nexcept ValueError:\n    print(\"Not a whole number\")\nprint(\"Finished checking\")",
        "out": "Not a whole number\nFinished checking"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The final print is at the left edge, outside both blocks. A line after the failing conversion INSIDE try would be skipped. A line after the whole try/except still runs.",
        "code": "try:\n    number = int(\"oops\")\n    print(number)\nexcept ValueError:\n    print(\"Not a whole number\")\nprint(\"Finished checking\")",
        "out": "Not a whole number\nFinished checking"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "try:\n    number = int(\"oops\")\n    print(number)\nexcept ValueError:\n    print(\"Not a whole number\")\nprint(\"Finished checking\")",
        "expect": "Not a whole number\nFinished checking"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Do not use number after a failed conversion unless you gave it a value another way. The assignment never completed. This example prints a separate message, not an undefined number.",
        "code": "try:\n    number = int(\"oops\")\n    print(number)\nexcept ValueError:\n    print(\"Not a whole number\")\nprint(\"Finished checking\")",
        "out": "Not a whole number\nFinished checking"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which line still runs after recovery?",
        "options": [
          "The final print outside try/except",
          "The failed assignment again",
          "Every skipped line in try"
        ],
        "answer": 0,
        "why": "Control continues after the whole try/except. It does not retry or resume the failed block."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(",
        "post": ")",
        "options": [
          "\"Finished checking\"",
          "number",
          "ValueError"
        ],
        "answer": "\"Finished checking\"",
        "why": "Control continues after the whole try/except. It does not retry or resume the failed block."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Catch ValueError from int on invalid text, print a recovery message, then print a different message outside try/except.",
        "starter": "",
        "hint": "try:\n    number = int(\"oops\")\n    print(number)\nexcept ValueError:\n    print(\"Not a whole number\")\nprint(\"Finished checking\")",
        "solution": "try:\n    number = int(\"oops\")\n    print(number)\nexcept ValueError:\n    print(\"Not a whole number\")\nprint(\"Finished checking\")",
        "rule": "error_continue"
      }
    ]
  },
  {
    "id": "l67",
    "title": "Only on success: else",
    "icon": "\u2705",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Only on success: else",
        "body": "try/except can also have else. Its block runs only when the try block finishes without an exception. Use it for work that needs a successfully converted value.",
        "code": "try:\n    number = int(\"4\")\nexcept ValueError:\n    print(\"Not a whole number\")\nelse:\n    print(number + 1)",
        "out": "5"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Line up else: with try and except. Convert in try, handle invalid text in except, and use the valid number in else. This example succeeds.",
        "code": "try:\n    number = int(\"4\")\nexcept ValueError:\n    print(\"Not a whole number\")\nelse:\n    print(number + 1)",
        "out": "5"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "try:\n    number = int(\"4\")\nexcept ValueError:\n    print(\"Not a whole number\")\nelse:\n    print(number + 1)",
        "expect": "5"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "This else belongs to try, not if. If conversion fails, else is skipped. Errors raised inside else are not caught by the preceding except for that try. Keep the risky conversion in try.",
        "code": "try:\n    number = int(\"4\")\nexcept ValueError:\n    print(\"Not a whole number\")\nelse:\n    print(number + 1)",
        "out": "5"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "When does this else run?",
        "options": [
          "After every except",
          "When try finishes without an exception",
          "Only when conversion fails"
        ],
        "answer": 1,
        "why": "The success block runs only if the try block raised no exception."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "else",
        "post": "\n    print(number + 1)",
        "options": [
          ":",
          ";",
          "()"
        ],
        "answer": ":",
        "why": "The success block runs only if the try block raised no exception."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Convert valid whole-number text inside try. Handle ValueError with a message, and print the converted number plus 1 inside else.",
        "starter": "",
        "hint": "try:\n    number = int(\"4\")\nexcept ValueError:\n    print(\"Not a whole number\")\nelse:\n    print(number + 1)",
        "solution": "try:\n    number = int(\"4\")\nexcept ValueError:\n    print(\"Not a whole number\")\nelse:\n    print(number + 1)",
        "rule": "error_else"
      }
    ]
  },
  {
    "id": "l68",
    "title": "Cleanup with finally",
    "icon": "\ud83e\uddf9",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Cleanup with finally",
        "body": "finally is a block for work that must run when Python leaves try, whether it succeeded or raised an exception. It is often used for cleanup. Here a printed message makes the timing visible.",
        "code": "try:\n    number = int(\"bad\")\n    print(number)\nexcept ValueError:\n    print(\"Invalid number\")\nfinally:\n    print(\"Check ended\")",
        "out": "Invalid number\nCheck ended"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Line up finally: with try and except. This example handles ValueError, then runs finally. In ordinary execution, finally also runs before an unhandled exception continues outward.",
        "code": "try:\n    number = int(\"bad\")\n    print(number)\nexcept ValueError:\n    print(\"Invalid number\")\nfinally:\n    print(\"Check ended\")",
        "out": "Invalid number\nCheck ended"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "try:\n    number = int(\"bad\")\n    print(number)\nexcept ValueError:\n    print(\"Invalid number\")\nfinally:\n    print(\"Check ended\")",
        "expect": "Invalid number\nCheck ended"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "finally does not catch an error by itself. Use except for recovery. For closing a file, the with pattern you learned is usually simpler. A forced browser stop or killed worker is not normal Python cleanup.",
        "code": "try:\n    number = int(\"bad\")\n    print(number)\nexcept ValueError:\n    print(\"Invalid number\")\nfinally:\n    print(\"Check ended\")",
        "out": "Invalid number\nCheck ended"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is finally for?",
        "options": [
          "Changing text into a number",
          "Cleanup on leaving try",
          "Catching all errors automatically"
        ],
        "answer": 1,
        "why": "finally runs on leaving try; except handles a matching error."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "finally",
        "post": "\n    print(\"Check ended\")",
        "options": [
          ":",
          "=",
          "()"
        ],
        "answer": ":",
        "why": "finally runs on leaving try; except handles a matching error."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Use try with an invalid int conversion, except ValueError with a printed recovery, and finally with a printed cleanup message.",
        "starter": "",
        "hint": "try:\n    number = int(\"bad\")\n    print(number)\nexcept ValueError:\n    print(\"Invalid number\")\nfinally:\n    print(\"Check ended\")",
        "solution": "try:\n    number = int(\"bad\")\n    print(number)\nexcept ValueError:\n    print(\"Invalid number\")\nfinally:\n    print(\"Check ended\")",
        "rule": "error_finally"
      }
    ]
  },
  {
    "id": "l69",
    "title": "Handle a missing file",
    "icon": "\ud83d\udd0e",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Handle a missing file",
        "body": "Reading a nonexistent file raises FileNotFoundError. You can catch that exact error and explain what happened. In this app the practice workspace resets every Run, so this example starts with no saved.txt.",
        "code": "try:\n    with open(\"saved.txt\", \"r\") as saved:\n        text = saved.read()\n    print(text)\nexcept FileNotFoundError:\n    print(\"No saved note yet\")",
        "out": "No saved note yet"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Put with open(..., \"r\") inside try. Indent again for the file work. Align except FileNotFoundError: with try. Python skips the with body if opening the file fails.",
        "code": "try:\n    with open(\"saved.txt\", \"r\") as saved:\n        text = saved.read()\n    print(text)\nexcept FileNotFoundError:\n    print(\"No saved note yet\")",
        "out": "No saved note yet"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "try:\n    with open(\"saved.txt\", \"r\") as saved:\n        text = saved.read()\n    print(text)\nexcept FileNotFoundError:\n    print(\"No saved note yet\")",
        "expect": "No saved note yet"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "ValueError would not catch a missing-file error. Different problems have different exception types. The except message here does not create a file; it only handles the missing-file case.",
        "code": "try:\n    with open(\"saved.txt\", \"r\") as saved:\n        text = saved.read()\n    print(text)\nexcept FileNotFoundError:\n    print(\"No saved note yet\")",
        "out": "No saved note yet"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which exception matches a missing file opened in \"r\" mode?",
        "options": [
          "ValueError",
          "FileNotFoundError",
          "ZeroDivisionError"
        ],
        "answer": 1,
        "why": "FileNotFoundError names the missing path problem."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "except ",
        "post": ":\n    print(\"No saved note yet\")",
        "options": [
          "FileNotFoundError",
          "ValueError",
          "KeyError"
        ],
        "answer": "FileNotFoundError",
        "why": "FileNotFoundError names the missing path problem."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Try reading a missing practice filename in \"r\" mode and printing its content. Catch FileNotFoundError and print a helpful message. Do not create that file first.",
        "starter": "",
        "hint": "try:\n    with open(\"saved.txt\", \"r\") as saved:\n        text = saved.read()\n    print(text)\nexcept FileNotFoundError:\n    print(\"No saved note yet\")",
        "solution": "try:\n    with open(\"saved.txt\", \"r\") as saved:\n        text = saved.read()\n    print(text)\nexcept FileNotFoundError:\n    print(\"No saved note yet\")",
        "rule": "error_file"
      }
    ]
  },
  {
    "id": "l70",
    "title": "Handle different problems",
    "icon": "\ud83d\udea6",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Handle different problems",
        "body": "One try can have several except blocks. Python selects the first matching handler. Invalid numeric text and division by zero are different problems, so give each a clear message.",
        "code": "try:\n    people = int(input())\n    print(12 / people)\nexcept ValueError:\n    print(\"Use whole-number text\")\nexcept ZeroDivisionError:\n    print(\"Cannot share with zero people\")",
        "out": "Cannot share with zero people",
        "inputs": [
          "0"
        ]
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Convert input to int, then divide. ValueError handles invalid text. ZeroDivisionError handles a numeric zero divisor. Only one of those handlers runs for a given error.",
        "code": "try:\n    people = int(input())\n    print(12 / people)\nexcept ValueError:\n    print(\"Use whole-number text\")\nexcept ZeroDivisionError:\n    print(\"Cannot share with zero people\")",
        "out": "Cannot share with zero people",
        "inputs": [
          "0"
        ]
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "try:\n    people = int(input())\n    print(12 / people)\nexcept ValueError:\n    print(\"Use whole-number text\")\nexcept ZeroDivisionError:\n    print(\"Cannot share with zero people\")",
        "expect": "Cannot share with zero people",
        "inputs": [
          "0"
        ]
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "For this example the supplied answer is 0. Try hello for the other handler and 3 for success. Except blocks do not rerun input automatically. This example demonstrates errors, not full validation of positive group sizes.",
        "code": "try:\n    people = int(input())\n    print(12 / people)\nexcept ValueError:\n    print(\"Use whole-number text\")\nexcept ZeroDivisionError:\n    print(\"Cannot share with zero people\")",
        "out": "Cannot share with zero people",
        "inputs": [
          "0"
        ]
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which handler runs for the answer hello?",
        "options": [
          "ValueError",
          "ZeroDivisionError",
          "Both handlers"
        ],
        "answer": 0,
        "why": "int fails before division happens, so only ValueError is handled.",
        "inputs": [
          "0"
        ]
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "except ",
        "post": ":\n    print(\"Cannot divide by zero\")",
        "options": [
          "ZeroDivisionError",
          "ValueError",
          "FileNotFoundError"
        ],
        "answer": "ZeroDivisionError",
        "why": "int fails before division happens, so only ValueError is handled.",
        "inputs": [
          "0"
        ]
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Inside try, read int(input()) and print 12 divided by that number. Add separate except ValueError and except ZeroDivisionError blocks with helpful messages.",
        "starter": "",
        "hint": "try:\n    people = int(input())\n    print(12 / people)\nexcept ValueError:\n    print(\"Use whole-number text\")\nexcept ZeroDivisionError:\n    print(\"Cannot share with zero people\")",
        "solution": "try:\n    people = int(input())\n    print(12 / people)\nexcept ValueError:\n    print(\"Use whole-number text\")\nexcept ZeroDivisionError:\n    print(\"Cannot share with zero people\")",
        "rule": "error_multiple",
        "inputs": [
          "0"
        ]
      }
    ]
  },
  {
    "id": "l71",
    "title": "A safer number reader",
    "icon": "\ud83e\uddf0",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "A safer number reader",
        "body": "Combine input, conversion and success-only work. A good response depends on what happened: explain invalid text, or use the valid number. End with a message in either case.",
        "code": "try:\n    age = int(input(\"Whole-number age? \"))\nexcept ValueError:\n    print(\"Please use whole-number text\")\nelse:\n    print(\"Next birthday\", age + 1)\nfinally:\n    print(\"Check complete\")",
        "out": "Whole-number age? Next birthday 19\nCheck complete",
        "inputs": [
          "18"
        ]
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "try reads and converts. except ValueError handles invalid text. else uses the number only on success. finally shows that the check ended. This does not repeat automatically; run again to try another answer.",
        "code": "try:\n    age = int(input(\"Whole-number age? \"))\nexcept ValueError:\n    print(\"Please use whole-number text\")\nelse:\n    print(\"Next birthday\", age + 1)\nfinally:\n    print(\"Check complete\")",
        "out": "Whole-number age? Next birthday 19\nCheck complete",
        "inputs": [
          "18"
        ]
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "try:\n    age = int(input(\"Whole-number age? \"))\nexcept ValueError:\n    print(\"Please use whole-number text\")\nelse:\n    print(\"Next birthday\", age + 1)\nfinally:\n    print(\"Check complete\")",
        "expect": "Whole-number age? Next birthday 19\nCheck complete",
        "inputs": [
          "18"
        ]
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "For the example, supply 18. This handles conversion, not every rule about a real age: negative numbers still convert. Validating a value with if and handling a conversion error are different jobs.",
        "code": "try:\n    age = int(input(\"Whole-number age? \"))\nexcept ValueError:\n    print(\"Please use whole-number text\")\nelse:\n    print(\"Next birthday\", age + 1)\nfinally:\n    print(\"Check complete\")",
        "out": "Whole-number age? Next birthday 19\nCheck complete",
        "inputs": [
          "18"
        ]
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Where can you safely use age after conversion?",
        "options": [
          "In else, after try succeeds",
          "Always after a failed int call",
          "Inside the string \"age\""
        ],
        "answer": 0,
        "why": "The success-only else block knows the conversion completed.",
        "inputs": [
          "18"
        ]
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "else:\n    print(\"Next birthday\", age ",
        "post": " 1)",
        "options": [
          "+",
          "-",
          "/"
        ],
        "answer": "+",
        "why": "The success-only else block knows the conversion completed.",
        "inputs": [
          "18"
        ]
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Read int(input()) inside try. Catch ValueError with a message. In else print the converted number plus 1. Add finally with a completion message.",
        "starter": "",
        "hint": "try:\n    age = int(input(\"Whole-number age? \"))\nexcept ValueError:\n    print(\"Please use whole-number text\")\nelse:\n    print(\"Next birthday\", age + 1)\nfinally:\n    print(\"Check complete\")",
        "solution": "try:\n    age = int(input(\"Whole-number age? \"))\nexcept ValueError:\n    print(\"Please use whole-number text\")\nelse:\n    print(\"Next birthday\", age + 1)\nfinally:\n    print(\"Check complete\")",
        "rule": "error_project",
        "inputs": [
          "18"
        ]
      }
    ]
  }
];
