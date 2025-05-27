import express, { Request, Response } from 'express';
import { exec } from 'child_process';
const app = express();
const PORT = 9000;

app.use(express.json());

app.post('/gitpull', (req: Request, res: Response) => {
  exec('cd /home/dino/web/meet && git pull', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send(`Pull failed: ${stderr}`);
    }
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.listen(PORT, () => {
  console.log(`Webhook listener running on port ${PORT}`);
});
