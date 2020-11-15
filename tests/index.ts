/**
 * Disclaimer
 *
 * You will notice these test cases are verbose,
 * and can sometimes be refactored and broken down
 * to smaller functions. However, for the sake of
 * learning, and given the complexity of this sprint,
 * test cases here will be as verbose as possible to
 * give you a clear trail of what these tests are trying
 * to achieve
 */
import "mocha";
const chai = require("chai")
const chaiHttp = require("chai-http");
import { Application } from "express";
import { getRepository, Repository, Not, IsNull ,createConnection,ConnectionOptions, Connection} from "typeorm";
import { BacheUser } from "../src/entity/BacheUser";
const { setUpServer } = require("../src/server");
const assert = chai.assert;
import DatabaseConnectionManager from "../src/database";
const dbConfig = require("../ormconfig");

const server = setUpServer();

chai.use(chaiHttp);

// const expect = chai.expect;

describe("bacheUserSpec", () => {
  let request;
  let userRepo: Repository<BacheUser>;
  let app: Application;
  let connection : Connection;

  before(async() =>  {
    // connection = await createConnection();
    await DatabaseConnectionManager.connect();
    userRepo = getRepository(BacheUser);
  });

  beforeEach(async () => {
    // await createConnection();
    request = chai.request(server);
  });

  afterEach(async () => {
    // await connection.close();
  });


  describe("bache", () => {
    it("initial test (get)", async () => {
      //Setup

      //Exercise
      const res = await request.get("/bacheusers");

      //Assert
      assert.strictEqual(res.statusCode, 200);
      //Teardown

    });
  });
  
    it("initial test (post)", async () => {
      //Setup
      const postUser =    {
        "firstName": "postUser",
        "lastName": "postUser",
        "age": "30",
        "jobs": "industrialist",
        "salary": "30000000",
        "birthday": "2020/11/13",
        "entryDate": "2020/11/13"
    };

      //Exercise
      const res = await request.post("/bacheusers").send(postUser);
      let actual = await userRepo.findOne({ firstName: "postUser", lastName: "postUser" });

      //Assert
      assert.strictEqual(res.statusCode, 201);
      assert.deepEqual(postUser.firstName, actual.firstName);
      assert.deepEqual(postUser.lastName, actual.lastName);
      assert.deepEqual(postUser.jobs, actual.jobs);

      //Teardown
      let tempUser = await userRepo.find();
      let userIdList = tempUser.map((user) => {
        return user.userId;
      });
      let maxNum = Math.max.apply(null, userIdList);
      userRepo.delete(maxNum);

    });

    it("initial test (delete)", async () => {
      //Setup
      let tempUser = await userRepo.find();
      let userIdList = tempUser.map((user) => {
        return user.userId;
      });
      let maxNum = Math.max.apply(null, userIdList);

      //Exercise
      const res = await request.delete(`/bacheusers/${maxNum}`);
      //Assert
      assert.strictEqual(res.statusCode, 200);
      let actual = await userRepo.findOne(maxNum);
      assert.isUndefined(actual);

      //Teardown
      userRepo.save(tempUser);
    });
    it("initial test (patch)", async () => {
      //Setup
      let tempUser = await userRepo.find();
      let userIdList = tempUser.map((user) => {
        return user.userId;
      });
      let maxNum = Math.max.apply(null, userIdList);
      let teadUser = await userRepo.findOne(maxNum);
      const tearObj=    {
        "age": teadUser.age,
        "jobs": teadUser.jobs,
        "salary": teadUser.salary,
    };

      const patchUser =    {
        "age": "999",
        "jobs": "sample",
        "salary": "9999999",
    };

      //Exercise
      const res = await request.patch(`/bacheusers/${maxNum}`).send(patchUser);

      //Assert
      assert.strictEqual(res.statusCode, 200);
      let actual = await userRepo.findOne(maxNum);
      assert.deepEqual(parseInt(patchUser.age), actual.age);
      assert.deepEqual(patchUser.jobs, actual.jobs);
      assert.deepEqual(parseInt(patchUser.salary), actual.salary);

      //Teardown
      userRepo.save(teadUser);
    });
  });