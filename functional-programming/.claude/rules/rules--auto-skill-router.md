---
description: Auto-Skill Router and Manifest for FUNCTIONAL PROGRAMMING
globs: *
---

# 🦸 Auto-Skill Router (FUNCTIONAL PROGRAMMING)

As a **FUNCTIONAL PROGRAMMING**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🗂️ Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **fp-async**: "Practical async patterns using TaskEither - clean pipelines instead of try/catch hell, with real API examples"
- **fp-backend**: "Functional programming patterns for Node.js/Deno backend development using fp-ts, ReaderTaskEither, and functional dependency injection"
- **fp-data-transforms**: "Everyday data transformations using functional patterns - arrays, objects, grouping, aggregation, and null-safe access"
- **fp-either-ref**: "Quick reference for Either type. Use when user needs error handling, validation, or operations that can fail with typed errors."
- **fp-errors**: "Stop throwing everywhere - handle errors as values using Either and TaskEither for cleaner, more predictable code"
- **fp-option-ref**: "Quick reference for Option type. Use when user needs to handle nullable values, optional data, or wants to avoid null checks."
- **fp-pipe-ref**: "Quick reference for pipe and flow. Use when user needs to chain functions, compose operations, or build data pipelines in fp-ts."
- **fp-pragmatic**: "A practical, jargon-free guide to functional programming - the 80/20 approach that gets results without the academic overhead"
- **fp-refactor**: "Comprehensive guide for refactoring imperative TypeScript code to fp-ts functional patterns"
- **fp-taskeither-ref**: "Quick reference for TaskEither. Use when user needs async error handling, API calls, or Promise-based operations that can fail."
- **fp-ts-errors**: ""Handle errors as values using fp-ts Either and TaskEither for cleaner, more predictable TypeScript code. Use when implementing error handling patterns with fp-ts.""
- **fp-ts-pragmatic**: ""A practical, jargon-free guide to fp-ts functional programming - the 80/20 approach that gets results without the academic overhead. Use when writing TypeScript with fp-ts library.""
- **fp-types-ref**: "Quick reference for fp-ts types. Use when user asks which type to use, needs Option/Either/Task decision help, or wants fp-ts imports."
- **haskell-pro**: ""Expert Haskell engineer specializing in advanced type systems, pure""
- **scala-pro**: "Master enterprise-grade Scala development with functional programming, distributed systems, and big data processing. Expert in Apache Pekko, Akka, Spark, ZIO/Cats Effect, and reactive architectures."


## 🧠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
