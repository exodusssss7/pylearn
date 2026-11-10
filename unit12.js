/* Unit 12: beginner steps, in order. */
const UNIT12_LESSONS = [
  {
    "id": "l92",
    "title": "Project: a reading tracker",
    "icon": "\ud83d\udcd8",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Project: a reading tracker",
        "body": "Build a small reading tracker in stages, not one giant leap. It will store book records, total their pages, accept one new book, and make a JSON file round trip. First give the tracker its own list using a class.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.books[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "__init__(self, books) receives the list and stores self.books. Tracker([...]) creates a tracker with starting records. The list belongs to that tracker; avoid a shared mutable class default.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.books[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.books[0][\"title\"])",
        "expect": "Sky"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Unlike the first class examples, the received value is now a list. Store self.books = books, not books = books. This is an in-memory tracker; permanent saving is not part of this app.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.books[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Where should the book list be stored?",
        "options": [
          "self.books in __init__",
          "Only in the string \"books\"",
          "In the class name"
        ],
        "answer": 0,
        "why": "An instance attribute lets each tracker carry its own list."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "self.books ",
        "post": " books",
        "options": [
          "=",
          "==",
          ":"
        ],
        "answer": "=",
        "why": "An instance attribute lets each tracker carry its own list."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a tracker class with __init__ receiving and storing a book list. Create an instance with at least two valid book records, then print its first book title.",
        "starter": "",
        "hint": "class Tracker:\n    def __init__(self, books):\n        self.books = books\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.books[0][\"title\"])",
        "solution": "class Tracker:\n    def __init__(self, books):\n        self.books = books\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.books[0][\"title\"])",
        "rule": "project_store"
      }
    ]
  },
  {
    "id": "l93",
    "title": "Project: total method",
    "icon": "\ud83e\uddee",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Project: total method",
        "body": "Add a method that totals the pages in the tracker's records. It combines a method, a list loop, dictionary lookup, a running total and return. All those pieces were introduced earlier.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.total_pages())",
        "out": "50"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Loop over self.books inside total_pages(self). Add book[\"pages\"] to total, then return after the loop. The outside print calls tracker.total_pages() to display the result.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.total_pages())",
        "out": "50"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.total_pages())",
        "expect": "50"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Return must be outside for but inside the method. Returning inside the loop would stop after the first book. Use self.books, not an unrelated global list.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.total_pages())",
        "out": "50"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Why return after the loop?",
        "options": [
          "So every record contributes",
          "To count only the first book",
          "To erase the list"
        ],
        "answer": 0,
        "why": "The loop must finish before returning the completed sum."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "for book in ",
        "post": ":",
        "options": [
          "self.books",
          "\"self.books\"",
          "Tracker"
        ],
        "answer": "self.books",
        "why": "The loop must finish before returning the completed sum."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Build a tracker storing a list of at least two book records. Add a no-extra-argument method that totals pages from self.books and returns the total after its loop. Print the instance method result.",
        "starter": "",
        "hint": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.total_pages())",
        "solution": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\nprint(tracker.total_pages())",
        "rule": "project_total"
      }
    ]
  },
  {
    "id": "l94",
    "title": "Project: add a valid book",
    "icon": "\ud83d\udcdd",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Project: add a valid book",
        "body": "Now read a title and a whole-number page count. Handle invalid number text, reject nonpositive counts with if, and append a record only on success. The sample answers are Moon and 40.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n        print(len(tracker.books))\n    else:\n        print(\"Pages must be positive\")",
        "out": "3",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The add method receives title and pages and appends one dictionary. In the main program, try converts pages, except handles invalid text, and else validates the numeric value before calling add.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n        print(len(tracker.books))\n    else:\n        print(\"Pages must be positive\")",
        "out": "3",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n        print(len(tracker.books))\n    else:\n        print(\"Pages must be positive\")",
        "expect": "3",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "A successful int conversion can still produce 0 or a negative number. except handles conversion; if checks the value. This version allows any title text, including blank text. It handles one attempted addition, not a repeating menu.",
        "code": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n        print(len(tracker.books))\n    else:\n        print(\"Pages must be positive\")",
        "out": "3",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Where is a numeric zero rejected?",
        "options": [
          "The if/else value check",
          "int always rejects zero",
          "The title input"
        ],
        "answer": 0,
        "why": "Zero is valid integer text but not a positive page count.",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "if pages ",
        "post": " 0:",
        "options": [
          ">",
          "=",
          "<"
        ],
        "answer": ">",
        "why": "Zero is valid integer text but not a positive page count.",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Build a tracker with a stored book list and an add method appending title/pages. Read title, then int(input()) pages in try. Catch ValueError. In else, add only if pages > 0 and print the new list length; otherwise print a helpful message.",
        "starter": "",
        "hint": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n        print(len(tracker.books))\n    else:\n        print(\"Pages must be positive\")",
        "solution": "class Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n        print(len(tracker.books))\n    else:\n        print(\"Pages must be positive\")",
        "rule": "project_add",
        "inputs": [
          "Moon",
          "40"
        ]
      }
    ]
  },
  {
    "id": "l95",
    "title": "Project: a JSON file round trip",
    "icon": "\ud83d\udcbe",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Project: a JSON file round trip",
        "body": "Practise saving and reloading the tracker data within one program. Serialize the records, write the JSON text, reopen the same file, and decode its text. The temporary file still resets on the next Run.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = json.loads(saved.read())\nprint(restored[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "json.dumps makes text, file.write stores it, file.read gets the text back, and json.loads reconstructs records. Use the same filename for both with blocks.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = json.loads(saved.read())\nprint(restored[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = json.loads(saved.read())\nprint(restored[0][\"title\"])",
        "expect": "Sky"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "This demonstrates Python file operations, not permanent app saving. The JSON file contains only your known practice records. Loading arbitrary files would need extra error handling and data-shape validation before using title/pages.",
        "code": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = json.loads(saved.read())\nprint(restored[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which turns the read JSON text back into records?",
        "options": [
          "json.loads",
          "json.dumps",
          "open alone"
        ],
        "answer": 0,
        "why": "loads reconstructs values from JSON text; opening a file alone does not decode it."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "restored = json.",
        "post": "(saved.read())",
        "options": [
          "loads",
          "dumps",
          "write"
        ],
        "answer": "loads",
        "why": "loads reconstructs values from JSON text; opening a file alone does not decode it."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Import json and create at least two book records. Write json.dumps(records) to a practice file with \"w\". Reopen the same file with \"r\", decode its read text with json.loads, then print the first restored title.",
        "starter": "",
        "hint": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = json.loads(saved.read())\nprint(restored[0][\"title\"])",
        "solution": "import json\nbooks = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = json.loads(saved.read())\nprint(restored[0][\"title\"])",
        "rule": "project_file"
      }
    ]
  },
  {
    "id": "l96",
    "title": "Final project: your tracker",
    "icon": "\ud83c\udfc6",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Final project: your tracker",
        "body": "Put the stages together. A tracker object stores books and provides add and total methods. Read one new book, handle conversion and positive-page validation, write and reload JSON, then list the restored books and total pages.",
        "code": "import json\nclass Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n    else:\n        print(\"Pages must be positive\")\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(tracker.books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = Tracker(json.loads(saved.read()))\nfor book in restored.books:\n    print(book[\"title\"], book[\"pages\"])\nprint(\"Total pages\", restored.total_pages())",
        "out": "Sky 20\nSea 30\nMoon 40\nTotal pages 90",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Follow the program in sections: import, class, starting data, input handling, file round trip, report. The example supplies Moon then 40. Invalid text or a nonpositive page count leaves the original list unchanged; the program still reports it. The hint contains the complete example to build from. Any book titles and positive starting counts are fine.",
        "code": "import json\nclass Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n    else:\n        print(\"Pages must be positive\")\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(tracker.books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = Tracker(json.loads(saved.read()))\nfor book in restored.books:\n    print(book[\"title\"], book[\"pages\"])\nprint(\"Total pages\", restored.total_pages())",
        "out": "Sky 20\nSea 30\nMoon 40\nTotal pages 90",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "import json\nclass Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n    else:\n        print(\"Pages must be positive\")\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(tracker.books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = Tracker(json.loads(saved.read()))\nfor book in restored.books:\n    print(book[\"title\"], book[\"pages\"])\nprint(\"Total pages\", restored.total_pages())",
        "expect": "Sky 20\nSea 30\nMoon 40\nTotal pages 90",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "This is the final project of this beginner path, not all of Python. It accepts one addition per Run; it is not a permanent library app or a menu system. Only known data from this same program is decoded. Input answers and practice files are not saved across Runs.",
        "code": "import json\nclass Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n    else:\n        print(\"Pages must be positive\")\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(tracker.books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = Tracker(json.loads(saved.read()))\nfor book in restored.books:\n    print(book[\"title\"], book[\"pages\"])\nprint(\"Total pages\", restored.total_pages())",
        "out": "Sky 20\nSea 30\nMoon 40\nTotal pages 90",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Why report from restored rather than the old tracker?",
        "options": [
          "To use the data that came back from the file",
          "Because the old tracker is always broken",
          "To avoid using a class"
        ],
        "answer": 0,
        "why": "Reporting from the restored object demonstrates the complete save/read/decode path.",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(\"Total pages\", restored.",
        "post": "())",
        "options": [
          "total_pages",
          "add",
          "books"
        ],
        "answer": "total_pages",
        "why": "Reporting from the restored object demonstrates the complete save/read/decode path.",
        "inputs": [
          "Moon",
          "40"
        ]
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Combine the previous stages: import json; define a tracker class storing books, an add(title, pages) method and a returning page-total method. Start with two book records. Read title then pages, catch ValueError and add only positive pages. Write tracker records as JSON, reload into a new tracker, loop over its books to print title and pages, and print its total method result. Supply title then page text. Use the hint as a complete starting example.",
        "starter": "",
        "hint": "import json\nclass Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n    else:\n        print(\"Pages must be positive\")\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(tracker.books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = Tracker(json.loads(saved.read()))\nfor book in restored.books:\n    print(book[\"title\"], book[\"pages\"])\nprint(\"Total pages\", restored.total_pages())",
        "solution": "import json\nclass Tracker:\n    def __init__(self, books):\n        self.books = books\n    def add(self, title, pages):\n        self.books.append({\"title\": title, \"pages\": pages})\n    def total_pages(self):\n        total = 0\n        for book in self.books:\n            total = total + book[\"pages\"]\n        return total\ntracker = Tracker([{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}])\ntitle = input()\ntry:\n    pages = int(input())\nexcept ValueError:\n    print(\"Use whole-number pages\")\nelse:\n    if pages > 0:\n        tracker.add(title, pages)\n    else:\n        print(\"Pages must be positive\")\nwith open(\"books.json\", \"w\") as saved:\n    saved.write(json.dumps(tracker.books))\nwith open(\"books.json\", \"r\") as saved:\n    restored = Tracker(json.loads(saved.read()))\nfor book in restored.books:\n    print(book[\"title\"], book[\"pages\"])\nprint(\"Total pages\", restored.total_pages())",
        "rule": "project_final",
        "inputs": [
          "Moon",
          "40"
        ]
      }
    ]
  }
];
