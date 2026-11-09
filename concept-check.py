# Structural checks for beginner exercises. This is not a security sandbox.
import ast

def check_concept(source, rule):
    tree = ast.parse(source)
    nodes = list(ast.walk(tree))
    calls = [n for n in nodes if isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'print']
    if not calls:
        return 'Use print(...) to show your result. Python command names use lowercase letters.'
    text = lambda x: isinstance(x, ast.Constant) and isinstance(x.value, str) and bool(x.value.strip())
    prints_text = any(any(text(a) for a in c.args) for c in calls)
    assignments = [n for n in nodes if isinstance(n, ast.Assign)]
    assigned = {t.id for n in assignments for t in n.targets if isinstance(t, ast.Name)}
    printed_names = {a.id for c in calls for a in c.args if isinstance(a, ast.Name)}
    if rule == 'text':
        return '' if prints_text else 'Put any message inside matching quotes, inside print(...). Your spelling and capital letters in the message are your choice.'
    if rule == 'add':
        ok = any(isinstance(n, ast.BinOp) and isinstance(n.op, ast.Add) for c in calls for n in ast.walk(c))
        return '' if ok else 'Put an addition inside print(...), such as print(2 + 3). Use numbers without quotes.'
    if rule == 'variable':
        return '' if assigned & printed_names else 'Store a value with =, then pass that same variable name to print without quotes. Pick any name and value.'
    if rule == 'mixed':
        ok = any(len(c.args) >= 2 and any(text(a) for a in c.args) and any(isinstance(a, (ast.Name, ast.Constant)) and not text(a) for a in c.args) for c in calls)
        return '' if ok else 'Use a comma to print a message and a number or variable together: print("Score", score).'
    if rule == 'compare':
        ok = any(isinstance(n, ast.Compare) and any(isinstance(op, ast.Gt) for op in n.ops) for c in calls for n in ast.walk(c))
        return '' if ok else 'Print a > comparison. For example, print(8 > 2). The numbers are your choice.'
    if rule in ('if', 'else'):
        branches = [n for n in nodes if isinstance(n, ast.If)]
        has_print = lambda body: any(isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'print' for stmt in body for n in ast.walk(stmt))
        ok = any(has_print(n.body) and (rule != 'else' or bool(n.orelse) and has_print(n.orelse)) for n in branches)
        return '' if ok else ('Add an if with an indented print line.' if rule == 'if' else 'Use if and else, each with an indented print line. Line up else with if.')
    # Unit 2: follow stored values by name, not by the sample's wording.
    values = {t.id: st.value for st in tree.body if isinstance(st, ast.Assign) for t in st.targets if isinstance(t, ast.Name)}
    def resolve(n, seen=()):
        if isinstance(n, ast.Name) and n.id in values and n.id not in seen:
            return resolve(values[n.id], seen + (n.id,))
        return n
    def is_text(n):
        n = resolve(n)
        return text(n) or isinstance(n, ast.BinOp) and isinstance(n.op, ast.Add) and is_text(n.left) and is_text(n.right)
    lists = {name: val for name, val in values.items() if isinstance(val, ast.List)}
    def list_name(n, minimum=0):
        return isinstance(n, ast.Name) and n.id in lists and len(lists[n.id].elts) >= minimum and all(text(e) for e in lists[n.id].elts)
    def has_call(body, name, arg_test=lambda n: True):
        return any(isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == name and any(arg_test(a) for a in n.args) for st in body for n in ast.walk(st))
    def is_len(n, test):
        return isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'len' and len(n.args) == 1 and test(n.args[0])
    def index(n, val, test):
        return isinstance(n, ast.Subscript) and isinstance(n.slice, ast.Constant) and n.slice.value == val and test(n.value)
    printed = [a for c in calls for a in c.args]
    def result(ok, feedback): return '' if ok else feedback
    if rule == 'join':
        return result(any(isinstance(resolve(a), ast.BinOp) and isinstance(resolve(a).op, ast.Add) and is_text(resolve(a).left) and is_text(resolve(a).right) for a in printed), 'Join two strings with +, then print the result. Choose any nonempty words; add your own space inside quotes if needed.')
    if rule == 'text_len':
        return result(any(is_len(a, lambda v: isinstance(v, ast.Name) and text(resolve(v))) for a in printed), 'Store a nonempty string in a variable, then print(len(your_variable)). len counts the characters.')
    if rule == 'text_index':
        return result(any(index(a, 0, lambda v: isinstance(v, ast.Name) and text(resolve(v))) for a in printed), 'Store a nonempty string, then print its first character with your_variable[0]. Indices begin at 0.')
    if rule == 'make_list':
        return result(any(list_name(a, 2) for a in printed), 'Store at least two strings in a list with square brackets and commas, then print the list by its name.')
    if rule == 'list_index':
        picked = {a.value.id for a in printed if index(a, 1, lambda v: list_name(v, 2))}
        return result(any(is_len(a, lambda v: isinstance(v, ast.Name) and v.id in picked) for a in printed), 'Print the second item with your_list[1], then print(len(your_list)) for that same list.')
    if rule == 'list_change':
        changed = {t.value.id for st in tree.body if isinstance(st, ast.Assign) and text(st.value) for t in st.targets if index(t, 0, lambda v: list_name(v, 2))}
        return result(bool(changed & printed_names), 'Create a list of at least two strings. Replace its first item with your_list[0] = "new value", then print the whole list.')
    appends = [n for n in nodes if isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute) and n.func.attr == 'append' and list_name(n.func.value) and len(n.args) == 1 and text(n.args[0])]
    if rule == 'list_append':
        return result(any(n.func.value.id in printed_names for n in appends), 'Call your_list.append("new item") on its own line, then print that list. Do not assign append back to the list.')
    list_loops = [n for n in tree.body if isinstance(n, ast.For) and list_name(n.iter, 2) and isinstance(n.target, ast.Name)]
    if rule == 'list_loop':
        return result(any(has_call(loop.body, 'print', lambda a: isinstance(a, ast.Name) and a.id == loop.target.id) for loop in list_loops), 'Loop directly over a list with at least two strings: for item in your_list:. Indent print(item) underneath.')
    if rule == 'list_filter':
        ok = False
        for loop in list_loops:
            for branch in loop.body:
                if not isinstance(branch, ast.If): continue
                t = branch.test
                condition = isinstance(t, ast.Compare) and is_len(t.left, lambda a: isinstance(a, ast.Name) and a.id == loop.target.id) and len(t.ops) == 1 and isinstance(t.ops[0], ast.Gt) and isinstance(t.comparators[0], ast.Constant) and t.comparators[0].value == 3
                long_name = any(len(e.value) > 3 for e in lists[loop.iter.id].elts)
                ok |= condition and long_name and has_call(branch.body, 'print', lambda a: isinstance(a, ast.Name) and a.id == loop.target.id)
        return result(ok, 'Inside your list loop, use if len(item) > 3:, then indent print(item) four more spaces. Include a name longer than three characters so you can see it work.')
    if rule == 'guest_project':
        ok = False
        for loop in list_loops:
            same = loop.iter.id
            added = any(n.func.value.id == same for n in appends)
            each = has_call(loop.body, 'print', lambda a: isinstance(a, ast.Name) and a.id == loop.target.id)
            tail = tree.body[tree.body.index(loop) + 1:]
            total = has_call(tail, 'print', lambda a: is_len(a, lambda v: isinstance(v, ast.Name) and v.id == same))
            ok |= added and each and total
        return result(ok, 'Start with at least two guest names, append one more, print each guest in a for loop, then print len(your_list) on an unindented line after the loop.')
    # Unit 3: compare and combine conditions; safe, finite loop shapes.
    def number(n): return isinstance(n, ast.Constant) and type(n.value) in (int, float)
    def const(n, v): return isinstance(n, ast.Constant) and n.value == v
    def name_is(n, name): return isinstance(n, ast.Name) and n.id == name
    def numeric_expr(n):
        if number(n): return True
        if isinstance(n, ast.Name):
            return any(isinstance(st, ast.Assign) and number(st.value) and any(name_is(t,n.id) for t in st.targets) for st in tree.body)
        return isinstance(n, ast.BinOp) and numeric_expr(n.left) and numeric_expr(n.right)
    if rule == 'update':
        updates = {t.id for st in tree.body if isinstance(st,ast.Assign) for t in st.targets if isinstance(t,ast.Name) and isinstance(st.value,ast.BinOp) and isinstance(st.value.op,ast.Add) and name_is(st.value.left,t.id) and number(st.value.right) and st.value.right.value > 0}
        return result(bool(updates & printed_names), 'Store a starting number. Then use name = name + 1 (or another positive amount), and print the updated variable.')
    if rule == 'subtract':
        return result(any(isinstance(a,ast.BinOp) and isinstance(a.op,ast.Sub) and numeric_expr(a.left) and numeric_expr(a.right) for a in printed), 'Put a subtraction inside print, such as print(9 - 3). Use numbers, not quoted digits.')
    if rule in ('equality','boundaries'):
        required = (ast.Eq,ast.NotEq) if rule=='equality' else (ast.Lt,ast.LtE,ast.GtE)
        operators = [type(op) for a in printed for n in ast.walk(a) if isinstance(n,ast.Compare) for op in n.ops]
        return result(all(op in operators for op in required), 'Print both == and != comparisons.' if rule=='equality' else 'Print each kind of comparison: <, <=, and >=. Choose your own numbers.')
    if rule == 'elif':
        ok = any(isinstance(n,ast.If) and has_call(n.body,'print') and len(n.orelse)==1 and isinstance(n.orelse[0],ast.If) and has_call(n.orelse[0].body,'print') and has_call(n.orelse[0].orelse,'print') for n in tree.body)
        return result(ok,'Use if, elif and else, each with its own indented print. Line up the three branch labels.')
    if rule in ('and','or'):
        op = ast.And if rule=='and' else ast.Or
        ok = any(isinstance(a,ast.BoolOp) and isinstance(a.op,op) and len(a.values)>=2 and all(isinstance(v,ast.Compare) for v in a.values) for a in printed)
        return result(ok,'Print two full comparisons joined by '+rule+'. Repeat the variable and comparison on each side.')
    if rule == 'not':
        return result(any(isinstance(a,ast.UnaryOp) and isinstance(a.op,ast.Not) and isinstance(a.operand,ast.Compare) for a in printed),'Use print(not (your comparison)). not reverses the whole condition.')
    if rule in ('while_count','while_break','while_down'):
        down = rule=='while_down'
        stop = 5 if rule=='while_break' else 0 if down else 3
        op = ast.Gt if down else ast.Lt
        good = False
        for loop in tree.body:
            if not isinstance(loop,ast.While):continue
            test=loop.test
            if not (isinstance(test,ast.Compare) and isinstance(test.left,ast.Name) and len(test.ops)==1 and isinstance(test.ops[0],op) and const(test.comparators[0],stop)):continue
            name=test.left.id
            before=tree.body[:tree.body.index(loop)]
            start=any(isinstance(st,ast.Assign) and any(name_is(t,name) for t in st.targets) and const(st.value,3 if down else 0) for st in before)
            update=any(isinstance(st,ast.Assign) and any(name_is(t,name) for t in st.targets) and isinstance(st.value,ast.BinOp) and isinstance(st.value.op,ast.Sub if down else ast.Add) and name_is(st.value.left,name) and const(st.value.right,1) for st in loop.body)
            show=has_call(loop.body,'print',lambda a:name_is(a,name))
            final=has_call(tree.body[tree.body.index(loop)+1:],'print',text)
            breaks=True
            if rule=='while_break':
                breaks=any(isinstance(st,ast.If) and isinstance(st.test,ast.Compare) and name_is(st.test.left,name) and len(st.test.ops)==1 and isinstance(st.test.ops[0],ast.Eq) and const(st.test.comparators[0],2) and any(isinstance(b,ast.Break) for b in st.body) for st in loop.body)
            good |= start and update and show and breaks and (final if rule!='while_count' else True)
        return result(good, 'Check the starting value, while condition, indented print and one-step update. '+('Subtract 1 and print a message after the loop.' if down else 'Add 1 each turn.'+(' Use if count == 2: with break inside, and a final message after the loop.' if rule=='while_break' else '')))
    loops = [n for n in nodes if isinstance(n, ast.For) and isinstance(n.iter, ast.Call) and isinstance(n.iter.func, ast.Name) and n.iter.func.id == 'range']
    if rule == 'loop':
        loops = [loop for loop in loops if len(loop.iter.args) == 1 and isinstance(loop.iter.args[0], ast.Constant) and isinstance(loop.iter.args[0].value, int) and loop.iter.args[0].value > 1]
        return '' if loops and any(isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'print' for loop in loops for st in loop.body for n in ast.walk(st)) else 'Use a for loop with range(...). Indent a print line underneath. Any message is fine.'
    def args(loop):
        try: return [ast.literal_eval(a) for a in loop.iter.args]
        except (ValueError, TypeError): return []
    if rule == 'range':
        ok = any(args(loop) == [1, 4] and any(isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'print' and any(isinstance(a, ast.Name) and isinstance(loop.target, ast.Name) and a.id == loop.target.id for a in n.args) for st in loop.body for n in ast.walk(st)) for loop in loops)
        return '' if ok else 'Use range(1, 4), and print the loop variable underneath. This counts 1, 2, 3.'
    if rule == 'countdown':
        ok = any(args(loop) == [3, 0, -1] and any(isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'print' and isinstance(loop.target, ast.Name) and any(isinstance(a, ast.Name) and a.id == loop.target.id for a in n.args) for st in loop.body for n in ast.walk(st)) for loop in loops)
        final = any(isinstance(st, ast.Expr) and isinstance(st.value, ast.Call) and isinstance(st.value.func, ast.Name) and st.value.func.id == 'print' and any(text(a) for a in st.value.args) for st in tree.body)
        return '' if ok and final else 'Use range(3, 0, -1) for the countdown, then add a final print message outside the loop. Any final message is fine.'
    return 'This exercise could not be checked. Try another practice card.'
