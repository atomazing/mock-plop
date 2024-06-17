#!/usr/bin/env node
const { execSync } = require('child_process');
process.argv.push('--plopfile ' + __dirname + '/plopfile.js');

// Extract arguments passed to your package
const args = process.argv.slice(2);

// Construct the Plop command with the --plopfile argument
const plopCommand = `npx plop ${args.join(' ')}`;

// Execute the constructed command
try {
    execSync(plopCommand, { stdio: 'inherit' });
} catch (error) {
    console.error(`Failed to execute Plop command: ${error.message}`);
    process.exit(1);
}