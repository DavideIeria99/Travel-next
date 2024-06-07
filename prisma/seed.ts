const { PrismaClient } = require("@prisma/client");
import { articleCity, cityData } from "./data";

const prisma = new PrismaClient();


const load = async () => {
    try {
        await prisma.article.deleteMany();
        await prisma.city.deleteMany();
        console.log("Deleted records in product table");

        await prisma.$queryRaw`ALTER SEQUENCE "Article_id_seq" RESTART WITH 1`;
        await prisma.$queryRaw`ALTER SEQUENCE "City_id_seq" RESTART WITH 1`;
        console.log("reset product auto increment to 1");

        await prisma.city.createMany({
            data: cityData,
        });
        await prisma.article.createMany({
            data: articleCity,
        });
        console.log("Added product data");
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

load()