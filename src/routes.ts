import {BacheUserController} from "./controller/BacheUserController";

export const Routes = [{
    method: "get",
    route: "/bacheusers",
    controller: BacheUserController,
    action: "all"
}, {
    method: "get",
    route: "/bacheusers/:id",
    controller: BacheUserController,
    action: "one"
}, {
    method: "post",
    route: "/bacheusers",
    controller: BacheUserController,
    action: "save"
}, {
    method: "delete",
    route: "/bacheusers/:id",
    controller: BacheUserController,
    action: "remove"
}, {
    method: "patch",
    route: "/bacheusers/:id",
    controller: BacheUserController,
    action: "patch"
}];