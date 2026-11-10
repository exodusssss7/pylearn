# Structural checks for beginner exercises. This is not a security sandbox.
import ast

def check_concept(source, rule):
    if rule.startswith(("record_", "module_", "project_")):
        return check_v09(source, rule)
    if rule.startswith(("file_", "error_", "class_")):
        return check_v08(source, rule)
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
    # Unit 4: connect a custom function's definition, arguments and use.
    definitions = [st for st in tree.body if isinstance(st,ast.FunctionDef)]
    def custom_calls(body, function, arg_test=lambda a: True):
        return [n for st in body for n in ast.walk(st) if isinstance(n,ast.Call) and isinstance(n.func,ast.Name) and n.func.id==function.name and arg_test(n.args)]
    def outside(function):return [st for st in tree.body if st is not function and not isinstance(st,ast.FunctionDef)]
    def uses_parameter(function, count):
        params=[a.arg for a in function.args.args]
        return len(params)==count and all(has_call(function.body,'print',lambda a:name_is(a,p)) for p in params)
    if rule in ('function_define','function_reuse'):
        required=2 if rule=='function_reuse' else 1
        ok=any(not f.args.args and has_call(f.body,'print',text) and len(custom_calls(outside(f),f,lambda args:not args))>=required for f in definitions)
        return result(ok,'Define a function with def name(): and an indented print. Then call that same name with () '+('twice' if required==2 else 'once')+' outside the definition.')
    if rule in ('function_parameter','function_two'):
        count=2 if rule=='function_two' else 1
        ok=any(uses_parameter(f,count) and custom_calls(outside(f),f,lambda args:len(args)==count and all(text(a) for a in args)) for f in definitions)
        return result(ok,'Define a function with '+str(count)+' parameter(s), print the parameter value(s) inside it, and call it with '+str(count)+' string argument(s). Do not put quotes around parameter names inside print.')
    if rule=='function_return':
        ok=False
        for f in definitions:
            if len(f.args.args)!=1:continue
            p=f.args.args[0].arg
            gives=any(isinstance(st,ast.Return) and isinstance(st.value,ast.BinOp) and isinstance(st.value.op,ast.Add) and name_is(st.value.left,p) and const(st.value.right,1) for st in f.body)
            calls_f=custom_calls(outside(f),f,lambda args:len(args)==1 and number(args[0]))
            returned_names={t.id for st in outside(f) if isinstance(st,ast.Assign) and isinstance(st.value,ast.Call) and isinstance(st.value.func,ast.Name) and st.value.func.id==f.name for t in st.targets if isinstance(t,ast.Name)}
            shown=has_call(outside(f),'print',lambda a:isinstance(a,ast.Call) and isinstance(a.func,ast.Name) and a.func.id==f.name or isinstance(a,ast.Name) and a.id in returned_names)
            ok |= gives and bool(calls_f) and shown
        return result(ok,'Return parameter + 1 from your function. Call it with a number, then print the returned value, directly or through a result variable.')
    if rule=='function_local':
        ok=False
        for f in definitions:
            locals_={t.id for st in f.body if isinstance(st,ast.Assign) and text(st.value) for t in st.targets if isinstance(t,ast.Name)}
            gives=any(isinstance(st,ast.Return) and isinstance(st.value,ast.Name) and st.value.id in locals_ for st in f.body)
            shown=has_call(outside(f),'print',lambda a:isinstance(a,ast.Call) and isinstance(a.func,ast.Name) and a.func.id==f.name)
            ok |= not f.args.args and gives and shown
        return result(ok,'Inside a no-parameter function, store a string in a local variable and return that variable. Outside, print(your_function()).')
    if rule in ('function_loop','function_project'):
        ok=False
        for f in definitions:
            if len(f.args.args)!=1:continue
            p=f.args.args[0].arg
            if rule=='function_loop':gives=uses_parameter(f,1)
            else:
                gives=any(isinstance(st,ast.Return) and isinstance(st.value,ast.BinOp) and isinstance(st.value.op,ast.Add) and ((text(st.value.left) and name_is(st.value.right,p)) or (name_is(st.value.left,p) and text(st.value.right))) for st in f.body)
            for loop in list_loops:
                calls_f=custom_calls(loop.body,f,lambda args:len(args)==1 and name_is(args[0],loop.target.id))
                shown=rule=='function_loop' or has_call(loop.body,'print',lambda a:isinstance(a,ast.Call) and isinstance(a.func,ast.Name) and a.func.id==f.name)
                ok |= gives and bool(calls_f) and shown
        return result(ok,'Define a one-parameter function, then loop over at least two strings and call it with the loop variable. '+('The function must return joined text; print the returned message inside the loop.' if rule=='function_project' else 'Print the received parameter inside the function.'))
    dictionaries={t.id:st.value for st in tree.body if isinstance(st,ast.Assign) and isinstance(st.value,ast.Dict) for t in st.targets if isinstance(t,ast.Name)}
    def dictionary(n, minimum=1):
        if not isinstance(n,ast.Name) or n.id not in dictionaries:return False
        d=dictionaries[n.id]
        return len(d.keys)>=minimum and all(text(k) and text(v) for k,v in zip(d.keys,d.values)) and len({k.value for k in d.keys})==len(d.keys)
    def keys(name):return {k.value for k in dictionaries[name].keys}
    def lookup(n,name=None,key=None):
        return isinstance(n,ast.Subscript) and dictionary(n.value) and (name is None or n.value.id==name) and (key is None or const(n.slice,key))
    if rule=='dict_make':
        return result(any(dictionary(a,2) for a in printed),'Create at least two distinct quoted keys with string values inside curly braces, then print the dictionary by name.')
    if rule=='dict_read':
        return result(any(lookup(a) and text(a.slice) and a.slice.value in keys(a.value.id) for a in printed),'Print your_dictionary["existing key"]. Use square brackets and match the stored key exactly.')
    updates=[];additions=[]
    for st in tree.body:
        if not isinstance(st,ast.Assign) or not text(st.value):continue
        for t in st.targets:
            if not lookup(t) or not text(t.slice):continue
            name=t.value.id;key=t.slice.value
            if key not in keys(name): additions.append((name,key))
            elif any(const(k,key) and isinstance(v,ast.Constant) and v.value!=st.value.value for k,v in zip(dictionaries[name].keys,dictionaries[name].values)):updates.append((name,key))
    if rule=='dict_update':
        return result(any(any(lookup(a,name,key) for a in printed) for name,key in updates),'Replace an existing key with a different string value, then print the value under that same key.')
    if rule=='dict_add':
        ok=any(name in printed_names and any(is_len(a,lambda v:name_is(v,name)) for a in printed) for name,key in additions)
        return result(ok,'Assign a value under a new string key, then print the whole dictionary and len(your_dictionary). Do not use append on a dictionary.')
    if rule=='dict_in':
        ok=False
        for branch in tree.body:
            if not isinstance(branch,ast.If):continue
            test=branch.test
            if not (isinstance(test,ast.Compare) and len(test.ops)==1 and isinstance(test.ops[0],ast.In) and text(test.left) and dictionary(test.comparators[0])):continue
            name=test.comparators[0].id;key=test.left.value
            ok |= key in keys(name) and has_call(branch.body,'print',lambda a:lookup(a,name,key))
        return result(ok,'Use if "existing key" in your_dictionary:, then indent a print of the value under that same key.')
    if rule=='dict_get':
        ok=any(isinstance(a,ast.Call) and isinstance(a.func,ast.Attribute) and a.func.attr=='get' and dictionary(a.func.value) and len(a.args)==2 and all(text(x) for x in a.args) and a.args[0].value not in keys(a.func.value.id) for a in printed)
        return result(ok,'Print your_dictionary.get("missing key", "fallback"). Use a key that is not already in the starting dictionary.')
    dict_loops=[st for st in tree.body if isinstance(st,ast.For) and isinstance(st.target,ast.Name) and dictionary(st.iter,2)]
    if rule in ('dict_loop','dict_project'):
        ok=False
        for loop in dict_loops:
            name=loop.iter.id;variable=loop.target.id
            show=any(isinstance(n,ast.Call) and isinstance(n.func,ast.Name) and n.func.id=='print' and any(name_is(a,variable) for a in n.args) and any(lookup(a,name) and name_is(a.slice,variable) for a in n.args) for st in loop.body for n in ast.walk(st))
            if rule=='dict_loop':ok |= show;continue
            changed=any(n==name for n,k in updates);added=any(n==name for n,k in additions)
            final=has_call(tree.body[tree.body.index(loop)+1:],'print',lambda a:is_len(a,lambda v:name_is(v,name)))
            ok |= show and changed and added and final
        return result(ok,'Loop directly over a dictionary with at least two entries and print(key, your_dictionary[key]). '+('Before the loop, update an existing key and add a new key. After it, print the dictionary length.' if rule=='dict_project' else 'Use the loop variable without quotes in the lookup.'))
    # Unit 6: trace reads and conversions through the learner's chosen names.
    def input_call(n):return isinstance(n,ast.Call) and isinstance(n.func,ast.Name) and n.func.id=='input'
    def follows(n,predicate,seen=()):
        if predicate(n):return True
        if isinstance(n,ast.Name) and n.id in values and n.id not in seen:return follows(values[n.id],predicate,seen+(n.id,))
        return any(follows(child,predicate,seen) for child in ast.iter_child_nodes(n))
    def converted(n,kind):return isinstance(n,ast.Call) and isinstance(n.func,ast.Name) and n.func.id==kind and len(n.args)==1 and follows(n.args[0],input_call)
    if rule in ('input_read','input_prompt'):
        names={t.id for st in tree.body if isinstance(st,ast.Assign) and input_call(st.value) and (rule!='input_prompt' or len(st.value.args)==1 and text(st.value.args[0])) for t in st.targets if isinstance(t,ast.Name)}
        return result(bool(names & printed_names),'Store input('+('"your prompt"' if rule=='input_prompt' else '')+') in a variable, then print that same variable.')
    if rule=='input_text':
        ok=any(isinstance(resolve(a),ast.BinOp) and isinstance(resolve(a).op,ast.Add) and ((text(resolve(a).left) and follows(resolve(a).right,input_call)) or (text(resolve(a).right) and follows(resolve(a).left,input_call))) for a in printed)
        return result(ok,'Read an answer and print it joined to a nonempty string with +. This step joins text rather than calculating.')
    if rule in ('input_int','input_float'):
        kind='int' if rule=='input_int' else 'float'
        ok=any(isinstance(resolve(a),ast.BinOp) and isinstance(resolve(a).op,ast.Add) and const(resolve(a).right,1) and follows(resolve(a).left,lambda n:converted(n,kind)) for a in printed)
        return result(ok,'Read input, convert it with '+kind+', then print the converted number + 1. Supply valid '+('whole-number' if kind=='int' else 'decimal')+' text in the answer sheet.')
    if rule=='number_str':
        def string_number(n):return isinstance(n,ast.Call) and isinstance(n.func,ast.Name) and n.func.id=='str' and len(n.args)==1 and numeric_expr(n.args[0])
        ok=any(isinstance(resolve(a),ast.BinOp) and isinstance(resolve(a).op,ast.Add) and ((text(resolve(a).left) and string_number(resolve(a).right)) or (text(resolve(a).right) and string_number(resolve(a).left))) for a in printed)
        return result(ok,'Use str(your_number) to join a number to a nonempty message with +, then print the joined text.')
    if rule in ('multiply','divide'):
        operator=ast.Mult if rule=='multiply' else ast.Div
        ok=any(isinstance(a,ast.BinOp) and isinstance(a.op,operator) and isinstance(a.left,ast.Name) and isinstance(a.right,ast.Name) and numeric_expr(a.left) and numeric_expr(a.right) for a in printed)
        return result(ok,'Store two numbers in variables, then print their '+('product with *.' if rule=='multiply' else 'division with /. The divisor must be positive.'))
    if rule=='bill_project':
        reads=[(t.id,st.value.func.id) for st in tree.body if isinstance(st,ast.Assign) and isinstance(st.value,ast.Call) and isinstance(st.value.func,ast.Name) and st.value.func.id in ('float','int') and len(st.value.args)==1 and input_call(st.value.args[0]) for t in st.targets if isinstance(t,ast.Name)]
        ok=False
        if len(reads)>=3 and [kind for name,kind in reads[:3]]==['float','int','int']:
            price,quantity,people=[name for name,kind in reads[:3]]
            totals={t.id for st in tree.body if isinstance(st,ast.Assign) and isinstance(st.value,ast.BinOp) and isinstance(st.value.op,ast.Mult) and name_is(st.value.left,price) and name_is(st.value.right,quantity) for t in st.targets if isinstance(t,ast.Name)}
            for branch in tree.body:
                if not isinstance(branch,ast.If):continue
                test=branch.test
                condition=isinstance(test,ast.Compare) and name_is(test.left,people) and len(test.ops)==1 and isinstance(test.ops[0],ast.Gt) and const(test.comparators[0],0)
                divided=has_call(branch.body,'print',lambda a:isinstance(a,ast.BinOp) and isinstance(a.op,ast.Div) and isinstance(a.left,ast.Name) and a.left.id in totals and name_is(a.right,people))
                ok |= condition and divided and has_call(branch.orelse,'print',text)
        return result(ok,'Read price with float(input()), then quantity and people with int(input()). Store price * quantity as a total. Only inside if people > 0, print total / people. Add an else with a helpful message.')
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

