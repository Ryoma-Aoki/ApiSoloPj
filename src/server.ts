import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {BacheUser} from "./entity/BacheUser";

function setUpServer(){
        // create express app
        const app = express();
        app.use(bodyParser.json());
    
        // register express routes from defined application routes
        Routes.forEach(route => {
            (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : res.end());    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        });
        return app;
}

module.exports = { setUpServer };