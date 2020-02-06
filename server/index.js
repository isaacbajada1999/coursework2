const  express  = require ('express');
const  bodyparser  = require ('body-parser');
const  cors  = require ('cors');

const  app = express();

app.use(bodyparser.json());

app.use(cors({ origin: '*'}));


const posts = require('./api/posts');
const users = require('./api/users');

app.use('/api/posts', posts);
app.use('/api/users', users);

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
const  port = process.env.port || 5000;


app.listen(port, () => console.log(`Server started on port ${port}`));
