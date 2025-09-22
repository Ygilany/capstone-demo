# GitHub Project Management Demo

A comprehensive demonstration of GitHub project management features for senior capstone students. This repository showcases how to organize complex software projects using GitHub Issues, with a focus on hierarchical task management through epics, tasks, and subtasks.

## 📋 What This Demo Covers

This repository demonstrates professional project management practices including:

- **Epic-Task-Subtask Hierarchy**: How to break down large features into manageable work items
- **Issue Templates**: Standardized formats for consistent issue creation
- **Project Organization**: Best practices for labeling, assigning, and tracking work
- **Documentation**: Clear communication of project structure and workflows

## 🗂️ Repository Structure

```
├── .github/
│   └── ISSUE_TEMPLATE/          # Templates for creating standardized issues
│       ├── epic.md              # Template for large features/epics  
│       ├── task.md              # Template for specific implementation tasks
│       └── bug.md               # Template for bug reports
├── sample-issues/               # Example issues demonstrating structure
│   ├── epic-student-information-system.md
│   ├── task-student-registration-form.md
│   ├── task-student-data-validation.md
│   └── bug-duplicate-email-registration.md
├── PROJECT_MANAGEMENT_GUIDE.md  # Comprehensive guide to using this system
└── README.md                    # This file
```

## 🎯 Learning Objectives

After exploring this demo, students will understand:

1. **Hierarchical Task Breakdown**: How to decompose large features into manageable tasks
2. **Issue Linking**: Creating relationships between related work items
3. **Progress Tracking**: Using subtasks and checklists to monitor completion
4. **Team Coordination**: Assigning work and communicating through issues
5. **Quality Management**: Tracking bugs and their resolution

## 🚀 Quick Start Guide

### 1. Review the Project Management Guide
Start by reading [`PROJECT_MANAGEMENT_GUIDE.md`](./PROJECT_MANAGEMENT_GUIDE.md) for a complete overview of the system.

### 2. Explore Sample Issues
Check the [`sample-issues/`](./sample-issues/) directory to see real examples of:
- How to structure an epic for a major feature
- How to break tasks down into subtasks
- How to write effective bug reports

### 3. Use the Issue Templates
When creating new issues in your own projects:
1. Go to the "Issues" tab
2. Click "New Issue"
3. Select the appropriate template (Epic, Task, or Bug Report)
4. Fill out the template with your specific information

## 📊 Issue Hierarchy Example

Here's how the sample issues in this demo are structured:

```
🎯 EPIC: Student Information System
├── 📋 TASK: Create Student Registration Form
│   ├── ✅ Design form wireframes and mockups
│   ├── ✅ Create responsive HTML structure  
│   ├── ✅ Implement form styling with CSS/SCSS
│   ├── ⬜ Add client-side form validation
│   ├── ⬜ Integrate with backend API endpoints
│   └── ⬜ ... (more subtasks)
├── 📋 TASK: Implement Student Data Validation
│   ├── ⬜ Design validation schema for student data models
│   ├── ⬜ Implement email format and uniqueness validation
│   └── ⬜ ... (more subtasks)
└── 🐛 BUG: Registration Form Allows Duplicate Email Addresses
    ├── Investigation and root cause analysis
    └── Fix implementation and testing
```

## 🏷️ Labels and Organization

The demo uses these standard labels:
- `epic` - Large features or requirements
- `task` - Specific implementation work  
- `bug` - Issues and defects
- `enhancement` - Feature improvements
- `documentation` - Documentation updates
- `high-priority` / `low-priority` - Work prioritization

## 🎓 For Capstone Students

This demo is specifically designed for senior capstone projects. Key takeaways:

- **Start with Epics**: Define your major deliverables first
- **Break Down Work**: Divide epics into specific, actionable tasks
- **Track Progress**: Use subtask checklists to show completion
- **Communicate Clearly**: Write issues that your team members can easily understand
- **Link Related Work**: Show how issues depend on or relate to each other

## 💡 Best Practices Demonstrated

1. **Clear Descriptions**: Every issue has a clear purpose and scope
2. **Acceptance Criteria**: Specific requirements for completion
3. **Task Breakdown**: Large work divided into manageable pieces  
4. **Progress Tracking**: Checkboxes for monitoring completion
5. **Issue Linking**: Relationships between epics, tasks, and bugs
6. **Professional Communication**: Industry-standard issue documentation

## 🤝 Contributing to Your Own Projects

To implement this system in your capstone project:

1. **Copy the Templates**: Use the `.github/ISSUE_TEMPLATE/` files in your repository
2. **Adapt the Guide**: Modify `PROJECT_MANAGEMENT_GUIDE.md` for your project needs
3. **Create Your Epics**: Define your major project deliverables
4. **Break Down Tasks**: Divide epics into specific implementation work
5. **Track Progress**: Use the subtask system to monitor completion

## 📚 Additional Resources

- [GitHub Issues Documentation](https://docs.github.com/en/issues)
- [GitHub Project Boards](https://docs.github.com/en/issues/organizing-your-work-with-project-boards)
- [Agile Project Management Basics](https://www.atlassian.com/agile/project-management)

---

*This demo was created to help senior capstone students learn professional project management practices using GitHub's built-in tools.*
