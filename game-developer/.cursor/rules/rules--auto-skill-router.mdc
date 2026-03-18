---
description: Auto-Skill Router and Manifest for GAME DEVELOPER
globs: *
---

# 🦸 Auto-Skill Router (GAME DEVELOPER)

As a **GAME DEVELOPER**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🗂️ Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **3d-web-experience**: ""Expert in building 3D experiences for the web - Three.js, React Three Fiber, Spline, WebGL, and interactive 3D scenes. Covers product configurators, 3D portfolios, immersive websites, and bringing ...""
- **algorithmic-art**: ""Creating algorithmic art using p5.js with seeded randomness and interactive parameter exploration. Use this when users request creating art using code, generative art, algorithmic art, flow fields,...""
- **animejs-animation**: "Advanced JavaScript animation library skill for creating complex, high-performance web animations."
- **arm-cortex-expert**: "Senior embedded software engineer specializing in firmware and driver development for ARM Cortex-M microcontrollers (Teensy, STM32, nRF52, SAMD)."
- **bevy-ecs-expert**: ""Master Bevy's Entity Component System (ECS) in Rust, covering Systems, Queries, Resources, and parallel scheduling.""
- **canvas-design**: ""Create beautiful visual art in .png and .pdf documents using design philosophy. You should use this skill when the user asks to create a poster, piece of art, design, or other static piece. Create ...""
- **fixing-motion-performance**: "Audit and fix animation performance issues including layout thrashing, compositor properties, scroll-linked motion, and blur effects. Use when animations stutter, transitions jank, or reviewing CSS/JS animation performance."
- **game-development**: ""Game development orchestrator. Routes to platform-specific skills based on project needs.""
- **godot-4-migration**: ""Specialized guide for migrating Godot 3.x projects to Godot 4 (GDScript 2.0), covering syntax changes, Tweens, and exports.""
- **godot-gdscript-patterns**: ""Master Godot 4 GDScript patterns including signals, scenes, state machines, and optimization. Use when building Godot games, implementing game systems, or learning GDScript best practices.""
- **memory-safety-patterns**: ""Implement memory-safe programming with RAII, ownership, smart pointers, and resource management across Rust, C++, and C. Use when writing safe systems code, managing resources, or preventing memory...""
- **minecraft-bukkit-pro**: "Master Minecraft server plugin development with Bukkit, Spigot, and Paper APIs."
- **performance-engineer**: ""Expert performance engineer specializing in modern observability,""
- **performance-optimizer**: ""Identifies and fixes performance bottlenecks in code, databases, and APIs. Measures before and after to prove improvements.""
- **rust-pro**: "Master Rust 1.75+ with modern async patterns, advanced type system features, and production-ready systems programming."
- **senior-architect**: ""Comprehensive software architecture skill for designing scalable, maintainable systems using ReactJS, NextJS, NodeJS, Express, React Native, Swift, Kotlin, Flutter, Postgres, GraphQL, Go, Python. I...""
- **shader-programming-glsl**: ""Expert guide for writing efficient GLSL shaders (Vertex/Fragment) for web and game engines, covering syntax, uniforms, and common effects.""
- **software-architecture**: ""Guide for quality focused software architecture. This skill should be used when users want to write code, design architecture, analyze code, in any case that relates to software development.""
- **test-driven-development**: ""Use when implementing any feature or bugfix, before writing implementation code""
- **threejs-animation**: "Three.js animation - keyframe animation, skeletal animation, morph targets, animation mixing. Use when animating objects, playing GLTF animations, creating procedural motion, or blending animations."
- **threejs-fundamentals**: "Three.js scene setup, cameras, renderer, Object3D hierarchy, coordinate systems. Use when setting up 3D scenes, creating cameras, configuring renderers, managing object hierarchies, or working with transforms."
- **threejs-geometry**: "Three.js geometry creation - built-in shapes, BufferGeometry, custom geometry, instancing. Use when creating 3D shapes, working with vertices, building custom meshes, or optimizing with instanced rendering."
- **threejs-interaction**: "Three.js interaction - raycasting, controls, mouse/touch input, object selection. Use when handling user input, implementing click detection, adding camera controls, or creating interactive 3D experiences."
- **threejs-lighting**: "Three.js lighting - light types, shadows, environment lighting. Use when adding lights, configuring shadows, setting up IBL, or optimizing lighting performance."
- **threejs-materials**: "Three.js materials - PBR, basic, phong, shader materials, material properties. Use when styling meshes, working with textures, creating custom shaders, or optimizing material performance."
- **threejs-shaders**: "Three.js shaders - GLSL, ShaderMaterial, uniforms, custom effects. Use when creating custom visual effects, modifying vertices, writing fragment shaders, or extending built-in materials."
- **threejs-skills**: ""Create 3D scenes, interactive experiences, and visual effects using Three.js. Use when user requests 3D graphics, WebGL experiences, 3D visualizations, animations, or interactive 3D elements.""
- **unity-developer**: "Build Unity games with optimized C# scripts, efficient rendering, and proper asset management. Masters Unity 6 LTS, URP/HDRP pipelines, and cross-platform deployment."
- **unity-ecs-patterns**: ""Master Unity ECS (Entity Component System) with DOTS, Jobs, and Burst for high-performance game development. Use when building data-oriented games, optimizing performance, or working with large ent...""
- **unreal-engine-cpp-pro**: ""Expert guide for Unreal Engine 5.x C++ development, covering UObject hygiene, performance patterns, and best practices.""


## 🧠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