def check_v08(source, rule):
    tree = ast.parse(source)
    nodes = list(ast.walk(tree))
    def name(n, v):return isinstance(n,ast.Name) and n.id==v
    def string(n):return isinstance(n,ast.Constant) and isinstance(n.value,str) and bool(n.value.strip())
    def number(n):return isinstance(n,ast.Constant) and isinstance(n.value,(int,float)) and not isinstance(n.value,bool)
    def call(n, f):return isinstance(n,ast.Call) and name(n.func,f)
    def walk(body):return [n for st in body for n in ast.walk(st)]
    def printed(body):return [a for n in walk(body) if call(n,'print') for a in n.args]
    def shows(body,pred):return any(pred(a) for a in printed(body))
    def attr(n, obj, key):return isinstance(n,ast.Attribute) and name(n.value,obj) and n.attr==key
    def ret(ok, message):return '' if ok else message
    if rule.startswith('file_'):
        records=[]
        for idx,st in enumerate(tree.body):
            if not isinstance(st,ast.With):continue
            for item in st.items:
                c=item.context_expr
                if not (call(c,'open') and len(c.args)==2 and string(c.args[0]) and string(c.args[1]) and isinstance(item.optional_vars,ast.Name)):continue
                path,mode=c.args[0].value,c.args[1].value;var=item.optional_vars.id
                writes=[n.args[0].value for n in walk(st.body) if isinstance(n,ast.Call) and attr(n.func,var,'write') and len(n.args)==1 and string(n.args[0])]
                reads=[n for n in walk(st.body) if isinstance(n,ast.Call) and attr(n.func,var,'read') and not n.args]
                values={t.id for s in st.body if isinstance(s,ast.Assign) and isinstance(s.value,ast.Call) and attr(s.value.func,var,'read') for t in s.targets if isinstance(t,ast.Name)}
                shown=bool(reads) and (shows(st.body,lambda n:isinstance(n,ast.Call) and attr(n.func,var,'read')) or shows(tree.body[idx+1:],lambda n:isinstance(n,ast.Name) and n.id in values))
                loops=[n for n in st.body if isinstance(n,ast.For) and name(n.iter,var) and isinstance(n.target,ast.Name)]
                loop_shows=any(any(call(c,'print') and any(name(a,l.target.id) for a in c.args) and any(k.arg=='end' and isinstance(k.value,ast.Constant) and k.value.value=='' for k in c.keywords) for c in walk(l.body)) for l in loops)
                records.append(dict(idx=idx,path=path,mode=mode,writes=writes,shown=shown,loops=loops,loop_shows=loop_shows))
        good=False
        for w in records:
            if w['mode']!='w' or not w['writes']:continue
            after=[r for r in records if r['idx']>w['idx'] and r['path']==w['path']]
            readers=[r for r in after if r['mode']=='r']
            if rule=='file_write':good |= shows(tree.body[w['idx']+1:],string)
            elif rule=='file_read':good |= any(r['shown'] for r in readers)
            elif rule=='file_newline':good |= any('\n' in s.strip('\n') for s in w['writes']) and any(r['shown'] for r in readers)
            elif rule in ('file_append','file_project'):
                for a in after:
                    if a['mode']!='a' or not a['writes']:continue
                    rr=[r for r in readers if r['idx']>a['idx']]
                    if rule=='file_append':good |= any(r['shown'] for r in rr)
                    else:good |= all(any('\n' in s for s in row['writes']) for row in (w,a)) and any(r['loop_shows'] for r in rr)
            elif rule=='file_loop':good |= any('\n' in s.strip('\n') for s in w['writes']) and any(r['loop_shows'] for r in readers)
            elif rule=='file_count':
                for r in readers:
                    for l in r['loops']:
                        for st in l.body:
                            if not (isinstance(st,ast.Assign) and isinstance(st.value,ast.BinOp) and isinstance(st.value.op,ast.Add) and isinstance(st.value.left,ast.Name) and isinstance(st.value.right,ast.Constant) and st.value.right.value==1):continue
                            count=st.value.left.id
                            update=any(name(t,count) for t in st.targets)
                            initial=any(isinstance(s,ast.Assign) and any(name(t,count) for t in s.targets) and isinstance(s.value,ast.Constant) and s.value.value==0 for s in tree.body[:r['idx']])
                            show=shows(tree.body[r['idx']+1:],lambda n:name(n,count))
                            good |= update and initial and show and any('\n' in s.strip('\n') for s in w['writes'])
        message={'file_write':'Open a practice filename with with and "w", write nonempty text inside, then print a message outside.', 'file_read':'Write text with "w", reopen the same filename with "r", and print its read() content.', 'file_newline':'Write two words separated by \\n, then reopen that same file with "r" and print its read() content.', 'file_append':'Use separate with blocks for "w", then "a", then "r" on the same filename. Write in both writing blocks and print the read content.', 'file_loop':'Write at least two lines, reopen the same file with "r", then for line in file: and print(line, end="").', 'file_count':'Write two lines, reopen the file, and loop over it. Start a counter at 0, add 1 inside the loop, then print the final counter outside.', 'file_project':'Write a line with "w", append a line with "a", then loop over the same file in "r". Include \\n in both entries and print each entry with end="".'}
        return ret(good,message[rule])
    if rule.startswith('error_'):
        good=False
        for t in tree.body:
            if not isinstance(t,ast.Try):continue
            handlers={h.type.id:h for h in t.handlers if isinstance(h.type,ast.Name)}
            handled=lambda kind:kind in handlers and shows(handlers[kind].body,string)
            conversions=[s for s in t.body if isinstance(s,ast.Assign) and call(s.value,'int') and len(s.value.args)==1]
            for conv in conversions:
                targets=[v.id for v in conv.targets if isinstance(v,ast.Name)]
                arg=conv.value.args[0]
                invalid=False;valid=False
                if string(arg):
                    try:int(arg.value);valid=True
                    except ValueError:invalid=True
                uses_number=shows(t.body,lambda n:isinstance(n,ast.Name) and n.id in targets)
                plus=shows(t.orelse,lambda n:isinstance(n,ast.BinOp) and isinstance(n.op,ast.Add) and isinstance(n.left,ast.Name) and n.left.id in targets and isinstance(n.right,ast.Constant) and n.right.value==1)
                if rule=='error_value':good |= invalid and handled('ValueError') and uses_number
                elif rule=='error_continue':good |= invalid and handled('ValueError') and shows(tree.body[tree.body.index(t)+1:],string)
                elif rule=='error_else':good |= valid and handled('ValueError') and plus
                elif rule=='error_finally':good |= invalid and handled('ValueError') and shows(t.finalbody,string)
                elif rule=='error_multiple':
                    divides=shows(t.body,lambda n:isinstance(n,ast.BinOp) and isinstance(n.op,ast.Div) and isinstance(n.left,ast.Constant) and n.left.value==12 and isinstance(n.right,ast.Name) and n.right.id in targets)
                    good |= call(arg,'input') and divides and handled('ValueError') and handled('ZeroDivisionError')
                elif rule=='error_project':good |= call(arg,'input') and handled('ValueError') and plus and shows(t.finalbody,string)
            if rule=='error_file':
                for st in t.body:
                    if not isinstance(st,ast.With):continue
                    for i in st.items:
                        c=i.context_expr
                        if not (call(c,'open') and len(c.args)==2 and string(c.args[0]) and isinstance(c.args[1],ast.Constant) and c.args[1].value=='r' and isinstance(i.optional_vars,ast.Name)):continue
                        var=i.optional_vars.id
                        def read(n):return isinstance(n,ast.Call) and attr(n.func,var,'read')
                        vals={v.id for s in st.body if isinstance(s,ast.Assign) and read(s.value) for v in s.targets if isinstance(v,ast.Name)}
                        good |= handled('FileNotFoundError') and (shows(st.body,read) or shows(t.body,lambda n:isinstance(n,ast.Name) and n.id in vals))
        hints={'error_value':'Convert invalid whole-number text in try and print the converted variable. Add except ValueError with a helpful print.', 'error_continue':'Convert invalid text in try, handle ValueError, then print a separate message outside try/except.', 'error_else':'Convert valid text with int in try. Handle ValueError and print the converted number + 1 in else.', 'error_finally':'Use try for an invalid int conversion, except ValueError for recovery, and finally for a printed cleanup message.', 'error_file':'Try opening a missing file with "r", read and print it. Add except FileNotFoundError with a message.', 'error_multiple':'Read int(input()) inside try, print 12 / that number, and handle ValueError and ZeroDivisionError in separate except blocks.', 'error_project':'Read int(input()) in try. Handle ValueError, print the converted number + 1 in else, and a completion message in finally.'}
        return ret(good,hints[rule])
    if rule.startswith('class_'):
        good=False
        for cls in [n for n in tree.body if isinstance(n,ast.ClassDef)]:
            methods=[n for n in cls.body if isinstance(n,ast.FunctionDef)]
            defaults={target.id:s.value for s in cls.body if isinstance(s,ast.Assign) and string(s.value) for target in s.targets if isinstance(target,ast.Name)}
            instances={target.id:s.value for s in tree.body if isinstance(s,ast.Assign) and call(s.value,cls.name) for target in s.targets if isinstance(target,ast.Name)}
            def invoked(obj,method,argc):return [n for n in walk(tree.body) if isinstance(n,ast.Call) and attr(n.func,obj,method) and len(n.args)==argc]
            def printed_attr(obj,key):return shows(tree.body,lambda n:attr(n,obj,key))
            if rule in ('class_make','class_attribute','class_method'):
                for key in defaults:
                    objs=[o for o,c in instances.items() if not c.args]
                    if rule=='class_make':good |= any(printed_attr(o,key) for o in objs)
                    if rule=='class_attribute':
                        for o in objs:
                            change=any(isinstance(s,ast.Assign) and string(s.value) and s.value.value!=defaults[key].value and any(attr(t,o,key) for t in s.targets) for s in tree.body)
                            good |= change and printed_attr(o,key) and any(p!=o and printed_attr(p,key) for p in objs)
                    if rule=='class_method':
                        for m in methods:
                            if len(m.args.args)!=1:continue
                            self_=m.args.args[0].arg
                            good |= shows(m.body,lambda n:attr(n,self_,key)) and any(invoked(o,m.name,0) for o in objs)
            for init in methods:
                if init.name!='__init__' or len(init.args.args)!=2:continue
                self_,param=[a.arg for a in init.args.args]
                keys=[v.attr for s in init.body if isinstance(s,ast.Assign) and name(s.value,param) for v in s.targets if isinstance(v,ast.Attribute) and name(v.value,self_)]
                for key in keys:
                    objs={o:c.args[0] for o,c in instances.items() if len(c.args)==1}
                    text_objs={o:a for o,a in objs.items() if string(a)}
                    if rule=='class_init':good |= any(printed_attr(o,key) for o in text_objs)
                    updaters=[];returners=[];incrementers=[]
                    for m in methods:
                        if m.name=='__init__' or not m.args.args:continue
                        me=m.args.args[0].arg
                        if len(m.args.args)==2:
                            p=m.args.args[1].arg
                            if any(isinstance(s,ast.Assign) and name(s.value,p) and any(attr(v,me,key) for v in s.targets) for s in m.body):updaters.append(m)
                        if len(m.args.args)==1:
                            if any(isinstance(s,ast.Return) and isinstance(s.value,ast.BinOp) and isinstance(s.value.op,ast.Add) and ((string(s.value.left) and attr(s.value.right,me,key)) or (string(s.value.right) and attr(s.value.left,me,key))) for s in m.body):returners.append(m)
                            if any(isinstance(s,ast.Assign) and any(attr(v,me,key) for v in s.targets) and isinstance(s.value,ast.BinOp) and isinstance(s.value.op,ast.Add) and attr(s.value.left,me,key) and isinstance(s.value.right,ast.Constant) and s.value.right.value==1 for s in m.body):incrementers.append(m)
                    def greeting_shown(o):return any(shows(tree.body,lambda n:isinstance(n,ast.Call) and attr(n.func,o,m.name) and not n.args) for m in returners)
                    def updated(o):return any(any(string(c.args[0]) and c.args[0].value!=text_objs[o].value for c in invoked(o,m.name,1)) for m in updaters)
                    if rule=='class_update':good |= any(updated(o) and printed_attr(o,key) for o in text_objs)
                    if rule=='class_return':good |= any(greeting_shown(o) for o in text_objs)
                    if rule=='class_two':
                        for o,a in objs.items():
                            if not number(a):continue
                            for m in incrementers:
                                if not invoked(o,m.name,0):continue
                                good |= printed_attr(o,key) and any(p!=o and number(b) and b.value!=a.value and printed_attr(p,key) and not invoked(p,m.name,0) for p,b in objs.items())
                    if rule=='class_project':
                        for o,a in text_objs.items():
                            if not updated(o) or not greeting_shown(o):continue
                            good |= any(p!=o and b.value!=a.value and greeting_shown(p) and not any(invoked(p,m.name,1) for m in updaters) for p,b in text_objs.items())
        hints={'class_make':'Define a class with a string attribute. Create an instance with ClassName() and print its attribute using a dot.', 'class_attribute':'Create two instances of a class with a string default. Change the attribute on only the first instance and print the attribute on both.', 'class_method':'Define a method with one self parameter that prints self.attribute. Create an instance and call its method with no arguments.', 'class_init':'Define __init__(self, value) and assign self.attribute = value. Create an instance with a string and print its attribute.', 'class_update':'Set a string attribute in __init__, then use a method with one extra parameter to change that same attribute. Call it with different text and print the attribute.', 'class_return':'Store a string in __init__. Return nonempty text + self.attribute from a method, then print the instance method call.', 'class_two':'Use __init__ for a numeric attribute and a method adding 1 to it. Create two differently valued instances, update only the first and print both attributes.', 'class_project':'Store a name in __init__, update it in a method, and return joined text in another method. Make two differently named instances, update only the first and print both greeting calls.'}
        return ret(good,hints[rule])
    return 'Unknown exercise.'

