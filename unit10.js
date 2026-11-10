/* Unit 10: beginner steps, in order. */
const UNIT10_LESSONS = [
  {
    "id": "l80",
    "title": "A list of records",
    "icon": "\ud83d\uddc2\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "A list of records",
        "body": "A record groups facts about one thing. A dictionary can be a record for one book, while a list holds several book records in order. You already know both containers; now put one inside the other.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books)",
        "out": "[{'title': 'Sky', 'pages': 20}, {'title': 'Sea', 'pages': 30}]"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The outer square brackets hold the list. Each pair of curly braces is one dictionary. Separate records with commas. Here title is text and pages is a number: dictionary values need not all have the same type.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books)",
        "out": "[{'title': 'Sky', 'pages': 20}, {'title': 'Sea', 'pages': 30}]"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books)",
        "expect": "[{'title': 'Sky', 'pages': 20}, {'title': 'Sea', 'pages': 30}]"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Keep each book's fields inside its own dictionary. A missing comma between records is a syntax error. Reusing a key inside ONE dictionary replaces its earlier value, so use distinct field names.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books)",
        "out": "[{'title': 'Sky', 'pages': 20}, {'title': 'Sea', 'pages': 30}]"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does the outer list contain?",
        "options": [
          "Two dictionaries",
          "Two individual letters",
          "One number"
        ],
        "answer": 0,
        "why": "Each item is a dictionary describing one book."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "books = ",
        "post": "\nprint(books)",
        "options": [
          "[{\"title\": \"Sky\"}, {\"title\": \"Sea\"}]",
          "{\"title\": \"Sky\"}",
          "\"books\""
        ],
        "answer": "[{\"title\": \"Sky\"}, {\"title\": \"Sea\"}]",
        "why": "Each item is a dictionary describing one book."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store a list containing at least two dictionaries. Each must have a string title and positive numeric pages. Print the list.",
        "starter": "",
        "hint": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books)",
        "solution": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books)",
        "rule": "record_make"
      }
    ]
  },
  {
    "id": "l81",
    "title": "Pick a field in a record",
    "icon": "\ud83d\udd0d",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Pick a field in a record",
        "body": "Use a list index to choose a record, then a dictionary key to choose its field. These are two separate lookups, like finding a folder then reading its label.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "books[0] is the first dictionary. books[0][\"title\"] reads its title. The numeric position and quoted key have different jobs.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books[0][\"title\"])",
        "expect": "Sky"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Index 0 picks the first record, not the first letter of its title. A nonexistent position raises IndexError; a missing field key raises KeyError.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books[0][\"title\"])",
        "out": "Sky"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does books[0] return here?",
        "options": [
          "The first dictionary",
          "The text Sky directly",
          "The number of records"
        ],
        "answer": 0,
        "why": "The first lookup selects a whole record; the second lookup selects a field."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(books[0][",
        "post": "])",
        "options": [
          "\"title\"",
          "0",
          "title"
        ],
        "answer": "\"title\"",
        "why": "The first lookup selects a whole record; the second lookup selects a field."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Create at least two book dictionaries in a list. Print the first record's title using [0][\"title\"].",
        "starter": "",
        "hint": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books[0][\"title\"])",
        "solution": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nprint(books[0][\"title\"])",
        "rule": "record_read"
      }
    ]
  },
  {
    "id": "l82",
    "title": "Visit every record",
    "icon": "\ud83d\udeb6",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Visit every record",
        "body": "Loop directly over the list to receive one dictionary each turn. The loop variable is now a whole record, so use a key to read a field from it.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    print(book[\"title\"])",
        "out": "Sky\nSea"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "for book in books: assigns each dictionary to book in order. book[\"title\"] reads that turn's title. Indent the print inside the loop.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    print(book[\"title\"])",
        "out": "Sky\nSea"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    print(book[\"title\"])",
        "expect": "Sky\nSea"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Do not write books[\"title\"]: books is a list, not one record. Use the loop variable book for the dictionary you are visiting.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    print(book[\"title\"])",
        "out": "Sky\nSea"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What is book on each turn?",
        "options": [
          "One dictionary from the list",
          "Always the full list",
          "A list index automatically"
        ],
        "answer": 0,
        "why": "Direct list iteration gives each item, which here is a dictionary."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(book[",
        "post": "])",
        "options": [
          "\"title\"",
          "books",
          "0"
        ],
        "answer": "\"title\"",
        "why": "Direct list iteration gives each item, which here is a dictionary."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Create at least two book records. Loop over the list and print each record's title using the loop variable.",
        "starter": "",
        "hint": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    print(book[\"title\"])",
        "solution": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    print(book[\"title\"])",
        "rule": "record_loop"
      }
    ]
  },
  {
    "id": "l83",
    "title": "Add and update records",
    "icon": "\u270f\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Add and update records",
        "body": "append adds a new dictionary to the list. A field assignment changes one existing record. Combining these lets a catalogue grow and change.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nbooks[0][\"pages\"] = 25\nbooks.append({\"title\": \"Moon\", \"pages\": 40})\nprint(books[0][\"pages\"])\nprint(len(books))",
        "out": "25\n3"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "books[0][\"pages\"] = 25 changes the first book. books.append({...}) adds another record at the end without replacing the earlier ones.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nbooks[0][\"pages\"] = 25\nbooks.append({\"title\": \"Moon\", \"pages\": 40})\nprint(books[0][\"pages\"])\nprint(len(books))",
        "out": "25\n3"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nbooks[0][\"pages\"] = 25\nbooks.append({\"title\": \"Moon\", \"pages\": 40})\nprint(books[0][\"pages\"])\nprint(len(books))",
        "expect": "25\n3"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "append takes one item. Here that item is the whole new dictionary. Updating books[0] itself would replace the whole record; using a second lookup changes just one field.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nbooks[0][\"pages\"] = 25\nbooks.append({\"title\": \"Moon\", \"pages\": 40})\nprint(books[0][\"pages\"])\nprint(len(books))",
        "out": "25\n3"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which adds one new book record?",
        "options": [
          "books.append({\"title\": \"Moon\", \"pages\": 40})",
          "books[0][\"pages\"] = 40",
          "print(books)"
        ],
        "answer": 0,
        "why": "append adds a new list item; the field assignment only edits an existing item."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "books.",
        "post": "({\"title\": \"Moon\", \"pages\": 40})",
        "options": [
          "append",
          "write",
          "get"
        ],
        "answer": "append",
        "why": "append adds a new list item; the field assignment only edits an existing item."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Create two or more book records. Change the first record's pages to a different positive number, append a new valid record, then print the changed pages and list length.",
        "starter": "",
        "hint": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nbooks[0][\"pages\"] = 25\nbooks.append({\"title\": \"Moon\", \"pages\": 40})\nprint(books[0][\"pages\"])\nprint(len(books))",
        "solution": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nbooks[0][\"pages\"] = 25\nbooks.append({\"title\": \"Moon\", \"pages\": 40})\nprint(books[0][\"pages\"])\nprint(len(books))",
        "rule": "record_update"
      }
    ]
  },
  {
    "id": "l84",
    "title": "Select records by a field",
    "icon": "\ud83c\udfaf",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Select records by a field",
        "body": "An if inside a record loop can choose matching books. Compare a numeric field to a limit, then show only the records that meet it.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    if book[\"pages\"] > 25:\n        print(book[\"title\"])",
        "out": "Sea"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "book[\"pages\"] > 25 checks each book's page count. The if is indented inside for, and its print is indented again.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    if book[\"pages\"] > 25:\n        print(book[\"title\"])",
        "out": "Sea"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    if book[\"pages\"] > 25:\n        print(book[\"title\"])",
        "expect": "Sea"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Store pages as numbers, not quoted digit strings. Numeric comparison needs numeric values. Use the current book for both the test and the printed title.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    if book[\"pages\"] > 25:\n        print(book[\"title\"])",
        "out": "Sea"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which title is printed here?",
        "options": [
          "Sky",
          "Sea",
          "Both"
        ],
        "answer": 1,
        "why": "Only Sea has a page count above 25."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "if book[\"pages\"] ",
        "post": " 25:",
        "options": [
          ">",
          "=",
          "in"
        ],
        "answer": ">",
        "why": "Only Sea has a page count above 25."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Create at least two book records with numeric pages, including one above 25 and one at or below 25. Loop over them and print titles only inside if book[\"pages\"] > 25.",
        "starter": "",
        "hint": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    if book[\"pages\"] > 25:\n        print(book[\"title\"])",
        "solution": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\nfor book in books:\n    if book[\"pages\"] > 25:\n        print(book[\"title\"])",
        "rule": "record_filter"
      }
    ]
  },
  {
    "id": "l85",
    "title": "Total the pages",
    "icon": "\ud83d\udcda",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Total the pages",
        "body": "A running total can add a numeric field from every record. Start at 0, add the pages on each turn, then print once after the loop.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntotal = 0\nfor book in books:\n    total = total + book[\"pages\"]\nprint(total)",
        "out": "50"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "total = total + book[\"pages\"] uses the old total and the current record. Print total outside the loop to show the final sum rather than each intermediate value.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntotal = 0\nfor book in books:\n    total = total + book[\"pages\"]\nprint(total)",
        "out": "50"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntotal = 0\nfor book in books:\n    total = total + book[\"pages\"]\nprint(total)",
        "expect": "50"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Adding 1 would count books, not pages. Printing len(books) also counts records. To total pages, add the pages field from each record.",
        "code": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntotal = 0\nfor book in books:\n    total = total + book[\"pages\"]\nprint(total)",
        "out": "50"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What should be added on each turn?",
        "options": [
          "1",
          "book[\"pages\"]",
          "len(books)"
        ],
        "answer": 1,
        "why": "Each record contributes its numeric pages to the running total."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "total = total + book[",
        "post": "]",
        "options": [
          "\"pages\"",
          "\"title\"",
          "0"
        ],
        "answer": "\"pages\"",
        "why": "Each record contributes its numeric pages to the running total."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Create at least two book records. Start a total at 0, loop through them, add each pages field to the total, and print the final total outside the loop.",
        "starter": "",
        "hint": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntotal = 0\nfor book in books:\n    total = total + book[\"pages\"]\nprint(total)",
        "solution": "books = [{\"title\": \"Sky\", \"pages\": 20}, {\"title\": \"Sea\", \"pages\": 30}]\ntotal = 0\nfor book in books:\n    total = total + book[\"pages\"]\nprint(total)",
        "rule": "record_total"
      }
    ]
  }
];
