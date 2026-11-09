/* Unit 3: conditions and while loops. */
const UNIT3_LESSONS = [
  {
    "id": "l22",
    "title": "Update a variable",
    "icon": "\ud83d\udd04",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Update a variable",
        "body": "A variable can store a new value. Updating a score is like erasing a number on a scoreboard and writing a new one. The same name can hold the next value.",
        "code": "score = 2\nscore = score + 1\nprint(score)",
        "out": "3"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "In score = score + 1, Python first reads the old score on the right, adds 1, then stores the result in score on the left. This is assignment, not a maths equation.",
        "code": "score = 2\nscore = score + 1\nprint(score)",
        "out": "3"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "score = 2\nscore = score + 1\nprint(score)",
        "expect": "3"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Create the variable before reading it. score = score + 1 fails if score has not been given a value yet. Updating is not the same as printing score + 1: printing alone does not store the change.",
        "code": "score = 2\nscore = score + 1\nprint(score)",
        "out": "3"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "After score = 4 and score = score + 2, what is score?",
        "options": [
          "4",
          "2",
          "6"
        ],
        "answer": 2,
        "why": "Python calculates 4 + 2 first, then stores 6 under the same name."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "score = score ",
        "post": " 1",
        "options": [
          "+",
          "==",
          ":"
        ],
        "answer": "+",
        "why": "Python calculates 4 + 2 first, then stores 6 under the same name."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store a number in a variable. Update that variable by adding a positive number to its old value, then print the updated variable.",
        "starter": "",
        "hint": "score = 2\nscore = score + 1\nprint(score)",
        "solution": "score = 2\nscore = score + 1\nprint(score)",
        "rule": "update"
      }
    ]
  },
  {
    "id": "l23",
    "title": "Take away",
    "icon": "\u2796",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Take away",
        "body": "Subtraction takes an amount away. The minus sign - between two numbers subtracts the second number from the first, like using two tokens from a pile.",
        "code": "tokens = 8\ntokens = tokens - 2\nprint(tokens)",
        "out": "6"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "8 - 2 gives 6. In tokens = tokens - 2, Python subtracts from the old value and stores the answer. A minus before a single number, like -1, means a negative number.",
        "code": "tokens = 8\ntokens = tokens - 2\nprint(tokens)",
        "out": "6"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "tokens = 8\ntokens = tokens - 2\nprint(tokens)",
        "expect": "6"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Put numbers outside quotes for subtraction. \"8\" - \"2\" cannot subtract strings. Subtracting a larger number can give a negative answer: 2 - 5 is -3.",
        "code": "tokens = 8\ntokens = tokens - 2\nprint(tokens)",
        "out": "6"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does print(7 - 2) show?",
        "options": [
          "9",
          "5",
          "72"
        ],
        "answer": 1,
        "why": "Start at 7 and take away 2: the answer is 5."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(7 ",
        "post": " 2)",
        "options": [
          "-",
          "+",
          "="
        ],
        "answer": "-",
        "why": "Start at 7 and take away 2: the answer is 5."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Print a subtraction between any two numbers, using -.",
        "starter": "",
        "hint": "print(9 - 3)",
        "solution": "print(9 - 3)",
        "rule": "subtract"
      }
    ]
  },
  {
    "id": "l24",
    "title": "Equal or different",
    "icon": "\u2696\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Equal or different",
        "body": "A comparison asks a question and gives True or False. == asks whether two values are equal. != asks whether they are different, like checking whether two labels match.",
        "code": "score = 3\nprint(score == 3)\nprint(score != 3)",
        "out": "True\nFalse"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "== has two equals signs because one = stores a value. != is an exclamation mark followed by equals. Text comparison is case-sensitive: \"Hi\" and \"hi\" differ.",
        "code": "score = 3\nprint(score == 3)\nprint(score != 3)",
        "out": "True\nFalse"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "score = 3\nprint(score == 3)\nprint(score != 3)",
        "expect": "True\nFalse"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Use == to ask a question, not =. And compare the variable itself, not its quoted name: score is a value, while \"score\" is text.",
        "code": "score = 3\nprint(score == 3)\nprint(score != 3)",
        "out": "True\nFalse"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is \"cat\" == \"Cat\"?",
        "options": [
          "True",
          "False",
          "cat"
        ],
        "answer": 1,
        "why": "Capital C and lowercase c are different characters, so the two strings are not equal."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(4 ",
        "post": " 4)",
        "options": [
          "==",
          "=",
          ":"
        ],
        "answer": "==",
        "why": "Capital C and lowercase c are different characters, so the two strings are not equal."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Print one == comparison and one != comparison. Choose your own values.",
        "starter": "",
        "hint": "print(4 == 4)\nprint(\"cat\" != \"dog\")",
        "solution": "print(4 == 4)\nprint(\"cat\" != \"dog\")",
        "rule": "equality"
      }
    ]
  },
  {
    "id": "l25",
    "title": "Check a boundary",
    "icon": "\ud83d\udcd0",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Check a boundary",
        "body": "You know > means greater than. < means less than. Add = to include the boundary: <= means less than or equal to, and >= means greater than or equal to. Think of a height line someone may just reach.",
        "code": "print(2 < 3)\nprint(3 <= 3)\nprint(3 >= 3)",
        "out": "True\nTrue\nTrue"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The symbols stay together: <= and >=. For score >= 3, both 3 and anything greater pass. score > 3 does not include 3.",
        "code": "print(2 < 3)\nprint(3 <= 3)\nprint(3 >= 3)",
        "out": "True\nTrue\nTrue"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "print(2 < 3)\nprint(3 <= 3)\nprint(3 >= 3)",
        "expect": "True\nTrue\nTrue"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Write <=, not =<. A boundary changes the answer: 3 < 3 is False, but 3 <= 3 is True. Choose the symbol that matches whether equality should count.",
        "code": "print(2 < 3)\nprint(3 <= 3)\nprint(3 >= 3)",
        "out": "True\nTrue\nTrue"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is 5 <= 5?",
        "options": [
          "True",
          "False",
          "10"
        ],
        "answer": 0,
        "why": "<= includes equality, so 5 is less than or equal to 5."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(2 ",
        "post": " 3)",
        "options": [
          "<",
          "=<",
          "=>"
        ],
        "answer": "<",
        "why": "<= includes equality, so 5 is less than or equal to 5."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Print a < comparison, then a <= comparison, then a >= comparison. Choose your own numbers.",
        "starter": "",
        "hint": "print(2 < 3)\nprint(3 <= 3)\nprint(4 >= 3)",
        "solution": "print(2 < 3)\nprint(3 <= 3)\nprint(4 >= 3)",
        "rule": "boundaries"
      }
    ]
  },
  {
    "id": "l26",
    "title": "More than two choices",
    "icon": "\ud83d\udee4\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "More than two choices",
        "body": "elif means else if. It adds another condition after if, like choosing between small, medium and large boxes instead of just two choices.",
        "code": "score = 5\nif score > 7:\n    print(\"High\")\nelif score > 3:\n    print(\"Middle\")\nelse:\n    print(\"Low\")",
        "out": "Middle"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Line up if, elif and else. Each condition has a colon. Python takes the first matching branch, then skips the other branches. else handles anything left over.",
        "code": "score = 5\nif score > 7:\n    print(\"High\")\nelif score > 3:\n    print(\"Middle\")\nelse:\n    print(\"Low\")",
        "out": "Middle"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "score = 5\nif score > 7:\n    print(\"High\")\nelif score > 3:\n    print(\"Middle\")\nelse:\n    print(\"Low\")",
        "expect": "Middle"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Check more specific or higher conditions first when they overlap. If score > 3 came first, a score of 9 would match it before Python ever checked score > 7.",
        "code": "score = 5\nif score > 7:\n    print(\"High\")\nelif score > 3:\n    print(\"Middle\")\nelse:\n    print(\"Low\")",
        "out": "Middle"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "With the example code, which branch runs for score = 9?",
        "options": [
          "High",
          "Middle",
          "Both"
        ],
        "answer": 0,
        "why": "The first condition is True. Python runs High and skips the rest of this if/elif/else."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "if score > 7:\n    print(\"High\")\n",
        "post": " score > 3:\n    print(\"Middle\")",
        "options": [
          "elif",
          "else",
          "for"
        ],
        "answer": "elif",
        "why": "The first condition is True. Python runs High and skips the rest of this if/elif/else."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store a score. Write an if, an elif and an else, each with an indented print. Use > comparisons and put the higher threshold first. Any messages are fine.",
        "starter": "",
        "hint": "score = 5\nif score > 7:\n    print(\"High\")\nelif score > 3:\n    print(\"Middle\")\nelse:\n    print(\"Low\")",
        "solution": "score = 5\nif score > 7:\n    print(\"High\")\nelif score > 3:\n    print(\"Middle\")\nelse:\n    print(\"Low\")",
        "rule": "elif"
      }
    ]
  },
  {
    "id": "l27",
    "title": "Both must be true",
    "icon": "\ud83e\udd1d",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Both must be true",
        "body": "and joins two conditions. The result is True only when both conditions are True, like needing both a ticket and an open door to enter.",
        "code": "score = 4\nprint(score >= 3 and score <= 5)",
        "out": "True"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Put a full comparison on each side of and. score >= 3 and score <= 5 checks the lower boundary and the upper boundary.",
        "code": "score = 4\nprint(score >= 3 and score <= 5)",
        "out": "True"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "score = 4\nprint(score >= 3 and score <= 5)",
        "expect": "True"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Do not write score == 3 and 5 to mean two comparisons. Write both questions in full. and is a lowercase Python word; quotes would turn it into text.",
        "code": "score = 4\nprint(score >= 3 and score <= 5)",
        "out": "True"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is 4 > 2 and 4 < 3?",
        "options": [
          "True",
          "False",
          "4"
        ],
        "answer": 1,
        "why": "The first condition is True but the second is False. and needs both to be True."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(4 > 2 ",
        "post": " 4 < 5)",
        "options": [
          "and",
          "or",
          "+"
        ],
        "answer": "and",
        "why": "The first condition is True but the second is False. and needs both to be True."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Print two comparisons joined by and. Choose your own values.",
        "starter": "",
        "hint": "print(4 > 2 and 4 < 5)",
        "solution": "print(4 > 2 and 4 < 5)",
        "rule": "and"
      }
    ]
  },
  {
    "id": "l28",
    "title": "Either can be true",
    "icon": "\ud83d\udd00",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Either can be true",
        "body": "or joins two conditions. The result is True when at least one is True. It is like accepting either a blue ticket or a green ticket; having both still passes.",
        "code": "day = \"Sun\"\nprint(day == \"Sat\" or day == \"Sun\")",
        "out": "True"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Write a complete comparison on each side of or. day == \"Sat\" or day == \"Sun\" checks two possible values.",
        "code": "day = \"Sun\"\nprint(day == \"Sat\" or day == \"Sun\")",
        "out": "True"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "day = \"Sun\"\nprint(day == \"Sat\" or day == \"Sun\")",
        "expect": "True"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "day == \"Sat\" or \"Sun\" is not two comparisons. Repeat the variable and == on the second side. Python does not fill in the missing question for you.",
        "code": "day = \"Sun\"\nprint(day == \"Sat\" or day == \"Sun\")",
        "out": "True"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is 2 > 5 or 3 == 3?",
        "options": [
          "True",
          "False",
          "It needs both"
        ],
        "answer": 0,
        "why": "The second condition is True, which is enough for or."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(2 > 5 ",
        "post": " 3 == 3)",
        "options": [
          "or",
          "and",
          "not"
        ],
        "answer": "or",
        "why": "The second condition is True, which is enough for or."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Print two comparisons joined by or. Choose your own values.",
        "starter": "",
        "hint": "print(2 > 5 or 3 == 3)",
        "solution": "print(2 > 5 or 3 == 3)",
        "rule": "or"
      }
    ]
  },
  {
    "id": "l29",
    "title": "Turn a condition around",
    "icon": "\ud83d\ude43",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Turn a condition around",
        "body": "not flips a truth value: True becomes False, and False becomes True. Think of turning a yes/no card over to its opposite side.",
        "code": "score = 2\nprint(not (score > 3))",
        "out": "True"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "not goes before a condition. Parentheses around the comparison make its grouping clear: not (score > 3) means the opposite of that whole comparison.",
        "code": "score = 2\nprint(not (score > 3))",
        "out": "True"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "score = 2\nprint(not (score > 3))",
        "expect": "True"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "not is not the same as !=. != compares two values. not reverses one condition. Keep the grouping parentheses when you want to reverse a whole comparison.",
        "code": "score = 2\nprint(not (score > 3))",
        "out": "True"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is not (4 == 4)?",
        "options": [
          "True",
          "False",
          "4"
        ],
        "answer": 1,
        "why": "4 == 4 is True. not reverses it to False."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(",
        "post": " (4 == 4))",
        "options": [
          "not",
          "or",
          "and"
        ],
        "answer": "not",
        "why": "4 == 4 is True. not reverses it to False."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Print a comparison reversed with not. Put the comparison inside parentheses.",
        "starter": "",
        "hint": "print(not (4 == 4))",
        "solution": "print(not (4 == 4))",
        "rule": "not"
      }
    ]
  },
  {
    "id": "l30",
    "title": "Repeat while true",
    "icon": "\u23f3",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Repeat while true",
        "body": "while repeats a block for as long as a condition stays True. Think of filling a cup while it is below a mark. Unlike for, it checks a condition before every turn.",
        "code": "count = 0\nwhile count < 3:\n    print(count)\n    count = count + 1",
        "out": "0\n1\n2"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "while count < 3: starts the loop. Four spaces put lines inside it. count = count + 1 changes the count so the condition eventually becomes False.",
        "code": "count = 0\nwhile count < 3:\n    print(count)\n    count = count + 1",
        "out": "0\n1\n2"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "count = 0\nwhile count < 3:\n    print(count)\n    count = count + 1",
        "expect": "0\n1\n2"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Without the update, the condition may never change and the loop can run forever. This app stops long runs, but always design a way out. If the condition starts False, the block runs zero times.",
        "code": "count = 0\nwhile count < 3:\n    print(count)\n    count = count + 1",
        "out": "0\n1\n2"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "How many turns does while count < 3 make when count starts at 3?",
        "options": [
          "0",
          "1",
          "3"
        ],
        "answer": 0,
        "why": "Python checks before entering. 3 < 3 is already False, so there are no turns."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "while count < 3",
        "post": "\n    count = count + 1",
        "options": [
          ":",
          ",",
          ";"
        ],
        "answer": ":",
        "why": "Python checks before entering. 3 < 3 is already False, so there are no turns."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Set count = 0. Use while count < 3 to print 0, 1, 2. Add 1 to count on each turn so it stops. You may choose another variable name.",
        "starter": "",
        "hint": "count = 0\nwhile count < 3:\n    print(count)\n    count = count + 1",
        "solution": "count = 0\nwhile count < 3:\n    print(count)\n    count = count + 1",
        "rule": "while_count"
      }
    ]
  },
  {
    "id": "l31",
    "title": "Stop a loop early",
    "icon": "\ud83d\uded1",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Stop a loop early",
        "body": "break ends the loop immediately, even if its condition is still True. Think of an emergency stop button. Lines after the loop still run.",
        "code": "count = 0\nwhile count < 5:\n    if count == 2:\n        break\n    print(count)\n    count = count + 1\nprint(\"Done\")",
        "out": "0\n1\nDone"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Put break inside a loop. Often it sits inside an if inside that loop. That means eight spaces: four for the loop and four more for the if.",
        "code": "count = 0\nwhile count < 5:\n    if count == 2:\n        break\n    print(count)\n    count = count + 1\nprint(\"Done\")",
        "out": "0\n1\nDone"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "count = 0\nwhile count < 5:\n    if count == 2:\n        break\n    print(count)\n    count = count + 1\nprint(\"Done\")",
        "expect": "0\n1\nDone"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "break is a Python instruction, not a function: no parentheses. It must be inside a loop. Here it happens before print(count), so 2 is not printed.",
        "code": "count = 0\nwhile count < 5:\n    if count == 2:\n        break\n    print(count)\n    count = count + 1\nprint(\"Done\")",
        "out": "0\n1\nDone"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "In the example, does the final print(\"Done\") run?",
        "options": [
          "Yes",
          "No",
          "It repeats forever"
        ],
        "answer": 0,
        "why": "break leaves only the loop. Python continues with the unindented line after it."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "while count < 5:\n    if count == 2:\n        ",
        "post": "",
        "options": [
          "break",
          "print",
          "stop"
        ],
        "answer": "break",
        "why": "break leaves only the loop. Python continues with the unindented line after it."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Start count at 0. In while count < 5, use if count == 2: with break inside it. Print count and add 1 on each remaining turn. Print any message after the loop.",
        "starter": "",
        "hint": "count = 0\nwhile count < 5:\n    if count == 2:\n        break\n    print(count)\n    count = count + 1\nprint(\"Done\")",
        "solution": "count = 0\nwhile count < 5:\n    if count == 2:\n        break\n    print(count)\n    count = count + 1\nprint(\"Done\")",
        "rule": "while_break"
      }
    ]
  },
  {
    "id": "l32",
    "title": "Countdown with while",
    "icon": "\ud83d\ude80",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Countdown with while",
        "body": "Rebuild your countdown with a condition instead of range. Start at 3, keep going while the count is above 0, and subtract 1 each turn. This combines things you already know.",
        "code": "count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"Go!\")",
        "out": "3\n2\n1\nGo!"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The print and update both belong inside while, so each has four leading spaces. The final message has no leading spaces and runs after the condition becomes False.",
        "code": "count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"Go!\")",
        "out": "3\n2\n1\nGo!"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"Go!\")",
        "expect": "3\n2\n1\nGo!"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Adding 1 would move away from the stopping point. Putting the subtraction outside the loop would never change the count during the loop. Both mistakes can prevent it stopping.",
        "code": "count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"Go!\")",
        "out": "3\n2\n1\nGo!"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "After printing 1 and subtracting 1, why does the loop stop?",
        "options": [
          "The count is now 0, so count > 0 is False",
          "print stops it",
          "The message stops it"
        ],
        "answer": 0,
        "why": "The update reaches 0. The next condition check is False, so Python leaves the loop."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "count = count ",
        "post": " 1",
        "options": [
          "-",
          "+",
          "=="
        ],
        "answer": "-",
        "why": "The update reaches 0. The next condition check is False, so Python leaves the loop."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Use while to count down 3, 2, 1, subtracting 1 each turn. After the loop, print any final message. Use any variable name.",
        "starter": "",
        "hint": "count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"Launch!\")",
        "solution": "count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"Launch!\")",
        "rule": "while_down"
      }
    ]
  }
];
