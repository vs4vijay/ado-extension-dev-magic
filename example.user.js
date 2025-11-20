/**
 * Example Configuration for Azure DevOps Extension Local Development Helper
 *
 * Copy the relevant sections to your userscript and customize as needed.
 * This file shows various configuration patterns and use cases.
 */

// ============================================================================
// BASIC CONFIGURATION EXAMPLES
// ============================================================================

/**
 * Example 1: Single Extension Development
 * Replace one production extension with local development
 */
const SINGLE_EXTENSION_CONFIG = {
  URL_MAPPINGS: {
    "https://my-extension.azurestaticapps.net/": "http://localhost:3000/",
  },
  TARGET_PAGES: {
    pullRequests: true,
    workItems: false,
    builds: false,
    releases: false,
    repos: false,
  },
};

/**
 * Example 2: Multi-Extension Development
 * Testing multiple extensions simultaneously
 */
const MULTI_EXTENSION_CONFIG = {
  URL_MAPPINGS: {
    // Different extensions on different ports
    "https://pr-assistant.azurestaticapps.net/": "http://localhost:3000/",
    "https://code-review-helper.azurestaticapps.net/": "http://localhost:4000/",
    "https://build-analyzer.azurewebsites.net/": "http://localhost:5000/",
  },
  TARGET_PAGES: {
    pullRequests: true,
    workItems: true,
    builds: true,
    releases: false,
    repos: true,
  },
};
