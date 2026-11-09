/* Unit 6: real input and number conversion. */
const UNIT6_LESSONS = [
  {
    "id": "l49",
    "title": "Read an answer",
    "icon": "\u2328\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Read an answer",
        "body": "input reads an answer and returns it as text. It is like leaving a blank on a form for someone to fill. Your program can store the answer in a variable.",
        "code": "name = input()\nprint(\"Hello\", name)",
        "out": "Hello Ava",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "name = input() stores one answer in name. In this app, a short answer sheet appears before typed code runs. Put one answer on each line; Python reads the lines in order. The examples supply sample answers for you.",
        "code": "name = input()\nprint(\"Hello\", name)",
        "out": "Hello Ava",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "This example supplies these answers to real input(): Ava. Tap Run to see what Python does.",
        "code": "name = input()\nprint(\"Hello\", name)",
        "expect": "Hello Ava",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "input is lowercase and needs (). Do not quote it: \"input()\" is just text. Answers stay in this browser and are not saved. Use practice values, not private information.",
        "code": "name = input()\nprint(\"Hello\", name)",
        "out": "Hello Ava",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What value type does input return?",
        "options": [
          "Text, called a string",
          "Always a number",
          "A list"
        ],
        "answer": 0,
        "why": "input returns text, even if you type digits. Store the returned text to use it.",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "name = ",
        "post": "\nprint(name)",
        "options": [
          "input()",
          "\"input()\"",
          "input"
        ],
        "answer": "input()",
        "why": "input returns text, even if you type digits. Store the returned text to use it.",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Read one answer with input(), store it in a variable, then print that variable. Enter any practice word in the answer sheet.",
        "starter": "",
        "hint": "name = input()\nprint(name)",
        "solution": "name = input()\nprint(name)",
        "rule": "input_read",
        "inputs": [
          "Ava"
        ]
      }
    ]
  },
  {
    "id": "l50",
    "title": "Ask with a prompt",
    "icon": "\ud83d\udcac",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Ask with a prompt",
        "body": "A prompt is a message that tells someone what to enter. Give input a string argument to show that message before reading the answer, like a label beside a form blank.",
        "code": "name = input(\"Name? \")\nprint(\"Hi\", name)",
        "out": "Name? Hi Ava",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "input(\"Name? \") shows Name? before reading. The question mark and space are ordinary characters inside quotes. The returned answer is still a string.",
        "code": "name = input(\"Name? \")\nprint(\"Hi\", name)",
        "out": "Name? Hi Ava",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "This example supplies these answers to real input(): Ava. Tap Run to see what Python does.",
        "code": "name = input(\"Name? \")\nprint(\"Hi\", name)",
        "expect": "Name? Hi Ava",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Here the answer sheet supplies Ava but does not echo it into the output. You see the prompt and next printed message together. In a terminal, the typed answer normally appears between them. A prompt does not itself become the answer.",
        "code": "name = input(\"Name? \")\nprint(\"Hi\", name)",
        "out": "Name? Hi Ava",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "In input(\"Name? \"), what is \"Name? \"?",
        "options": [
          "The answer",
          "The prompt shown before reading",
          "The variable name"
        ],
        "answer": 1,
        "why": "The string argument is the question. The separate supplied answer is what input returns.",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "name = input(",
        "post": ")",
        "options": [
          "\"Name? \"",
          "Name?",
          "name="
        ],
        "answer": "\"Name? \"",
        "why": "The string argument is the question. The separate supplied answer is what input returns.",
        "inputs": [
          "Ava"
        ]
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Read an answer using input with your own quoted prompt. Store the answer and print it.",
        "starter": "",
        "hint": "name = input(\"Your name? \")\nprint(name)",
        "solution": "name = input(\"Your name? \")\nprint(name)",
        "rule": "input_prompt",
        "inputs": [
          "Ava"
        ]
      }
    ]
  },
  {
    "id": "l51",
    "title": "Digits can still be text",
    "icon": "\ud83d\udd24",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Digits can still be text",
        "body": "Typing 4 into input does not create the number 4. It creates the string \"4\". Text + text joins characters; numbers need conversion before arithmetic.",
        "code": "answer = input()\nprint(answer + \"1\")",
        "out": "41",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "In answer + \"1\", both sides are strings, so + joins them. The answer 4 becomes the text 41, not the number 5. Conversion means changing a value into another type.",
        "code": "answer = input()\nprint(answer + \"1\")",
        "out": "41",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "This example supplies these answers to real input(): 4. Tap Run to see what Python does.",
        "code": "answer = input()\nprint(answer + \"1\")",
        "expect": "41",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "answer + 1 mixes a string with a number and raises TypeError. Adding quotes around 1 avoids the error but joins text instead of doing arithmetic. Next we will convert the answer properly.",
        "code": "answer = input()\nprint(answer + \"1\")",
        "out": "41",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "With the answer 4, what does answer + \"2\" give?",
        "options": [
          "6",
          "42",
          "An empty string"
        ],
        "answer": 1,
        "why": "The two strings join: \"4\" + \"2\" makes \"42\".",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(answer + ",
        "post": ")",
        "options": [
          "\"1\"",
          "1",
          "input"
        ],
        "answer": "\"1\"",
        "why": "The two strings join: \"4\" + \"2\" makes \"42\".",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Read any answer into a variable. Print that variable joined to a nonempty string with +. This exercise intentionally joins text.",
        "starter": "",
        "hint": "answer = input()\nprint(answer + \"!\")",
        "solution": "answer = input()\nprint(answer + \"!\")",
        "rule": "input_text",
        "inputs": [
          "4"
        ]
      }
    ]
  },
  {
    "id": "l52",
    "title": "Convert to a whole number",
    "icon": "\ud83d\udd22",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Convert to a whole number",
        "body": "int converts suitable text to an integer, a whole number such as 4, 0 or -2. Think of unpacking digit text so Python can calculate with it.",
        "code": "answer = input()\nnumber = int(answer)\nprint(number + 1)",
        "out": "5",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Read text first, then use int(text). You can store the converted number under a new name and add to it normally.",
        "code": "answer = input()\nnumber = int(answer)\nprint(number + 1)",
        "out": "5",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "This example supplies these answers to real input(): 4. Tap Run to see what Python does.",
        "code": "answer = input()\nnumber = int(answer)\nprint(number + 1)",
        "expect": "5",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "int(\"4\") works; int(\"four\") and int(\"4.5\") raise ValueError because those strings are not whole-number text. A minus sign in \"-2\" is okay. This lesson assumes a valid whole-number answer.",
        "code": "answer = input()\nnumber = int(answer)\nprint(number + 1)",
        "out": "5",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does int(\"12\") return?",
        "options": [
          "The string \"12\"",
          "The number 12",
          "The number 2"
        ],
        "answer": 1,
        "why": "int converts the digit text into a whole number, ready for arithmetic.",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "number = ",
        "post": "(answer)",
        "options": [
          "int",
          "str",
          "print"
        ],
        "answer": "int",
        "why": "int converts the digit text into a whole number, ready for arithmetic.",
        "inputs": [
          "4"
        ]
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Read an answer, convert it with int, then print that number plus 1. Supply a whole-number answer such as 4.",
        "starter": "",
        "hint": "answer = input()\nnumber = int(answer)\nprint(number + 1)",
        "solution": "answer = input()\nnumber = int(answer)\nprint(number + 1)",
        "rule": "input_int",
        "inputs": [
          "4"
        ]
      }
    ]
  },
  {
    "id": "l53",
    "title": "Numbers with decimals",
    "icon": "\ud83d\udd2c",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Numbers with decimals",
        "body": "A float is a number that can have a fractional part, such as 2.5. float converts decimal text to a number. Think of measuring half a litre rather than only whole litres.",
        "code": "answer = input()\namount = float(answer)\nprint(amount + 1)",
        "out": "3.5",
        "inputs": [
          "2.5"
        ]
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "float(\"2.5\") gives the number 2.5. A dot is the decimal point. print may show .0 for a float with no fractional part, such as 3.0.",
        "code": "answer = input()\namount = float(answer)\nprint(amount + 1)",
        "out": "3.5",
        "inputs": [
          "2.5"
        ]
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "This example supplies these answers to real input(): 2.5. Tap Run to see what Python does.",
        "code": "answer = input()\namount = float(answer)\nprint(amount + 1)",
        "expect": "3.5",
        "inputs": [
          "2.5"
        ]
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Use a decimal dot, not a comma: \"2,5\" is not valid decimal text for float. \"two\" is not valid either. Computers store many decimal fractions approximately, so some calculations can show tiny rounding differences.",
        "code": "answer = input()\namount = float(answer)\nprint(amount + 1)",
        "out": "3.5",
        "inputs": [
          "2.5"
        ]
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which converts the text \"2.5\" for calculation?",
        "options": [
          "int(\"2.5\")",
          "float(\"2.5\")",
          "print(\"2.5\")"
        ],
        "answer": 1,
        "why": "float understands decimal text. int cannot directly read the string \"2.5\" as a whole number.",
        "inputs": [
          "2.5"
        ]
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "amount = ",
        "post": "(answer)",
        "options": [
          "float",
          "int",
          "len"
        ],
        "answer": "float",
        "why": "float understands decimal text. int cannot directly read the string \"2.5\" as a whole number.",
        "inputs": [
          "2.5"
        ]
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Read an answer, convert it with float, then print that number plus 1. Supply decimal text such as 2.5.",
        "starter": "",
        "hint": "answer = input()\namount = float(answer)\nprint(amount + 1)",
        "solution": "answer = input()\namount = float(answer)\nprint(amount + 1)",
        "rule": "input_float",
        "inputs": [
          "2.5"
        ]
      }
    ]
  },
  {
    "id": "l54",
    "title": "Turn a value into text",
    "icon": "\ud83c\udff7\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Turn a value into text",
        "body": "str converts a value to a string. It is useful when you want to join a number into a larger message with +, like writing a numeric score on a label.",
        "code": "score = 4\nmessage = \"Score: \" + str(score)\nprint(message)",
        "out": "Score: 4"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "str(score) turns the number 4 into the string \"4\". Then the two strings can join. print(\"Score\", score) with a comma is still fine if you do not need a joined string.",
        "code": "score = 4\nmessage = \"Score: \" + str(score)\nprint(message)",
        "out": "Score: 4"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "score = 4\nmessage = \"Score: \" + str(score)\nprint(message)",
        "expect": "Score: 4"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "str does not change the original score variable. It returns a string version. Do not write \"Score: \" + score unless score is already text; otherwise the types do not match.",
        "code": "score = 4\nmessage = \"Score: \" + str(score)\nprint(message)",
        "out": "Score: 4"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is str(4) + \"1\"?",
        "options": [
          "5",
          "41",
          "An error"
        ],
        "answer": 1,
        "why": "str(4) is text. Joining \"4\" and \"1\" makes \"41\"."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(\"Score: \" + ",
        "post": "(score))",
        "options": [
          "str",
          "int",
          "float"
        ],
        "answer": "str",
        "why": "str(4) is text. Joining \"4\" and \"1\" makes \"41\"."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store any number. Use str to join that number to a nonempty string, then print the joined message.",
        "starter": "",
        "hint": "score = 7\nprint(\"Score: \" + str(score))",
        "solution": "score = 7\nprint(\"Score: \" + str(score))",
        "rule": "number_str"
      }
    ]
  },
  {
    "id": "l55",
    "title": "Multiply amounts",
    "icon": "\u2716\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Multiply amounts",
        "body": "Multiplication makes equal groups. In Python, * means multiply: three groups of two make six. Use it to find a total from an amount and a quantity.",
        "code": "price = 2\nquantity = 3\nprint(price * quantity)",
        "out": "6"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The asterisk * sits between two numbers. It is not the letter x. Variables holding numbers work too.",
        "code": "price = 2\nquantity = 3\nprint(price * quantity)",
        "out": "6"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "price = 2\nquantity = 3\nprint(price * quantity)",
        "expect": "6"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Quoted digits are text, not numeric amounts. Python can repeat text with *, but that is a different operation: \"2\" * 3 makes \"222\", not 6. Convert input before multiplying amounts.",
        "code": "price = 2\nquantity = 3\nprint(price * quantity)",
        "out": "6"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is 4 * 3?",
        "options": [
          "7",
          "12",
          "43"
        ],
        "answer": 1,
        "why": "Four groups of three make twelve."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(4 ",
        "post": " 3)",
        "options": [
          "*",
          "x",
          "+"
        ],
        "answer": "*",
        "why": "Four groups of three make twelve."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store two numbers in variables and print their product using *.",
        "starter": "",
        "hint": "price = 2\nquantity = 3\nprint(price * quantity)",
        "solution": "price = 2\nquantity = 3\nprint(price * quantity)",
        "rule": "multiply"
      }
    ]
  },
  {
    "id": "l56",
    "title": "Share an amount",
    "icon": "\u2797",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Share an amount",
        "body": "Division shares an amount into equal parts. / divides the value on its left by the value on its right, like sharing six biscuits between two people.",
        "code": "total = 6\npeople = 2\nprint(total / people)",
        "out": "3.0"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "6 / 2 gives 3.0. / returns a float, even when the result is a whole amount. Here the second number is the divisor, the number you divide by.",
        "code": "total = 6\npeople = 2\nprint(total / people)",
        "out": "3.0"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "total = 6\npeople = 2\nprint(total / people)",
        "expect": "3.0"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "You cannot divide by zero. Check that a number of people is above 0 before dividing. / can give a fractional answer: 5 / 2 gives 2.5, not a whole-number count.",
        "code": "total = 6\npeople = 2\nprint(total / people)",
        "out": "3.0"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does print(5 / 2) show?",
        "options": [
          "2",
          "2.5",
          "3"
        ],
        "answer": 1,
        "why": "/ keeps the fractional part, so five shared between two is 2.5 each."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(6 ",
        "post": " 2)",
        "options": [
          "/",
          "*",
          "-"
        ],
        "answer": "/",
        "why": "/ keeps the fractional part, so five shared between two is 2.5 each."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store a total and a positive divisor in variables. Print their division using /.",
        "starter": "",
        "hint": "total = 6\npeople = 2\nprint(total / people)",
        "solution": "total = 6\npeople = 2\nprint(total / people)",
        "rule": "divide"
      }
    ]
  },
  {
    "id": "l57",
    "title": "Share the snack bill",
    "icon": "\ud83c\udf6a",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Share the snack bill",
        "body": "Read a price, a quantity and a number of people. Convert them, work out the total, then share it. This project combines input, conversion, variables, arithmetic and if/else.",
        "code": "price = float(input())\nquantity = int(input())\npeople = int(input())\ntotal = price * quantity\nif people > 0:\n    print(\"Each\", total / people)\nelse:\n    print(\"Need at least one person\")",
        "out": "Each 3.75",
        "inputs": [
          "2.5",
          "3",
          "2"
        ]
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Price can have decimals, so use float. Quantity and people are whole numbers, so use int. Compute total = price * quantity. Divide only if people > 0. The three answers are read in that order.",
        "code": "price = float(input())\nquantity = int(input())\npeople = int(input())\ntotal = price * quantity\nif people > 0:\n    print(\"Each\", total / people)\nelse:\n    print(\"Need at least one person\")",
        "out": "Each 3.75",
        "inputs": [
          "2.5",
          "3",
          "2"
        ]
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "This example supplies these answers to real input(): 2.5, 3, 2. Tap Run to see what Python does.",
        "code": "price = float(input())\nquantity = int(input())\npeople = int(input())\ntotal = price * quantity\nif people > 0:\n    print(\"Each\", total / people)\nelse:\n    print(\"Need at least one person\")",
        "expect": "Each 3.75",
        "inputs": [
          "2.5",
          "3",
          "2"
        ]
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Enter one answer per line: 2.5, then 3, then 2 for this example. A missing answer causes EOFError: input reached the end. Invalid number text still causes ValueError; handling invalid text is a later topic.",
        "code": "price = float(input())\nquantity = int(input())\npeople = int(input())\ntotal = price * quantity\nif people > 0:\n    print(\"Each\", total / people)\nelse:\n    print(\"Need at least one person\")",
        "out": "Each 3.75",
        "inputs": [
          "2.5",
          "3",
          "2"
        ]
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Why check people > 0 before division?",
        "options": [
          "To prevent division by zero or an invalid group size",
          "To convert the price",
          "To repeat the answers"
        ],
        "answer": 0,
        "why": "Sharing needs at least one person. Only the True branch performs the division.",
        "inputs": [
          "2.5",
          "3",
          "2"
        ]
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "if people > 0:\n    print(total ",
        "post": " people)",
        "options": [
          "/",
          "+",
          "*"
        ],
        "answer": "/",
        "why": "Sharing needs at least one person. Only the True branch performs the division.",
        "inputs": [
          "2.5",
          "3",
          "2"
        ]
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Read price with float(input()), quantity with int(input()), and people with int(input()), in that order. Multiply price by quantity. Use if people > 0 to print the total divided by people; use else to print any helpful message. Supply valid numbers, one answer per line.",
        "starter": "",
        "hint": "price = float(input())\nquantity = int(input())\npeople = int(input())\ntotal = price * quantity\nif people > 0:\n    print(\"Each\", total / people)\nelse:\n    print(\"Need at least one person\")",
        "solution": "price = float(input())\nquantity = int(input())\npeople = int(input())\ntotal = price * quantity\nif people > 0:\n    print(\"Each\", total / people)\nelse:\n    print(\"Need at least one person\")",
        "rule": "bill_project",
        "inputs": [
          "2.5",
          "3",
          "2"
        ]
      }
    ]
  }
];
