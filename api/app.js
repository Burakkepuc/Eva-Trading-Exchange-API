import express from 'express';
import router from './routes/index';
import notFound from './middlewares/notFound';
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', router);

app.use(notFound);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;