/* Unit 5: dictionaries. */
const UNIT5_LESSONS = [
  {
    "id": "l41",
    "title": "Make a dictionary",
    "icon": "\ud83d\uddc2\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Make a dictionary",
        "body": "A dictionary stores values under labels called keys. A key identifies one entry; its value is the information stored there. Think of a tiny address book: a name is the key, and an address is its value.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprint(person)",
        "out": "{'name': 'Ava', 'city': 'Delhi'}"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Curly braces { } create a dictionary. A colon joins each key to its value. Commas separate entries. Use quoted strings for keys in these lessons. {} is an empty dictionary.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprint(person)",
        "out": "{'name': 'Ava', 'city': 'Delhi'}"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprint(person)",
        "expect": "{'name': 'Ava', 'city': 'Delhi'}"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "List items sit between [ ]; dictionary entries sit between { }. Keys must be unique. If you write the same key twice, the later value replaces the earlier one.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprint(person)",
        "out": "{'name': 'Ava', 'city': 'Delhi'}"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "In {\"name\": \"Ava\"}, what is the key?",
        "options": [
          "Ava",
          "name",
          "Both"
        ],
        "answer": 1,
        "why": "name is the key, the label used to find the stored value Ava."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "person = {\"name\"",
        "post": " \"Ava\"}",
        "options": [
          ":",
          ",",
          "="
        ],
        "answer": ":",
        "why": "name is the key, the label used to find the stored value Ava."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store a dictionary with at least two distinct string keys and string values. Print the dictionary by its variable name.",
        "starter": "",
        "hint": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprint(person)",
        "solution": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprint(person)",
        "rule": "dict_make"
      }
    ]
  },
  {
    "id": "l42",
    "title": "Read by key",
    "icon": "\ud83d\udd11",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Read by key",
        "body": "Use a key to look up its value, like opening a labelled drawer. A list uses a numeric position; a dictionary uses its key.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprint(person[\"name\"])",
        "out": "Ava"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "person[\"name\"] means get the value under the key \"name\". The square brackets perform a lookup; the curly braces created the dictionary.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprint(person[\"name\"])",
        "out": "Ava"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprint(person[\"name\"])",
        "expect": "Ava"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "The key must match exactly, including case. person[\"Name\"] is different from person[\"name\"]. A missing key raises KeyError, meaning no entry has that key.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprint(person[\"name\"])",
        "out": "Ava"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does {\"pet\": \"cat\"}[\"pet\"] give?",
        "options": [
          "pet",
          "cat",
          "0"
        ],
        "answer": 1,
        "why": "The key pet points to the value cat."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "person",
        "post": "\n",
        "options": [
          "[\"name\"]",
          "(\"name\")",
          "{\"name\"}"
        ],
        "answer": "[\"name\"]",
        "why": "The key pet points to the value cat."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store a dictionary with string keys and values. Print one value by looking up an existing quoted key with square brackets.",
        "starter": "",
        "hint": "person = {\"name\": \"Noor\"}\nprint(person[\"name\"])",
        "solution": "person = {\"name\": \"Noor\"}\nprint(person[\"name\"])",
        "rule": "dict_read"
      }
    ]
  },
  {
    "id": "l43",
    "title": "Update an entry",
    "icon": "\u270f\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Update an entry",
        "body": "A dictionary entry can change. Assign a new value under an existing key, like replacing the information in one labelled drawer. The key stays the same.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nperson[\"city\"] = \"Mumbai\"\nprint(person[\"city\"])",
        "out": "Mumbai"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "person[\"city\"] = \"Mumbai\" changes the value under city. A later lookup of that key reads the new value. The other entries are unchanged.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nperson[\"city\"] = \"Mumbai\"\nprint(person[\"city\"])",
        "out": "Mumbai"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nperson[\"city\"] = \"Mumbai\"\nprint(person[\"city\"])",
        "expect": "Mumbai"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Use = to store the new value. == only compares values and will not update the dictionary. Keep quotes around a string key unless you are deliberately using a variable that stores that key.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nperson[\"city\"] = \"Mumbai\"\nprint(person[\"city\"])",
        "out": "Mumbai"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "After changing city, does the name entry also change?",
        "options": [
          "Yes",
          "No",
          "It is deleted"
        ],
        "answer": 1,
        "why": "Only the named key changes. Other entries keep their values."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "person[\"city\"] ",
        "post": " \"Mumbai\"",
        "options": [
          "=",
          "==",
          ":"
        ],
        "answer": "=",
        "why": "Only the named key changes. Other entries keep their values."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Create a dictionary with at least one string key and string value. Replace an existing key's value with a different string. Print the value under that key.",
        "starter": "",
        "hint": "person = {\"city\": \"Delhi\"}\nperson[\"city\"] = \"Mumbai\"\nprint(person[\"city\"])",
        "solution": "person = {\"city\": \"Delhi\"}\nperson[\"city\"] = \"Mumbai\"\nprint(person[\"city\"])",
        "rule": "dict_update"
      }
    ]
  },
  {
    "id": "l44",
    "title": "Add a new key",
    "icon": "\ud83c\udd95",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Add a new key",
        "body": "Assigning under a key that is not present adds an entry. A dictionary does not need append: it grows by giving a new key its value. Think of adding another labelled drawer.",
        "code": "person = {\"name\": \"Ava\"}\nperson[\"city\"] = \"Delhi\"\nprint(person)\nprint(len(person))",
        "out": "{'name': 'Ava', 'city': 'Delhi'}\n2"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "The same dictionary[key] = value form either replaces an existing key or creates a missing one. len(dictionary) counts how many entries there are.",
        "code": "person = {\"name\": \"Ava\"}\nperson[\"city\"] = \"Delhi\"\nprint(person)\nprint(len(person))",
        "out": "{'name': 'Ava', 'city': 'Delhi'}\n2"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "person = {\"name\": \"Ava\"}\nperson[\"city\"] = \"Delhi\"\nprint(person)\nprint(len(person))",
        "expect": "{'name': 'Ava', 'city': 'Delhi'}\n2"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Adding a new key increases the entry count. Replacing an old key does not. .append is a list method; dictionaries use key assignment instead.",
        "code": "person = {\"name\": \"Ava\"}\nperson[\"city\"] = \"Delhi\"\nprint(person)\nprint(len(person))",
        "out": "{'name': 'Ava', 'city': 'Delhi'}\n2"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "If a dictionary has one key and you add a different key, what is its length?",
        "options": [
          "1",
          "2",
          "0"
        ],
        "answer": 1,
        "why": "A new, distinct key adds one entry, so the count becomes two."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "person[\"city\"] ",
        "post": " \"Delhi\"",
        "options": [
          "=",
          "append",
          ":"
        ],
        "answer": "=",
        "why": "A new, distinct key adds one entry, so the count becomes two."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Start with a dictionary containing one or more string entries. Add a new string key with a string value. Print the whole dictionary and its length.",
        "starter": "",
        "hint": "person = {\"name\": \"Ava\"}\nperson[\"city\"] = \"Delhi\"\nprint(person)\nprint(len(person))",
        "solution": "person = {\"name\": \"Ava\"}\nperson[\"city\"] = \"Delhi\"\nprint(person)\nprint(len(person))",
        "rule": "dict_add"
      }
    ]
  },
  {
    "id": "l45",
    "title": "Is the key there?",
    "icon": "\u2753",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Is the key there?",
        "body": "in can ask whether a collection contains something. In a dictionary, it checks keys, not values. This is a membership test: a True-or-False question about belonging.",
        "code": "person = {\"name\": \"Ava\"}\nprint(\"name\" in person)\nif \"name\" in person:\n    print(person[\"name\"])",
        "out": "True\nAva"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "\"name\" in person checks whether name is a key. Put that comparison inside if to make a lookup only when the key exists. You have also seen in as part of a for loop; here it asks a question.",
        "code": "person = {\"name\": \"Ava\"}\nprint(\"name\" in person)\nif \"name\" in person:\n    print(person[\"name\"])",
        "out": "True\nAva"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "person = {\"name\": \"Ava\"}\nprint(\"name\" in person)\nif \"name\" in person:\n    print(person[\"name\"])",
        "expect": "True\nAva"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "\"Ava\" in person is False in this example because Ava is a value, not a key. Check the key before using square brackets when the entry might be missing.",
        "code": "person = {\"name\": \"Ava\"}\nprint(\"name\" in person)\nif \"name\" in person:\n    print(person[\"name\"])",
        "out": "True\nAva"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "For person = {\"name\": \"Ava\"}, what is \"Ava\" in person?",
        "options": [
          "True",
          "False",
          "Ava"
        ],
        "answer": 1,
        "why": "Dictionary membership checks keys. The only key is name."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "if \"name\" ",
        "post": " person:\n    print(person[\"name\"])",
        "options": [
          "in",
          "==",
          "for"
        ],
        "answer": "in",
        "why": "Dictionary membership checks keys. The only key is name."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Store a dictionary. Use if to check whether one of its string keys is in the dictionary. Inside that if, print the value under the same key.",
        "starter": "",
        "hint": "person = {\"name\": \"Noor\"}\nif \"name\" in person:\n    print(person[\"name\"])",
        "solution": "person = {\"name\": \"Noor\"}\nif \"name\" in person:\n    print(person[\"name\"])",
        "rule": "dict_in"
      }
    ]
  },
  {
    "id": "l46",
    "title": "A fallback value",
    "icon": "\ud83d\udedf",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "A fallback value",
        "body": "get reads a dictionary entry with a fallback for a missing key. It is like asking a drawer for a value, with a spare answer ready if that drawer is not there.",
        "code": "person = {\"name\": \"Ava\"}\nprint(person.get(\"city\", \"Unknown\"))",
        "out": "Unknown"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "person.get(\"city\", \"Unknown\") returns the city value if present, or the second argument if missing. get is a method, so the dot attaches it to the dictionary.",
        "code": "person = {\"name\": \"Ava\"}\nprint(person.get(\"city\", \"Unknown\"))",
        "out": "Unknown"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "person = {\"name\": \"Ava\"}\nprint(person.get(\"city\", \"Unknown\"))",
        "expect": "Unknown"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "get does not add the missing key or change the dictionary. Give a fallback explicitly for now. Without one, a missing key gives None, the no-result value you met with functions.",
        "code": "person = {\"name\": \"Ava\"}\nprint(person.get(\"city\", \"Unknown\"))",
        "out": "Unknown"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "After person.get(\"city\", \"Unknown\"), is a missing city key added?",
        "options": [
          "Yes",
          "No",
          "Only if you print it"
        ],
        "answer": 1,
        "why": "get reads or supplies a fallback; it does not store a new entry."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(person.",
        "post": "(\"city\", \"Unknown\"))",
        "options": [
          "get",
          "append",
          "len"
        ],
        "answer": "get",
        "why": "get reads or supplies a fallback; it does not store a new entry."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Create a dictionary. Use .get with a string key that is missing and a string fallback, and print the returned value.",
        "starter": "",
        "hint": "person = {\"name\": \"Ava\"}\nprint(person.get(\"city\", \"Not given\"))",
        "solution": "person = {\"name\": \"Ava\"}\nprint(person.get(\"city\", \"Not given\"))",
        "rule": "dict_get"
      }
    ]
  },
  {
    "id": "l47",
    "title": "Visit dictionary keys",
    "icon": "\ud83d\udeaa",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Visit dictionary keys",
        "body": "A for loop can visit dictionary keys one at a time. Then use each key to look up its value. Think of reading each label and opening its drawer.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nfor key in person:\n    print(key, person[key])",
        "out": "name Ava\ncity Delhi"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "In for key in person:, key receives a dictionary key on each turn. person[key] gets that key's value. Do not quote key: it is the loop variable.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nfor key in person:\n    print(key, person[key])",
        "out": "name Ava\ncity Delhi"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nfor key in person:\n    print(key, person[key])",
        "expect": "name Ava\ncity Delhi"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "A dictionary loop gives keys, not numeric positions. person[0] would look for a key equal to 0; it does not mean the first entry. Dictionary entries are visited in the order they were added.",
        "code": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nfor key in person:\n    print(key, person[key])",
        "out": "name Ava\ncity Delhi"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does key hold on the first turn of the example?",
        "options": [
          "0",
          "name",
          "Ava"
        ],
        "answer": 1,
        "why": "The first key added was name. The lookup person[key] then gets Ava."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "for key in person:\n    print(key, person[",
        "post": "])",
        "options": [
          "key",
          "\"key\"",
          "0"
        ],
        "answer": "key",
        "why": "The first key added was name. The lookup person[key] then gets Ava."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Make a dictionary with at least two string entries. Loop over its keys, and print each key with its value on that turn.",
        "starter": "",
        "hint": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nfor key in person:\n    print(key, person[key])",
        "solution": "person = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nfor key in person:\n    print(key, person[key])",
        "rule": "dict_loop"
      }
    ]
  },
  {
    "id": "l48",
    "title": "Profile card project",
    "icon": "\ud83e\udeaa",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Profile card project",
        "body": "Build a small profile card from labelled information. Start with two entries, update one, add another, then show each label and value. No new Python features in this project.",
        "code": "profile = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprofile[\"city\"] = \"Mumbai\"\nprofile[\"hobby\"] = \"reading\"\nfor key in profile:\n    print(key, profile[key])\nprint(\"Entries\", len(profile))",
        "out": "name Ava\ncity Mumbai\nhobby reading\nEntries 3"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Use { } to create, dictionary[key] = value to update or add, and for to visit keys. The final len count sits outside the loop so it prints once.",
        "code": "profile = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprofile[\"city\"] = \"Mumbai\"\nprofile[\"hobby\"] = \"reading\"\nfor key in profile:\n    print(key, profile[key])\nprint(\"Entries\", len(profile))",
        "out": "name Ava\ncity Mumbai\nhobby reading\nEntries 3"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "profile = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprofile[\"city\"] = \"Mumbai\"\nprofile[\"hobby\"] = \"reading\"\nfor key in profile:\n    print(key, profile[key])\nprint(\"Entries\", len(profile))",
        "expect": "name Ava\ncity Mumbai\nhobby reading\nEntries 3"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Use a new key to add an entry and an old key to update one. Reusing the old key twice will only replace it twice; the dictionary will not grow. The final total must not be indented into the loop.",
        "code": "profile = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprofile[\"city\"] = \"Mumbai\"\nprofile[\"hobby\"] = \"reading\"\nfor key in profile:\n    print(key, profile[key])\nprint(\"Entries\", len(profile))",
        "out": "name Ava\ncity Mumbai\nhobby reading\nEntries 3"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Why does this project have three entries at the end?",
        "options": [
          "Updating city adds a new entry",
          "Adding hobby creates the third key",
          "The loop copies every entry"
        ],
        "answer": 1,
        "why": "The two starting keys remain, and the new hobby key adds one. Updating city only changes its value."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(\"Entries\", ",
        "post": "(profile))",
        "options": [
          "len",
          "get",
          "range"
        ],
        "answer": "len",
        "why": "The two starting keys remain, and the new hobby key adds one. Updating city only changes its value."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Create at least two string-key/string-value entries. Change an existing value, add a new key, loop over the dictionary and print each key with its value. After the loop, print the dictionary length. Labels and values are your choice.",
        "starter": "",
        "hint": "profile = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprofile[\"city\"] = \"Mumbai\"\nprofile[\"hobby\"] = \"reading\"\nfor key in profile:\n    print(key, profile[key])\nprint(\"Entries\", len(profile))",
        "solution": "profile = {\"name\": \"Ava\", \"city\": \"Delhi\"}\nprofile[\"city\"] = \"Mumbai\"\nprofile[\"hobby\"] = \"reading\"\nfor key in profile:\n    print(key, profile[key])\nprint(\"Entries\", len(profile))",
        "rule": "dict_project"
      }
    ]
  }
];
