# Contributing to Capstone Demo

Thank you for your interest in contributing to the Capstone Demo project! This guide will help you understand our workflow and how to contribute effectively.

## 🎯 Project Goals

This repository is designed to demonstrate GitHub Project Board features for educational purposes. All contributions should support this goal by:
- Providing realistic development scenarios
- Showcasing project management workflows
- Demonstrating team collaboration features

## 🚀 Getting Started

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/capstone-demo.git
   cd capstone-demo
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📋 Issue Guidelines

### Before Creating an Issue
- Search existing issues to avoid duplicates
- Check if the issue fits our project goals
- Choose the appropriate issue template

### Issue Types
- **🐛 Bug Report**: Use for actual bugs in the code
- **✨ Feature Request**: Use for new functionality
- **📚 Documentation**: Use for documentation improvements

### Issue Best Practices
- Use clear, descriptive titles
- Fill out all sections of the template
- Add appropriate labels
- Reference related issues or PRs

## 🔄 Pull Request Process

### 1. Branch Naming Convention
- `feature/issue-number-description` for new features
- `bugfix/issue-number-description` for bug fixes
- `docs/issue-number-description` for documentation

### 2. Commit Messages
Follow conventional commit format:
```
type(scope): description

Examples:
feat(api): add task filtering endpoint
fix(ui): resolve task status display issue
docs(readme): update installation instructions
```

### 3. Pull Request Checklist
- [ ] Branch is up to date with main
- [ ] All tests pass locally
- [ ] Code follows project style guidelines
- [ ] Documentation is updated if needed
- [ ] PR template is filled out completely
- [ ] Issue is linked using keywords (e.g., "Closes #123")

### 4. Review Process
1. **Automated checks** must pass (CI/CD, linting, tests)
2. **Peer review** from at least one team member
3. **Approval** from project maintainer
4. **Merge** using squash and merge strategy

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests
- Write tests for all new functionality
- Maintain or improve test coverage
- Follow existing test patterns
- Test both happy paths and error cases

## 💻 Development Guidelines

### Code Style
- Use ESLint configuration provided
- Follow existing code patterns
- Write clear, self-documenting code
- Add comments for complex logic

### File Organization
```
├── public/           # Frontend assets
├── tests/           # Test files
├── .github/         # GitHub templates and workflows
├── docs/            # Additional documentation
└── server.js        # Main application file
```

### API Guidelines
- Follow RESTful conventions
- Use appropriate HTTP status codes
- Include error handling
- Document new endpoints

## 🏷 Labels and Milestones

### Standard Labels
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `needs-review` - Requires team review
- `needs-triage` - Needs initial assessment

### Priority Labels
- `priority: high` - Critical issues
- `priority: medium` - Standard priority
- `priority: low` - Nice to have

### Size Labels
- `size: small` - Quick fix (< 1 day)
- `size: medium` - Standard task (1-3 days)
- `size: large` - Complex feature (> 3 days)

## 📦 Release Process

### Versioning
We use Semantic Versioning (SemVer):
- `MAJOR.MINOR.PATCH`
- MAJOR: Breaking changes
- MINOR: New features (backward compatible)
- PATCH: Bug fixes (backward compatible)

### Release Steps
1. Create release milestone
2. Complete all milestone issues
3. Update version in package.json
4. Update CHANGELOG.md
5. Create release PR
6. Tag release after merge

## 🤝 Community Guidelines

### Be Respectful
- Use inclusive language
- Be constructive in feedback
- Help others learn and grow
- Follow the code of conduct

### Be Collaborative
- Share knowledge and resources
- Ask questions when unclear
- Offer help to other contributors
- Document your learnings

## 📞 Getting Help

### Documentation
- Check the README.md first
- Review existing issues and PRs
- Look at code examples in the repository

### Communication
- Create an issue for bugs or feature requests
- Use discussions for general questions
- Mention maintainers for urgent issues

### Mentorship
This project welcomes new contributors! If you're new to open source:
- Look for `good first issue` labels
- Ask questions in issue comments
- Request code review feedback
- Join our learning community

## 📈 Project Board Workflow

### Column Definitions
1. **📋 Backlog**: All new issues start here
2. **📝 To Do**: Issues ready for development
3. **🔄 In Progress**: Currently being worked on
4. **👀 Review**: Pull requests under review
5. **✅ Done**: Completed work

### Automation Rules
- Issues move to "In Progress" when linked PR opens
- Issues move to "Review" when PR is ready
- Issues move to "Done" when PR merges
- Stale issues are automatically labeled

## 🎓 Educational Value

Remember that this project serves as a learning tool. When contributing:
- Consider how changes demonstrate project management concepts
- Think about real-world scenarios students might encounter
- Focus on clarity and educational value
- Document decisions and trade-offs

## 🙏 Recognition

All contributors are recognized in our:
- README.md contributors section
- Release notes
- Project documentation
- Community showcases

Thank you for helping make this project a valuable learning resource! 🌟