def check_v09(source,rule):
    tree=ast.parse(source);nodes=list(ast.walk(tree))
    def name(n,v):return isinstance(n,ast.Name) and n.id==v
    def const(n,v):return isinstance(n,ast.Constant) and n.value==v
    def text(n):return isinstance(n,ast.Constant) and isinstance(n.value,str) and bool(n.value.strip())
    def positive(n):return isinstance(n,ast.Constant) and isinstance(n.value,(int,float)) and not isinstance(n.value,bool) and n.value>0
    def call(n,v):return isinstance(n,ast.Call) and name(n.func,v)
    def attribute(n,obj,key):return isinstance(n,ast.Attribute) and name(n.value,obj) and n.attr==key
    def sub(n,base,key):return isinstance(n,ast.Subscript) and base(n.value) and const(n.slice,key)
    def walk(body):return [n for st in body for n in ast.walk(st)]
    def prints(body):return [n for n in walk(body) if call(n,'print')]
    def shown(body,pred):return any(pred(a) for p in prints(body) for a in p.args)
    def record(n):
        if not isinstance(n,ast.Dict):return False
        fields={k.value:v for k,v in zip(n.keys,n.values) if isinstance(k,ast.Constant)}
        return text(fields.get('title')) and positive(fields.get('pages'))
    def recordlist(n):return isinstance(n,ast.List) and len(n.elts)>=2 and all(record(e) for e in n.elts)
    assignments=[n for n in tree.body if isinstance(n,ast.Assign)]
    values={t.id:s.value for s in assignments for t in s.targets if isinstance(t,ast.Name)}
    lists={k:v for k,v in values.items() if recordlist(v)}
    def resolve(n):return values.get(n.id,n) if isinstance(n,ast.Name) else n
    module_names={a.asname or a.name:a.name for n in tree.body if isinstance(n,ast.Import) for a in n.names}
    from_names={a.asname or a.name:(n.module,a.name) for n in tree.body if isinstance(n,ast.ImportFrom) for a in n.names}
    def modulecall(n,mod,func):return isinstance(n,ast.Call) and isinstance(n.func,ast.Attribute) and isinstance(n.func.value,ast.Name) and module_names.get(n.func.value.id)==mod and n.func.attr==func
    def title0(n,base):return sub(n,lambda x:sub(x,base,0),'title')
    if rule.startswith('record_'):
        good=False
        for var,lst in lists.items():
            islist=lambda n:name(n,var)
            loops=[n for n in tree.body if isinstance(n,ast.For) and islist(n.iter) and isinstance(n.target,ast.Name)]
            if rule=='record_make':good |= shown(tree.body,islist)
            if rule=='record_read':good |= shown(tree.body,lambda n:title0(n,islist))
            if rule=='record_loop':good |= any(shown(l.body,lambda n:sub(n,lambda x:name(x,l.target.id),'title')) for l in loops)
            if rule=='record_update':
                old=next(v.value for k,v in zip(lst.elts[0].keys,lst.elts[0].values) if const(k,'pages'))
                update=any(positive(s.value) and s.value.value!=old and any(sub(t,lambda n:sub(n,islist,0),'pages') for t in s.targets) for s in assignments)
                append=any(isinstance(n,ast.Call) and attribute(n.func,var,'append') and len(n.args)==1 and record(n.args[0]) for n in nodes)
                good |= update and append and shown(tree.body,lambda n:sub(n,lambda x:sub(x,islist,0),'pages')) and shown(tree.body,lambda n:call(n,'len') and len(n.args)==1 and islist(n.args[0]))
            if rule=='record_filter':
                counts=[next(v.value for k,v in zip(d.keys,d.values) if const(k,'pages')) for d in lst.elts]
                for l in loops:
                    for b in l.body:
                        if not isinstance(b,ast.If):continue
                        c=b.test
                        good |= min(counts)<=25<max(counts) and isinstance(c,ast.Compare) and sub(c.left,lambda x:name(x,l.target.id),'pages') and len(c.ops)==1 and isinstance(c.ops[0],ast.Gt) and const(c.comparators[0],25) and shown(b.body,lambda n:sub(n,lambda x:name(x,l.target.id),'title'))
            if rule=='record_total':
                for l in loops:
                    for s in l.body:
                        if not (isinstance(s,ast.Assign) and isinstance(s.value,ast.BinOp) and isinstance(s.value.op,ast.Add) and isinstance(s.value.left,ast.Name)):continue
                        total=s.value.left.id
                        good |= any(name(t,total) for t in s.targets) and const(values.get(total),0) and sub(s.value.right,lambda n:name(n,l.target.id),'pages') and shown(tree.body[tree.body.index(l)+1:],lambda n:name(n,total))
        return '' if good else 'Use a list of at least two dictionaries with nonempty string title and positive numeric pages. '+{'record_make':'Print the list.','record_read':'Print list[0]["title"].','record_loop':'Loop over the list and print the current record["title"].','record_update':'Change the first pages field, append a valid record, and print the changed pages and list length.','record_filter':'Include records above and at/below 25 pages. Print each title only inside the loop\'s if record["pages"] > 25.','record_total':'Start a total at 0, add each record["pages"] inside the loop, and print the total after it.'}[rule]
    if rule.startswith('module_'):
        good=False
        if rule in ('module_import','module_alias'):
            good=any(modulecall(a,'math','sqrt') and len(a.args)==1 and positive(a.args[0]) and (rule!='module_alias' or a.func.value.id!='math') for p in prints(tree.body) for a in p.args)
        if rule=='module_ceil':
            for p in prints(tree.body):
                for a in p.args:
                    if not (modulecall(a,'math','ceil') and len(a.args)==1 and isinstance(a.args[0],ast.BinOp) and isinstance(a.args[0].op,ast.Div)):continue
                    d=a.args[0];good |= isinstance(d.left,ast.Name) and isinstance(d.right,ast.Name) and positive(resolve(d.left)) and positive(resolve(d.right))
        if rule=='module_from':good=any(isinstance(a,ast.Call) and isinstance(a.func,ast.Name) and from_names.get(a.func.id)==('math','sqrt') and len(a.args)==1 and positive(a.args[0]) for p in prints(tree.body) for a in p.args)
        encoded={t.id for s in assignments if modulecall(s.value,'json','dumps') and len(s.value.args)==1 and isinstance(s.value.args[0],ast.Name) and s.value.args[0].id in lists for t in s.targets if isinstance(t,ast.Name)}
        if rule=='module_dumps':good=shown(tree.body,lambda n:isinstance(n,ast.Name) and n.id in encoded)
        if rule=='module_loads':
            decoded={t.id for s in assignments if modulecall(s.value,'json','loads') and len(s.value.args)==1 and isinstance(s.value.args[0],ast.Name) and s.value.args[0].id in encoded for t in s.targets if isinstance(t,ast.Name)}
            good=shown(tree.body,lambda n:title0(n,lambda x:isinstance(x,ast.Name) and x.id in decoded))
        return '' if good else {'module_import':'Import math and print math.sqrt of a positive number.','module_alias':'Import math as your_alias, then print your_alias.sqrt of a positive number.','module_from':'Use from math import sqrt and print a direct sqrt call with a positive number.','module_ceil':'Import math, store two positive numbers, then print math.ceil(first / second).','module_dumps':'Import json, store at least two valid book records, assign json.dumps(records) to a variable and print that variable.','module_loads':'Serialize your record list with json.dumps, decode that string with json.loads and print restored[0]["title"].'}[rule]
    # Recognize an actual same-filename JSON file round trip.
    def roundtrips(data_pred):
        written=[];decoded=[]
        for st in tree.body:
            if not isinstance(st,ast.With):continue
            for item in st.items:
                c=item.context_expr
                if not (call(c,'open') and len(c.args)==2 and text(c.args[0]) and isinstance(item.optional_vars,ast.Name)):continue
                file=item.optional_vars.id;path=c.args[0].value
                if const(c.args[1],'w'):
                    for n in walk(st.body):
                        if isinstance(n,ast.Call) and attribute(n.func,file,'write') and len(n.args)==1 and modulecall(n.args[0],'json','dumps') and len(n.args[0].args)==1 and data_pred(n.args[0].args[0]):written.append(path)
                if const(c.args[1],'r') and path in written:
                    for s in st.body:
                        if not isinstance(s,ast.Assign):continue
                        for n in ast.walk(s.value):
                            if modulecall(n,'json','loads') and len(n.args)==1 and isinstance(n.args[0],ast.Call) and attribute(n.args[0].func,file,'read'):
                                decoded.extend((t.id,s.value) for t in s.targets if isinstance(t,ast.Name))
        return decoded
    if rule=='project_file':
        restored=roundtrips(lambda n:isinstance(n,ast.Name) and n.id in lists)
        return '' if any(shown(tree.body,lambda n:title0(n,lambda x:name(x,var))) for var,val in restored) else 'Write json.dumps(your record list) in a with/open "w" block, reopen the same filename with "r", decode read() with json.loads and print the first restored title.'
    good=False
    for cls in [n for n in tree.body if isinstance(n,ast.ClassDef)]:
        methods=[n for n in cls.body if isinstance(n,ast.FunctionDef)]
        for init in methods:
            if init.name!='__init__' or len(init.args.args)!=2:continue
            me,param=[a.arg for a in init.args.args]
            keys=[t.attr for st in init.body if isinstance(st,ast.Assign) and name(st.value,param) for t in st.targets if isinstance(t,ast.Attribute) and name(t.value,me)]
            instances={t.id:st.value for st in assignments if call(st.value,cls.name) and len(st.value.args)==1 and recordlist(st.value.args[0]) for t in st.targets if isinstance(t,ast.Name)}
            for key in keys:
                totals=[];adders=[]
                for m in methods:
                    if not m.args.args:continue
                    self_=m.args.args[0].arg
                    if len(m.args.args)==1:
                        for l in m.body:
                            if not (isinstance(l,ast.For) and attribute(l.iter,self_,key) and isinstance(l.target,ast.Name)):continue
                            for s in l.body:
                                if not (isinstance(s,ast.Assign) and isinstance(s.value,ast.BinOp) and isinstance(s.value.op,ast.Add) and isinstance(s.value.left,ast.Name)):continue
                                total=s.value.left.id
                                start=any(isinstance(x,ast.Assign) and const(x.value,0) and any(name(t,total) for t in x.targets) for x in m.body[:m.body.index(l)])
                                end=any(isinstance(x,ast.Return) and name(x.value,total) for x in m.body[m.body.index(l)+1:])
                                if start and end and any(name(t,total) for t in s.targets) and sub(s.value.right,lambda n:name(n,l.target.id),'pages'):totals.append(m.name)
                    if len(m.args.args)==3:
                        title,pages=[a.arg for a in m.args.args[1:]]
                        for n in walk(m.body):
                            if not (isinstance(n,ast.Call) and isinstance(n.func,ast.Attribute) and n.func.attr=='append' and attribute(n.func.value,self_,key) and len(n.args)==1 and isinstance(n.args[0],ast.Dict)):continue
                            d={k.value:v for k,v in zip(n.args[0].keys,n.args[0].values) if isinstance(k,ast.Constant)}
                            if name(d.get('title'),title) and name(d.get('pages'),pages):adders.append(m.name)
                for obj in instances:
                    base=lambda n:attribute(n,obj,key)
                    if rule=='project_store':good |= shown(tree.body,lambda n:title0(n,base));continue
                    total_shown=lambda o:shown(tree.body,lambda n:isinstance(n,ast.Call) and isinstance(n.func,ast.Attribute) and name(n.func.value,o) and n.func.attr in totals and not n.args)
                    if rule=='project_total':good |= total_shown(obj);continue
                    # Input title, conversion, matching handler, positive check, object addition.
                    title_reads={t.id for st in assignments if call(st.value,'input') for t in st.targets if isinstance(t,ast.Name)}
                    validation=False;length_shown=False
                    for tr in tree.body:
                        if not isinstance(tr,ast.Try):continue
                        handler=any(name(h.type,'ValueError') and shown(h.body,text) for h in tr.handlers)
                        for s in tr.body:
                            if not (isinstance(s,ast.Assign) and call(s.value,'int') and len(s.value.args)==1 and call(s.value.args[0],'input')):continue
                            pagevars={t.id for t in s.targets if isinstance(t,ast.Name)}
                            for branch in tr.orelse:
                                if not isinstance(branch,ast.If):continue
                                test=branch.test
                                if not (isinstance(test,ast.Compare) and isinstance(test.left,ast.Name) and test.left.id in pagevars and len(test.ops)==1 and isinstance(test.ops[0],ast.Gt) and const(test.comparators[0],0)):continue
                                added=any(isinstance(n,ast.Call) and isinstance(n.func,ast.Attribute) and name(n.func.value,obj) and n.func.attr in adders and len(n.args)==2 and isinstance(n.args[0],ast.Name) and n.args[0].id in title_reads and name(n.args[1],test.left.id) for n in walk(branch.body))
                                validation |= handler and added and shown(branch.orelse,text)
                                length_shown |= shown(branch.body,lambda n:call(n,'len') and len(n.args)==1 and base(n.args[0]))
                    if rule=='project_add':good |= validation and length_shown;continue
                    if rule=='project_final':
                        for restored,val in roundtrips(base):
                            if not (call(val,cls.name) and len(val.args)==1 and modulecall(val.args[0],'json','loads')):continue
                            report=False
                            for l in tree.body:
                                if not (isinstance(l,ast.For) and attribute(l.iter,restored,key) and isinstance(l.target,ast.Name)):continue
                                report |= any(any(sub(a,lambda n:name(n,l.target.id),'title') for a in p.args) and any(sub(a,lambda n:name(n,l.target.id),'pages') for a in p.args) for p in prints(l.body))
                            good |= validation and report and total_shown(restored)
    return '' if good else {'project_store':'Store a book list in an instance attribute via __init__, create a tracker with two valid records and print its first title.','project_total':'Store two records in your tracker. In a method, total the pages from self.books and return after the loop. Print that instance method result.','project_add':'Store two records, define an add method appending title/pages, read title then int(input()), catch ValueError, add only inside the success branch if pages > 0, and print the length. Give a message for nonpositive pages.','project_final':'Check the stages against the hint: tracker storage, add and returning total methods, title/pages inputs, ValueError recovery, positive-page validation, JSON file round trip into a new tracker, then its title/pages loop and total method result.'}.get(rule,'Unknown project exercise.')
