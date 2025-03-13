import db from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { serviceDatabase } from "@/app/utils/formFields";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const service = searchParams.get("service");

    const session = await getServerSession(authOptions);

    if (!session || !session.user.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const tableName = serviceDatabase[service];
        if (!tableName) {
            return NextResponse.json({ error: "Invalid service" }, { status: 400 });
        }

        const [results] = await db.query(`SELECT * FROM ${tableName} WHERE user_id = ?`, [session.user.id]);
        return NextResponse.json(results);
    } catch (error) {
        return NextResponse.json({ error: "Database Error", message: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    const { searchParams } = new URL(req.url);
    const service = searchParams.get("service");

    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const tableName = serviceDatabase[service];
        if (!tableName) {
            return NextResponse.json({ error: "Invalid service" }, { status: 400 });
        }

        const body = await req.json();
        const fields = Object.keys(body);
        const values = Object.values(body);

        const placeholders = fields.map(() => "?").join(", ");
        const query = `INSERT INTO ${tableName} (user_id, ${fields.join(", ")}) VALUES (?, ${placeholders})`;

        await db.query(query, [session.user.id, ...values]);

        return NextResponse.json({ message: "Service requested successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Error service request", message: error.message }, { status: 500 });
    }
}