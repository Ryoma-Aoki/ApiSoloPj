import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { BacheUser } from "../entity/BacheUser";

export class BacheUserController {

    private userRepository = getRepository(BacheUser);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let userToSelect = await this.userRepository.findOne(request.params.id);
        if (userToSelect === undefined) {
            response.status(404);
        }
        return userToSelect;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        if(request.body.firstName !== undefined && request.body.lastName !== undefined && request.body.age !== undefined 
            && request.body.jobs !== undefined && request.body.salary !== undefined && request.body.birthday !== undefined ){
                response.status(201);
                return this.userRepository.save(request.body);
            }else{
                response.status(404);
                return undefined;
            }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        console.log(request.params.id);
        if (userToRemove !== undefined) {
            await this.userRepository.remove(userToRemove);
        } else {
            response.status(404);
        }
        return userToRemove;
    }

    async patch(request: Request, response: Response, next: NextFunction) {
        let userToPatch = await this.userRepository.findOne(request.params.id);
        if (request.body.age !== "") {
            userToPatch.age = request.body.age;
            console.log("age:"+request.body.age)
        }
        if (request.body.jobs !== "") {
            userToPatch.jobs = request.body.jobs;
            console.log("jobs:"+request.body.jobs)
        }
        if (request.body.salary !== "") {
            userToPatch.salary = request.body.salary;
            console.log("salary:"+request.body.salary)
        }
        response.status(200);
        this.userRepository.save(userToPatch);
        return userToPatch;
    }

}
