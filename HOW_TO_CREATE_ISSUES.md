# How to Create Sample Issues in GitHub

This document provides step-by-step instructions for creating the sample issues demonstrated in this repository. Follow these steps to create a complete set of sample issues that showcase tasks and subtasks.

## Prerequisites

1. You have access to create issues in your GitHub repository
2. The issue templates from `.github/ISSUE_TEMPLATE/` are available in your repository
3. You understand the basic concepts from `PROJECT_MANAGEMENT_GUIDE.md`

## Step 1: Create the Epic Issue

### Navigate to Issues
1. Go to your GitHub repository
2. Click on the "Issues" tab
3. Click "New Issue"

### Use the Epic Template
1. Select "Epic (Main Feature)" template
2. Fill out the epic using this example:

**Title**: `[EPIC] Student Information System`

**Content**: Copy the content from `sample-issues/epic-student-information-system.md`

**Labels**: Add `epic`, `enhancement`

**Milestone**: Create a milestone called "v1.0 Release" if it doesn't exist

### Submit the Epic
1. Click "Submit new issue"
2. Note the issue number (e.g., #1) - you'll need this for task linking

## Step 2: Create Task Issues

### Task 1: Student Registration Form
1. Create a new issue using the "Task" template
2. **Title**: `[TASK] Create Student Registration Form`
3. **Content**: Copy from `sample-issues/task-student-registration-form.md`
4. **Important**: Replace "Part of epic: #" with "Part of epic: #1" (or whatever number your epic issue received)
5. **Labels**: Add `task`, `enhancement`, `frontend`
6. **Assignee**: Assign to a team member if available

### Task 2: Student Data Validation
1. Create a new issue using the "Task" template
2. **Title**: `[TASK] Implement Student Data Validation`
3. **Content**: Copy from `sample-issues/task-student-data-validation.md`
4. **Important**: Replace "Part of epic: #" with "Part of epic: #1"
5. **Labels**: Add `task`, `enhancement`, `backend`

## Step 3: Create a Bug Report

1. Create a new issue using the "Bug Report" template
2. **Title**: `[BUG] Registration Form Allows Duplicate Email Addresses`
3. **Content**: Copy from `sample-issues/bug-duplicate-email-registration.md`
4. **Labels**: Add `bug`, `high-priority`
5. **Important**: Update the "Related to" section with actual task issue numbers

## Step 4: Link Issues Together

### Update the Epic with Task Links
1. Go back to your epic issue (#1)
2. Edit the issue
3. In the "Related Tasks" section, update the task list:
   ```
   - [ ] #2 - Create Student Registration Form
   - [ ] #3 - Implement Student Data Validation
   ```
4. Save the changes

### Update Bug Report Links
1. Go to your bug report issue
2. Edit the issue
3. Update the "Related Issues/Tasks" section with actual issue numbers:
   ```
   - Related to #2 - Create Student Registration Form
   - Related to #3 - Implement Student Data Validation
   ```

## Step 5: Demonstrate Progress Tracking

### Update Task Progress
1. Go to Task #2 (Student Registration Form)
2. Edit the issue
3. Check off some of the completed subtasks by changing `- [ ]` to `- [x]`:
   ```
   - [x] Design form wireframes and mockups
   - [x] Create responsive HTML structure
   - [x] Implement form styling with CSS/SCSS
   - [ ] Add client-side form validation
   ```
4. Save the changes

### Show Epic Progress
1. Go back to the epic issue
2. Edit the issue
3. Check off completed tasks:
   ```
   - [x] #2 - Create Student Registration Form (if task is completed)
   - [ ] #3 - Implement Student Data Validation
   ```

## Step 6: Add Labels and Milestones

### Create Standard Labels
Go to Issues → Labels and create these labels if they don't exist:

| Label | Color | Description |
|-------|-------|-------------|
| `epic` | #7057ff | Large features or requirements |
| `task` | #0075ca | Specific implementation work |
| `bug` | #d73a4a | Something isn't working |
| `enhancement` | #a2eeef | New feature or request |
| `high-priority` | #ff6600 | Urgent work |
| `frontend` | #c2e0c6 | Frontend development |
| `backend` | #fef2c0 | Backend development |

### Create Milestones
Go to Issues → Milestones and create:
- "Sprint 1" (1-2 weeks from now)
- "v1.0 Release" (end of semester/project)

## Step 7: Assign and Organize

1. **Assign Issues**: Assign tasks to team members
2. **Set Due Dates**: Use milestones to set target completion dates
3. **Add Comments**: Add comments to issues to simulate team discussion

## Final Result

After completing these steps, you'll have:

- ✅ 1 Epic issue demonstrating large feature planning
- ✅ 2 Task issues showing work breakdown with subtasks
- ✅ 1 Bug report demonstrating issue tracking
- ✅ Proper linking between related issues
- ✅ Progress tracking with checked/unchecked subtasks
- ✅ Professional labeling and organization

## Tips for Your Own Projects

1. **Start with Epics**: Always define your major features first
2. **Keep Tasks Focused**: Each task should be completable in 1-2 weeks
3. **Use Subtasks**: Break tasks into daily/hourly work items
4. **Update Regularly**: Check off completed subtasks to show progress
5. **Link Everything**: Make relationships between issues clear
6. **Be Consistent**: Use the same format for all similar issues

This structure will help your capstone team stay organized and demonstrate professional project management skills to instructors and potential employers.