const fs = require('fs');
const path = require('path');
const dir = './src/app/services';

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      const searchStr = '<li className="flex items-center gap-2">\r\n                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>';
      const searchStr2 = '<li className="flex items-center gap-2">\n                            <span className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>';
      const replaceStr = '<li className="relative pl-4">\n                            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></span>';
      
      if (content.includes(searchStr)) {
        content = content.split(searchStr).join(replaceStr);
        changed = true;
      }
      if (content.includes(searchStr2)) {
        content = content.split(searchStr2).join(replaceStr);
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated ' + fullPath);
      }
    }
  }
}

processDir(dir);
console.log('Done');
