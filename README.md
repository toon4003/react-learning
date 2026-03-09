# react-learning
for learning react

## Installation
Run this cmd

```bash
npm create vite@latest <project_name>
```

It will ask:

```
Select a framework:
❯ Vanilla
  Vue
  React
  Preact
  Lit
  Svelte
```

Choose:

```
React
```

Then it asks:

```
Select a variant:
❯ JavaScript
  TypeScript
```

Choose:

```
JavaScript
```

---

### Then install dependencies

```bash
cd <project_name>
npm install
npm run dev
```

Now Project runs at:

```
http://localhost:5173
```

---
# The Idea of folder
✅ Idea of a learning folder is perfect. Example:

```
react-learning
├─ 01-jsx
├─ 02-components
├─ 03-props
├─ 04-state
├─ 05-events
```

Each folder = one React topic.


## First trick for static pages

If you see:

```
export default
```

👉 import **without `{}`**

If you see:

```
export function Something
```

👉 import **with `{}`**

---

## Declarative vs Imperative
### Imperative (How to do it)

You write step-by-step instructions telling the computer exactly how to build the UI.

Example with normal DOM:
```
const h1 = document.createElement("h1")
h1.textContent = "Hello React"
h1.className = "header"

document.getElementById("root").appendChild(h1)

```
### Declarative (What you want)

React uses declarative style.

You describe what the UI should look like, not how to build it.
Example: 
```
root.render(
  <h1 className="header">Hello React</h1>
)
```