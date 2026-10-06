# Prompt Engineering Session 09: Building Web Pages with AI

## Overview

This directory contains the deliverables for Session 09. The objective was to generate a responsive personal profile webpage using AI while enforcing strict separation of concerns, truthful content curation, and zero-error validation.

## Objectives Achieved

1. **Strict Separation of Concerns:** Stripped inline `<style>` blocks from AI-generated HTML and established a dedicated external CSS architecture.

2. **Thematic CSS Variables:** Built a deliberate color system using `:root` variables, later expanded to include a full Dark Mode toggle capability (`@media (prefers-color-scheme: dark)`) for seamless global theming.

3. **Truthful Content Curation ("Zero Lies"):** Audited all AI output, replacing hallucinated projects with verified GitHub repositories and accurate academic credentials.

4. **Zero-Error Validation:** Achieved exactly zero errors on the W3C Nu HTML Checker and verified narrow-width (375px) mobile responsiveness.

## Repository Contents

### Source Code

- `index.html`: The zero-error validated HTML structure containing semantic About, Skills, Projects, Experience, and Education sections.
- `assets/style.css`: The external stylesheet utilizing CSS variables and dark mode media queries.

### Documentation & Evidence

- `AUDIT-page.md`: Content verification log detailing the removal of AI hallucinations and the injection of factual data.
- **Validation Proof:** W3C Checker results confirming zero errors or warnings.
- **AI Reflection:** An analysis of the risks associated with publishing AI-generated false claims and the engineer's responsibility for structural and factual integrity.