# Azure DevOps Extension Dev Magic

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-Compatible-green.svg)](https://www.tampermonkey.net/)
[![Azure DevOps](https://img.shields.io/badge/Azure_DevOps-Compatible-blue.svg)](https://dev.azure.com/)

A powerful userscript that enables seamless local development and testing of Azure DevOps extensions by automatically replacing production iframe URLs with your local development server URLs.

## 🎯 Problem Statement

Developing Azure DevOps extensions presents unique challenges for developers:

### The Development Dilemma

When creating Azure DevOps extensions that render content in iframes within the Azure DevOps interface, developers face significant obstacles:

```html
<!-- Production iframe that's hard to test locally -->
<iframe class="external-content--iframe" 
        src="https://your-production-extension.azurestaticapps.net/">
</iframe>
```

**Critical Issues:**
- 🚫 **No Local Testing**: Cannot test local changes in the actual Azure DevOps environment
- 🔄 **Slow Development Cycle**: Every change requires deployment to production/staging
- 🐛 **Limited Debugging**: Cannot debug with real Azure DevOps context and data
- 🎯 **Integration Challenges**: Cannot verify extension behavior with ADO APIs and UI
- 📱 **Context Mismatch**: Local development environment differs from production integration
- 🔐 **Authentication Issues**: Cannot test with real user permissions and ADO security context

### The Solution

This userscript bridges the gap between local development and production testing by:

- ✅ **Real-time Local Testing**: See your changes instantly in the actual Azure DevOps interface
- ✅ **Full ADO Context**: Test with real pull requests, work items, and user data
- ✅ **Enhanced Debugging**: Use browser dev tools on your local code within ADO
- ✅ **Faster Iteration**: Immediate feedback loop for UI and functionality changes
- ✅ **Integration Validation**: Ensure your extension works with Azure DevOps features
- ✅ **Multiple Extensions**: Support for testing multiple extensions simultaneously

## 🚀 Features

### Core Capabilities
- **🔄 Dynamic URL Replacement**: Automatically replaces production URLs with local development URLs
- **🎯 Multi-Extension Support**: Configure multiple extension mappings simultaneously
- **📱 Smart Page Detection**: Targets specific Azure DevOps pages (PRs, work items, builds, etc.)
- **🔍 Real-time Monitoring**: Detects iframe creation and modification in real-time
- **🛠️ Runtime Configuration**: Modify settings without editing the script
- **📋 Debug Logging**: Comprehensive logging for troubleshooting
- **🎨 Visual Indicators**: Highlights replaced iframes for easy identification

### Advanced Features
- **🔧 Flexible URL Matching**: Supports exact and partial URL matching with query parameters
- **⚡ Performance Optimized**: Minimal impact on Azure DevOps performance
- **🔄 SPA Navigation**: Handles Azure DevOps single-page application navigation
- **🛡️ Safe Operation**: Non-destructive, only affects targeted iframes
- **📦 Zero Dependencies**: Pure JavaScript, no external libraries required

## 📦 Installation

### Prerequisites
- Web browser (Chrome, Edge, Firefox)
- [Tampermonkey extension](https://www.tampermonkey.net/) or similar userscript manager

### Step-by-Step Installation

1. **Install Tampermonkey**
   - Visit [tampermonkey.net](https://www.tampermonkey.net/)
   - Install the extension for your browser
   - Enable Developer Mode if required

2. **Install the Userscript**
   - Download `ado-extension-dev-magic.user.js` from this repository
   - Open Tampermonkey Dashboard
   - Click "Create a new script" or drag & drop the file
   - Save the script (Ctrl+S)

3. **Configure URL Mappings** (see Configuration section below)

## ⚙️ Configuration

### Basic Configuration

Edit the `URL_MAPPINGS` object in the userscript to map your production URLs to local development URLs:

```javascript
const URL_MAPPINGS = {
    // Map your production extension URL to local development
    'https://your-extension.azurestaticapps.net/': 'http://localhost:3000/',
    'https://another-extension.azurewebsites.net/app': 'http://localhost:8080/app',
    // Add more mappings as needed
};
```

### Advanced Configuration

```javascript
// Target Azure DevOps Pages
const TARGET_PAGES = {
    pullRequests: true,    // Enable on pull request pages
    workItems: false,      // Enable on work item pages
    builds: false,         // Enable on build pages
    releases: false,       // Enable on release pages
    repos: false          // Enable on repository pages
};
```

### Runtime Configuration

Modify settings without editing the script:

```javascript
// Add new URL mapping
window.adoExtensionDevHelper.addMapping(
    'https://new-extension.com/', 
    'http://localhost:9000/'
);

// Remove URL mapping
window.adoExtensionDevHelper.removeMapping('https://old-extension.com/');

// Reinitialize the script
window.adoExtensionDevHelper.reinitialize();
```

## 🎯 Usage

### Basic Workflow

1. **Start Your Local Development Server**
   ```bash
   # Example for a React app
   npm start
   # Server running on http://localhost:3000
   ```

2. **Configure the Userscript**
   - Map your production URL to `http://localhost:3000`
   - Enable the target pages you want to test

3. **Navigate to Azure DevOps**
   - Go to a pull request page (or configured target page)
   - Your extension iframe will automatically load from localhost
   - Look for the blue border indicating successful replacement

4. **Develop and Test**
   - Make changes to your local code
   - Refresh the Azure DevOps page to see changes
   - Use browser dev tools to debug your extension

### Advanced Usage

#### Multiple Extensions
```javascript
const URL_MAPPINGS = {
    'https://extension-a.azurestaticapps.net/': 'http://localhost:3000/',
    'https://extension-b.azurestaticapps.net/': 'http://localhost:4000/',
    'https://extension-c.azurewebsites.net/': 'http://localhost:5000/'
};
```

#### Query Parameter Preservation
```javascript
// Original: https://extension.com/app?theme=dark&user=123
// Becomes: http://localhost:3000/app?theme=dark&user=123
```

#### Path Preservation
```javascript
// Supports complex paths and parameters
'https://extension.azurestaticapps.net/': 'http://localhost:3000/'
// Maps: https://extension.azurestaticapps.net/feature/dashboard?id=123
// To:   http://localhost:3000/feature/dashboard?id=123
```

## 🔧 Troubleshooting

### Common Issues

#### Script Not Working
1. **Check Tampermonkey Status**
   - Ensure Tampermonkey is enabled
   - Verify the script is enabled in Tampermonkey dashboard
   - Check for any error messages in browser console

2. **Verify URL Mappings**
   ```javascript
   // Check current mappings in console
   console.log(window.adoExtensionDevHelper.config.urlMappings);
   ```

3. **Confirm Target Page**
   - Ensure you're on a configured target page (e.g., pull request)
   - Check `TARGET_PAGES` configuration

#### Local Development Server Issues
1. **Server Not Running**
   - Verify your local server is running
   - Test by accessing `http://localhost:3000` directly

2. **CORS Issues**
   - Configure your local server to allow iframe embedding
   - Add appropriate CORS headers if needed

3. **HTTPS vs HTTP**
   - Azure DevOps runs on HTTPS
   - Some browsers may block HTTP content in HTTPS pages
   - Consider using a local HTTPS setup for testing

#### Debug Mode

Enable detailed logging:
```javascript
const LOCAL_CONFIG = {
    enableDebugLog: true,  // Enable this for troubleshooting
    // ... other config
};
```

Check browser console for messages like:
```
[timestamp] ADO Extension Local Dev Helper: Found production iframe (...), replacing with local URL (...)
[timestamp] ADO Extension Local Dev Helper: Successfully replaced 1 iframe(s) with local development URLs
```

### Getting Help

1. **Check the Issues**: Browse existing [GitHub Issues](https://github.com/vs4vijay/ado-extension-dev-magic/issues)
2. **Enable Debug Logging**: Turn on debug mode and check console output
3. **Create an Issue**: Provide detailed information including:
   - Browser and Tampermonkey version
   - Your configuration (without sensitive URLs)
   - Console error messages
   - Steps to reproduce the issue

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup

1. **Fork the Repository**
   ```bash
   git clone https://github.com/vs4vijay/ado-extension-dev-magic.git
   cd ado-extension-dev-magic
   ```

2. **Make Changes**
   - Edit `ado-extension-dev-magic.user.js`
   - Test with your local Azure DevOps extensions

3. **Submit Pull Request**
   - Create a descriptive pull request
   - Include test cases if applicable

### Contribution Guidelines

- **Code Style**: Follow existing JavaScript conventions
- **Documentation**: Update README for new features
- **Testing**: Test with multiple Azure DevOps extension scenarios
- **Compatibility**: Ensure compatibility across browsers

### Feature Requests

We're interested in:
- Support for additional Azure DevOps pages
- Enhanced debugging features
- Better error handling and reporting
- Performance optimizations
- Integration with popular development tools

## 📋 Roadmap

### Current Version (1.0.0)
- ✅ Basic URL replacement functionality
- ✅ Multi-extension support
- ✅ Real-time iframe monitoring
- ✅ Runtime configuration

### Upcoming Features
- 🔄 GUI configuration interface
- 🔄 Extension marketplace integration
- 🔄 Automated testing helpers
- 🔄 Performance analytics
- 🔄 Cloud configuration sync

### Future Enhancements
- 📅 VS Code extension for easier configuration
- 📅 Integration with Azure DevOps CLI
- 📅 Support for Azure DevOps Server (on-premises)
- 📅 Advanced debugging tools

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Azure DevOps Team**: For creating an extensible platform
- **Tampermonkey**: For providing an excellent userscript platform
- **Open Source Community**: For contributions and feedback

## 📞 Support

- **Documentation**: This README and inline code comments
- **Issues**: [GitHub Issues](https://github.com/vs4vijay/ado-extension-dev-magic/issues)
- **Discussions**: [GitHub Discussions](https://github.com/vs4vijay/ado-extension-dev-magic/discussions)

---

**Happy Azure DevOps Extension Development!** 🚀