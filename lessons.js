/* pylearn v0.2 - Unit 1 */
const FIRST_LESSON = {
  "id": "l1",
  "title": "Say hello",
  "steps": [
    {
      "t": "info",
      "kicker": "Start here",
      "title": "What is coding?",
      "body": "Coding means writing instructions for a computer. Python is one language for writing those instructions.",
      "code": "print(\"Hello\")",
      "out": "Hello"
    },
    {
      "t": "info",
      "kicker": "Meet your first instruction",
      "title": "What does print do?",
      "body": "print shows something on the screen. It does not use a paper printer. The result on screen is called output.",
      "code": "print(\"Hello\")",
      "out": "Hello"
    },
    {
      "t": "info",
      "kicker": "One small detail",
      "title": "What are these symbols?",
      "body": "( ) are parentheses: they hold what print will show. \" \" are quotes: they wrap a text message.",
      "code": "print(\"Hi\")",
      "out": "Hi"
    },
    {
      "t": "run",
      "kicker": "Try it",
      "title": "Press Run",
      "prompt": "Run means ask Python to follow your instructions. Tap Run and see your first output.",
      "code": "print(\"Hello, world!\")",
      "expect": "Hello, world!"
    },
    {
      "t": "choice",
      "kicker": "Notice the wrapper",
      "title": "What shows up?",
      "prompt": "What does print(\"Hello\") show?",
      "options": [
        "Hello",
        "\"Hello\"",
        "print"
      ],
      "answer": 0,
      "why": "The outer quotes wrap the message. The wrapper does not appear in the output."
    },
    {
      "t": "fill",
      "kicker": "Build one line",
      "title": "Choose the instruction",
      "prompt": "Make Python display Hi there!",
      "pre": "",
      "post": "(\"Hi there!\")",
      "options": [
        "print",
        "say",
        "shout"
      ],
      "answer": "print",
      "why": "The instruction is print, with a lowercase p."
    },
    {
      "t": "info",
      "kicker": "A common mistake",
      "title": "Words vs instructions",
      "body": "Your message can use ANY capital letters. Python instruction names cannot: use print, not Print. Close both quotes and parentheses.",
      "code": "print(\"HI there\")",
      "out": "HI there"
    },
    {
      "t": "choice",
      "kicker": "Spot the fix",
      "title": "Which line works?",
      "prompt": "Pick the line with matching quotes and a closing parenthesis.",
      "options": [
        "print(\"Hi\")",
        "print(Hi)",
        "Print(\"Hi\")"
      ],
      "answer": 0,
      "why": "print must be lowercase, and a text message needs matching quotes inside parentheses."
    },
    {
      "t": "type",
      "kicker": "Your turn",
      "title": "Make Python talk",
      "prompt": "Print any message you like. Spelling and capital letters inside the quotes are your choice.",
      "starter": "print(\"\")",
      "rule": "text",
      "solution": "print(\"I am learning Python\")",
      "hint": "For example: print(\"hello friend\"). Any message is fine."
    }
  ]
};
const EXTRA_LESSONS = [
  {
    "id": "l2",
    "title": "Words & quotes",
    "icon": "💬",
    "steps": [
      {
        "t": "info",
        "kicker": "Before we start",
        "title": "Text is a message",
        "body": "Text means words, letters or symbols. Python calls text a string. Think of quotes as a wrapper around your message.",
        "code": "print(\"Hello\")",
        "out": "Hello"
      },
      {
        "t": "info",
        "kicker": "One small detail",
        "title": "Two matching ends",
        "body": "Start and end with the same quote: \"Hi\" or 'Hi'. Quotes are straight, not the curly ones a phone may suggest.",
        "code": "print(\"Hi\")",
        "out": "Hi"
      },
      {
        "t": "run",
        "kicker": "See it happen",
        "title": "Run this",
        "prompt": "Press Run. Notice what Python prints.",
        "code": "print(\"Moon\")",
        "expect": "Moon"
      },
      {
        "t": "choice",
        "kicker": "Predict it",
        "title": "Your pick",
        "prompt": "Which line prints the word Sky?",
        "options": [
          "print(Sky)",
          "print(\"Sky\")",
          "print = Sky"
        ],
        "answer": 1,
        "why": "The answer is: print(\"Sky\")."
      },
      {
        "t": "info",
        "kicker": "Change one thing",
        "title": "Spot the change",
        "body": "Compare this with the first example. What changed?",
        "code": "print('Sun')",
        "out": "Sun"
      },
      {
        "t": "run",
        "kicker": "Try the change",
        "title": "Test your prediction",
        "prompt": "Run the changed code and check its output.",
        "code": "print('Sun')",
        "expect": "Sun"
      },
      {
        "t": "fill",
        "kicker": "Build it",
        "title": "Fill the missing piece",
        "prompt": "Complete the code so it prints:\nHi",
        "pre": "print(",
        "post": ")",
        "options": [
          "\"Hi\"",
          "Hi",
          "say"
        ],
        "answer": "\"Hi\"",
        "why": "The missing piece is \"Hi\"."
      },
      {
        "t": "choice",
        "kicker": "Read the output",
        "title": "What did it print?",
        "prompt": "Look back at the changed example. Choose its output.",
        "options": [
          "Sun",
          "No output",
          "An error"
        ],
        "answer": 0,
        "why": "The changed example prints Sun."
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Missing quotes",
        "body": "print(Hi) tries to find a name called Hi. To show a message, put it in quotes.",
        "code": "print(\"Hi\")",
        "out": "Hi"
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Make it work",
        "prompt": "Use print with matching quotes to show any message. Any words, spelling and capital letters inside the quotes are fine.",
        "starter": "",
        "hint": "print(\"Python\")",
        "expected": "Python",
        "solution": "print(\"Python\")",
        "rule": "text"
      }
    ]
  },
  {
    "id": "l3",
    "title": "Numbers",
    "icon": "🔢",
    "steps": [
      {
        "t": "info",
        "kicker": "Before we start",
        "title": "Python is a calculator",
        "body": "A number is an amount, like 3 apples. Python can add, subtract and multiply amounts for you.",
        "code": "print(2 + 3)",
        "out": "5"
      },
      {
        "t": "info",
        "kicker": "One small detail",
        "title": "Meet the signs",
        "body": "+ adds. - subtracts. * multiplies. Put the calculation inside print( ) to see the answer.",
        "code": "print(3 * 2)",
        "out": "6"
      },
      {
        "t": "run",
        "kicker": "See it happen",
        "title": "Run this",
        "prompt": "Press Run. Notice what Python prints.",
        "code": "print(2 + 3)",
        "expect": "5"
      },
      {
        "t": "choice",
        "kicker": "Predict it",
        "title": "Your pick",
        "prompt": "What does print(3 * 2) show?",
        "options": [
          "32",
          "5",
          "6"
        ],
        "answer": 2,
        "why": "The answer is: 6."
      },
      {
        "t": "info",
        "kicker": "Change one thing",
        "title": "Spot the change",
        "body": "Compare this with the first example. What changed?",
        "code": "print(10 - 4)",
        "out": "6"
      },
      {
        "t": "run",
        "kicker": "Try the change",
        "title": "Test your prediction",
        "prompt": "Run the changed code and check its output.",
        "code": "print(10 - 4)",
        "expect": "6"
      },
      {
        "t": "fill",
        "kicker": "Build it",
        "title": "Fill the missing piece",
        "prompt": "Complete the code so it prints:\n16",
        "pre": "print(8 ",
        "post": " 2)",
        "options": [
          "+",
          "*",
          "/"
        ],
        "answer": "*",
        "why": "The missing piece is *."
      },
      {
        "t": "choice",
        "kicker": "Read the output",
        "title": "What did it print?",
        "prompt": "Look back at the changed example. Choose its output.",
        "options": [
          "6",
          "No output",
          "An error"
        ],
        "answer": 0,
        "why": "The changed example prints 6."
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Words are not amounts",
        "body": "\"2 + 3\" is text, so it prints the symbols. Without quotes, Python does the math.",
        "code": "print(\"2 + 3\")\nprint(2 + 3)",
        "out": "2 + 3\n5"
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Make it work",
        "prompt": "Use print to show an addition. Choose any two numbers without quotes.",
        "starter": "",
        "hint": "print(7 + 5)",
        "expected": "12",
        "solution": "print(7 + 5)",
        "rule": "add"
      }
    ]
  },
  {
    "id": "l4",
    "title": "Variables",
    "icon": "📦",
    "steps": [
      {
        "t": "info",
        "kicker": "Before we start",
        "title": "What is a variable?",
        "body": "Think of a labelled box. A variable is a name you give a value so you can use that value later.",
        "code": "score = 10\nprint(score)",
        "out": "10"
      },
      {
        "t": "info",
        "kicker": "One small detail",
        "title": "Store, then use",
        "body": "score = 10 stores 10 under the name score. print(score) reads that value. No quotes around the name.",
        "code": "score = 10\nprint(score)",
        "out": "10"
      },
      {
        "t": "run",
        "kicker": "See it happen",
        "title": "Run this",
        "prompt": "Press Run. Notice what Python prints.",
        "code": "score = 10\nprint(score)",
        "expect": "10"
      },
      {
        "t": "choice",
        "kicker": "Predict it",
        "title": "Your pick",
        "prompt": "After score = 5 then score = 9, what is score?",
        "options": [
          "5",
          "9",
          "14"
        ],
        "answer": 1,
        "why": "The answer is: 9."
      },
      {
        "t": "info",
        "kicker": "Change one thing",
        "title": "Spot the change",
        "body": "Compare this with the first example. What changed?",
        "code": "score = 10\nscore = 20\nprint(score)",
        "out": "20"
      },
      {
        "t": "run",
        "kicker": "Try the change",
        "title": "Test your prediction",
        "prompt": "Run the changed code and check its output.",
        "code": "score = 10\nscore = 20\nprint(score)",
        "expect": "20"
      },
      {
        "t": "fill",
        "kicker": "Build it",
        "title": "Fill the missing piece",
        "prompt": "Complete the code so it prints:\n",
        "pre": "pet ",
        "post": " \"cat\"",
        "options": [
          "==",
          "=",
          ":"
        ],
        "answer": "=",
        "why": "The missing piece is =."
      },
      {
        "t": "choice",
        "kicker": "Read the output",
        "title": "What did it print?",
        "prompt": "Look back at the changed example. Choose its output.",
        "options": [
          "20",
          "No output",
          "An error"
        ],
        "answer": 0,
        "why": "The changed example prints 20."
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Names must match",
        "body": "score and Score are different names. Use the exact same spelling and capital letters each time.",
        "code": "score = 10\nprint(score)",
        "out": "10"
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Make it work",
        "prompt": "Store any value in a variable. Then print that variable without quotes. Choose your own name.",
        "starter": "",
        "hint": "points = 25\nprint(points)",
        "expected": "25",
        "solution": "points = 25\nprint(points)",
        "rule": "variable"
      }
    ]
  },
  {
    "id": "l5",
    "title": "Text + numbers",
    "icon": "🧩",
    "steps": [
      {
        "t": "info",
        "kicker": "Before we start",
        "title": "Combine a label and a value",
        "body": "A scoreboard shows a word and a number: Score 8. print can show both parts together.",
        "code": "print(\"Score\", 8)",
        "out": "Score 8"
      },
      {
        "t": "info",
        "kicker": "One small detail",
        "title": "A comma separates pieces",
        "body": "A comma , separates the things to print. Python puts a space between those things for you.",
        "code": "score = 8\nprint(\"Score\", score)",
        "out": "Score 8"
      },
      {
        "t": "run",
        "kicker": "See it happen",
        "title": "Run this",
        "prompt": "Press Run. Notice what Python prints.",
        "code": "name = \"Sam\"\nprint(\"Hi\", name)",
        "expect": "Hi Sam"
      },
      {
        "t": "choice",
        "kicker": "Predict it",
        "title": "Your pick",
        "prompt": "What does print(\"Level\", 2) show?",
        "options": [
          "Level2",
          "Level 2",
          "An error"
        ],
        "answer": 1,
        "why": "The answer is: Level 2."
      },
      {
        "t": "info",
        "kicker": "Change one thing",
        "title": "Spot the change",
        "body": "Compare this with the first example. What changed?",
        "code": "score = 8\nprint(\"Score:\", score)",
        "out": "Score: 8"
      },
      {
        "t": "run",
        "kicker": "Try the change",
        "title": "Test your prediction",
        "prompt": "Run the changed code and check its output.",
        "code": "score = 8\nprint(\"Score:\", score)",
        "expect": "Score: 8"
      },
      {
        "t": "fill",
        "kicker": "Build it",
        "title": "Fill the missing piece",
        "prompt": "Complete the code so it prints:\nAge 20",
        "pre": "print(\"Age\", ",
        "post": ")",
        "options": [
          "20",
          "\"20",
          "age ="
        ],
        "answer": "20",
        "why": "The missing piece is 20."
      },
      {
        "t": "choice",
        "kicker": "Read the output",
        "title": "What did it print?",
        "prompt": "Look back at the changed example. Choose its output.",
        "options": [
          "Score: 8",
          "No output",
          "An error"
        ],
        "answer": 0,
        "why": "The changed example prints Score: 8."
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Text plus a number",
        "body": "\"Score\" + 8 gives an error: text and numbers are different kinds of value. Use a comma in print instead.",
        "code": "print(\"Score\", 8)",
        "out": "Score 8"
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Make it work",
        "prompt": "Print a message and a number or variable together, separated by a comma. Choose your own words and value.",
        "starter": "",
        "hint": "score = 7\nprint(\"Score:\", score)",
        "expected": "Score: 7",
        "solution": "score = 7\nprint(\"Score:\", score)",
        "rule": "mixed"
      }
    ]
  },
  {
    "id": "l6",
    "title": "True or false",
    "icon": "⚖️",
    "steps": [
      {
        "t": "info",
        "kicker": "Before we start",
        "title": "Ask a yes-or-no question",
        "body": "Is 5 bigger than 3? That is a comparison. Python writes yes as True and no as False.",
        "code": "print(5 > 3)",
        "out": "True"
      },
      {
        "t": "info",
        "kicker": "One small detail",
        "title": "Read the signs",
        "body": "> means bigger. < means smaller. >= means bigger or equal. == means equal. One = stores a value instead.",
        "code": "print(3 == 3)",
        "out": "True"
      },
      {
        "t": "run",
        "kicker": "See it happen",
        "title": "Run this",
        "prompt": "Press Run. Notice what Python prints.",
        "code": "print(5 > 3)",
        "expect": "True"
      },
      {
        "t": "choice",
        "kicker": "Predict it",
        "title": "Your pick",
        "prompt": "What does print(4 == 4) show?",
        "options": [
          "True",
          "False",
          "4"
        ],
        "answer": 0,
        "why": "The answer is: True."
      },
      {
        "t": "info",
        "kicker": "Change one thing",
        "title": "Spot the change",
        "body": "Compare this with the first example. What changed?",
        "code": "print(2 == 8)",
        "out": "False"
      },
      {
        "t": "run",
        "kicker": "Try the change",
        "title": "Test your prediction",
        "prompt": "Run the changed code and check its output.",
        "code": "print(2 == 8)",
        "expect": "False"
      },
      {
        "t": "fill",
        "kicker": "Build it",
        "title": "Fill the missing piece",
        "prompt": "Complete the code so it prints:\nTrue",
        "pre": "print(3 ",
        "post": " 5)",
        "options": [
          ">",
          "==",
          "<"
        ],
        "answer": "<",
        "why": "The missing piece is <."
      },
      {
        "t": "choice",
        "kicker": "Read the output",
        "title": "What did it print?",
        "prompt": "Look back at the changed example. Choose its output.",
        "options": [
          "False",
          "No output",
          "An error"
        ],
        "answer": 0,
        "why": "The changed example prints False."
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "One or two equals signs?",
        "body": "Use = to store. Use == to ask if values are equal. They do different jobs.",
        "code": "score = 3\nprint(score == 3)",
        "out": "True"
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Make it work",
        "prompt": "Use print to show a > comparison. Choose any two numbers.",
        "starter": "",
        "hint": "print(10 > 4)",
        "expected": "True",
        "solution": "print(10 > 4)",
        "rule": "compare"
      }
    ]
  },
  {
    "id": "l7",
    "title": "If: make a choice",
    "icon": "🚦",
    "steps": [
      {
        "t": "info",
        "kicker": "Before we start",
        "title": "Give Python a choice",
        "body": "Like a traffic light: go only if it is green. An if statement runs some code only when a condition is True.",
        "code": "if 5 > 3:\n    print(\"Go\")",
        "out": "Go"
      },
      {
        "t": "info",
        "kicker": "One small detail",
        "title": "Colon and spaces",
        "body": "End the if line with a colon :. Start its print line with four spaces. That indent shows which code belongs to if.",
        "code": "if 5 > 3:\n    print(\"Go\")",
        "out": "Go"
      },
      {
        "t": "run",
        "kicker": "See it happen",
        "title": "Run this",
        "prompt": "Press Run. Notice what Python prints.",
        "code": "score = 10\nif score > 5:\n    print(\"Win\")",
        "expect": "Win"
      },
      {
        "t": "choice",
        "kicker": "Predict it",
        "title": "Your pick",
        "prompt": "What is needed at the end of an if line?",
        "options": [
          "A comma ,",
          "A colon :",
          "A full stop ."
        ],
        "answer": 1,
        "why": "The answer is: A colon :."
      },
      {
        "t": "info",
        "kicker": "Change one thing",
        "title": "Spot the change",
        "body": "Compare this with the first example. What changed?",
        "code": "score = 2\nif score > 5:\n    print(\"Win\")\nprint(\"Done\")",
        "out": "Done"
      },
      {
        "t": "run",
        "kicker": "Try the change",
        "title": "Test your prediction",
        "prompt": "Run the changed code and check its output.",
        "code": "score = 2\nif score > 5:\n    print(\"Win\")\nprint(\"Done\")",
        "expect": "Done"
      },
      {
        "t": "fill",
        "kicker": "Build it",
        "title": "Fill the missing piece",
        "prompt": "Complete the code so it prints:\nYes",
        "pre": "if 8 > 3",
        "post": "\n    print(\"Yes\")",
        "options": [
          ";",
          ":",
          "="
        ],
        "answer": ":",
        "why": "The missing piece is :."
      },
      {
        "t": "choice",
        "kicker": "Read the output",
        "title": "What did it print?",
        "prompt": "Look back at the changed example. Choose its output.",
        "options": [
          "Done",
          "No output",
          "An error"
        ],
        "answer": 0,
        "why": "The changed example prints Done."
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Do not lose the indent",
        "body": "A missing indent gives IndentationError. A missing colon gives SyntaxError. Both help Python see the group of instructions.",
        "code": "if True:\n    print(\"Ready\")",
        "out": "Ready"
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Make it work",
        "prompt": "Write an if with an indented print line. Choose your own condition and message.",
        "starter": "",
        "hint": "score = 9\nif score > 5:\n    print(\"Win\")",
        "expected": "Win",
        "solution": "score = 9\nif score > 5:\n    print(\"Win\")",
        "rule": "if"
      }
    ]
  },
  {
    "id": "l8",
    "title": "Else: the other way",
    "icon": "↔️",
    "steps": [
      {
        "t": "info",
        "kicker": "Before we start",
        "title": "Choose a second path",
        "body": "Take an umbrella if it rains; else leave it at home. else means what to do when the if question is False.",
        "code": "if 2 > 5:\n    print(\"High\")\nelse:\n    print(\"Low\")",
        "out": "Low"
      },
      {
        "t": "info",
        "kicker": "One small detail",
        "title": "Two paths, one runs",
        "body": "else has a colon too. It lines up with if. Each path has its own indented print line.",
        "code": "if False:\n    print(\"A\")\nelse:\n    print(\"B\")",
        "out": "B"
      },
      {
        "t": "run",
        "kicker": "See it happen",
        "title": "Run this",
        "prompt": "Press Run. Notice what Python prints.",
        "code": "age = 10\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Young\")",
        "expect": "Young"
      },
      {
        "t": "choice",
        "kicker": "Predict it",
        "title": "Your pick",
        "prompt": "When does else run?",
        "options": [
          "When the condition is False",
          "Always",
          "Before if"
        ],
        "answer": 0,
        "why": "The answer is: When the condition is False."
      },
      {
        "t": "info",
        "kicker": "Change one thing",
        "title": "Spot the change",
        "body": "Compare this with the first example. What changed?",
        "code": "age = 20\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Young\")",
        "out": "Adult"
      },
      {
        "t": "run",
        "kicker": "Try the change",
        "title": "Test your prediction",
        "prompt": "Run the changed code and check its output.",
        "code": "age = 20\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Young\")",
        "expect": "Adult"
      },
      {
        "t": "fill",
        "kicker": "Build it",
        "title": "Fill the missing piece",
        "prompt": "Complete the code so it prints:\nB",
        "pre": "if False:\n    print(\"A\")\n",
        "post": ":\n    print(\"B\")",
        "options": [
          "then",
          "else",
          "otherwise"
        ],
        "answer": "else",
        "why": "The missing piece is else."
      },
      {
        "t": "choice",
        "kicker": "Read the output",
        "title": "What did it print?",
        "prompt": "Look back at the changed example. Choose its output.",
        "options": [
          "Adult",
          "No output",
          "An error"
        ],
        "answer": 0,
        "why": "The changed example prints Adult."
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Line up the gates",
        "body": "Indent the print lines, not else. Python uses these spaces to know where the two paths begin.",
        "code": "if True:\n    print(\"Yes\")\nelse:\n    print(\"No\")",
        "out": "Yes"
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Make it work",
        "prompt": "Write if and else, each with an indented print line. Any messages are fine.",
        "starter": "",
        "hint": "score = 2\nif score > 5:\n    print(\"High\")\nelse:\n    print(\"Low\")",
        "expected": "Low",
        "solution": "score = 2\nif score > 5:\n    print(\"High\")\nelse:\n    print(\"Low\")",
        "rule": "else"
      }
    ]
  },
  {
    "id": "l9",
    "title": "Repeat with for",
    "icon": "🔁",
    "steps": [
      {
        "t": "info",
        "kicker": "Before we start",
        "title": "Repeat without retyping",
        "body": "Say Hi three times. A loop tells Python to repeat an instruction so you do not have to write it three times.",
        "code": "for turn in range(3):\n    print(\"Hi\")",
        "out": "Hi\nHi\nHi"
      },
      {
        "t": "info",
        "kicker": "One small detail",
        "title": "Read a loop slowly",
        "body": "for starts a loop. turn names the current turn. range(3) gives three turns. A colon and four spaces mark the repeated line.",
        "code": "for turn in range(2):\n    print(\"Hi\")",
        "out": "Hi\nHi"
      },
      {
        "t": "run",
        "kicker": "See it happen",
        "title": "Run this",
        "prompt": "Press Run. Notice what Python prints.",
        "code": "for turn in range(3):\n    print(\"Hi\")",
        "expect": "Hi\nHi\nHi"
      },
      {
        "t": "order",
        "kicker": "Put it together",
        "title": "Build a tiny loop",
        "prompt": "Tap the lines in order. Print Hi twice, then print Done once. Spaces at the start matter.",
        "lines": [
          "    print(\"Hi\")",
          "print(\"Done\")",
          "for turn in range(2):"
        ],
        "answer": [
          2,
          0,
          1
        ]
      },
      {
        "t": "choice",
        "kicker": "Predict it",
        "title": "Your pick",
        "prompt": "How many times does range(4) repeat?",
        "options": [
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "why": "The answer is: 4."
      },
      {
        "t": "info",
        "kicker": "Change one thing",
        "title": "Spot the change",
        "body": "Compare this with the first example. What changed?",
        "code": "for turn in range(2):\n    print(\"Go\")",
        "out": "Go\nGo"
      },
      {
        "t": "run",
        "kicker": "Try the change",
        "title": "Test your prediction",
        "prompt": "Run the changed code and check its output.",
        "code": "for turn in range(2):\n    print(\"Go\")",
        "expect": "Go\nGo"
      },
      {
        "t": "fill",
        "kicker": "Build it",
        "title": "Fill the missing piece",
        "prompt": "Complete the code so it prints:\nHi\nHi",
        "pre": "for turn in range(",
        "post": "):\n    print(\"Hi\")",
        "options": [
          "2",
          "0",
          "1"
        ],
        "answer": "2",
        "why": "The missing piece is 2."
      },
      {
        "t": "choice",
        "kicker": "Read the output",
        "title": "What did it print?",
        "prompt": "Look back at the changed example. Choose its output.",
        "options": [
          "Go\nGo",
          "No output",
          "An error"
        ],
        "answer": 0,
        "why": "The changed example prints Go\nGo."
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Inside or outside?",
        "body": "An indented line repeats. A line with no indent runs once after the loop ends.",
        "code": "for turn in range(2):\n    print(\"Hi\")\nprint(\"Done\")",
        "out": "Hi\nHi\nDone"
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Make it work",
        "prompt": "Use a for loop with range to print a message more than once. Any message is fine.",
        "starter": "",
        "hint": "for turn in range(3):\n    print(\"Go\")",
        "expected": "Go\nGo\nGo",
        "solution": "for turn in range(3):\n    print(\"Go\")",
        "rule": "loop"
      }
    ]
  },
  {
    "id": "l10",
    "title": "Counting with range",
    "icon": "🪜",
    "steps": [
      {
        "t": "info",
        "kicker": "Before we start",
        "title": "Each turn has a number",
        "body": "A loop can count as it goes. The name n holds the current number on each turn, like a counter changing on a scoreboard.",
        "code": "for n in range(3):\n    print(n)",
        "out": "0\n1\n2"
      },
      {
        "t": "info",
        "kicker": "One small detail",
        "title": "Start and stop",
        "body": "range(1, 4) starts at 1 and stops before 4. It gives 1, 2, 3. With one number, range starts at zero.",
        "code": "for n in range(1, 4):\n    print(n)",
        "out": "1\n2\n3"
      },
      {
        "t": "run",
        "kicker": "See it happen",
        "title": "Run this",
        "prompt": "Press Run. Notice what Python prints.",
        "code": "for n in range(3):\n    print(n)",
        "expect": "0\n1\n2"
      },
      {
        "t": "choice",
        "kicker": "Predict it",
        "title": "Your pick",
        "prompt": "Which numbers does range(2, 5) give?",
        "options": [
          "2, 3, 4",
          "2, 3, 4, 5",
          "0, 1, 2, 3, 4"
        ],
        "answer": 0,
        "why": "The answer is: 2, 3, 4."
      },
      {
        "t": "info",
        "kicker": "Change one thing",
        "title": "Spot the change",
        "body": "Compare this with the first example. What changed?",
        "code": "for n in range(1, 4):\n    print(n)",
        "out": "1\n2\n3"
      },
      {
        "t": "run",
        "kicker": "Try the change",
        "title": "Test your prediction",
        "prompt": "Run the changed code and check its output.",
        "code": "for n in range(1, 4):\n    print(n)",
        "expect": "1\n2\n3"
      },
      {
        "t": "fill",
        "kicker": "Build it",
        "title": "Fill the missing piece",
        "prompt": "Complete the code so it prints:\n1\n2\n3",
        "pre": "for n in range(1, ",
        "post": "):\n    print(n)",
        "options": [
          "3",
          "4",
          "2"
        ],
        "answer": "4",
        "why": "The missing piece is 4."
      },
      {
        "t": "choice",
        "kicker": "Read the output",
        "title": "What did it print?",
        "prompt": "Look back at the changed example. Choose its output.",
        "options": [
          "1\n2\n3",
          "No output",
          "An error"
        ],
        "answer": 0,
        "why": "The changed example prints 1\n2\n3."
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "The stop is not included",
        "body": "range(1, 3) prints 1 and 2, not 3. To include 3, use a stop of 4.",
        "code": "for n in range(1, 3):\n    print(n)",
        "out": "1\n2"
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Make it work",
        "prompt": "Use range(1, 4) and print the current number on each turn. The goal is to count 1, 2, 3.",
        "starter": "",
        "hint": "for n in range(1, 4):\n    print(n)",
        "expected": "1\n2\n3",
        "solution": "for n in range(1, 4):\n    print(n)",
        "rule": "range"
      }
    ]
  },
  {
    "id": "l11",
    "title": "Mini project: countdown",
    "icon": "🚀",
    "steps": [
      {
        "t": "info",
        "kicker": "Before we start",
        "title": "Build a tiny countdown",
        "body": "A project combines ideas you know. We will count down 3, 2, 1, then show a final message.",
        "code": "for n in range(3, 0, -1):\n    print(n)\nprint(\"Launch!\")",
        "out": "3\n2\n1\nLaunch!"
      },
      {
        "t": "info",
        "kicker": "One small detail",
        "title": "Three parts of range",
        "body": "range(start, stop, step): start is the first number. Stop is excluded. A step of -1 moves down by one each turn.",
        "code": "for n in range(3, 0, -1):\n    print(n)",
        "out": "3\n2\n1"
      },
      {
        "t": "run",
        "kicker": "See it happen",
        "title": "Run this",
        "prompt": "Press Run. Notice what Python prints.",
        "code": "for n in range(3, 0, -1):\n    print(n)\nprint(\"Go!\")",
        "expect": "3\n2\n1\nGo!"
      },
      {
        "t": "choice",
        "kicker": "Predict it",
        "title": "Your pick",
        "prompt": "What does the -1 in range(3, 0, -1) do?",
        "options": [
          "Counts down by one",
          "Stops at minus one",
          "Repeats forever"
        ],
        "answer": 0,
        "why": "The answer is: Counts down by one."
      },
      {
        "t": "info",
        "kicker": "Change one thing",
        "title": "Spot the change",
        "body": "Compare this with the first example. What changed?",
        "code": "for n in range(2, 0, -1):\n    print(n)\nprint(\"Go!\")",
        "out": "2\n1\nGo!"
      },
      {
        "t": "run",
        "kicker": "Try the change",
        "title": "Test your prediction",
        "prompt": "Run the changed code and check its output.",
        "code": "for n in range(2, 0, -1):\n    print(n)\nprint(\"Go!\")",
        "expect": "2\n1\nGo!"
      },
      {
        "t": "fill",
        "kicker": "Build it",
        "title": "Fill the missing piece",
        "prompt": "Complete the code so it prints:\n3\n2\n1",
        "pre": "for n in range(3, 0, ",
        "post": "):\n    print(n)",
        "options": [
          "1",
          "-1",
          "0"
        ],
        "answer": "-1",
        "why": "The missing piece is -1."
      },
      {
        "t": "choice",
        "kicker": "Read the output",
        "title": "What did it print?",
        "prompt": "Look back at the changed example. Choose its output.",
        "options": [
          "2\n1\nGo!",
          "No output",
          "An error"
        ],
        "answer": 0,
        "why": "The changed example prints 2\n1\nGo!."
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Step in the right direction",
        "body": "To count down from 3, use -1. A positive step moves up, so range(3, 0, 1) has no turns.",
        "code": "for n in range(3, 0, 1):\n    print(n)\nprint(\"No countdown\")",
        "out": "No countdown"
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Make it work",
        "prompt": "Use range(3, 0, -1) to count 3, 2, 1. After the loop, print any final message.",
        "starter": "",
        "hint": "for n in range(3, 0, -1):\n    print(n)\nprint(\"Launch!\")",
        "expected": "3\n2\n1\nLaunch!",
        "solution": "for n in range(3, 0, -1):\n    print(n)\nprint(\"Launch!\")",
        "rule": "countdown"
      }
    ]
  }
];
