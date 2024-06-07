"use server"
import { prisma } from "@/lib/prisma";
import { City } from "@prisma/client";
import { redirect } from "next/navigation";

export async function searchCity(data: FormData) {
    const cityName = data.get("name") as string;

    const city: City | null = await prisma.city.findFirst({
        where: {
            name: cityName
        }
    })

    if (!city) {
        redirect('/')
    }
    redirect(`/blog/${city.id}`)







}

export const getArticleCity = async (city_id: number) => {
    return await prisma.article.findMany({ where: { city_id } });
};

export const getCity = async (id: number) => {
    return await prisma.city.findUnique({ where: { id } });
};

