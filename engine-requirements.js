const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ Node.js version incompatibility detected\n` +
    `   ───────────────────────────────────────\n` +
    `   Required: Node.js 20 or higher\n` +
    `   Current : Node.js ${process.versions.node}\n` +
    `   ───────────────────────────────────────\n` +
    `   Please upgrade to Node.js 20+ to use this package.\n`
  );
  process.exit(1);
}