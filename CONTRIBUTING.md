# Contributing to Azure DevOps Extension Dev Magic

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## 🎯 Ways to Contribute

### Bug Reports
- Use the GitHub Issues template
- Provide detailed reproduction steps
- Include browser and Tampermonkey version information
- Share relevant console error messages
- Describe expected vs actual behavior

### Feature Requests
- Check existing issues to avoid duplicates
- Clearly describe the problem you're trying to solve
- Provide examples of how the feature would be used
- Consider backwards compatibility implications

### Code Contributions
- Fork the repository
- Create a feature branch
- Make your changes
- Test thoroughly
- Submit a pull request

## 🛠️ Development Guidelines

### Code Style
- Use consistent indentation (4 spaces)
- Follow existing naming conventions
- Add comments for complex logic
- Use meaningful variable and function names
- Keep functions focused and small

### Testing
- Test with multiple Azure DevOps extension scenarios
- Verify compatibility across browsers (Chrome, Edge, Firefox)
- Test with different Tampermonkey versions
- Ensure no regression in existing functionality

### Documentation
- Update README.md for new features
- Add inline code comments for complex logic
- Include usage examples for new features
- Update configuration documentation as needed

## 🔄 Pull Request Process

1. **Before Starting**
   - Check if an issue exists for your planned change
   - Discuss major changes in an issue first
   - Fork the repository

2. **Development**
   - Create a descriptive branch name (`feature/add-workitem-support`)
   - Make focused, logical commits
   - Write clear commit messages

3. **Testing**
   - Test your changes thoroughly
   - Include test cases if applicable
   - Verify no existing functionality is broken

4. **Submission**
   - Create a pull request with a clear title and description
   - Link any related issues
   - Be responsive to feedback and reviews

## 🐛 Reporting Issues

### Security Issues
- Do not report security issues publicly
- Email security concerns to [security@yourorg.com]
- Allow reasonable time for response before disclosure

### Bug Reports
Include the following information:

```
**Environment:**
- Browser: [e.g., Chrome 120.0.0.0]
- Tampermonkey Version: [e.g., 4.19.0]
- Operating System: [e.g., Windows 11]
- Azure DevOps: [dev.azure.com or on-premises]

**Configuration:**
- URL Mappings: [sanitized examples]
- Target Pages: [which pages enabled]
- Debug Logging: [enabled/disabled]

**Steps to Reproduce:**
1. Go to '...'
2. Click on '....'
3. See error

**Expected Behavior:**
[Description of what should happen]

**Actual Behavior:**
[Description of what actually happens]

**Console Errors:**
[Any error messages from browser console]

**Additional Context:**
[Screenshots, logs, or other helpful information]
```

## 🎨 Feature Development

### Proposed Features
We're interested in contributions for:

- **Enhanced Page Support**: Work items, builds, releases, dashboards
- **Configuration UI**: Visual configuration interface
- **Testing Helpers**: Automated testing utilities
- **Performance Improvements**: Optimization and efficiency gains
- **Error Handling**: Better error reporting and recovery
- **Documentation**: Examples, tutorials, best practices

### Feature Guidelines
- Maintain backwards compatibility when possible
- Follow existing architectural patterns
- Consider performance implications
- Ensure cross-browser compatibility
- Add appropriate documentation

## 📋 Code Review Process

### What We Look For
- **Functionality**: Does the code work as intended?
- **Quality**: Is the code well-structured and maintainable?
- **Testing**: Are changes adequately tested?
- **Documentation**: Are changes properly documented?
- **Compatibility**: Does it work across target environments?

### Review Timeline
- Initial response within 48 hours
- Detailed review within 1 week
- Follow-up responses within 48 hours

## 🤝 Community Guidelines

### Code of Conduct
- Be respectful and inclusive
- Focus on constructive feedback
- Help newcomers get started
- Assume positive intent
- Follow GitHub's Community Guidelines

### Communication
- Use clear, concise language
- Provide context for your suggestions
- Ask questions if something is unclear
- Be patient with response times

## 🏆 Recognition

### Contributors
- All contributors will be acknowledged in the README
- Significant contributions may be highlighted in release notes
- Active contributors may be invited to join the maintainer team

### Types of Contributions
We value all types of contributions:
- Code improvements and new features
- Documentation enhancements
- Bug reports and testing
- User experience feedback
- Community support and mentorship

## 📚 Resources

### Development Resources
- [Azure DevOps Extension Documentation](https://docs.microsoft.com/en-us/azure/devops/extend/)
- [Tampermonkey Documentation](https://www.tampermonkey.net/documentation.php)
- [JavaScript Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Project Resources
- [GitHub Issues](https://github.com/vs4vijay/ado-extension-dev-magic/issues)
- [GitHub Discussions](https://github.com/vs4vijay/ado-extension-dev-magic/discussions)
- [Project Roadmap](README.md#roadmap)

## ❓ Questions?

If you have questions about contributing:

1. Check the [FAQ](README.md#troubleshooting) in the README
2. Search existing [GitHub Issues](https://github.com/vs4vijay/ado-extension-dev-magic/issues)
3. Start a [GitHub Discussion](https://github.com/vs4vijay/ado-extension-dev-magic/discussions)
4. Contact the maintainers

Thank you for contributing to the Azure DevOps development community! 🚀