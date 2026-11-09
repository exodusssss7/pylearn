/* Unit 7: beginner steps, in order. */
const UNIT7_LESSONS = [
  {
    "id": "l58",
    "title": "Write a tiny file",
    "icon": "\ud83d\udcc4",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Write a tiny file",
        "body": "A variable holds a value while a program runs. A file holds named content you can open again. Here you will practise real Python file operations in a temporary browser workspace. Files reset every Run; they are not saved to your phone.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hi\")\nprint(\"Written\")",
        "out": "Written"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "open(\"note.txt\", \"w\") opens a text file for writing. with ... as note: gives the open file the name note. Indent the work inside. note.write(\"Hi\") writes text. Leaving the with block closes the file automatically.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hi\")\nprint(\"Written\")",
        "out": "Written"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hi\")\nprint(\"Written\")",
        "expect": "Written"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "The mode \"w\" creates a missing file or ERASES an existing file with that name. Use only practice filenames. write does not display text on screen; print does. The print here is outside the block, after closing.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hi\")\nprint(\"Written\")",
        "out": "Written"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does mode \"w\" do to an existing file?",
        "options": [
          "Adds to the end",
          "Replaces its content",
          "Reads it only"
        ],
        "answer": 1,
        "why": "\"w\" starts the file over. It is not append mode."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "with open(\"note.txt\", ",
        "post": ") as note:\n    note.write(\"Hi\")",
        "options": [
          "\"w\"",
          "\"r\"",
          "w"
        ],
        "answer": "\"w\"",
        "why": "\"w\" starts the file over. It is not append mode."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Use with open(\"yourname.txt\", \"w\") as a file variable. Write a nonempty string inside, then print a message outside the block.",
        "starter": "",
        "hint": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hi\")\nprint(\"Written\")",
        "solution": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hi\")\nprint(\"Written\")",
        "rule": "file_write"
      }
    ]
  },
  {
    "id": "l59",
    "title": "Read what you wrote",
    "icon": "\ud83d\udcd6",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Read what you wrote",
        "body": "Opening in \"r\" mode means read, not replace. read() returns the file content as a string. Write a practice file first, then reopen the SAME filename to read it, all in one Run.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hello\")\nwith open(\"note.txt\", \"r\") as note:\n    message = note.read()\nprint(message)",
        "out": "Hello"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The two with blocks are separate. The first writes and closes. The second reads and closes. Store note.read() in a variable, then print that text.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hello\")\nwith open(\"note.txt\", \"r\") as note:\n    message = note.read()\nprint(message)",
        "out": "Hello"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hello\")\nwith open(\"note.txt\", \"r\") as note:\n    message = note.read()\nprint(message)",
        "expect": "Hello"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "\"r\" cannot create a missing file. If the spelling differs between write and read, Python raises FileNotFoundError. Every Run here starts with an empty practice workspace.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hello\")\nwith open(\"note.txt\", \"r\") as note:\n    message = note.read()\nprint(message)",
        "out": "Hello"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does read() return for this text file?",
        "options": [
          "The filename",
          "The stored text",
          "The number of letters"
        ],
        "answer": 1,
        "why": "read() returns the content as a string, ready to store or print."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "with open(\"note.txt\", ",
        "post": ") as note:\n    message = note.read()",
        "options": [
          "\"r\"",
          "\"w\"",
          "r"
        ],
        "answer": "\"r\"",
        "why": "read() returns the content as a string, ready to store or print."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Write a nonempty string to a file with \"w\". Reopen that same filename with \"r\", read its content, and print the content.",
        "starter": "",
        "hint": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hello\")\nwith open(\"note.txt\", \"r\") as note:\n    message = note.read()\nprint(message)",
        "solution": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Hello\")\nwith open(\"note.txt\", \"r\") as note:\n    message = note.read()\nprint(message)",
        "rule": "file_read"
      }
    ]
  },
  {
    "id": "l60",
    "title": "Put text on new lines",
    "icon": "\u21a9\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Put text on new lines",
        "body": "A newline moves the next character to a new line. Inside a Python string, backslash followed by n (\\n) represents one newline character. Use it to store several lines in one file.",
        "code": "with open(\"menu.txt\", \"w\") as menu:\n    menu.write(\"Tea\\nCake\")\nwith open(\"menu.txt\", \"r\") as menu:\n    text = menu.read()\nprint(text)",
        "out": "Tea\nCake"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "\"Tea\\nCake\" is one string with two lines. The two typed characters \\n become a newline in the value. read() keeps that newline, and print displays the two lines.",
        "code": "with open(\"menu.txt\", \"w\") as menu:\n    menu.write(\"Tea\\nCake\")\nwith open(\"menu.txt\", \"r\") as menu:\n    text = menu.read()\nprint(text)",
        "out": "Tea\nCake"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "with open(\"menu.txt\", \"w\") as menu:\n    menu.write(\"Tea\\nCake\")\nwith open(\"menu.txt\", \"r\") as menu:\n    text = menu.read()\nprint(text)",
        "expect": "Tea\nCake"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Use a backslash, not a forward slash: /n is ordinary text. Keep \\n inside quotes. write does not add a newline automatically, unlike print.",
        "code": "with open(\"menu.txt\", \"w\") as menu:\n    menu.write(\"Tea\\nCake\")\nwith open(\"menu.txt\", \"r\") as menu:\n    text = menu.read()\nprint(text)",
        "out": "Tea\nCake"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is stored by \"A\\nB\"?",
        "options": [
          "A/nB",
          "A then B on the next line",
          "The number 2"
        ],
        "answer": 1,
        "why": "The escape sequence \\n represents a newline inside the string."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "menu.write(\"Tea",
        "post": "Cake\")",
        "options": [
          "\\n",
          "/n",
          "+"
        ],
        "answer": "\\n",
        "why": "The escape sequence \\n represents a newline inside the string."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Write a string containing \\n between two words to a file. Reopen it in \"r\" mode and print the read content.",
        "starter": "",
        "hint": "with open(\"menu.txt\", \"w\") as menu:\n    menu.write(\"Tea\\nCake\")\nwith open(\"menu.txt\", \"r\") as menu:\n    text = menu.read()\nprint(text)",
        "solution": "with open(\"menu.txt\", \"w\") as menu:\n    menu.write(\"Tea\\nCake\")\nwith open(\"menu.txt\", \"r\") as menu:\n    text = menu.read()\nprint(text)",
        "rule": "file_newline"
      }
    ]
  },
  {
    "id": "l61",
    "title": "Keep the old text",
    "icon": "\u2795",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Keep the old text",
        "body": "Append means add at the end without erasing what is already there. Mode \"a\" opens a file for appending. It also creates the file if it is missing.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Tea\")\nwith open(\"note.txt\", \"a\") as note:\n    note.write(\" and cake\")\nwith open(\"note.txt\", \"r\") as note:\n    text = note.read()\nprint(text)",
        "out": "Tea and cake"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Write the starting content with \"w\", close it, then open the same file with \"a\" and write more. Finally open it with \"r\" to see both pieces.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Tea\")\nwith open(\"note.txt\", \"a\") as note:\n    note.write(\" and cake\")\nwith open(\"note.txt\", \"r\") as note:\n    text = note.read()\nprint(text)",
        "out": "Tea and cake"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Tea\")\nwith open(\"note.txt\", \"a\") as note:\n    note.write(\" and cake\")\nwith open(\"note.txt\", \"r\") as note:\n    text = note.read()\nprint(text)",
        "expect": "Tea and cake"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Append does not insert a space or newline for you. Put the separator inside the new string. Using \"w\" for the second block would erase Tea.",
        "code": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Tea\")\nwith open(\"note.txt\", \"a\") as note:\n    note.write(\" and cake\")\nwith open(\"note.txt\", \"r\") as note:\n    text = note.read()\nprint(text)",
        "out": "Tea and cake"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which mode keeps existing text and writes at the end?",
        "options": [
          "\"r\"",
          "\"w\"",
          "\"a\""
        ],
        "answer": 2,
        "why": "\"a\" appends. \"w\" replaces, and \"r\" reads."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "with open(\"note.txt\", ",
        "post": ") as note:\n    note.write(\" and cake\")",
        "options": [
          "\"a\"",
          "\"r\"",
          "\"w\""
        ],
        "answer": "\"a\"",
        "why": "\"a\" appends. \"w\" replaces, and \"r\" reads."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Write starting text with \"w\", add different nonempty text to the same file with \"a\", then reopen with \"r\" and print the read content.",
        "starter": "",
        "hint": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Tea\")\nwith open(\"note.txt\", \"a\") as note:\n    note.write(\" and cake\")\nwith open(\"note.txt\", \"r\") as note:\n    text = note.read()\nprint(text)",
        "solution": "with open(\"note.txt\", \"w\") as note:\n    note.write(\"Tea\")\nwith open(\"note.txt\", \"a\") as note:\n    note.write(\" and cake\")\nwith open(\"note.txt\", \"r\") as note:\n    text = note.read()\nprint(text)",
        "rule": "file_append"
      }
    ]
  },
  {
    "id": "l62",
    "title": "Read one line at a time",
    "icon": "\ud83d\udcdc",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Read one line at a time",
        "body": "A file can be looped over. Each turn gives the next line as text. This is useful for a list of notes without reading the whole file into one string first.",
        "code": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        print(line, end=\"\")",
        "out": "Tea\nCake"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Inside the reading with block, for line in note: reads successive lines. Each line can include its ending newline. print(line, end=\"\") uses a named argument: end changes what print adds afterward. An empty end avoids adding another newline.",
        "code": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        print(line, end=\"\")",
        "out": "Tea\nCake"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        print(line, end=\"\")",
        "expect": "Tea\nCake"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "The for block is inside with, so it is indented once. print is inside for, so it is indented again. Without end=\"\", print adds another newline and you may see blank lines.",
        "code": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        print(line, end=\"\")",
        "out": "Tea\nCake"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Why use end=\"\" here?",
        "options": [
          "To erase the file",
          "To avoid extra newlines from print",
          "To stop the loop"
        ],
        "answer": 1,
        "why": "The file lines already end in a newline. An empty end prevents print from adding another."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "for line in ",
        "post": ":\n        print(line, end=\"\")",
        "options": [
          "note",
          "\"note\"",
          "note()"
        ],
        "answer": "note",
        "why": "The file lines already end in a newline. An empty end prevents print from adding another."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Create a file containing two lines using \\n. Reopen in \"r\" mode, loop over the open file and print each loop variable with end=\"\".",
        "starter": "",
        "hint": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        print(line, end=\"\")",
        "solution": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        print(line, end=\"\")",
        "rule": "file_loop"
      }
    ]
  },
  {
    "id": "l63",
    "title": "Count lines in a file",
    "icon": "\ud83e\uddee",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Count lines in a file",
        "body": "Combine a file loop with a counter. Start a count at 0, add 1 for each line, then show the count after closing the file. This counts lines, not words or characters.",
        "code": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\ncount = 0\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        count = count + 1\nprint(count)",
        "out": "2"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The update is count = count + 1 inside the loop. The final print is outside both blocks. A final newline ends the last line; it does not create an extra empty line by itself.",
        "code": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\ncount = 0\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        count = count + 1\nprint(count)",
        "out": "2"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\ncount = 0\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        count = count + 1\nprint(count)",
        "expect": "2"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Printing inside the loop shows each running count. For only the final total, move print back to the left edge. A blank line between two newline characters still counts as a line.",
        "code": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\ncount = 0\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        count = count + 1\nprint(count)",
        "out": "2"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "How many lines are in \"A\\nB\\n\"?",
        "options": [
          "1",
          "2",
          "3"
        ],
        "answer": 1,
        "why": "A ends at the first newline; B ends at the second. There is no third line of content."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "count = count ",
        "post": " 1",
        "options": [
          "+",
          "-",
          "*"
        ],
        "answer": "+",
        "why": "A ends at the first newline; B ends at the second. There is no third line of content."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Write a file with two lines, reopen it in \"r\", loop through it and increase a counter from 0 by 1 each turn. Print the final counter after the loop.",
        "starter": "",
        "hint": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\ncount = 0\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        count = count + 1\nprint(count)",
        "solution": "with open(\"list.txt\", \"w\") as note:\n    note.write(\"Tea\\nCake\\n\")\ncount = 0\nwith open(\"list.txt\", \"r\") as note:\n    for line in note:\n        count = count + 1\nprint(count)",
        "rule": "file_count"
      }
    ]
  },
  {
    "id": "l64",
    "title": "Build a tiny notebook",
    "icon": "\ud83d\udcd3",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Build a tiny notebook",
        "body": "Make a two-entry notebook using the file skills you now know: write, append, reopen, then loop through the lines. Each run builds a fresh practice notebook.",
        "code": "with open(\"notes.txt\", \"w\") as notes:\n    notes.write(\"Learn Python\\n\")\nwith open(\"notes.txt\", \"a\") as notes:\n    notes.write(\"Practise daily\\n\")\nwith open(\"notes.txt\", \"r\") as notes:\n    for entry in notes:\n        print(entry, end=\"\")",
        "out": "Learn Python\nPractise daily"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The first entry ends with \\n so the appended entry starts on its own line. Both entries end with \\n, and end=\"\" avoids doubled line breaks when displaying them.",
        "code": "with open(\"notes.txt\", \"w\") as notes:\n    notes.write(\"Learn Python\\n\")\nwith open(\"notes.txt\", \"a\") as notes:\n    notes.write(\"Practise daily\\n\")\nwith open(\"notes.txt\", \"r\") as notes:\n    for entry in notes:\n        print(entry, end=\"\")",
        "out": "Learn Python\nPractise daily"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "with open(\"notes.txt\", \"w\") as notes:\n    notes.write(\"Learn Python\\n\")\nwith open(\"notes.txt\", \"a\") as notes:\n    notes.write(\"Practise daily\\n\")\nwith open(\"notes.txt\", \"r\") as notes:\n    for entry in notes:\n        print(entry, end=\"\")",
        "expect": "Learn Python\nPractise daily"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "These are real files in Python memory, not permanent phone storage. To see the content in another Run, your code must create it again. Saving or downloading files is not part of this app yet.",
        "code": "with open(\"notes.txt\", \"w\") as notes:\n    notes.write(\"Learn Python\\n\")\nwith open(\"notes.txt\", \"a\") as notes:\n    notes.write(\"Practise daily\\n\")\nwith open(\"notes.txt\", \"r\") as notes:\n    for entry in notes:\n        print(entry, end=\"\")",
        "out": "Learn Python\nPractise daily"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which order keeps both entries?",
        "options": [
          "\"w\", then \"a\", then \"r\"",
          "\"w\", then \"w\", then \"r\"",
          "\"r\", then \"w\""
        ],
        "answer": 0,
        "why": "Create the first entry, append the second, then read without replacing either."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "with open(\"notes.txt\", ",
        "post": ") as notes:\n    notes.write(\"Practise daily\\n\")",
        "options": [
          "\"a\"",
          "\"w\"",
          "\"r\""
        ],
        "answer": "\"a\"",
        "why": "Create the first entry, append the second, then read without replacing either."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Write one line with \"w\" and append another with \"a\" to the same file. Include \\n in each entry. Reopen with \"r\", loop over the file, and print each entry with end=\"\".",
        "starter": "",
        "hint": "with open(\"notes.txt\", \"w\") as notes:\n    notes.write(\"Learn Python\\n\")\nwith open(\"notes.txt\", \"a\") as notes:\n    notes.write(\"Practise daily\\n\")\nwith open(\"notes.txt\", \"r\") as notes:\n    for entry in notes:\n        print(entry, end=\"\")",
        "solution": "with open(\"notes.txt\", \"w\") as notes:\n    notes.write(\"Learn Python\\n\")\nwith open(\"notes.txt\", \"a\") as notes:\n    notes.write(\"Practise daily\\n\")\nwith open(\"notes.txt\", \"r\") as notes:\n    for entry in notes:\n        print(entry, end=\"\")",
        "rule": "file_project"
      }
    ]
  }
];
