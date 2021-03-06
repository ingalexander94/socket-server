import Server from "./classes/Server";
import router from "./routes/router";
import bodyParser from "body-parser"
import cors from "cors";

const server = new Server;

server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
server.app.use("/", router);
server.app.use(cors({ origin: true, credentials: true }));

server.start(() => {
    console.log(`Servidor iniciado en el puerto ${server.port}`);
});
