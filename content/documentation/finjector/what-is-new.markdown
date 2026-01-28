---
title: "What's new."
description: "New features and changes to the Finjector Application."
author: "Jason Sylvestre"
date: 2026-01-28
---

- This is not a complete list of changes, just some of the more significant ones.

## 2026-01-28

- Bulk Validate. This may be accessed from the menu in the upper right. We recommend that this be run from the finjector website vs. a popup window like what can appear from an application like PrePurchasing. You may validate up to 200 unique chart strings. They need to be separated by either a new line, space, or comma. When validated, you may also see warnings such as an award ending within the month. PPM strings can't be in POETAF/POET format. They must be in PTOE/PTOEAF format.

## 2024-04-17

- New Chart String from Paste will now accept POET and POETAF format strings. Warnings will be displayed.
- PPM Details will show a POETAF format string near the bottom.
- PPM Details will now show a GL Revenue Transfer String.
  - This only shows for Internal Project Type Names.
  - In Oracle, manual revenue transfer journals can only be processed at the GL level. When transferring revenue into a PPM non-sponsored project, the user must first transfer the revenue into the GL format chart string, and then separately set and/or reconcile the relevant Task budget in the PPM project. The display of the GL Revenue Transfer String allows users to quickly and efficiently paste the GL format string into the revenue journal in Oracle when moving funds into or out of the PPM project.
  - The natural account is set to 775B15 and the purpose to 80. All the other values are pulled from the PPM info.
- Some other minor UI updates for consistency.

## 2024-04-10

- If you are viewing your personal team, we hide the search bar as this is a special type of team.
- Fixed up team edit permissions so they can create folders in the team. If they create a folder, they will have admin permissions to that folder.

## 2024-01-25

- The search bar now can filter by chart type. (PPM or GL)

## 2024-01-24

- Changed the buttons around to move them into a dropdown menu when there were too many.
- Added the ability to export from the details page user the share dialog.
- Added the ability to export all chart strings from a folder. You would need to navigate to the team's folder and the choice will be under the actions menu.

## Earlier

- Added teams functionality.
