import { createWriteStream, mkdirSync } from 'fs';
import { css } from 'mdn-data';
import { join } from 'path';
import { NameConverter } from './name-converter';
import { importUnits } from './unit';
import { importTypes } from './types';
import { importSyntax } from './syntaxes';

const base = join('source', 'definitions');
mkdirSync(base, { recursive: true });

importUnits(css, base);
importTypes(css, base);
importSyntax(css, base);