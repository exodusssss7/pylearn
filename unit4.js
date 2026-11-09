/* Unit 4: your own functions. */
const UNIT4_LESSONS = [
  {
    "id": "l33",
    "title": "Your own function",
    "icon": "\ud83e\uddf0",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Your own function",
        "body": "A function is a named set of instructions. You have used built-in functions such as print and len. Now make your own, like writing a recipe you can use by name.",
        "code": "def greet():\n    print(\"Hello, friend!\")\ngreet()",
        "out": "Hello, friend!"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "def means define: create a function. Give it a name, then () and a colon. Indent its instructions by four spaces. greet() on a new, unindented line calls the function and runs its instructions.",
        "code": "def greet():\n    print(\"Hello, friend!\")\ngreet()",
        "out": "Hello, friend!"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "def greet():\n    print(\"Hello, friend!\")\ngreet()",
        "expect": "Hello, friend!"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Defining does not run the instructions. Without greet(), Python remembers the function but prints nothing. Define it before calling it, and match its name exactly.",
        "code": "def greet():\n    print(\"Hello, friend!\")\ngreet()",
        "out": "Hello, friend!"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What runs the instructions inside a function named greet?",
        "options": [
          "def alone",
          "greet()",
          "\"greet\""
        ],
        "answer": 1,
        "why": "def creates the function. Calling greet() runs the instructions inside it."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "def greet()",
        "post": "\n    print(\"Hi\")\ngreet()",
        "options": [
          ":",
          ",",
          "="
        ],
        "answer": ":",
        "why": "def creates the function. Calling greet() runs the instructions inside it."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a function with no parameters that prints any message. Call it after the definition. Choose your own function name.",
        "starter": "",
        "hint": "def greet():\n    print(\"Hi there!\")\ngreet()",
        "solution": "def greet():\n    print(\"Hi there!\")\ngreet()",
        "rule": "function_define"
      }
    ]
  },
  {
    "id": "l34",
    "title": "Use it again",
    "icon": "\u267b\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Use it again",
        "body": "A function can run more than once. Write the instructions once, then call the same name again whenever you need them, like using the same recipe for two batches.",
        "code": "def cheer():\n    print(\"You can do it!\")\ncheer()\ncheer()",
        "out": "You can do it!\nYou can do it!"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Each name() call starts the function again from its first instruction. The calls sit outside the indented definition. They do not need another def.",
        "code": "def cheer():\n    print(\"You can do it!\")\ncheer()\ncheer()",
        "out": "You can do it!\nYou can do it!"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "def cheer():\n    print(\"You can do it!\")\ncheer()\ncheer()",
        "expect": "You can do it!\nYou can do it!"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Typing cheer without () does not call it. Copying the print lines would also show two messages, but it would miss the point: reuse the function you defined.",
        "code": "def cheer():\n    print(\"You can do it!\")\ncheer()\ncheer()",
        "out": "You can do it!\nYou can do it!"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "How often does the function run if cheer() appears twice after its definition?",
        "options": [
          "Zero times",
          "Once",
          "Twice"
        ],
        "answer": 2,
        "why": "Each call runs the function once, so two calls run it twice."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "cheer",
        "post": "",
        "options": [
          "()",
          "[]",
          ":"
        ],
        "answer": "()",
        "why": "Each call runs the function once, so two calls run it twice."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a function that prints a message. Call that same function twice on separate lines after defining it.",
        "starter": "",
        "hint": "def cheer():\n    print(\"Keep going!\")\ncheer()\ncheer()",
        "solution": "def cheer():\n    print(\"Keep going!\")\ncheer()\ncheer()",
        "rule": "function_reuse"
      }
    ]
  },
  {
    "id": "l35",
    "title": "Pass in a value",
    "icon": "\ud83d\udce8",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Pass in a value",
        "body": "A parameter is a name inside a function for a value it receives. Think of a recipe with a blank for the guest name. An argument is the actual value you pass when calling it.",
        "code": "def greet(name):\n    print(\"Hi\", name)\ngreet(\"Ava\")\ngreet(\"Noor\")",
        "out": "Hi Ava\nHi Noor"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "In def greet(name):, name is the parameter. In greet(\"Ava\"), \"Ava\" is the argument. Inside the function, name holds that value.",
        "code": "def greet(name):\n    print(\"Hi\", name)\ngreet(\"Ava\")\ngreet(\"Noor\")",
        "out": "Hi Ava\nHi Noor"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "def greet(name):\n    print(\"Hi\", name)\ngreet(\"Ava\")\ngreet(\"Noor\")",
        "expect": "Hi Ava\nHi Noor"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "If a function expects one argument, provide one: greet() alone is missing it. Do not quote the parameter in print: \"name\" prints the word name, not the received value.",
        "code": "def greet(name):\n    print(\"Hi\", name)\ngreet(\"Ava\")\ngreet(\"Noor\")",
        "out": "Hi Ava\nHi Noor"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "In greet(\"Sam\"), what value does the parameter name receive?",
        "options": [
          "\"Sam\"",
          "\"name\"",
          "Nothing"
        ],
        "answer": 0,
        "why": "The argument \"Sam\" is passed into the parameter when the function is called."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "def greet(",
        "post": "):\n    print(\"Hi\", name)",
        "options": [
          "name",
          "\"name\"",
          "name()"
        ],
        "answer": "name",
        "why": "The argument \"Sam\" is passed into the parameter when the function is called."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a function with one parameter. Print that parameter inside it. Call the function with any string argument.",
        "starter": "",
        "hint": "def greet(person):\n    print(\"Hello\", person)\ngreet(\"friend\")",
        "solution": "def greet(person):\n    print(\"Hello\", person)\ngreet(\"friend\")",
        "rule": "function_parameter"
      }
    ]
  },
  {
    "id": "l36",
    "title": "Two values in",
    "icon": "\ud83d\udcec",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Two values in",
        "body": "A function can receive more than one value. It is like a recipe with two blanks. Arguments go into the parameters in the order you give them.",
        "code": "def introduce(person, drink):\n    print(person, \"likes\", drink)\nintroduce(\"Ava\", \"tea\")",
        "out": "Ava likes tea"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Commas separate parameters in the definition and arguments in the call. In introduce(\"Ava\", \"tea\"), person gets \"Ava\" and drink gets \"tea\".",
        "code": "def introduce(person, drink):\n    print(person, \"likes\", drink)\nintroduce(\"Ava\", \"tea\")",
        "out": "Ava likes tea"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "def introduce(person, drink):\n    print(person, \"likes\", drink)\nintroduce(\"Ava\", \"tea\")",
        "expect": "Ava likes tea"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Supply the number of arguments the function needs. Swapping their order changes their meaning. introduce(\"tea\", \"Ava\") would print tea likes Ava.",
        "code": "def introduce(person, drink):\n    print(person, \"likes\", drink)\nintroduce(\"Ava\", \"tea\")",
        "out": "Ava likes tea"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which parameter gets \"tea\" in introduce(\"Ava\", \"tea\")?",
        "options": [
          "person",
          "drink",
          "Both"
        ],
        "answer": 1,
        "why": "The second argument goes into the second parameter, drink."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "def introduce(person",
        "post": " drink):\n    print(person, drink)\nintroduce(\"Ava\", \"tea\")",
        "options": [
          ",",
          "+",
          ";"
        ],
        "answer": ",",
        "why": "The second argument goes into the second parameter, drink."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a function with two parameters. Print both parameters inside it. Call it with two string arguments.",
        "starter": "",
        "hint": "def introduce(person, drink):\n    print(person, \"likes\", drink)\nintroduce(\"Noor\", \"water\")",
        "solution": "def introduce(person, drink):\n    print(person, \"likes\", drink)\nintroduce(\"Noor\", \"water\")",
        "rule": "function_two"
      }
    ]
  },
  {
    "id": "l37",
    "title": "Send a value back",
    "icon": "\ud83c\udf81",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Send a value back",
        "body": "return sends a value back to the code that called a function. print shows a value on screen; return hands it back so you can store it or use it in another calculation.",
        "code": "def add_one(number):\n    return number + 1\nresult = add_one(4)\nprint(result)",
        "out": "5"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "return belongs inside the function. Here add_one(4) gives back 5, which is stored in result. The outside print shows it. return ends that function call immediately.",
        "code": "def add_one(number):\n    return number + 1\nresult = add_one(4)\nprint(result)",
        "out": "5"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "def add_one(number):\n    return number + 1\nresult = add_one(4)\nprint(result)",
        "expect": "5"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Printing inside a function does not return that printed value. If a function finishes without return, it gives back None, a special value meaning no result. Code after a return in the same path does not run.",
        "code": "def add_one(number):\n    return number + 1\nresult = add_one(4)\nprint(result)",
        "out": "5"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does return do?",
        "options": [
          "Always shows a message on screen",
          "Sends a value back and ends this function call",
          "Repeats the function"
        ],
        "answer": 1,
        "why": "return hands a result to the caller. You can print that result outside the function."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "def add_one(number):\n    ",
        "post": " number + 1",
        "options": [
          "return",
          "print",
          "break"
        ],
        "answer": "return",
        "why": "return hands a result to the caller. You can print that result outside the function."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a function with one parameter that returns the parameter + 1. Call it with any number, then print the returned result.",
        "starter": "",
        "hint": "def add_one(number):\n    return number + 1\nprint(add_one(4))",
        "solution": "def add_one(number):\n    return number + 1\nprint(add_one(4))",
        "rule": "function_return"
      }
    ]
  },
  {
    "id": "l38",
    "title": "Names inside a function",
    "icon": "\ud83c\udfe0",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Names inside a function",
        "body": "A local variable is a name created inside a function. It belongs to that function call, like a note kept inside one room. A name outside that room is separate, even if the spelling matches.",
        "code": "label = \"outside\"\ndef make_label():\n    label = \"inside\"\n    return label\nprint(make_label())\nprint(label)",
        "out": "inside\noutside"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The assignment inside def creates a local name. return can pass its value out, but the local name itself does not become a new outside variable.",
        "code": "label = \"outside\"\ndef make_label():\n    label = \"inside\"\n    return label\nprint(make_label())\nprint(label)",
        "out": "inside\noutside"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "label = \"outside\"\ndef make_label():\n    label = \"inside\"\n    return label\nprint(make_label())\nprint(label)",
        "expect": "inside\noutside"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "A variable created only inside a function cannot normally be read outside it: print(secret) would give NameError if secret exists only inside. Return the value you need, then store or print the returned result.",
        "code": "label = \"outside\"\ndef make_label():\n    label = \"inside\"\n    return label\nprint(make_label())\nprint(label)",
        "out": "inside\noutside"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "In the example, what does the last print(label) show?",
        "options": [
          "inside",
          "outside",
          "None"
        ],
        "answer": 1,
        "why": "The local label belongs to the function call. The outside label keeps its original value."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "def make_label():\n    label = \"inside\"\n    return ",
        "post": "",
        "options": [
          "label",
          "\"label\"",
          "make_label()"
        ],
        "answer": "label",
        "why": "The local label belongs to the function call. The outside label keeps its original value."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a function with no parameters. Inside it, store a string in a local variable and return that variable. Call the function and print its returned result.",
        "starter": "",
        "hint": "def make_label():\n    message = \"Made inside\"\n    return message\nprint(make_label())",
        "solution": "def make_label():\n    message = \"Made inside\"\n    return message\nprint(make_label())",
        "rule": "function_local"
      }
    ]
  },
  {
    "id": "l39",
    "title": "A function for each item",
    "icon": "\ud83d\udd01",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "A function for each item",
        "body": "A loop and a function work together. The loop chooses each item; the function decides what to do with it. Think of sending each guest through the same welcome desk.",
        "code": "def greet(person):\n    print(\"Welcome\", person)\nnames = [\"Ava\", \"Noor\"]\nfor name in names:\n    greet(name)",
        "out": "Welcome Ava\nWelcome Noor"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Define the function before the loop. Call it on the indented line inside for, using the loop variable as the argument. The function has its own indented instructions.",
        "code": "def greet(person):\n    print(\"Welcome\", person)\nnames = [\"Ava\", \"Noor\"]\nfor name in names:\n    greet(name)",
        "out": "Welcome Ava\nWelcome Noor"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "def greet(person):\n    print(\"Welcome\", person)\nnames = [\"Ava\", \"Noor\"]\nfor name in names:\n    greet(name)",
        "expect": "Welcome Ava\nWelcome Noor"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Call greet(name), not greet(\"name\"). The quoted version sends the literal word name on every turn. Do not put the whole list in when you want one guest at a time.",
        "code": "def greet(person):\n    print(\"Welcome\", person)\nnames = [\"Ava\", \"Noor\"]\nfor name in names:\n    greet(name)",
        "out": "Welcome Ava\nWelcome Noor"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What argument is passed to greet on the second loop turn?",
        "options": [
          "Ava",
          "Noor",
          "The whole list"
        ],
        "answer": 1,
        "why": "The loop variable holds Noor on its second turn, and that value goes into the function."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "for name in names:\n    greet(",
        "post": ")",
        "options": [
          "name",
          "\"name\"",
          "names"
        ],
        "answer": "name",
        "why": "The loop variable holds Noor on its second turn, and that value goes into the function."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a one-parameter function that prints the received value. Make a list with at least two strings. Loop through the list and call your function with each item.",
        "starter": "",
        "hint": "def greet(person):\n    print(\"Welcome\", person)\nnames = [\"Ava\", \"Noor\"]\nfor name in names:\n    greet(name)",
        "solution": "def greet(person):\n    print(\"Welcome\", person)\nnames = [\"Ava\", \"Noor\"]\nfor name in names:\n    greet(name)",
        "rule": "function_loop"
      }
    ]
  },
  {
    "id": "l40",
    "title": "Build a welcome maker",
    "icon": "\ud83c\udfd7\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Build a welcome maker",
        "body": "Finish with a reusable welcome maker. Your function will join a message to each name and return it. The loop will use that function for every guest. All the pieces have already been introduced.",
        "code": "def welcome(person):\n    return \"Hello \" + person\nguests = [\"Ava\", \"Noor\"]\nfor guest in guests:\n    print(welcome(guest))",
        "out": "Hello Ava\nHello Noor"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Inside the function, + joins strings and return sends the message back. Outside it, print(welcome(name)) first gets the returned string, then shows it.",
        "code": "def welcome(person):\n    return \"Hello \" + person\nguests = [\"Ava\", \"Noor\"]\nfor guest in guests:\n    print(welcome(guest))",
        "out": "Hello Ava\nHello Noor"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "def welcome(person):\n    return \"Hello \" + person\nguests = [\"Ava\", \"Noor\"]\nfor guest in guests:\n    print(welcome(guest))",
        "expect": "Hello Ava\nHello Noor"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Keep print outside the function in this project: the function returns a message, and the loop prints that returned value. If you only print inside the function, the outside print would also show None.",
        "code": "def welcome(person):\n    return \"Hello \" + person\nguests = [\"Ava\", \"Noor\"]\nfor guest in guests:\n    print(welcome(guest))",
        "out": "Hello Ava\nHello Noor"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Why use return in the welcome function?",
        "options": [
          "To pass the message back for the loop to print",
          "To make the loop repeat forever",
          "To create a global name"
        ],
        "answer": 0,
        "why": "Returning the message separates making it from showing it. The caller can decide how to use the result."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "def welcome(person):\n    return \"Hello \" ",
        "post": " person",
        "options": [
          "+",
          "-",
          "=="
        ],
        "answer": "+",
        "why": "Returning the message separates making it from showing it. The caller can decide how to use the result."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a one-parameter function that returns a string joined to that parameter with +. Make a list with at least two guest names. Loop through the list and print the message returned by calling your function for each guest. Any welcome text and names are fine.",
        "starter": "",
        "hint": "def welcome(person):\n    return \"Hi \" + person\nguests = [\"Ava\", \"Noor\"]\nfor guest in guests:\n    print(welcome(guest))",
        "solution": "def welcome(person):\n    return \"Hi \" + person\nguests = [\"Ava\", \"Noor\"]\nfor guest in guests:\n    print(welcome(guest))",
        "rule": "function_project"
      }
    ]
  }
];
