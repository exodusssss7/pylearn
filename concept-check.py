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
