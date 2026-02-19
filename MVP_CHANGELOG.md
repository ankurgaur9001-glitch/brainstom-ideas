MVP Implementation (draft PR)

This branch groups the MVP implementation work for review.

Included:
- Tailwind integration and global styles
- Header/Footer, TrendsList, PhaseTimeline components
- Pages: /, /plan, /research, /contact
- API route: /api/feedback (creates GitHub issues)
- CI workflow: .github/workflows/ci.yml
- Jest setup and a smoke test

Review checklist:
- [ ] Verify pages render correctly
- [ ] Run `npm ci && npm run build`
- [ ] Confirm API issue creation workflow (requires GH_TOKEN in env)

