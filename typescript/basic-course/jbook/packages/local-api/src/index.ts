import express from 'express';
import path from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { createCellsRouter } from './routes/cell';

export const serve = (
  port: number,
  filename: string,
  dir: string,
  useProxy: boolean
) => {
  const app = express();
  const packagePath = require.resolve('@jbook/local-client/build/index.html');
  const expressStatic = express.static(path.dirname(packagePath));

  app.use(createCellsRouter(filename, dir));

  // create proxy
  const apiProxy = createProxyMiddleware({
    target: 'http://127.0.0.1:3000',
    ws: true,
    //logger: console,
  });
  
  if (useProxy) {
    app.use(apiProxy);
  } else {
    app.use(expressStatic);
  }
  
  return new Promise<void>((resolve, reject) => {
    app.listen(port, () => {
      console.log('Server is listening on port', port);
      resolve();
    }).on('error', reject);
  });
};
