# Team image assets

- `originals/` contains the preserved PNG baseline for every character. Do not edit these files.
- `public/team/isolated/` contains the editable, standalone PNG masters used by the site and mobile layout.
- `public/team/sprites/` contains generated sprite sheets for desktop animation. Rebuild these from the matching isolated master after an edit.

To discard an edit, copy the matching file from `originals/` back into `public/team/isolated/`, then regenerate any affected sheet in `public/team/sprites/`.
