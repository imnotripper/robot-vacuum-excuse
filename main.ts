// The Robot Vacuum's Best Excuse — deterministic emitter.
// Writes the winning excuse (see selection.md) to /output/entry.txt,
// then reads it back and checks the gate itself: UTF-8 text, 1-140
// characters, a single line, not only white space. Nothing is random,
// nothing is read from the environment: two runs write byte-identical files.
// The winner is rooted in the vacuum's own world — sensors (criterion 3) —
// and lands with a straight-faced turn at the end: diplomacy. The list
// escalates from the mundane (sock, cable) to the absurd (hostile nation),
// so the final sentence reads as a reasonable policy decision.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const LINE =
  'My sensors detected a sock, a charging cable, and what I can only describe as a small hostile nation. I chose diplomacy.';

const LIMIT = 140;
const OUT = '/output/entry.txt';

const chars = [...LINE].length;
if (chars < 1 || chars > LIMIT) throw new Error(`entry is ${chars} characters, gate needs 1-${LIMIT}`);
if (LINE.trim().length === 0) throw new Error('entry is only white space');
if (LINE.includes('\n')) throw new Error('entry must be a single line');

mkdirSync('/output', { recursive: true });
writeFileSync(OUT, LINE + '\n', 'utf8');
chmodSync(OUT, 0o644);

const back = readFileSync(OUT, 'utf8');
if (back !== LINE + '\n') throw new Error('read-back mismatch');
// Validate what the gate will actually read: the file's body, not just
// the string in this file. A trailing newline is fine; anything else that
// pushes the body over the limit or off one line is not.
const body = back.replace(/\n$/, '');
const bodyChars = [...body].length;
if (bodyChars < 1 || bodyChars > LIMIT) throw new Error(`file body is ${bodyChars} characters, gate needs 1-${LIMIT}`);
if (body.includes('\n')) throw new Error('file body must be a single line');
if (body.trim().length === 0) throw new Error('file body is only white space');
console.log(`wrote ${OUT} (${chars} chars)`);
