import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class BacheUser {

    @PrimaryGeneratedColumn()
    public userId: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public age: number;

    @Column()
    public jobs: String;

    @Column()
    public salary: number;

    @Column()
    public birthday: String;

    @CreateDateColumn()
    public entryDate: Date;

}
export default BacheUser;
