import { init } from './app';
async function main(): Promise<void> {
    const PORT = process.env.PORT ?? 8080;
    const app = await init();
    app.listen(PORT, () => {
        console.log('Server is running on port: ', PORT);
    });
}

void main();