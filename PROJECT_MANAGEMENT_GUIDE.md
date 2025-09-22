# Project Management with GitHub Issues

This repository demonstrates how to use GitHub Issues to organize project work with tasks and subtasks. This guide is designed for senior capstone students learning project management best practices.

## Issue Hierarchy Overview

Our project uses a three-tier hierarchy for organizing work:

```
Epic (Main Feature) ← High-level feature or requirement
├── Task 1 ← Specific implementation work
│   ├── ✓ Subtask 1.1 ← Detailed implementation steps
│   ├── ✓ Subtask 1.2
│   └── ☐ Subtask 1.3
├── Task 2
│   ├── ✓ Subtask 2.1
│   └── ☐ Subtask 2.2
└── Task 3
    ├── ☐ Subtask 3.1
    ├── ☐ Subtask 3.2
    └── ☐ Subtask 3.3
```

## Issue Types

### 1. Epics (Main Features)
- **Purpose**: Large features or requirements that span multiple development cycles
- **Label**: `epic`
- **Example**: User Authentication System, Dashboard Implementation
- **Contains**: Links to related tasks

### 2. Tasks 
- **Purpose**: Specific work items that contribute to completing an epic
- **Label**: `task`
- **Example**: Create login form, Implement password validation
- **Contains**: Subtasks as checkbox items

### 3. Subtasks
- **Purpose**: Detailed implementation steps within a task
- **Format**: Checkbox items within task issues
- **Example**: Write unit tests, Update documentation, Code review

## Best Practices

### Creating Epics
1. Use the Epic issue template
2. Clearly define user stories and acceptance criteria
3. Link to all related tasks using the "Related Tasks" section
4. Assign appropriate labels and milestones

### Creating Tasks
1. Use the Task issue template
2. Reference the parent epic using "Part of epic: #[issue-number]"
3. Break down work into specific subtasks
4. Estimate effort and identify dependencies

### Managing Subtasks
1. Use GitHub's task list syntax: `- [ ]` for incomplete, `- [x]` for complete
2. Keep subtasks specific and actionable
3. Update progress by checking off completed subtasks

## Issue Labels

| Label | Purpose | Color |
|-------|---------|-------|
| `epic` | High-level features | Purple |
| `task` | Implementation work | Blue |
| `bug` | Bug reports | Red |
| `enhancement` | Feature improvements | Green |
| `documentation` | Documentation updates | Yellow |
| `high-priority` | Urgent work | Orange |
| `low-priority` | Nice-to-have work | Gray |

## Linking Issues

### Referencing Issues
- Use `#[issue-number]` to reference other issues
- GitHub automatically creates links between issues

### Common Linking Patterns
- **Epic to Tasks**: List task issues in the epic's "Related Tasks" section
- **Task to Epic**: Include "Part of epic: #[epic-number]" in task description
- **Dependencies**: Use "Depends on #[issue-number]" or "Blocks #[issue-number]"

## Example Workflow

1. **Create Epic**: Define a large feature requirement
2. **Break Down**: Create individual tasks for the epic
3. **Detail Tasks**: Add subtasks to each task issue
4. **Track Progress**: Update subtask checkboxes as work is completed
5. **Close Issues**: Close tasks when all subtasks are complete, close epic when all tasks are complete

## GitHub Features for Project Management

### Milestones
- Group related issues by release or sprint
- Track progress with completion percentages
- Set due dates for deadlines

### Projects (Beta)
- Create kanban-style boards
- Organize issues across multiple repositories
- Add custom fields for tracking

### Assignees
- Assign issues to team members
- Track who is responsible for what work
- Distribute workload evenly

## Tips for Capstone Projects

1. **Start with Epics**: Define your major deliverables first
2. **Be Specific**: Break tasks down into small, manageable pieces
3. **Update Regularly**: Keep subtasks current to track real progress
4. **Use Templates**: Consistent formatting helps team communication
5. **Link Everything**: Make relationships between issues clear
6. **Review Together**: Use issues for code review discussions

## Sample Issue Examples

See the following sample issues to understand the structure:
- Epic: [Student Information System](#sample-epic-1)
- Task: [Create Student Registration Form](#sample-task-1) 
- Task: [Implement Student Data Validation](#sample-task-2)

These samples demonstrate how to structure your capstone project issues for maximum clarity and tracking capability.