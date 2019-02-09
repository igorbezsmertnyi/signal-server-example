import * as path from 'path';
import * as shell from 'shelljs';

const viewsPath = path.join(__dirname, '..', 'views');
const targetPath = path.join(__dirname, '..', '..', 'dist');

// Copy all the view templates
shell.cp('-R', viewsPath, targetPath);
