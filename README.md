# 📋 Capstone Demo - GitHub Project Boards

A comprehensive demonstration repository showcasing GitHub Project Board features for senior capstone classes. This repository includes a sample task management application that generates realistic scenarios for project management workflows.

## 🎯 Purpose

This repository is designed to teach students about:
- GitHub Project Boards and Kanban workflows
- Issue tracking and management
- Sprint planning and milestones
- Pull request workflows
- Team collaboration features
- Automated project management

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ygilany/capstone-demo.git
cd capstone-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

## 📊 GitHub Project Board Demo Features

### 1. Issue Templates
The repository includes three types of issue templates:
- **🐛 Bug Reports**: For tracking and fixing bugs
- **✨ Feature Requests**: For new functionality
- **📚 Documentation**: For documentation improvements

### 2. Project Board Workflow
```
📝 To Do → 🔄 In Progress → ✅ Done
```

### 3. Labels and Prioritization
- `bug` - Issues that need fixing
- `enhancement` - New features
- `documentation` - Documentation updates
- `good first issue` - Beginner-friendly tasks
- `needs-review` - Requires team review
- `needs-triage` - Needs initial assessment

### 4. Automation
- Issues automatically move to "In Progress" when linked PR is opened
- Issues move to "Done" when PR is merged
- CI/CD pipeline runs on all pull requests

## 🛠 Project Structure

```
capstone-demo/
├── .github/
│   ├── workflows/           # GitHub Actions
│   ├── ISSUE_TEMPLATE/      # Issue templates
│   └── PULL_REQUEST_TEMPLATE/ # PR templates
├── public/                  # Frontend assets
├── server.js               # Express.js backend
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎓 Educational Scenarios

### Scenario 1: Sprint Planning
1. Create a milestone for "Sprint 1"
2. Create issues for the sprint using templates
3. Assign story points and priorities
4. Add issues to project board
5. Assign team members

### Scenario 2: Bug Triage
1. Create bug reports using the bug template
2. Label bugs by severity
3. Assign to appropriate team members
4. Track resolution progress

### Scenario 3: Feature Development
1. Create feature request using template
2. Break down into smaller tasks
3. Create development branches
4. Submit pull requests
5. Link PRs to issues
6. Review and merge

### Scenario 4: Release Management
1. Create release milestone
2. Group related issues
3. Track completion progress
4. Generate release notes

## 📈 Project Board Views

### 1. Kanban Board
- **To Do**: New issues and planned work
- **In Progress**: Active development
- **Done**: Completed work

### 2. Sprint Board
- Group by milestone
- Filter by assignee
- Sort by priority

### 3. Bug Tracker
- Filter by `bug` label
- Group by severity
- Track resolution time

## 🤝 Contributing Workflow

1. **Create Issue**: Use appropriate template
2. **Assign & Label**: Add labels and assignees
3. **Create Branch**: `feature/issue-number-description`
4. **Development**: Make changes and commit
5. **Pull Request**: Use PR template and link to issue
6. **Review**: Team review and approval
7. **Merge**: Automatic issue closure

## 🔧 Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload
- `npm test` - Run test suite
- `npm run lint` - Run ESLint
- `npm run build` - Build for production

## 📝 Class Demonstration Guide

### Phase 1: Repository Setup (10 minutes)
1. Show repository structure
2. Explain issue templates
3. Demonstrate PR templates
4. Review GitHub Actions

### Phase 2: Project Board Creation (15 minutes)
1. Create new project board
2. Set up automation rules
3. Configure custom fields
4. Create different views

### Phase 3: Issue Management (20 minutes)
1. Create sample issues using templates
2. Add labels and assignments
3. Set milestones and priorities
4. Demonstrate bulk operations

### Phase 4: Development Workflow (25 minutes)
1. Create feature branch
2. Make code changes
3. Submit pull request
4. Show automated board updates
5. Review and merge process

### Phase 5: Advanced Features (10 minutes)
1. Custom fields and filtering
2. Insights and reports
3. Integration with external tools
4. Bulk operations

## 📊 Sample Issues for Demo

The repository comes with realistic sample issues that demonstrate:
- Different types of work (features, bugs, docs)
- Various priorities and complexities
- Team collaboration scenarios
- Sprint planning examples

## 🔗 Useful Links

- [GitHub Project Boards Documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Issue Templates Guide](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests)

## 📄 License

MIT License - See LICENSE file for details

---

**Ready to demonstrate GitHub Project Boards to your capstone class!** 🎓

For questions or suggestions, please create an issue using one of our templates.
