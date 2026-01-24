const fs = require('fs');
const path = require('path');

const themeDistPath = path.resolve(__dirname, '../dist');
const nodeModulesPath = path.resolve(__dirname, '../../project-theta-fe/node_modules/theta-theme-default/dist');

function syncFiles() {
  if (!fs.existsSync(themeDistPath)) {
    return;
  }
  
  if (!fs.existsSync(path.dirname(nodeModulesPath))) {
    return; // node_modules not installed yet
  }
  
  // Ensure destination directory exists
  if (!fs.existsSync(nodeModulesPath)) {
    fs.mkdirSync(nodeModulesPath, { recursive: true });
  }
  
  // Copy all files from dist to node_modules/dist
  try {
    const files = fs.readdirSync(themeDistPath);
    
    files.forEach(file => {
      const src = path.join(themeDistPath, file);
      const dest = path.join(nodeModulesPath, file);
      const stat = fs.statSync(src);
      
      if (stat.isFile()) {
        const srcTime = fs.statSync(src).mtimeMs;
        const destExists = fs.existsSync(dest);
        const destTime = destExists ? fs.statSync(dest).mtimeMs : 0;
        
        // Only copy if source is newer or dest doesn't exist
        if (!destExists || srcTime > destTime) {
          fs.copyFileSync(src, dest);
          console.log(`[Theme Sync] Synced: ${file}`);
        }
      }
    });
  } catch (error) {
    console.error('[Theme Sync] Error:', error.message);
  }
}

// Watch for changes using polling (more reliable than fs.watch)
if (fs.existsSync(themeDistPath)) {
  syncFiles(); // Initial sync
  
  // Poll every 500ms for file changes
  let lastSync = Date.now();
  const pollInterval = setInterval(() => {
    const now = Date.now();
    if (now - lastSync > 1000) { // Throttle to once per second
      syncFiles();
      lastSync = now;
    }
  }, 500);
  
  // Also watch for file changes (backup method)
  try {
    fs.watch(themeDistPath, { recursive: true }, (eventType, filename) => {
      if (filename && (eventType === 'change' || eventType === 'rename')) {
        setTimeout(syncFiles, 200); // Debounce
      }
    });
  } catch (e) {
    console.error('[Theme Sync] Watch setup failed:', e.message);
  }
  
  console.log('[Theme Sync] Watching dist folder for changes...');
  
  // Cleanup on exit
  process.on('SIGINT', () => {
    clearInterval(pollInterval);
    process.exit(0);
  });
} else {
  console.log('[Theme Sync] Dist folder not found, waiting for build...');
}

