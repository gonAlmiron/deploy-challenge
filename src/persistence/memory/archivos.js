import fs from 'fs';
import path from 'path';

const dirPath = path.join(__dirname, '../../../dist/input');

// Lectura de los archivos .json
const fileNames = fs.readdirSync(dirPath).filter(name => name.endsWith('.json'));
// Conversion de archivos .json a una variable con el contenido de todos los archivos en formato .json
export const locations = fileNames.map(name => {
    const filePath = path.join(dirPath, name);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
});

