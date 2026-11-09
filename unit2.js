/* Unit 2: text and lists, building only on Unit 1. */
const UNIT2_LESSONS = [
  {
    "id": "l12",
    "title": "Join text",
    "icon": "\ud83e\udde9",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Join text",
        "body": "A string is text. Joining strings is like joining two word cards. Between strings, + joins them instead of adding numbers.",
        "code": "first = \"Hello\"\nmessage = first + \" friend\"\nprint(message)",
        "out": "Hello friend"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Quotes wrap each string. A space inside quotes is a real space. = stores the joined result under a name.",
        "code": "first = \"Hello\"\nmessage = first + \" friend\"\nprint(message)",
        "out": "Hello friend"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "first = \"Hello\"\nmessage = first + \" friend\"\nprint(message)",
        "expect": "Hello friend"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Python does not add a space for you: \"Hi\" + \"Sam\" makes \"HiSam\". And \"Age: \" + 7 fails because text and a number are different types. Keep using a comma in print for that.",
        "code": "first = \"Hello\"\nmessage = first + \" friend\"\nprint(message)",
        "out": "Hello friend"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does print(\"sun\" + \"shine\") show?",
        "options": [
          "sun shine",
          "sunshine",
          "sun + shine"
        ],
        "answer": 1,
        "why": "+ joins strings exactly as written. Any space must be inside one of the strings."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(\"Good\" ",
        "post": " \" day\")",
        "options": [
          "+",
          ",",
          "="
        ],
        "answer": "+",
        "why": "+ joins strings exactly as written. Any space must be inside one of the strings."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Join any two nonempty strings with + and print the joined result. Your words are your choice.",
        "starter": "",
        "hint": "print(\"Good\" + \" morning\")",
        "solution": "print(\"Good\" + \" morning\")",
        "rule": "join"
      }
    ]
  },
  {
    "id": "l13",
    "title": "Count characters",
    "icon": "\ud83d\udccf",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Count characters",
        "body": "A character is one letter, digit, symbol or space in text. len counts characters, like counting beads on a string. A function is a named tool you call with parentheses; print and len are functions.",
        "code": "word = \"cat\"\nprint(len(word))",
        "out": "3"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "len(\"cat\") gives the number 3. The inner parentheses belong to len; the outer pair belongs to print, which shows that number.",
        "code": "word = \"cat\"\nprint(len(word))",
        "out": "3"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "word = \"cat\"\nprint(len(word))",
        "expect": "3"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "len counts spaces too: len(\"a b\") is 3. It needs a value such as text, not a plain number like len(123). The digits in \"123\" are text, so len(\"123\") works.",
        "code": "word = \"cat\"\nprint(len(word))",
        "out": "3"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "How many characters are in \"hi you\"?",
        "options": [
          "5",
          "6",
          "7"
        ],
        "answer": 1,
        "why": "The two letters, one space and three letters make six characters."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(",
        "post": "(\"hello\"))",
        "options": [
          "print",
          "len",
          "range"
        ],
        "answer": "len",
        "why": "The two letters, one space and three letters make six characters."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store any nonempty string in a variable. Print its length using len.",
        "starter": "",
        "hint": "word = \"friend\"\nprint(len(word))",
        "solution": "word = \"friend\"\nprint(len(word))",
        "rule": "text_len"
      }
    ]
  },
  {
    "id": "l14",
    "title": "Pick a character",
    "icon": "\ud83d\udd0e",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Pick a character",
        "body": "An index is an item's position. Python starts counting positions at 0, like numbered boxes beginning with box 0. A string lets you pick one character by its index.",
        "code": "word = \"cat\"\nprint(word[0])\nprint(word[1])",
        "out": "c\na"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Square brackets [ ] pick a position: word[0] is the first character. Index 1 is the second character. Spaces count as positions too.",
        "code": "word = \"cat\"\nprint(word[0])\nprint(word[1])",
        "out": "c\na"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "word = \"cat\"\nprint(word[0])\nprint(word[1])",
        "expect": "c\na"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "The last index is one less than the length. \"cat\" has length 3, but its indices are 0, 1, 2. word[3] gives IndexError: that position does not exist.",
        "code": "word = \"cat\"\nprint(word[0])\nprint(word[1])",
        "out": "c\na"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does \"dog\"[1] give?",
        "options": [
          "d",
          "o",
          "g"
        ],
        "answer": 1,
        "why": "Indices start at 0: d is 0, o is 1 and g is 2."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "word = \"cat\"\nprint(word[",
        "post": "])",
        "options": [
          "0",
          "1",
          "3"
        ],
        "answer": "0",
        "why": "Indices start at 0: d is 0, o is 1 and g is 2."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store a nonempty string, then use [0] to print its first character.",
        "starter": "",
        "hint": "word = \"Python\"\nprint(word[0])",
        "solution": "word = \"Python\"\nprint(word[0])",
        "rule": "text_index"
      }
    ]
  },
  {
    "id": "l15",
    "title": "Make a list",
    "icon": "\ud83e\uddfa",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Make a list",
        "body": "A list holds several items in order, like a shopping basket with numbered slots. An item is one value in the list. Start with a few strings.",
        "code": "snacks = [\"apple\", \"bread\"]\nprint(snacks)",
        "out": "['apple', 'bread']"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "[ ] around values create a list. Commas separate the items. Quotes still wrap each text item. [] with nothing inside is an empty list.",
        "code": "snacks = [\"apple\", \"bread\"]\nprint(snacks)",
        "out": "['apple', 'bread']"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "snacks = [\"apple\", \"bread\"]\nprint(snacks)",
        "expect": "['apple', 'bread']"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Do not put quotes around the whole list. \"[apple, bread]\" is one string, not a list. Keep a comma between items. A printed list shows its brackets and the quotes around text items.",
        "code": "snacks = [\"apple\", \"bread\"]\nprint(snacks)",
        "out": "['apple', 'bread']"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which code creates a list with two strings?",
        "options": [
          "[\"tea\", \"water\"]",
          "\"tea, water\"",
          "[tea water]"
        ],
        "answer": 0,
        "why": "Square brackets hold the items; commas separate them; quotes mark each text value."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "snacks = [\"apple\"",
        "post": " \"bread\"]",
        "options": [
          ",",
          "+",
          ";"
        ],
        "answer": ",",
        "why": "Square brackets hold the items; commas separate them; quotes mark each text value."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store a list containing at least two strings. Print the list by its variable name.",
        "starter": "",
        "hint": "snacks = [\"rice\", \"tea\"]\nprint(snacks)",
        "solution": "snacks = [\"rice\", \"tea\"]\nprint(snacks)",
        "rule": "make_list"
      }
    ]
  },
  {
    "id": "l16",
    "title": "Pick a list item",
    "icon": "\ud83c\udfaf",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Pick a list item",
        "body": "A list has indices just like a string. Index 0 picks the first whole item, not the first letter of that item. Think of choosing one slot from the basket.",
        "code": "snacks = [\"apple\", \"bread\"]\nprint(snacks[0])\nprint(len(snacks))",
        "out": "apple\n2"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The same [ ] symbols have two jobs: [\"a\", \"b\"] creates a list; snacks[0] picks an item from the stored list. len(snacks) counts its items.",
        "code": "snacks = [\"apple\", \"bread\"]\nprint(snacks[0])\nprint(len(snacks))",
        "out": "apple\n2"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "snacks = [\"apple\", \"bread\"]\nprint(snacks[0])\nprint(len(snacks))",
        "expect": "apple\n2"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Two items have indices 0 and 1. snacks[2] is outside this list and causes IndexError. len(snacks) counts items, not the letters inside them.",
        "code": "snacks = [\"apple\", \"bread\"]\nprint(snacks[0])\nprint(len(snacks))",
        "out": "apple\n2"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does [\"red\", \"blue\"][1] give?",
        "options": [
          "red",
          "blue",
          "r"
        ],
        "answer": 1,
        "why": "Index 1 is the second whole item, blue."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "colors = [\"red\", \"blue\"]\nprint(colors[",
        "post": "])",
        "options": [
          "0",
          "1",
          "2"
        ],
        "answer": "1",
        "why": "Index 1 is the second whole item, blue."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store at least two strings in a list. Print the second item with [1], then print the list length with len.",
        "starter": "",
        "hint": "colors = [\"red\", \"blue\"]\nprint(colors[1])\nprint(len(colors))",
        "solution": "colors = [\"red\", \"blue\"]\nprint(colors[1])\nprint(len(colors))",
        "rule": "list_index"
      }
    ]
  },
  {
    "id": "l17",
    "title": "Change a list item",
    "icon": "\ud83d\udd27",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Change a list item",
        "body": "Lists can change. Replace an item like swapping one thing in a basket slot. The other items keep their places.",
        "code": "snacks = [\"apple\", \"bread\"]\nsnacks[0] = \"pear\"\nprint(snacks)",
        "out": "['pear', 'bread']"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "items[0] = \"new\" stores a new value in slot 0. The = here replaces a list item; it does not create a new variable named items[0].",
        "code": "snacks = [\"apple\", \"bread\"]\nsnacks[0] = \"pear\"\nprint(snacks)",
        "out": "['pear', 'bread']"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "snacks = [\"apple\", \"bread\"]\nsnacks[0] = \"pear\"\nprint(snacks)",
        "expect": "['pear', 'bread']"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "The slot must already exist. You cannot add a third item to a two-item list with items[2] = \"tea\". Also, a string cannot change one letter with word[0] = \"X\"; lists and strings differ here.",
        "code": "snacks = [\"apple\", \"bread\"]\nsnacks[0] = \"pear\"\nprint(snacks)",
        "out": "['pear', 'bread']"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "After colors = [\"red\", \"blue\"] and colors[0] = \"green\", what is colors[1]?",
        "options": [
          "green",
          "red",
          "blue"
        ],
        "answer": 2,
        "why": "Only slot 0 changes. Slot 1 is still blue."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "colors",
        "post": " = \"green\"",
        "options": [
          "[0]",
          "(0)",
          "{0}"
        ],
        "answer": "[0]",
        "why": "Only slot 0 changes. Slot 1 is still blue."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store at least two strings in a list. Replace its first item using [0] =, then print the whole list.",
        "starter": "",
        "hint": "colors = [\"red\", \"blue\"]\ncolors[0] = \"green\"\nprint(colors)",
        "solution": "colors = [\"red\", \"blue\"]\ncolors[0] = \"green\"\nprint(colors)",
        "rule": "list_change"
      }
    ]
  },
  {
    "id": "l18",
    "title": "Add to a list",
    "icon": "\u2795",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Add to a list",
        "body": "append adds one new item to the end of a list. Imagine placing one more thing in the basket without replacing anything.",
        "code": "snacks = [\"apple\", \"bread\"]\nsnacks.append(\"tea\")\nprint(snacks)",
        "out": "['apple', 'bread', 'tea']"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "A method is a tool attached to a value. The dot in items.append(\"tea\") means use this list's append method. Parentheses hold the new item.",
        "code": "snacks = [\"apple\", \"bread\"]\nsnacks.append(\"tea\")\nprint(snacks)",
        "out": "['apple', 'bread', 'tea']"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "snacks = [\"apple\", \"bread\"]\nsnacks.append(\"tea\")\nprint(snacks)",
        "expect": "['apple', 'bread', 'tea']"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "append changes the existing list. Do not write snacks = snacks.append(\"tea\"): append does not give you a new list back. Call append on its own line, then print snacks.",
        "code": "snacks = [\"apple\", \"bread\"]\nsnacks.append(\"tea\")\nprint(snacks)",
        "out": "['apple', 'bread', 'tea']"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Where does append add the new item?",
        "options": [
          "At the beginning",
          "At the end",
          "It replaces index 0"
        ],
        "answer": 1,
        "why": "append keeps the existing items and adds one item at the end."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "snacks.",
        "post": "(\"tea\")",
        "options": [
          "append",
          "print",
          "len"
        ],
        "answer": "append",
        "why": "append keeps the existing items and adds one item at the end."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store a list, add a string with .append(...), then print the updated list. An empty starting list is okay.",
        "starter": "",
        "hint": "snacks = []\nsnacks.append(\"tea\")\nprint(snacks)",
        "solution": "snacks = []\nsnacks.append(\"tea\")\nprint(snacks)",
        "rule": "list_append"
      }
    ]
  },
  {
    "id": "l19",
    "title": "Loop through a list",
    "icon": "\ud83d\udeb6",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Loop through a list",
        "body": "for can visit list items directly, like checking each thing in a basket. You already used for with range. Now the list itself supplies each value.",
        "code": "snacks = [\"apple\", \"bread\"]\nfor snack in snacks:\n    print(snack)",
        "out": "apple\nbread"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "In for snack in snacks:, snack is a variable that gets one item each turn. snacks is the whole list. The colon starts the block; four spaces put print inside it.",
        "code": "snacks = [\"apple\", \"bread\"]\nfor snack in snacks:\n    print(snack)",
        "out": "apple\nbread"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "snacks = [\"apple\", \"bread\"]\nfor snack in snacks:\n    print(snack)",
        "expect": "apple\nbread"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Use the loop variable inside the loop. print(snacks) prints the entire list on every turn. for snack in snacks visits values, not numeric indices. No range is needed.",
        "code": "snacks = [\"apple\", \"bread\"]\nfor snack in snacks:\n    print(snack)",
        "out": "apple\nbread"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does for color in [\"red\", \"blue\"] give color on its first turn?",
        "options": [
          "0",
          "red",
          "The whole list"
        ],
        "answer": 1,
        "why": "The loop variable gets the first item, red, then the next item, blue."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "for snack ",
        "post": " snacks:\n    print(snack)",
        "options": [
          "in",
          "if",
          "="
        ],
        "answer": "in",
        "why": "The loop variable gets the first item, red, then the next item, blue."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store a list of at least two strings. Use for to print each item on its own turn.",
        "starter": "",
        "hint": "pets = [\"cat\", \"dog\"]\nfor pet in pets:\n    print(pet)",
        "solution": "pets = [\"cat\", \"dog\"]\nfor pet in pets:\n    print(pet)",
        "rule": "list_loop"
      }
    ]
  },
  {
    "id": "l20",
    "title": "Choose inside a loop",
    "icon": "\ud83d\udea6",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Choose inside a loop",
        "body": "You can make a choice on every loop turn. Put an if inside a for to keep only some items, like checking which names fit a rule. This is called nesting: one block inside another.",
        "code": "names = [\"Ava\", \"Noor\", \"Sam\"]\nfor name in names:\n    if len(name) > 3:\n        print(name)",
        "out": "Noor"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The if line needs four spaces inside for. Its print line needs eight spaces: four more inside if. len(name) > 3 checks if a name has more than three characters.",
        "code": "names = [\"Ava\", \"Noor\", \"Sam\"]\nfor name in names:\n    if len(name) > 3:\n        print(name)",
        "out": "Noor"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "names = [\"Ava\", \"Noor\", \"Sam\"]\nfor name in names:\n    if len(name) > 3:\n        print(name)",
        "expect": "Noor"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "A print with only four spaces sits inside for but outside if, so it runs for every name. The extra four spaces are what make the print depend on the condition.",
        "code": "names = [\"Ava\", \"Noor\", \"Sam\"]\nfor name in names:\n    if len(name) > 3:\n        print(name)",
        "out": "Noor"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which names pass len(name) > 3 in [\"Ana\", \"Omar\", \"Li\"]?",
        "options": [
          "Ana and Li",
          "Omar",
          "All of them"
        ],
        "answer": 1,
        "why": "Omar has four characters. Ana has three and Li has two, so only Omar is longer than three."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "for name in names:\n    if len(name) > 3:\n",
        "post": "print(name)",
        "options": [
          "    ",
          "        ",
          ""
        ],
        "answer": "        ",
        "why": "Omar has four characters. Ana has three and Li has two, so only Omar is longer than three."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store at least two names in a list, including one longer than three characters. Loop over them. Inside the loop, use if len(name) > 3 and print the matching name inside that if.",
        "starter": "",
        "hint": "names = [\"Ava\", \"Noor\"]\nfor name in names:\n    if len(name) > 3:\n        print(name)",
        "solution": "names = [\"Ava\", \"Noor\"]\nfor name in names:\n    if len(name) > 3:\n        print(name)",
        "rule": "list_filter"
      }
    ]
  },
  {
    "id": "l21",
    "title": "Guest list project",
    "icon": "\ud83c\udf89",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Guest list project",
        "body": "Put your pieces together. A guest list needs a place to store names, a way to add one, and a way to show each guest. No new Python symbols in this project.",
        "code": "guests = [\"Ava\", \"Noor\"]\nguests.append(\"Sam\")\nfor guest in guests:\n    print(guest)\nprint(\"Total\", len(guests))",
        "out": "Ava\nNoor\nSam\nTotal 3"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Create a list with [ ], add a guest with .append(...), and visit guests with for. After the loop, len(guests) tells you how many guests there are.",
        "code": "guests = [\"Ava\", \"Noor\"]\nguests.append(\"Sam\")\nfor guest in guests:\n    print(guest)\nprint(\"Total\", len(guests))",
        "out": "Ava\nNoor\nSam\nTotal 3"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "guests = [\"Ava\", \"Noor\"]\nguests.append(\"Sam\")\nfor guest in guests:\n    print(guest)\nprint(\"Total\", len(guests))",
        "expect": "Ava\nNoor\nSam\nTotal 3"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Keep the final total outside the loop, without indentation. Otherwise the same total prints again for every guest. Choose names freely: Python does not require our sample names.",
        "code": "guests = [\"Ava\", \"Noor\"]\nguests.append(\"Sam\")\nfor guest in guests:\n    print(guest)\nprint(\"Total\", len(guests))",
        "out": "Ava\nNoor\nSam\nTotal 3"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Where should the final total go if you want it once after the loop?",
        "options": [
          "Inside the loop",
          "Before creating the list",
          "After the loop, with no indentation"
        ],
        "answer": 2,
        "why": "A line without indentation leaves the loop, so it runs once after all guests."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(\"Total\", ",
        "post": "(guests))",
        "options": [
          "len",
          "range",
          "append"
        ],
        "answer": "len",
        "why": "A line without indentation leaves the loop, so it runs once after all guests."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Start with at least two guest names. Append one more name. Loop through the updated list and print every guest. After the loop, print its length. Your names and final message are your choice.",
        "starter": "",
        "hint": "guests = [\"Ava\", \"Noor\"]\nguests.append(\"Sam\")\nfor guest in guests:\n    print(guest)\nprint(\"Guests\", len(guests))",
        "solution": "guests = [\"Ava\", \"Noor\"]\nguests.append(\"Sam\")\nfor guest in guests:\n    print(guest)\nprint(\"Guests\", len(guests))",
        "rule": "guest_project"
      }
    ]
  }
];
