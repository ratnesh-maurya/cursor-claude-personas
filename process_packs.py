# -*- coding: utf-8 -*-
import os
import re
import shutil

BASE_CONTENT = """---
description: Auto-Skill Router and Manifest for {persona}
globs: *
---

# 🦸 Auto-Skill Router ({persona})

As a **{persona}**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🗂️ Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

{skills_list}

## 🧠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
"""

def process_packs():
    packs_dir = 'packs'
    
    if not os.path.exists(packs_dir) or not os.path.isdir(packs_dir):
        print(f"Error: '{packs_dir}' directory not found.")
        return

    print(f"Starting formatting and extraction from {packs_dir}/...")

    for d in os.listdir(packs_dir):
        persona_path = os.path.join(packs_dir, d)
        
        # Skip files or hidden directories
        if not os.path.isdir(persona_path) or d.startswith('.'):
            continue
            
        persona_title = d.replace('-', ' ').upper()
        
        # 1. Format Cursor Rules (.md to .mdc)
        cursor_rules_dir = os.path.join(persona_path, '.cursor', 'rules')
        if os.path.exists(cursor_rules_dir):
            for f in os.listdir(cursor_rules_dir):
                if f.endswith('.md') and not f.endswith('.mdc'):
                    old_path = os.path.join(cursor_rules_dir, f)
                    new_path = os.path.join(cursor_rules_dir, f[:-3] + '.mdc')
                    os.rename(old_path, new_path)
                    
        # 2. Extract Skills and build manifest
        skills_list = ""
        cursor_skills_dir = os.path.join(persona_path, '.cursor', 'skills')
        
        if os.path.exists(cursor_skills_dir):
            for skill_folder in sorted(os.listdir(cursor_skills_dir)):
                skill_md_path = os.path.join(cursor_skills_dir, skill_folder, 'SKILL.md')
                if os.path.exists(skill_md_path):
                    try:
                        with open(skill_md_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                        match = re.search(r'description:\s*(.*?)\n', content)
                        desc = match.group(1).strip() if match else f"Skill instructions for {skill_folder}"
                        skills_list += f"- **{skill_folder}**: \"{desc}\"\n"
                    except Exception as e:
                        print(f"Error reading {skill_md_path}: {e}")
                        
        if not skills_list:
            skills_list = "- (No specific skills loaded yet. Check `.cursor/skills/`)"
            
        # 3. Write Router
        router_content = BASE_CONTENT.format(persona=persona_title, skills_list=skills_list)
        
        claude_rule_path = os.path.join(persona_path, '.claude', 'rules', 'rules--auto-skill-router.md')
        cursor_rule_path = os.path.join(persona_path, '.cursor', 'rules', 'rules--auto-skill-router.mdc')
        
        if os.path.exists(os.path.dirname(claude_rule_path)):
            with open(claude_rule_path, 'w', encoding='utf-8') as f:
                f.write(router_content)
                
        if os.path.exists(os.path.dirname(cursor_rule_path)):
            with open(cursor_rule_path, 'w', encoding='utf-8') as f:
                f.write(router_content)
                
        # 4. Move persona to root
        target_path = os.path.join('.', d)
        
        # If the folder somehow already exists at root, remove it to avoid conflict
        if os.path.exists(target_path):
            shutil.rmtree(target_path)
            
        shutil.move(persona_path, '.')
        print(f"✅ Processed and exported: {d}")
        
    # 5. Clean up packs directory
    shutil.rmtree(packs_dir)
    print("🗑️ Cleaned up and deleted empty 'packs/' directory.")

if __name__ == '__main__':
    process_packs()