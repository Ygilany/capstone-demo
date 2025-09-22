# GitHub Project Board Demo Script

This script provides a step-by-step guide for demonstrating GitHub Project Board features to a senior capstone class.

## Pre-Demo Setup (5 minutes)

### 1. Repository Preparation
- ✅ Ensure repository is public or accessible to all students
- ✅ Have the project board created and configured
- ✅ Prepare sample issues (can create during demo)
- ✅ Test the application runs correctly

### 2. Demo Environment
- Browser with GitHub repository open
- Local development environment ready
- Projector/screen sharing configured

## Demo Script (80 minutes total)

### Phase 1: Introduction (10 minutes)

**"Today we'll explore GitHub Project Boards - a powerful tool for managing software projects."**

1. **Show Repository Overview** (3 min)
   - Navigate to repository: `https://github.com/Ygilany/capstone-demo`
   - Explain the sample task management application
   - Show file structure and organization

2. **Explain Project Management Context** (4 min)
   - Why project management matters in software development
   - Traditional tools vs. integrated GitHub solutions
   - Benefits of keeping everything in one platform

3. **Demo Goals** (3 min)
   - "By the end, you'll understand how to use GitHub Project Boards for your capstone projects"
   - Overview of features we'll cover

### Phase 2: GitHub Issues Foundation (15 minutes)

**"Project boards start with good issue management."**

1. **Issue Templates** (5 min)
   - Navigate to Issues tab
   - Click "New Issue" to show templates
   - Explain each template type:
     - 🐛 Bug Report
     - ✨ Feature Request  
     - 📚 Documentation

2. **Create Sample Bug Issue** (5 min)
   ```
   Title: Task status not updating correctly
   Use bug report template
   Add labels: bug, needs-triage
   Assign to team member
   Set milestone if available
   ```

3. **Create Sample Feature Issue** (5 min)
   ```
   Title: Add task filtering by priority
   Use feature request template
   Add labels: enhancement, needs-review
   Add story points in description
   Reference user story format
   ```

### Phase 3: Project Board Setup (15 minutes)

**"Now let's organize these issues into a project board."**

1. **Create New Project** (5 min)
   - Go to repository Projects tab
   - Click "New Project"
   - Choose "Board" layout
   - Name: "Capstone Demo Sprint 1"

2. **Configure Columns** (5 min)
   - Default columns: To Do, In Progress, Done
   - Explain Kanban methodology
   - Show how to add custom columns if needed

3. **Add Issues to Board** (5 min)
   - Drag existing issues to appropriate columns
   - Show bulk operations
   - Explain issue lifecycle

### Phase 4: Development Workflow (25 minutes)

**"Let's see how project boards integrate with development workflows."**

1. **Branch and Development** (8 min)
   - Create feature branch: `git checkout -b feature/task-filtering`
   - Make a simple code change to demonstrate
   - Show how branches can reference issues

2. **Pull Request Creation** (7 min)
   - Create pull request
   - Use PR template
   - Link to issue using "Closes #X"
   - Show automated board movement

3. **Code Review Process** (5 min)
   - Add review comments
   - Request changes
   - Show how PR status affects board

4. **Merge and Automation** (5 min)
   - Merge pull request
   - Watch issue automatically move to "Done"
   - Explain automation rules

### Phase 5: Advanced Features (10 minutes)

**"Project boards offer powerful customization options."**

1. **Custom Fields** (3 min)
   - Add priority field
   - Add story points field
   - Show different field types

2. **Filtering and Views** (4 min)
   - Filter by assignee
   - Filter by labels
   - Create custom views

3. **Insights and Reporting** (3 min)
   - Show burn-down charts
   - Velocity tracking
   - Team performance insights

### Phase 6: Sprint Planning Demo (15 minutes)

**"Let's plan a complete sprint using our board."**

1. **Create Sprint Milestone** (5 min)
   - Create "Sprint 1" milestone
   - Set start and end dates
   - Add description and goals

2. **Backlog Grooming** (5 min)
   - Create multiple issues for different features
   - Estimate story points
   - Prioritize by business value

3. **Sprint Planning** (5 min)
   - Move issues to "To Do" column
   - Assign team members
   - Set sprint capacity
   - Review sprint goals

## Q&A and Wrap-up (10 minutes)

### Common Questions to Address:
- How does this compare to Jira or other tools?
- Can we integrate with external tools?
- How do we handle dependencies between issues?
- What about team permissions and access control?

### Key Takeaways:
1. GitHub Project Boards integrate seamlessly with code
2. Automation reduces manual project management overhead
3. Transparency improves team communication
4. Everything is tracked and auditable

## Post-Demo Activities

### For Students:
1. Create their own project board for capstone project
2. Set up issue templates for their repository
3. Practice the workflow with their team

### Assignment Ideas:
- Create a project board with 10 realistic issues
- Complete one full development cycle (issue → PR → merge)
- Set up automation rules for their project

## Troubleshooting

### Common Demo Issues:
- **Permissions**: Ensure all students can view the repository
- **Network**: Have offline backup slides ready
- **Time Management**: Use timer to keep sections on track
- **Engagement**: Ask students to suggest issue titles/descriptions

### Backup Plans:
- Screenshots of each major step
- Video recording of the workflow
- Shared document with all the sample content

## Resources for Students

### Documentation Links:
- [GitHub Project Boards](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [GitHub Issues](https://docs.github.com/en/issues)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

### Templates They Can Use:
- Copy issue templates from this repository
- Use the PR template structure
- Adapt the workflow to their project needs

---

**Demo completed successfully!** Students should now understand how to use GitHub Project Boards for their capstone projects. 🎓