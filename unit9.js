/* Unit 9: beginner steps, in order. */
const UNIT9_LESSONS = [
  {
    "id": "l72",
    "title": "A class is a blueprint",
    "icon": "\ud83c\udfd7\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "A class is a blueprint",
        "body": "A class describes a kind of object. Think of a blueprint for many name badges. An object made from that class is called an instance. Start with one shared attribute, a named value on the class.",
        "code": "class Badge:\n    label = \"Learner\"\nbadge = Badge()\nprint(badge.label)",
        "out": "Learner"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "class Badge: defines the class. Indent label = \"Learner\" inside. badge = Badge() creates an instance. badge.label uses a dot to read the attribute. Class names conventionally start with a capital letter.",
        "code": "class Badge:\n    label = \"Learner\"\nbadge = Badge()\nprint(badge.label)",
        "out": "Learner"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "class Badge:\n    label = \"Learner\"\nbadge = Badge()\nprint(badge.label)",
        "expect": "Learner"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Badge is the class; Badge() makes an instance. label is an attribute, not a dictionary key, so use badge.label without quotes or square brackets. This simple starting value is a class attribute, shared by lookup until an instance overrides it.",
        "code": "class Badge:\n    label = \"Learner\"\nbadge = Badge()\nprint(badge.label)",
        "out": "Learner"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does Badge() create?",
        "options": [
          "An instance of Badge",
          "A string containing Badge",
          "A dictionary automatically"
        ],
        "answer": 0,
        "why": "Calling a class creates an object of that class."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "badge = Badge",
        "post": "\nprint(badge.label)",
        "options": [
          "()",
          "[]",
          ":"
        ],
        "answer": "()",
        "why": "Calling a class creates an object of that class."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a class with one nonempty string attribute. Create an instance using ClassName(), then print that instance attribute with dot notation.",
        "starter": "",
        "hint": "class Badge:\n    label = \"Learner\"\nbadge = Badge()\nprint(badge.label)",
        "solution": "class Badge:\n    label = \"Learner\"\nbadge = Badge()\nprint(badge.label)",
        "rule": "class_make"
      }
    ]
  },
  {
    "id": "l73",
    "title": "Give an object its own value",
    "icon": "\ud83c\udff7\ufe0f",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Give an object its own value",
        "body": "Assigning an attribute on an instance gives that object its own value. Two badges can start from the same blueprint but show different labels.",
        "code": "class Badge:\n    label = \"Learner\"\na = Badge()\nb = Badge()\na.label = \"Ava\"\nprint(a.label)\nprint(b.label)",
        "out": "Ava\nLearner"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "a.label = \"Ava\" assigns to one object. b = Badge() creates another object. Its label still comes from the class default, because only a was changed.",
        "code": "class Badge:\n    label = \"Learner\"\na = Badge()\nb = Badge()\na.label = \"Ava\"\nprint(a.label)\nprint(b.label)",
        "out": "Ava\nLearner"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "class Badge:\n    label = \"Learner\"\na = Badge()\nb = Badge()\na.label = \"Ava\"\nprint(a.label)\nprint(b.label)",
        "expect": "Ava\nLearner"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Use a.label to change a, not Badge.label which changes the class default. Do not assume every shared mutable value is safe: later use __init__ for per-object data. Here labels are simple strings.",
        "code": "class Badge:\n    label = \"Learner\"\na = Badge()\nb = Badge()\na.label = \"Ava\"\nprint(a.label)\nprint(b.label)",
        "out": "Ava\nLearner"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "After changing a.label, what is b.label here?",
        "options": [
          "Ava",
          "Learner",
          "Missing"
        ],
        "answer": 1,
        "why": "Only a received its own label. b still reads the default Learner."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "a.label ",
        "post": " \"Ava\"",
        "options": [
          "=",
          "==",
          ":"
        ],
        "answer": "=",
        "why": "Only a received its own label. b still reads the default Learner."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Create a class with a string attribute and two separate instances. Override that attribute on only the first instance, then print the attribute on both instances.",
        "starter": "",
        "hint": "class Badge:\n    label = \"Learner\"\na = Badge()\nb = Badge()\na.label = \"Ava\"\nprint(a.label)\nprint(b.label)",
        "solution": "class Badge:\n    label = \"Learner\"\na = Badge()\nb = Badge()\na.label = \"Ava\"\nprint(a.label)\nprint(b.label)",
        "rule": "class_attribute"
      }
    ]
  },
  {
    "id": "l74",
    "title": "Objects can do things",
    "icon": "\ud83e\udd16",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Objects can do things",
        "body": "A method is a function defined inside a class. When called through an object, it receives that object as its first argument. Convention calls this parameter self.",
        "code": "class Badge:\n    label = \"Learner\"\n    def show(self):\n        print(self.label)\nbadge = Badge()\nbadge.show()",
        "out": "Learner"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "def show(self): is indented inside the class. print(self.label) is indented inside the method. badge.show() calls it; Python supplies badge as self automatically.",
        "code": "class Badge:\n    label = \"Learner\"\n    def show(self):\n        print(self.label)\nbadge = Badge()\nbadge.show()",
        "out": "Learner"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "class Badge:\n    label = \"Learner\"\n    def show(self):\n        print(self.label)\nbadge = Badge()\nbadge.show()",
        "expect": "Learner"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Include self in the method definition, but do not pass it manually in badge.show(). self is an ordinary parameter name used by convention. It refers to the particular object receiving the call.",
        "code": "class Badge:\n    label = \"Learner\"\n    def show(self):\n        print(self.label)\nbadge = Badge()\nbadge.show()",
        "out": "Learner"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "In badge.show(), what does self refer to?",
        "options": [
          "The badge object",
          "The class name as text",
          "Every badge at once"
        ],
        "answer": 0,
        "why": "Python passes badge into the first parameter of the method."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "def show(",
        "post": "):\n        print(self.label)",
        "options": [
          "self",
          "\"self\"",
          "badge()"
        ],
        "answer": "self",
        "why": "Python passes badge into the first parameter of the method."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a class with a string attribute and a no-extra-argument method that prints self.attribute. Create an instance and call its method with ().",
        "starter": "",
        "hint": "class Badge:\n    label = \"Learner\"\n    def show(self):\n        print(self.label)\nbadge = Badge()\nbadge.show()",
        "solution": "class Badge:\n    label = \"Learner\"\n    def show(self):\n        print(self.label)\nbadge = Badge()\nbadge.show()",
        "rule": "class_method"
      }
    ]
  },
  {
    "id": "l75",
    "title": "Set up each new object",
    "icon": "\ud83c\udf92",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Set up each new object",
        "body": "__init__ is a special setup method. Python calls it automatically when a new instance is created. Use it to give every object its own starting data.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\nbadge = Badge(\"Ava\")\nprint(badge.label)",
        "out": "Ava"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "There are TWO underscores before and after init. def __init__(self, label): receives the object and a supplied value. self.label = label stores that value on the object. Badge(\"Ava\") supplies the label.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\nbadge = Badge(\"Ava\")\nprint(badge.label)",
        "out": "Ava"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\nbadge = Badge(\"Ava\")\nprint(badge.label)",
        "expect": "Ava"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "label is the local parameter; self.label is the stored attribute. Writing label = label would not save it on the object. __init__ should not return a value; it sets up the object.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\nbadge = Badge(\"Ava\")\nprint(badge.label)",
        "out": "Ava"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What stores the received label on the object?",
        "options": [
          "self.label = label",
          "label = label",
          "print(label)"
        ],
        "answer": 0,
        "why": "self.label belongs to the object and remains available after setup finishes."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "def ",
        "post": "(self, label):\n        self.label = label",
        "options": [
          "__init__",
          "init",
          "__init"
        ],
        "answer": "__init__",
        "why": "self.label belongs to the object and remains available after setup finishes."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define __init__(self, name) inside a class and store self.name = name. Create an instance with a string argument and print its stored attribute. Choose your own class, parameter and attribute names.",
        "starter": "",
        "hint": "class Badge:\n    def __init__(self, label):\n        self.label = label\nbadge = Badge(\"Ava\")\nprint(badge.label)",
        "solution": "class Badge:\n    def __init__(self, label):\n        self.label = label\nbadge = Badge(\"Ava\")\nprint(badge.label)",
        "rule": "class_init"
      }
    ]
  },
  {
    "id": "l76",
    "title": "Pass a value to a method",
    "icon": "\ud83d\udce8",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Pass a value to a method",
        "body": "A method can receive extra arguments just like a function. self is supplied automatically; you pass the other values. Use this to change an object through a named action.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def rename(self, new_label):\n        self.label = new_label\nbadge = Badge(\"Learner\")\nbadge.rename(\"Builder\")\nprint(badge.label)",
        "out": "Builder"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "rename(self, new_label) has two parameters. badge.rename(\"Builder\") supplies only new_label. Inside, self.label = new_label updates that particular object.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def rename(self, new_label):\n        self.label = new_label\nbadge = Badge(\"Learner\")\nbadge.rename(\"Builder\")\nprint(badge.label)",
        "out": "Builder"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def rename(self, new_label):\n        self.label = new_label\nbadge = Badge(\"Learner\")\nbadge.rename(\"Builder\")\nprint(badge.label)",
        "expect": "Builder"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Do not call badge.rename(badge, \"Builder\"). The object is already supplied. Keep methods aligned with __init__, not nested inside it, so both belong to the class.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def rename(self, new_label):\n        self.label = new_label\nbadge = Badge(\"Learner\")\nbadge.rename(\"Builder\")\nprint(badge.label)",
        "out": "Builder"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "How many values do you pass in badge.rename(\"Builder\")?",
        "options": [
          "One: the new label",
          "Two: self and the label",
          "None"
        ],
        "answer": 0,
        "why": "The caller passes the label. Python passes the object automatically."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "badge.rename(",
        "post": ")",
        "options": [
          "\"Builder\"",
          "self, \"Builder\"",
          "Badge"
        ],
        "answer": "\"Builder\"",
        "why": "The caller passes the label. Python passes the object automatically."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Use __init__ to store a string attribute. Add another method with self and one extra parameter that updates that attribute. Create an instance, call the update method with different text, then print the changed attribute.",
        "starter": "",
        "hint": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def rename(self, new_label):\n        self.label = new_label\nbadge = Badge(\"Learner\")\nbadge.rename(\"Builder\")\nprint(badge.label)",
        "solution": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def rename(self, new_label):\n        self.label = new_label\nbadge = Badge(\"Learner\")\nbadge.rename(\"Builder\")\nprint(badge.label)",
        "rule": "class_update"
      }
    ]
  },
  {
    "id": "l77",
    "title": "Return from a method",
    "icon": "\ud83c\udf81",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Return from a method",
        "body": "Methods can return values, just like your earlier functions. A return sends a result to the caller. It does not display the result, so print it outside the method.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def message(self):\n        return \"Hello \" + self.label\nbadge = Badge(\"Ava\")\nprint(badge.message())",
        "out": "Hello Ava"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "message(self) returns text joined to self.label. badge.message() receives that string. print(badge.message()) displays it. The method reads data from its own object.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def message(self):\n        return \"Hello \" + self.label\nbadge = Badge(\"Ava\")\nprint(badge.message())",
        "out": "Hello Ava"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def message(self):\n        return \"Hello \" + self.label\nbadge = Badge(\"Ava\")\nprint(badge.message())",
        "expect": "Hello Ava"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "print inside a method and return are different. If you print inside without returning, an outer print of the method result shows None afterward. Here the method returns and only the outer print displays.",
        "code": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def message(self):\n        return \"Hello \" + self.label\nbadge = Badge(\"Ava\")\nprint(badge.message())",
        "out": "Hello Ava"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "What does return do here?",
        "options": [
          "Displays text itself",
          "Sends a string to the caller",
          "Changes the class name"
        ],
        "answer": 1,
        "why": "The caller receives the returned value and can print or store it."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "return \"Hello \" + ",
        "post": "\n",
        "options": [
          "self.label",
          "\"self.label\"",
          "self()"
        ],
        "answer": "self.label",
        "why": "The caller receives the returned value and can print or store it."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Use __init__ to store a string attribute. Add a no-extra-argument method returning a nonempty string joined to self.attribute. Create an instance and print the method call result.",
        "starter": "",
        "hint": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def message(self):\n        return \"Hello \" + self.label\nbadge = Badge(\"Ava\")\nprint(badge.message())",
        "solution": "class Badge:\n    def __init__(self, label):\n        self.label = label\n    def message(self):\n        return \"Hello \" + self.label\nbadge = Badge(\"Ava\")\nprint(badge.message())",
        "rule": "class_return"
      }
    ]
  },
  {
    "id": "l78",
    "title": "Keep two objects independent",
    "icon": "\ud83d\udc65",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Keep two objects independent",
        "body": "Each call to the class creates a separate object. Attributes assigned in __init__ belong to that instance. A method called on one object changes that object, not its neighbor.",
        "code": "class Counter:\n    def __init__(self, value):\n        self.value = value\n    def add(self):\n        self.value = self.value + 1\na = Counter(0)\nb = Counter(10)\na.add()\nprint(a.value)\nprint(b.value)",
        "out": "1\n10"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "Counter(0) and Counter(10) make separate counters. add(self) increases self.value by 1. a.add() affects a only. The starting numbers and the update use arithmetic you already know.",
        "code": "class Counter:\n    def __init__(self, value):\n        self.value = value\n    def add(self):\n        self.value = self.value + 1\na = Counter(0)\nb = Counter(10)\na.add()\nprint(a.value)\nprint(b.value)",
        "out": "1\n10"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "class Counter:\n    def __init__(self, value):\n        self.value = value\n    def add(self):\n        self.value = self.value + 1\na = Counter(0)\nb = Counter(10)\na.add()\nprint(a.value)\nprint(b.value)",
        "expect": "1\n10"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "a = b would not make a new counter: both names would refer to the same object. Call Counter(...) separately to create two. This lesson uses separate numbers stored on each instance.",
        "code": "class Counter:\n    def __init__(self, value):\n        self.value = value\n    def add(self):\n        self.value = self.value + 1\na = Counter(0)\nb = Counter(10)\na.add()\nprint(a.value)\nprint(b.value)",
        "out": "1\n10"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "After a.add(), what is b.value?",
        "options": [
          "11",
          "10",
          "1"
        ],
        "answer": 1,
        "why": "The method received a as self, so only a.value changed."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "self.value = self.value ",
        "post": " 1",
        "options": [
          "+",
          "-",
          "=="
        ],
        "answer": "+",
        "why": "The method received a as self, so only a.value changed."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a class with __init__ storing a numeric attribute and a method adding 1 to it. Create two instances with different numeric starting values. Call the method only on the first, then print both attributes.",
        "starter": "",
        "hint": "class Counter:\n    def __init__(self, value):\n        self.value = value\n    def add(self):\n        self.value = self.value + 1\na = Counter(0)\nb = Counter(10)\na.add()\nprint(a.value)\nprint(b.value)",
        "solution": "class Counter:\n    def __init__(self, value):\n        self.value = value\n    def add(self):\n        self.value = self.value + 1\na = Counter(0)\nb = Counter(10)\na.add()\nprint(a.value)\nprint(b.value)",
        "rule": "class_two"
      }
    ]
  },
  {
    "id": "l79",
    "title": "Build two learning buddies",
    "icon": "\ud83e\uddf1",
    "steps": [
      {
        "t": "info",
        "kicker": "Start with the idea",
        "title": "Build two learning buddies",
        "body": "Bring the class ideas together: give each buddy a name, allow renaming, and return a greeting. Create two buddies and change only one, then show both greetings.",
        "code": "class Buddy:\n    def __init__(self, name):\n        self.name = name\n    def rename(self, name):\n        self.name = name\n    def greeting(self):\n        return \"Hi \" + self.name\na = Buddy(\"Ava\")\nb = Buddy(\"Sam\")\na.rename(\"Mira\")\nprint(a.greeting())\nprint(b.greeting())",
        "out": "Hi Mira\nHi Sam"
      },
      {
        "t": "info",
        "kicker": "Read the symbols",
        "title": "One piece at a time",
        "body": "__init__ stores the name. rename updates self.name. greeting returns joined text. Each object carries its own data, while the class defines the same actions for both.",
        "code": "class Buddy:\n    def __init__(self, name):\n        self.name = name\n    def rename(self, name):\n        self.name = name\n    def greeting(self):\n        return \"Hi \" + self.name\na = Buddy(\"Ava\")\nb = Buddy(\"Sam\")\na.rename(\"Mira\")\nprint(a.greeting())\nprint(b.greeting())",
        "out": "Hi Mira\nHi Sam"
      },
      {
        "t": "run",
        "kicker": "Try it",
        "title": "Watch Python do it",
        "prompt": "Read the code, then tap Run. Compare the output with what you expected.",
        "code": "class Buddy:\n    def __init__(self, name):\n        self.name = name\n    def rename(self, name):\n        self.name = name\n    def greeting(self):\n        return \"Hi \" + self.name\na = Buddy(\"Ava\")\nb = Buddy(\"Sam\")\na.rename(\"Mira\")\nprint(a.greeting())\nprint(b.greeting())",
        "expect": "Hi Mira\nHi Sam"
      },
      {
        "t": "info",
        "kicker": "A common mistake",
        "title": "Watch out for this",
        "body": "Keep all three method definitions at the same indentation inside class. Use self.name consistently in setup, update and greeting. a and b are separate instances, so renaming one leaves the other alone.",
        "code": "class Buddy:\n    def __init__(self, name):\n        self.name = name\n    def rename(self, name):\n        self.name = name\n    def greeting(self):\n        return \"Hi \" + self.name\na = Buddy(\"Ava\")\nb = Buddy(\"Sam\")\na.rename(\"Mira\")\nprint(a.greeting())\nprint(b.greeting())",
        "out": "Hi Mira\nHi Sam"
      },
      {
        "t": "choice",
        "kicker": "Your prediction",
        "title": "Think, then choose",
        "prompt": "Which greeting changes after a.rename(\"Mira\")?",
        "options": [
          "Only a's greeting",
          "Both greetings",
          "Neither greeting"
        ],
        "answer": 0,
        "why": "The rename method stores the new name on the one object receiving the call."
      },
      {
        "t": "fill",
        "kicker": "Finish the code",
        "title": "Add the missing piece",
        "prompt": "Choose the piece that completes this code.",
        "pre": "print(b.greeting",
        "post": ")",
        "options": [
          "()",
          "[]",
          ":"
        ],
        "answer": "()",
        "why": "The rename method stores the new name on the one object receiving the call."
      },
      {
        "t": "type",
        "kicker": "Your turn",
        "title": "Build it yourself",
        "prompt": "Define a class with __init__ storing a string name, a method updating that same attribute, and a no-extra-argument method returning a string joined to it. Make two instances with different strings, update only the first, then print the greeting method result for both.",
        "starter": "",
        "hint": "class Buddy:\n    def __init__(self, name):\n        self.name = name\n    def rename(self, name):\n        self.name = name\n    def greeting(self):\n        return \"Hi \" + self.name\na = Buddy(\"Ava\")\nb = Buddy(\"Sam\")\na.rename(\"Mira\")\nprint(a.greeting())\nprint(b.greeting())",
        "solution": "class Buddy:\n    def __init__(self, name):\n        self.name = name\n    def rename(self, name):\n        self.name = name\n    def greeting(self):\n        return \"Hi \" + self.name\na = Buddy(\"Ava\")\nb = Buddy(\"Sam\")\na.rename(\"Mira\")\nprint(a.greeting())\nprint(b.greeting())",
        "rule": "class_project"
      }
    ]
  }
];
