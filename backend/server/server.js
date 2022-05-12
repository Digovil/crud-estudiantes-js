import { App } from './config/index.js';

async function main() {
    const app = new App();
    await app.listen();
}

main();